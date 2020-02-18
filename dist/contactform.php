<?php

$secret = '6LcOs9kUAAAAADsgS5BxkW7zpNSoUk4npwpXSxeN';
$url = "https://www.google.com/recaptcha/api/siteverify?secret=$secret&response=".$_POST['g-recaptcha-response'];
$verify = json_decode(file_get_contents($url));

if ($verify->success) {
    if (isset($_POST['submit'])) {
        $name = $_POST['name'];
        $subject = $_POST['subject'];
        $mailFrom = $_POST['mail'];
        $message = $_POST['message'];

        $mailTo = "jonathan@swedishappmafia.com";
        $headers = "From: ".$mailFrom;
        $txt = "Website contact form email from ".$name.".\n\n".$message;

        if ($name != null and $subject != null and $mailFrom != null and $message != null) {
            mail($mailTo, $subject, $txt, $headers);
            header("Location: index.html?mailsend");
        } else {
            header("refresh:1;url=contact.html");
            echo '<script type="text/javascript">',
            'alert("You need to fill all information!")',
            '</script>'
            ;
        }
    }
} else {
    header("refresh:1;url=contact.html");
    
    echo '<script type="text/javascript">',
     'alert("You need to use the reCAPTCHA in order to send an email!")',
     '</script>'
    ;
}

?>



