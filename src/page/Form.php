<?php

// Conecto mi form / name / con el server a traves de los name
$nombre = $_POST['name'];
$email = $_POST['email'];
$mensaje = $_POST['abstract'];


// Como me va a llegar el cuerpo del mail a mi, o sea lo que la gente escribio en el form - \r\n es para realizar un salto de linea 
$mensaje = "Este mensaje fue enviado por " . $nombre . ',\r\n';
$mensaje .= "Su e-mail es: " . $email . ',\r\n';
$mensaje .= "Mensaje: " . $_POST['mensaje'] . ',\r\n';
$mensaje .= "Enviado el" . date('d/m/Y', time());


$para = 'workjesusmartinaguilar@gmail.com';// El mail a donde va a llegar los mensajes
$asunto = 'Este mensaje fue enviado desde la web de react realizada den CoderHouse'; // El asunto de los mails que me llegan


// La funcion mail envia un correo electronico. y el orden es:
// A quien se lo envia? - El titulo del correo - El mensaje - Header para añadir
mail($para, $asunto, $mensaje, $header);


header("Location:index.jsx") /* Redirección del navegador */


?>