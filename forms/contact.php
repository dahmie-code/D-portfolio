
<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require "../vendor/autoload.php";

$receiving_email_address = "dahmie@gmail.com";

$mail = new PHPMailer(true);

try {
    // Server settings
    $mail->isSMTP();
    $mail->Host = "smtp.gmail.com";
    $mail->SMTPAuth = true;
    $mail->Username = "dahmie@gmail.com";
    $mail->Password = "yuvo pyiw kahr qhvh";
    $mail->SMTPSecure = "tls";
    $mail->Port = 587;

    // Recipients
    $mail->setFrom("dahmie@gmail.com", "Damilola Aderoju");
    $mail->addAddress($receiving_email_address);
    $mail->addReplyTo($_POST["email"], $_POST["name"]);

    // Content
    $mail->isHTML(true);
    $mail->Subject = htmlspecialchars($_POST["subject"]);

    // Construct the body with sender's details
    $bodyContent =
        "<p><strong>Name:</strong> " .
        htmlspecialchars($_POST["name"]) .
        "</p>";
    $bodyContent .=
        "<p><strong>Email:</strong> " .
        htmlspecialchars($_POST["email"]) .
        "</p>";
    $bodyContent .=
        "<p><strong>Message:</strong><br>" .
        nl2br(htmlspecialchars($_POST["message"])) .
        "</p>";

    $mail->Body = $bodyContent;
    $mail->AltBody = htmlspecialchars($_POST["message"]);

    $mail->send();
    echo "Your message has been sent. Thank you!";
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}


?>
