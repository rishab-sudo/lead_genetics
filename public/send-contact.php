<?php

header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(204);
    exit;
}

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);

    echo json_encode([
        "success" => false,
        "message" => "Invalid request method."
    ]);

    exit;
}

/*
|--------------------------------------------------------------------------
| PHPMailer
|--------------------------------------------------------------------------
| Expected structure:
|
| public_html/
|   send-contact.php
|   PHPMailer/
|       src/
|           Exception.php
|           PHPMailer.php
|           SMTP.php
|
|--------------------------------------------------------------------------
*/

$phpMailerPath = __DIR__ . "/PHPMailer/src/";

$exceptionFile = $phpMailerPath . "Exception.php";
$phpMailerFile = $phpMailerPath . "PHPMailer.php";
$smtpFile      = $phpMailerPath . "SMTP.php";

if (
    !file_exists($exceptionFile) ||
    !file_exists($phpMailerFile) ||
    !file_exists($smtpFile)
) {
    http_response_code(500);

    echo json_encode([
        "success" => false,
        "message" => "PHPMailer files are missing. Please upload the PHPMailer folder inside public_html."
    ]);

    exit;
}

require_once $exceptionFile;
require_once $phpMailerFile;
require_once $smtpFile;

use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;


/*
|--------------------------------------------------------------------------
| FORM DATA
|--------------------------------------------------------------------------
*/

$serviceType     = trim($_POST["serviceType"] ?? "");
$serviceInterest = trim($_POST["serviceInterest"] ?? "");
$name            = trim($_POST["name"] ?? "");
$organisation    = trim($_POST["organisation"] ?? "");
$email           = trim($_POST["email"] ?? "");
$phone           = trim($_POST["phone"] ?? "");
$sampleType      = trim($_POST["sampleType"] ?? "");
$sampleCount     = trim($_POST["sampleCount"] ?? "");
$message         = trim($_POST["message"] ?? "");


/*
|--------------------------------------------------------------------------
| REQUIRED FIELD VALIDATION
|--------------------------------------------------------------------------
*/

if (
    $serviceType === "" ||
    $serviceInterest === "" ||
    $name === "" ||
    $organisation === "" ||
    $email === "" ||
    $phone === "" ||
    $sampleType === "" ||
    $sampleCount === "" ||
    $message === ""
) {
    http_response_code(422);

    echo json_encode([
        "success" => false,
        "message" => "Please fill all required fields."
    ]);

    exit;
}


/*
|--------------------------------------------------------------------------
| EMAIL VALIDATION
|--------------------------------------------------------------------------
*/

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);

    echo json_encode([
        "success" => false,
        "message" => "Please enter a valid email address."
    ]);

    exit;
}


/*
|--------------------------------------------------------------------------
| PHONE VALIDATION
|--------------------------------------------------------------------------
*/

$cleanPhone = preg_replace("/[^0-9]/", "", $phone);

if (!preg_match("/^[6-9][0-9]{9}$/", $cleanPhone)) {
    http_response_code(422);

    echo json_encode([
        "success" => false,
        "message" => "Please enter a valid 10-digit Indian mobile number."
    ]);

    exit;
}


/*
|--------------------------------------------------------------------------
| SAMPLE COUNT VALIDATION
|--------------------------------------------------------------------------
*/

if (
    !ctype_digit($sampleCount) ||
    intval($sampleCount) <= 0
) {
    http_response_code(422);

    echo json_encode([
        "success" => false,
        "message" => "Please enter a valid sample count."
    ]);

    exit;
}


/*
|--------------------------------------------------------------------------
| MESSAGE VALIDATION
|--------------------------------------------------------------------------
*/

if (strlen($message) < 10) {
    http_response_code(422);

    echo json_encode([
        "success" => false,
        "message" => "Message must contain at least 10 characters."
    ]);

    exit;
}


/*
|--------------------------------------------------------------------------
| SMTP CONFIGURATION
|--------------------------------------------------------------------------
|
| IMPORTANT:
|
| Replace YOUR_EMAIL_PASSWORD with the actual password
| of noreply@leadsgenetics.com
|
*/

$smtpHost       = "smtp.hostinger.com";
$smtpPort       = 465;
$smtpUsername   = "noreply@leadsgenetics.com";
$smtpPassword   = "YOUR_EMAIL_PASSWORD";
$smtpEncryption = "ssl";


