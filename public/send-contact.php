<?php

header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    echo json_encode([
        "success" => false,
        "message" => "Invalid request method."
    ]);
    exit;
}

/* ================================
   SANITIZE INPUT
================================ */

$serviceType = trim($_POST["serviceType"] ?? "");
$serviceInterest = trim($_POST["serviceInterest"] ?? "");
$name = trim($_POST["name"] ?? "");
$organisation = trim($_POST["organisation"] ?? "");
$email = trim($_POST["email"] ?? "");
$phone = trim($_POST["phone"] ?? "");
$sampleType = trim($_POST["sampleType"] ?? "");
$sampleCount = trim($_POST["sampleCount"] ?? "");
$message = trim($_POST["message"] ?? "");

/* ================================
   VALIDATION
================================ */

if (
    empty($serviceType) ||
    empty($serviceInterest) ||
    empty($name) ||
    empty($organisation) ||
    empty($email) ||
    empty($phone) ||
    empty($sampleType) ||
    empty($sampleCount) ||
    empty($message)
) {
    echo json_encode([
        "success" => false,
        "message" => "Please fill all required fields."
    ]);
    exit;
}

/* Email validation */

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode([
        "success" => false,
        "message" => "Please enter a valid email address."
    ]);
    exit;
}

/* Phone validation */

$cleanPhone = preg_replace("/[^0-9]/", "", $phone);

if (!preg_match("/^[6-9][0-9]{9}$/", $cleanPhone)) {
    echo json_encode([
        "success" => false,
        "message" => "Please enter a valid 10-digit Indian mobile number."
    ]);
    exit;
}

/* Sample count validation */

if (!ctype_digit($sampleCount) || intval($sampleCount) <= 0) {
    echo json_encode([
        "success" => false,
        "message" => "Invalid sample count."
    ]);
    exit;
}

/* Message validation */

if (strlen($message) < 10) {
    echo json_encode([
        "success" => false,
        "message" => "Message must contain at least 10 characters."
    ]);
    exit;
}

/* ================================
   ESCAPE DATA
================================ */

$serviceType = htmlspecialchars($serviceType, ENT_QUOTES, "UTF-8");
$serviceInterest = htmlspecialchars($serviceInterest, ENT_QUOTES, "UTF-8");
$name = htmlspecialchars($name, ENT_QUOTES, "UTF-8");
$organisation = htmlspecialchars($organisation, ENT_QUOTES, "UTF-8");
$email = htmlspecialchars($email, ENT_QUOTES, "UTF-8");
$phone = htmlspecialchars($cleanPhone, ENT_QUOTES, "UTF-8");
$sampleType = htmlspecialchars($sampleType, ENT_QUOTES, "UTF-8");
$sampleCount = htmlspecialchars($sampleCount, ENT_QUOTES, "UTF-8");
$message = htmlspecialchars($message, ENT_QUOTES, "UTF-8");

/* ================================
   EMAIL DETAILS
================================ */

$to = "rishabdutt4@gmail.com";

$subject = "New Genomics Enquiry - Leads Genetics";

$emailBody = "
<html>
<head>
    <meta charset='UTF-8'>
</head>

<body>

<h2>New Contact Form Enquiry</h2>

<table
    cellpadding='10'
    cellspacing='0'
    border='1'
    style='border-collapse: collapse; width: 100%;'
>

<tr>
    <td><strong>Service Type</strong></td>
    <td>$serviceType</td>
</tr>

<tr>
    <td><strong>Service Interest</strong></td>
    <td>$serviceInterest</td>
</tr>

<tr>
    <td><strong>Name</strong></td>
    <td>$name</td>
</tr>

<tr>
    <td><strong>Organisation</strong></td>
    <td>$organisation</td>
</tr>

<tr>
    <td><strong>Email</strong></td>
    <td>$email</td>
</tr>

<tr>
    <td><strong>Phone</strong></td>
    <td>$phone</td>
</tr>

<tr>
    <td><strong>Sample Type</strong></td>
    <td>$sampleType</td>
</tr>

<tr>
    <td><strong>Sample Count</strong></td>
    <td>$sampleCount</td>
</tr>

<tr>
    <td><strong>Message</strong></td>
    <td>$message</td>
</tr>

</table>

</body>
</html>
";

/* ================================
   HEADERS
================================ */

$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";
$headers .= "From: Leads Genetics Website <noreply@leadsgenetics.com>\r\n";
$headers .= "Reply-To: $email\r\n";

/* ================================
   ATTACHMENT
================================ */

$attachmentPath = null;
$attachmentName = null;

if (
    isset($_FILES["attachment"]) &&
    $_FILES["attachment"]["error"] === UPLOAD_ERR_OK
) {

    $file = $_FILES["attachment"];

    /* 5 MB maximum */

    if ($file["size"] > 5 * 1024 * 1024) {
        echo json_encode([
            "success" => false,
            "message" => "Uploaded file is larger than 5 MB."
        ]);
        exit;
    }

    $allowedExtensions = [
        "pdf",
        "doc",
        "docx",
        "xls",
        "xlsx",
        "csv",
        "txt",
        "jpg",
        "jpeg",
        "png"
    ];

    $extension = strtolower(
        pathinfo($file["name"], PATHINFO_EXTENSION)
    );

    if (!in_array($extension, $allowedExtensions, true)) {
        echo json_encode([
            "success" => false,
            "message" => "Invalid file type."
        ]);
        exit;
    }

    /*
     * IMPORTANT:
     * Move uploaded file to a temporary location.
     */

    $attachmentPath = $file["tmp_name"];
    $attachmentName = basename($file["name"]);

    $fileContent = file_get_contents($attachmentPath);

    $encodedFile = chunk_split(
        base64_encode($fileContent)
    );

    $boundary = md5(time());

    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "From: Leads Genetics Website <noreply@leadsgenetics.com>\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: multipart/mixed; boundary=\"$boundary\"\r\n";

    $body = "--$boundary\r\n";
    $body .= "Content-Type: text/html; charset=UTF-8\r\n";
    $body .= "Content-Transfer-Encoding: 8bit\r\n\r\n";
    $body .= $emailBody . "\r\n";

    $body .= "--$boundary\r\n";
    $body .= "Content-Type: application/octet-stream; name=\"$attachmentName\"\r\n";
    $body .= "Content-Disposition: attachment; filename=\"$attachmentName\"\r\n";
    $body .= "Content-Transfer-Encoding: base64\r\n\r\n";
    $body .= $encodedFile . "\r\n";

    $body .= "--$boundary--";

} else {

    $body = $emailBody;
}

/* ================================
   SEND EMAIL
================================ */

$mailSent = mail(
    $to,
    $subject,
    $body,
    $headers
);

/* ================================
   RESPONSE
================================ */

if ($mailSent) {

    echo json_encode([
        "success" => true,
        "message" => "Email sent successfully."
    ]);

} else {

    echo json_encode([
        "success" => false,
        "message" => "Unable to send email. Please check your server mail configuration."
    ]);
}

exit;
?>