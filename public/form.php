<?php
$name = $_POST ['name'];
$email = $_POST ['email'];
$textArea = $_POST ['textArea'];

$mensaje = "Este mensaje ha sido enviado por" . $name . ",\r\n";
$mensaje = "con el email" . $email . ",\r\n";
$mensaje = "solicitando" . $textArea . ",\r\n";
$mensaje = "Enviado el dia" . date("d/m/y", time());

$destinatario = "mario.sanz.gutierrez@gmail.com";
$asunto = "Solicitud de contacto desde Debord Company";

mail($destinatario, $asunto, $mensaje, $header);

header('location:index.html');

?>