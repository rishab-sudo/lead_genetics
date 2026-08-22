<?php

header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

/* =========================================
   HANDLE PREFLIGHT REQUEST
========================================= */

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(204);
    exit;
}

/* =========================================
   REQUEST METHOD
========================================= */

if ($_SERVER["REQUEST_METHOD"] !== "POST") {

    http_response_code(405);

    echo json_encode([
        "success" => false,
        "message" => "Invalid request method."
    ]);

    exit;
}

/* =========================================
   PHPMailer
========================================= */

/*
IMPORTANT:

Upload the PHPMailer folder to the same location
as this PHP file.

Structure:

public_html/
│
├── send-contact.php
│
└── PHPMailer/
    └── src/
        ├── Exception.php
        ├── PHPMailer.php
        └── SMTP.php
*/

$phpMailerPath = __DIR__ . "/PHPMailer/src/";

if (
    !file_exists($phpMailerPath . "Exception.php") ||
    !file_exists($phpMailerPath . "PHPMailer.php") ||
    !file_exists($phpMailerPath . "SMTP.php")
) {

    http_response_code(500);

    echo json_encode([
        "success" => false,
        "message" => "PHPMailer is not installed on the server. Please upload the PHPMailer folder."
    ]);

    exit;
}

require $phpMailerPath . "Exception.php";
require $phpMailerPath . "PHPMailer.php";
require $phpMailerPath . "SMTP.php";

use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;


/* =========================================
   GET FORM DATA
========================================= */

$serviceType = trim($_POST["serviceType"] ?? "");
$serviceInterest = trim($_POST["serviceInterest"] ?? "");
$name = trim($_POST["name"] ?? "");
$organisation = trim($_POST["organisation"] ?? "");
$email = trim($_POST["email"] ?? "");
$phone = trim($_POST["phone"] ?? "");
$sampleType = trim($_POST["sampleType"] ?? "");
$sampleCount = trim($_POST["sampleCount"] ?? "");
$message = trim($_POST["message"] ?? "");


/* =========================================
   REQUIRED FIELD VALIDATION
========================================= */

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

    http_response_code(422);

    echo json_encode([
        "success" => false,
        "message" => "Please fill all required fields."
    ]);

    exit;
}


/* =========================================
   EMAIL VALIDATION
========================================= */

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {

    http_response_code(422);

    echo json_encode([
        "success" => false,
        "message" => "Please enter a valid email address."
    ]);

    exit;
}


/* =========================================
   PHONE VALIDATION
========================================= */

$cleanPhone = preg_replace(
    "/[^0-9]/",
    "",
    $phone
);

if (!preg_match(
    "/^[6-9][0-9]{9}$/",
    $cleanPhone
)) {

    http_response_code(422);

    echo json_encode([
        "success" => false,
        "message" => "Please enter a valid 10-digit Indian mobile number."
    ]);

    exit;
}


/* =========================================
   SAMPLE COUNT VALIDATION
========================================= */

if (
    !ctype_digit($sampleCount) ||
    intval($sampleCount) <= 0
) {

    http_response_code(422);

    echo json_encode([
        "success" => false,
        "message" => "Invalid sample count."
    ]);

    exit;
}


/* =========================================
   MESSAGE VALIDATION
========================================= */

if (strlen($message) < 10) {

    http_response_code(422);

    echo json_encode([
        "success" => false,
        "message" => "Message must contain at least 10 characters."
    ]);

    exit;
}


/* =========================================
   SMTP SETTINGS
========================================= */

/*
IMPORTANT:

Replace YOUR_EMAIL_PASSWORD with the actual
password of the mailbox below.

Example:

noreply@leadsgenetics.com

Do NOT use the visitor's Gmail/Yahoo/etc password.

If your hosting is Hostinger, these settings
normally work:

SMTP Host: smtp.hostinger.com
SMTP Port: 465
Encryption: SSL
*/

$smtpHost = "smtp.hostinger.com";

$smtpPort = 465;

$smtpUsername = "noreply@leadsgenetics.com";

$smtpPassword = "YOUR_EMAIL_PASSWORD";

$smtpEncryption = "ssl";


/* =========================================
   RECEIVER
========================================= */

$toEmail = "rishabdutt4@gmail.com";

$toName = "Leads Genetics";


/* =========================================
   SUBJECT
========================================= */

$subject = "New Genomics Enquiry - Leads Genetics";


/* =========================================
   ESCAPE HTML DATA
========================================= */

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


/* =========================================
   EMAIL HTML
========================================= */

$emailBody = "
<!DOCTYPE html>

<html>

<head>

<meta charset='UTF-8'>

<title>
New Genomics Enquiry
</title>

</head>

<body
style='
font-family: Arial, sans-serif;
color: #222;
'
>

<h2>
New Contact Form Enquiry
</h2>

<table
cellpadding='10'
cellspacing='0'
border='1'
style='
border-collapse: collapse;
width: 100%;
max-width: 800px;
'
>

<tr>

<td>
<strong>
Service Type
</strong>
</td>

<td>
{$serviceTypeHtml}
</td>

</tr>


<tr>

<td>
<strong>
Service Interest
</strong>
</td>

