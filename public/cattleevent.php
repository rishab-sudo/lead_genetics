<?php

ob_start();

/*
|--------------------------------------------------------------------------
| CATTLE EVENT REGISTRATION
|--------------------------------------------------------------------------
| React -> PHP -> PHPMailer -> SMTP -> rishabdutt4@gmail.com
|--------------------------------------------------------------------------
*/

header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Accept");

/*
|--------------------------------------------------------------------------
| HELPER: JSON RESPONSE
|--------------------------------------------------------------------------
*/

function sendResponse($success, $message, $statusCode = 200)
{
    while (ob_get_level()) {
        ob_end_clean();
    }

    http_response_code($statusCode);

    echo json_encode(
        [
            "success" => $success,
            "message" => $message
        ],
        JSON_UNESCAPED_UNICODE
    );

    exit;
}

/*
|--------------------------------------------------------------------------
| CORS PREFLIGHT
|--------------------------------------------------------------------------
*/

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    sendResponse(true, "OK", 200);
}

/*
|--------------------------------------------------------------------------
| ONLY POST REQUEST
|--------------------------------------------------------------------------
*/

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    sendResponse(
        false,
        "Invalid request method. Please submit the form using POST.",
        405
    );
}

/*
|--------------------------------------------------------------------------
| PHP SETTINGS
|--------------------------------------------------------------------------
*/

ini_set("display_errors", "0");
ini_set("log_errors", "1");
ini_set("max_execution_time", "60");
ini_set("memory_limit", "256M");

/*
|--------------------------------------------------------------------------
| PHPMailer
|--------------------------------------------------------------------------
*/

$autoload = __DIR__ . "/vendor/autoload.php";

if (!file_exists($autoload)) {
    sendResponse(
        false,
        "PHPMailer is not installed correctly. Please check the vendor folder.",
        500
    );
}

require_once $autoload;

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

/*
|--------------------------------------------------------------------------
| CLEAN INPUT
|--------------------------------------------------------------------------
*/

function cleanInput($value)
{
    if (!is_string($value)) {
        return "";
    }

    $value = trim($value);
    $value = stripslashes($value);

    return htmlspecialchars(
        $value,
        ENT_QUOTES | ENT_SUBSTITUTE,
        "UTF-8"
    );
}

/*
|--------------------------------------------------------------------------
| GET FORM DATA
|--------------------------------------------------------------------------
*/

$name = cleanInput($_POST["name"] ?? "");

$email = trim($_POST["email"] ?? "");

$phone = cleanInput($_POST["phone"] ?? "");

$institute = cleanInput($_POST["institute"] ?? "");

$department = cleanInput($_POST["department"] ?? "");

$researchArea = cleanInput($_POST["researchArea"] ?? "");

$designation = cleanInput($_POST["designation"] ?? "");

$dates = cleanInput($_POST["dates"] ?? "");

/*
|--------------------------------------------------------------------------
| REQUIRED VALIDATION
|--------------------------------------------------------------------------
*/

if (
    $name === "" ||
    $email === "" ||
    $phone === "" ||
    $institute === "" ||
    $department === "" ||
    $researchArea === "" ||
    $designation === "" ||
    $dates === ""
) {
    sendResponse(
        false,
        "Please fill in all required fields.",
        400
    );
}

/*
|--------------------------------------------------------------------------
| EMAIL VALIDATION
|--------------------------------------------------------------------------
*/

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    sendResponse(
        false,
        "Please enter a valid email address.",
        400
    );
}

/*
|--------------------------------------------------------------------------
| PHONE VALIDATION
|--------------------------------------------------------------------------
*/

if (!preg_match("/^[6-9][0-9]{9}$/", $phone)) {
    sendResponse(
        false,
        "Please enter a valid 10-digit Indian mobile number.",
        400
    );
}

/*
|--------------------------------------------------------------------------
| EMAIL CONFIGURATION
|--------------------------------------------------------------------------
|
| Registration emails will be delivered to:
| rishabdutt4@gmail.com
|
|--------------------------------------------------------------------------
*/

