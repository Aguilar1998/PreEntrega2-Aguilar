<?php

$nombre = $_POST['name'];
$email = $_POST['email'];
// $asunto = $_POST['asunto'];
$mensaje = $_POST['mensaje'];

$header .= "Content=Type; text/plain";

$mensaje = "Este mensaje fue enviado por " . $nombre . ',\r\n';
$mensaje .= "Su e-mail es: " . $email . ',\r\n';
$mensaje .= "Mensaje: " . $_POST['mensaje'] . ',\r\n';
$mensaje .= "Enviado el" . date('d/m/y', time()) . ',\r\n';


$para = 'workjesusmartinaguilar@gmail.com';
$asunto = 'Mensaje de mi sitio web';


mail($para, $asunto, utf8_decode($mensaje),$header)


header('Location:index.html');

?>