<?php
$name = $_POST ['name'];
$email = $_POST ['email'];
$textArea = $_POST ['textArea'];

$mensaje1 = "Este mensaje ha sido enviado por: " . $name . ",\r\n";
$mensaje2 = "con el email: " . $email . ",\r\n";
$mensaje3 = "solicitando: " . $textArea . ",\r\n";
$mensaje4 = "Enviado el dia: " . date("d/m/y", time());



$destinatario = "mario.sanz.gutierrez@gmail.com";
$asunto = "Solicitud de contacto desde Debord Company";

$header = 'From: debord.info@gmail.com' . "\r\n" .
    'Reply-To: debord.info@gmail.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

mail($destinatario, $asunto, $mensaje1.$mensaje2.$mensaje3.$mensaje4, $header);

header('location:/pages/form/index.html');

?>