$toEmail = "rishabdutt4@gmail.com";
$toName = "Rishab";

/*
|--------------------------------------------------------------------------
| SMTP ACCOUNT
|--------------------------------------------------------------------------
|
| Your domain uses:
| info@leadsgenetics.com
|
| IMPORTANT:
| Replace SMTP_PASSWORD_HERE with the REAL mailbox password.
|
|--------------------------------------------------------------------------
*/

$fromEmail = "info@leadsgenetics.com";
$fromName = "Leads Genetics Registration";

$smtpHost = "cloud-da2.xdnscloud.com";
$smtpUsername = "info@leadsgenetics.com";
$smtpPassword = "Deva@8899";

/*
|--------------------------------------------------------------------------
| SUBJECT
|--------------------------------------------------------------------------
*/

$subject = "New Cattle Event Registration - " . $name;

/*
|--------------------------------------------------------------------------
| HTML EMAIL
|--------------------------------------------------------------------------
*/

$htmlBody = '
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Cattle Event Registration</title>
</head>

<body style="
    margin:0;
    padding:30px;
    background:#f5f6f8;
    font-family:Arial,Helvetica,sans-serif;
">

<div style="
    max-width:700px;
    margin:0 auto;
    background:#ffffff;
    border:1px solid #dddddd;
    border-radius:10px;
    overflow:hidden;
">

    <div style="
        padding:28px 30px;
        background:#f7f7f7;
        border-bottom:1px solid #e5e5e5;
        text-align:center;
    ">

        <h2 style="
            margin:0;
            color:#222222;
            font-size:24px;
        ">
            Leads Genetics
        </h2>

        <p style="
            margin:8px 0 0;
            color:#666666;
            font-size:14px;
        ">
            New Cattle Event Registration
        </p>

    </div>

    <div style="padding:30px;">

        <table style="
            width:100%;
            border-collapse:collapse;
        ">

            <tr>
                <td style="
                    width:38%;
                    padding:13px 12px;
                    background:#f5f5f5;
                    border:1px solid #e2e2e2;
                    font-weight:bold;
                    color:#333333;
                ">
                    Name
                </td>

                <td style="
                    padding:13px 12px;
                    border:1px solid #e2e2e2;
                    color:#555555;
                ">
                    ' . $name . '
                </td>
            </tr>

            <tr>
                <td style="
                    padding:13px 12px;
                    background:#f5f5f5;
                    border:1px solid #e2e2e2;
                    font-weight:bold;
                    color:#333333;
                ">
                    Email
                </td>

                <td style="
                    padding:13px 12px;
                    border:1px solid #e2e2e2;
                    color:#555555;
                ">
                    ' . htmlspecialchars(
                        $email,
                        ENT_QUOTES | ENT_SUBSTITUTE,
                        "UTF-8"
                    ) . '
                </td>
            </tr>

            <tr>
                <td style="
                    padding:13px 12px;
                    background:#f5f5f5;
                    border:1px solid #e2e2e2;
                    font-weight:bold;
                    color:#333333;
                ">
                    Phone No.
                </td>

                <td style="
                    padding:13px 12px;
                    border:1px solid #e2e2e2;
                    color:#555555;
                ">
                    ' . $phone . '
                </td>
            </tr>

            <tr>
                <td style="
                    padding:13px 12px;
                    background:#f5f5f5;
                    border:1px solid #e2e2e2;
                    font-weight:bold;
                    color:#333333;
                ">
                    Institute / Affiliation
                </td>

                <td style="
                    padding:13px 12px;
                    border:1px solid #e2e2e2;
                    color:#555555;
                ">
                    ' . $institute . '
                </td>
            </tr>

            <tr>
                <td style="
                    padding:13px 12px;
                    background:#f5f5f5;
                    border:1px solid #e2e2e2;
                    font-weight:bold;
                    color:#333333;
                ">
                    Department
                </td>

                <td style="
                    padding:13px 12px;
                    border:1px solid #e2e2e2;
                    color:#555555;
                ">
                    ' . $department . '
                </td>
            </tr>

            <tr>
                <td style="
                    padding:13px 12px;
                    background:#f5f5f5;
                    border:1px solid #e2e2e2;
                    font-weight:bold;
                    color:#333333;
                ">
                    Area of Research
                </td>

                <td style="
                    padding:13px 12px;
                    border:1px solid #e2e2e2;
                    color:#555555;
                ">
                    ' . $researchArea . '
                </td>
            </tr>

            <tr>
                <td style="
                    padding:13px 12px;
                    background:#f5f5f5;
                    border:1px solid #e2e2e2;
                    font-weight:bold;
                    color:#333333;
                ">
                    Designation
                </td>

                <td style="
                    padding:13px 12px;
                    border:1px solid #e2e2e2;
                    color:#555555;
                ">
                    ' . $designation . '
                </td>
            </tr>

            <tr>
                <td style="
                    padding:13px 12px;
                    background:#f5f5f5;
                    border:1px solid #e2e2e2;
                    font-weight:bold;
                    color:#333333;
                ">
                    Selected Date(s)
                </td>

                <td style="
                    padding:13px 12px;
                    border:1px solid #e2e2e2;
                    color:#555555;
                    font-weight:bold;
                ">
                    ' . $dates . '
                </td>
            </tr>

        </table>

        <p style="
            margin:25px 0 0;
            color:#999999;
            font-size:12px;
            text-align:center;
        ">
            This is an automated email from the Leads Genetics
            registration system.
        </p>

    </div>

