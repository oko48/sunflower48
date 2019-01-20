<?php $to="okova48@yandex.ru"; // заменить на свою почту
$headers = "Content-type: text/html; charset=utf-8 \r\n";
$headers.= "From: ".$_SERVER['SERVER_NAME']." \r\n";
$subject="Сообщение с сайта ".$_SERVER['SERVER_NAME'];
$message="Тест";
mail($to, $subject, $message, $headers); ?>
