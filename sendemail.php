<?php
$name       = @trim(stripslashes($_POST['name'])); 
$from       = @trim(stripslashes($_POST['email'])); 
$message    = @trim(stripslashes($_POST['message'])); 
$to   		= 'sharevel.info@gmail.com';//replace with your email








$headers;
$headers = "MIME-Version: 1.0";
$headers.= "Content-type: text/plain; charset=iso-8859-1";
$headers.= "From: {$name} <{$from}>";
$headers.= "Reply-To: <{$from}>";
$headers.= "Subject: {Dalsito}";
$headers.= "X-Mailer: PHP/".phpversion();

mail($to, $from." dal nome".$name, $message, $headers);
header('Location: index.html');