</div>

</body>
</html>
';

/*
|--------------------------------------------------------------------------
| SEND EMAIL
|--------------------------------------------------------------------------
*/

try {

    $mail = new PHPMailer(true);

    /*
    |--------------------------------------------------------------------------
    | SMTP
    |--------------------------------------------------------------------------
    */

    $mail->isSMTP();

    $mail->Host = $smtpHost;
    $mail->SMTPAuth = true;

    $mail->Username = $smtpUsername;
    $mail->Password = $smtpPassword;

    /*
    |--------------------------------------------------------------------------
    | SSL
    |--------------------------------------------------------------------------
    */

    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port = 465;

    /*
    |--------------------------------------------------------------------------
    | SMTP OPTIONS
    |--------------------------------------------------------------------------
    */

    $mail->SMTPDebug = 0;
    $mail->Timeout = 30;

    /*
    |--------------------------------------------------------------------------
    | CHARACTER SET
    |--------------------------------------------------------------------------
    */

    $mail->CharSet = "UTF-8";

    /*
    |--------------------------------------------------------------------------
    | FROM
    |--------------------------------------------------------------------------
    */

    $mail->setFrom(
        $fromEmail,
        $fromName
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
    | EMAIL
    |--------------------------------------------------------------------------
    */

    $mail->Subject = $subject;

    $mail->isHTML(true);

    $mail->Body = $htmlBody;

    /*
    |--------------------------------------------------------------------------
    | PLAIN TEXT VERSION
    |--------------------------------------------------------------------------
    */

    $mail->AltBody =
        "New Cattle Event Registration\n\n" .
        "Name: " . $name . "\n" .
        "Email: " . $email . "\n" .
        "Phone: " . $phone . "\n" .
        "Institute / Affiliation: " . $institute . "\n" .
        "Department: " . $department . "\n" .
        "Area of Research: " . $researchArea . "\n" .
        "Designation: " . $designation . "\n" .
        "Selected Date(s): " . $dates . "\n";

    /*
    |--------------------------------------------------------------------------
    | SEND
    |--------------------------------------------------------------------------
    */

    $mail->send();

    sendResponse(
        true,
        "Registration submitted successfully. Thank you!",
        200
    );

} catch (Exception $e) {

    error_log(
        "Cattle Event Registration Mail Error: " .
        $e->getMessage()
    );

    sendResponse(
        false,
        "Email could not be sent. Please try again later.",
        500
    );

} catch (Throwable $e) {

    error_log(
        "Cattle Event Registration PHP Error: " .
        $e->getMessage()
    );

    sendResponse(
        false,
        "Server error occurred. Please try again later.",
        500
    );
}

exit;