<td>
{$serviceInterestHtml}
</td>

</tr>


<tr>

<td>
<strong>
Name
</strong>
</td>

<td>
{$nameHtml}
</td>

</tr>


<tr>

<td>
<strong>
Organisation
</strong>
</td>

<td>
{$organisationHtml}
</td>

</tr>


<tr>

<td>
<strong>
Email
</strong>
</td>

<td>
{$emailHtml}
</td>

</tr>


<tr>

<td>
<strong>
Phone
</strong>
</td>

<td>
{$phoneHtml}
</td>

</tr>


<tr>

<td>
<strong>
Sample Type
</strong>
</td>

<td>
{$sampleTypeHtml}
</td>

</tr>


<tr>

<td>
<strong>
Sample Count
</strong>
</td>

<td>
{$sampleCountHtml}
</td>

</tr>


<tr>

<td>
<strong>
Message
</strong>
</td>

<td>
{$messageHtml}
</td>

</tr>

</table>

</body>

</html>
";


/* =========================================
   ATTACHMENT
========================================= */

$attachmentPath = null;

$attachmentName = null;


if (isset($_FILES["attachment"])) {

    if (
        $_FILES["attachment"]["error"]
        !== UPLOAD_ERR_NO_FILE
    ) {

        if (
            $_FILES["attachment"]["error"]
            !== UPLOAD_ERR_OK
        ) {

            http_response_code(422);

            echo json_encode([
                "success" => false,
                "message" =>
                    "There was a problem uploading the attachment."
            ]);

            exit;
        }


        $file = $_FILES["attachment"];


        /* 5 MB maximum */

        if (
            $file["size"]
            > 5 * 1024 * 1024
        ) {

            http_response_code(422);

            echo json_encode([
                "success" => false,
                "message" =>
                    "Uploaded file is larger than 5 MB."
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


        $attachmentName =
            basename(
                $file["name"]
            );


        $extension =
            strtolower(
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
                "message" =>
                    "Invalid file type."
            ]);

            exit;
        }


        $attachmentPath =
            $file["tmp_name"];
    }
}


/* =========================================
   SEND EMAIL
========================================= */

$mail = new PHPMailer(true);


try {

    /*
    Production mode:
    Do not show SMTP debug information.
    */

    $mail->SMTPDebug = SMTP::DEBUG_OFF;


    /* SMTP */

    $mail->isSMTP();


    $mail->Host =
        $smtpHost;


    $mail->SMTPAuth =
        true;


    $mail->Username =
        $smtpUsername;


    $mail->Password =
        $smtpPassword;


    /*
    SSL - Port 465
    */

    if (
        $smtpEncryption === "ssl"
    ) {

        $mail->SMTPSecure =
            PHPMailer::ENCRYPTION_SMTPS;

    } else {

        /*
        TLS - Port 587
        */

        $mail->SMTPSecure =
            PHPMailer::ENCRYPTION_STARTTLS;
    }


    $mail->Port =
        $smtpPort;


    $mail->CharSet =
        "UTF-8";


    /* =====================================
       FROM
    ===================================== */

    $mail->setFrom(
        $smtpUsername,
        "Leads Genetics Website"
    );


    /* =====================================
       TO
    ===================================== */

    $mail->addAddress(
        $toEmail,
        $toName
    );


    /* =====================================
       REPLY TO
    ===================================== */

    $mail->addReplyTo(
        $email,
        $name
    );


    /* =====================================
       EMAIL CONTENT
    ===================================== */

    $mail->isHTML(true);


    $mail->Subject =
        $subject;


    $mail->Body =
        $emailBody;


    /* =====================================
       PLAIN TEXT VERSION
    ===================================== */

    $mail->AltBody =
        "New Genomics Enquiry\n\n" .

        "Service Type: "
        . $serviceType
        . "\n" .

        "Service Interest: "
        . $serviceInterest
        . "\n" .

        "Name: "
        . $name
        . "\n" .

        "Organisation: "
        . $organisation
        . "\n" .

        "Email: "
        . $email
        . "\n" .

        "Phone: "
        . $cleanPhone
        . "\n" .

        "Sample Type: "
        . $sampleType
        . "\n" .

        "Sample Count: "
        . $sampleCount
        . "\n" .

        "Message: "
        . $message;


    /* =====================================
       ATTACHMENT
    ===================================== */

    if (
        $attachmentPath !== null &&
        $attachmentName !== null
    ) {

        $mail->addAttachment(
            $attachmentPath,
            $attachmentName
        );
    }


    /* =====================================
       SEND
    ===================================== */

    $mail->send();


    /* =====================================
       SUCCESS
    ===================================== */

    echo json_encode([
        "success" => true,
        "message" =>
            "Email sent successfully."
    ]);


} catch (Exception $e) {

    /*
    Log actual error on server.
    Do not expose SMTP credentials/details
    to website visitors.
    */

    error_log(
        "Leads Genetics contact form mail error: "
        . $mail->ErrorInfo
    );


    http_response_code(500);


    echo json_encode([
        "success" => false,
        "message" =>
            "Unable to send email. Please check the server email configuration."
    ]);
}


exit;

?>