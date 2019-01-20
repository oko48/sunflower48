<?php
$pop=htmlspecialchars($_POST["pop"])*1;

if($pop==0){
$cvetok=htmlspecialchars($_POST["cvet"]);
$num=htmlspecialchars($_POST["num"]);
$buket=htmlspecialchars($_POST["buket1"]);
$pod=htmlspecialchars($_POST["pod1"]);
$sum=htmlspecialchars($_POST["sum"]);
$name=htmlspecialchars($_POST["name1"]);
$phone=htmlspecialchars($_POST["phone1"]);

$message="<p>Имя : ".$name."</p>".
"<p>Телефон : ".$phone."</p>".
"<p>Цветок : ".$cvetok."</p>".
"<p>Количество: ".$num."</p>".
"<p>Тип букета: ".$buket."</p>".
"<p>Подарок: ".$pod."</p>".
"<p>Цена : ".$sum."</p>";


}else if($pop==1){
$name=htmlspecialchars($_POST["name1"]);
$phone=htmlspecialchars($_POST["phone1"]);

$message="<p>Имя : ".$name."</p>".
"<p>Телефон : ".$phone."</p>";
}

$from1="<info@sunflower48.ru>";

$from=$from1;
$headers="Content-type: text/html; charset=utf-8 \r\n";
$headers.="From: $from";
$topic="Заявка с сайта!";
//$email="<info@sunflower48.ru>";
$email="<sunflower48@yandex.ru>";
mail($email,$topic, $message, $headers);
echo "tt";
?>