/*
|--------------------------------------------------------------------------
| RECEIVER
|--------------------------------------------------------------------------
*/

$toEmail = "rishabdutt4@gmail.com";
$toName  = "Leads Genetics";


/*
|--------------------------------------------------------------------------
| SUBJECT
|--------------------------------------------------------------------------
*/

$subject = "New Genomics Enquiry - Leads Genetics";


/*
|--------------------------------------------------------------------------
| SANITIZE HTML VALUES
|--------------------------------------------------------------------------
*/

$serviceTypeHtml = htmlspecialchars(
    $serviceType,
    ENT_QUOTES,
    "UTF-8"
);

$serviceInterestHtml = htmlspecialchars(
    $serviceInterest,
    ENT_QUOTES,
    "UTF-8"
);

$nameHtml = htmlspecialchars(
    $name,
    ENT_QUOTES,
    "UTF-8"
);

$organisationHtml = htmlspecialchars(
    $organisation,
    ENT_QUOTES,
    "UTF-8"
);

$emailHtml = htmlspecialchars(
    $email,
    ENT_QUOTES,
    "UTF-8"
);

$phoneHtml = htmlspecialchars(
    $cleanPhone,
    ENT_QUOTES,
    "UTF-8"
);

$sampleTypeHtml = htmlspecialchars(
    $sampleType,
    ENT_QUOTES,
    "UTF-8"
);

$sampleCountHtml = htmlspecialchars(
    $sampleCount,
    ENT_QUOTES,
    "UTF-8"
);

$messageHtml = nl2br(
    htmlspecialchars(
        $message,
        ENT_QUOTES,
        "UTF-8"
    )
);


/*
|--------------------------------------------------------------------------
| EMAIL HTML
|--------------------------------------------------------------------------
*/

$emailBody = "
<!DOCTYPE html>

<html>

<head>

<meta charset='UTF-8'>

<title>New Genomics Enquiry</title>

</head>

<body
style='
font-family: Arial, sans-serif;
background:#f5f7fb;
color:#222;
padding:20px;
'
>

<div
style='
max-width:800px;
margin:0 auto;
background:#ffffff;
padding:25px;
border-radius:10px;
'
>

<h2
style='
color:#0c2d63;
margin-top:0;
'
>
New Contact Form Enquiry
</h2>

<table
cellpadding='10'
cellspacing='0'
border='1'
style='
border-collapse:collapse;
width:100%;
border-color:#dddddd;
'
>

<tr>
<td><strong>Service Type</strong></td>
<td>{$serviceTypeHtml}</td>
</tr>

<tr>
<td><strong>Service Interest</strong></td>
<td>{$serviceInterestHtml}</td>
</tr>

<tr>
<td><strong>Name</strong></td>
<td>{$nameHtml}</td>
</tr>

<tr>
<td><strong>Organisation</strong></td>
<td>{$organisationHtml}</td>
</tr>

<tr>
<td><strong>Email</strong></td>
<td>{$emailHtml}</td>
</tr>

<tr>
<td><strong>Phone</strong></td>
<td>{$phoneHtml}</td>
</tr>

<tr>
<td><strong>Sample Type</strong></td>
<td>{$sampleTypeHtml}</td>
</tr>

<tr>
<td><strong>Sample Count</strong></td>
<td>{$sampleCountHtml}</td>
</tr>

<tr>
<td><strong>Message</strong></td>
<td>{$messageHtml}</td>
</tr>

</table>

</div>

</body>

</html>
";


/*
|--------------------------------------------------------------------------
| ATTACHMENT
|--------------------------------------------------------------------------
*/

$attachmentPath = null;
$attachmentName = null;

if (isset($_FILES["attachment"])) {

    if (
        $_FILES["attachment"]["error"] !== UPLOAD_ERR_NO_FILE
    ) {

        if (
            $_FILES["attachment"]["error"] !== UPLOAD_ERR_OK
        ) {
            http_response_code(422);

            echo json_encode([
                "success" => false,
                "message" => "There was a problem uploading the attachment."
            ]);

            exit;
        }

        $file = $_FILES["attachment"];


        /*
        |--------------------------------------------------------------------------
        | MAX FILE SIZE - 5 MB
        |--------------------------------------------------------------------------
        */

        if ($file["size"] > 5 * 1024 * 1024) {

            http_response_code(422);

            echo json_encode([
                "success" => false,
                "message" => "Uploaded file is larger than 5 MB."
            ]);

            exit;
        }


        /*
        |--------------------------------------------------------------------------
        | ALLOWED EXTENSIONS
        |--------------------------------------------------------------------------
        */

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


        $attachmentName = basename($file["name"]);

        $extension = strtolower(
            pathinfo(
                $attachmentName,
                PATHINFO_EXTENSION
            )
        );


        if (
            !in_array(
                $extension,
                $allowedExtensions,
                true
            )
        ) {

            http_response_code(422);

            echo json_encode([
                "success" => false,
                "message" => "Invalid file type."
            ]);

            exit;
        }


        $attachmentPath = $file["tmp_name"];
    }
}


/*
|--------------------------------------------------------------------------
| CREATE PHPMailer
|--------------------------------------------------------------------------
*/

$mail = new PHPMailer(true);

try {

    /*
    |--------------------------------------------------------------------------
    | SMTP
    |--------------------------------------------------------------------------
    */

    $mail->SMTPDebug = SMTP::DEBUG_OFF;

    $mail->isSMTP();

    $mail->Host = $smtpHost;

    $mail->SMTPAuth = true;

    $mail->Username = $smtpUsername;

    $mail->Password = $smtpPassword;

    /*
    |--------------------------------------------------------------------------
    | SSL / TLS
    |--------------------------------------------------------------------------
    */

    if ($smtpEncryption === "ssl") {

        $mail->SMTPSecure =
            PHPMailer::ENCRYPTION_SMTPS;

    } else {

        $mail->SMTPSecure =
            PHPMailer::ENCRYPTION_STARTTLS;
    }

    $mail->Port = $smtpPort;

    $mail->CharSet = "UTF-8";


    /*
    |--------------------------------------------------------------------------
    | FROM
    |--------------------------------------------------------------------------
    */

    $mail->setFrom(
        $smtpUsername,
        "Leads Genetics Website"
    );


    /*
    |--------------------------------------------------------------------------
    | TO
    |--------------------------------------------------------------------------
    */

    $mail->addAddress(
        $toEmail,
        $toName
    );


    /*
    |--------------------------------------------------------------------------
    | REPLY TO
    |--------------------------------------------------------------------------
    */

    $mail->addReplyTo(
        $email,
        $name
    );


    /*
    |--------------------------------------------------------------------------
    | EMAIL CONTENT
    |--------------------------------------------------------------------------
    */

    $mail->isHTML(true);

    $mail->Subject = $subject;

    $mail->Body = $emailBody;


    /*
    |--------------------------------------------------------------------------
    | PLAIN TEXT VERSION
    |--------------------------------------------------------------------------
    */

    $mail->AltBody =
        "New Genomics Enquiry\n\n" .
        "Service Type: " . $serviceType . "\n" .
        "Service Interest: " . $serviceInterest . "\n" .
        "Name: " . $name . "\n" .
        "Organisation: " . $organisation . "\n" .
        "Email: " . $email . "\n" .
        "Phone: " . $cleanPhone . "\n" .
        "Sample Type: " . $sampleType . "\n" .
        "Sample Count: " . $sampleCount . "\n" .
        "Message: " . $message;


    /*
    |--------------------------------------------------------------------------
    | ATTACHMENT
    |--------------------------------------------------------------------------
    */

    if (
        $attachmentPath !== null &&
        $attachmentName !== null
    ) {

        $mail->addAttachment(
            $attachmentPath,
            $attachmentName
        );
    }


    /*
    |--------------------------------------------------------------------------
    | SEND EMAIL
    |--------------------------------------------------------------------------
    */

    $mail->send();


    /*
    |--------------------------------------------------------------------------
    | SUCCESS RESPONSE
    |--------------------------------------------------------------------------
    */

    http_response_code(200);

    echo json_encode([
        "success" => true,
        "message" => "Email sent successfully."
    ]);

} catch (Exception $e) {

    /*
    |--------------------------------------------------------------------------
    | SERVER LOG
    |--------------------------------------------------------------------------
    */

    error_log(
        "Leads Genetics contact form mail error: " .
        $mail->ErrorInfo
    );


    http_response_code(500);

    echo json_encode([
        "success" => false,
        "message" => "Unable to send email. Please check the SMTP configuration."
    ]);
}

exit;

?>