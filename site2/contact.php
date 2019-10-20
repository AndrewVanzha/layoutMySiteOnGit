<?php

$post = (!empty($_POST)) ? true : false;

//var_dump($_POST);

$done = 'OK';
echo json_encode($done);

// Проверка телефона
function ValidateTel($valueTel) {
  $regexTel = "/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/";
  if($valueTel == "") {
    return false;
  } else {
    $string = preg_replace($regexTel, "", $valueTel);
  }
  return empty($string) ? true : false;
}

if($post) {
  $email = trim($_POST['user_email']);
  $email = htmlspecialchars($_POST['user_email']);
  $name = htmlspecialchars($_POST['user_name']);
  $company = htmlspecialchars($_POST['user_company']);
  $tel = htmlspecialchars($_POST['user_phone']);
  $error = '';

  if(!$name) {
    $error .= 'Пожалуйста введите ваше имя<br />';
  }

  if(!$email) {
    $error .= "Пожалуйста введите email<br />";
  }
  
  if($email && !ValidateTel($email)) {
    $error .= "Введите корректный email<br />";
  }

  if(!$error) {
    // (length)
    if(!$company || strlen($company) < 1) {
        $error .= "Введите ваше сообщение<br />";
    }
  }

  if(!$error) {
    $name_tema = "=?utf-8?b?". base64_encode($name) ."?=";

    $subject ="Новая заявка с сайта domain.name";
    $subject1 = "=?utf-8?b?". base64_encode($subject) ."?=";
      
    /*$company ="\n\nСообщение: ".$company."\n\nИмя: " .$name."\n\nТелефон: ".$tel."\n\n";*/
     
    $company1 ="\n\nИмя: ".$name."\n\nТелефон: " .$tel."\n\nE-mail: " .$email."\n\nСообщение: ".$company."\n\n";	

    $header = "Content-Type: text/plain; charset=utf-8\n";

    $header .= "From: Новая заявка <example@gmail.com>\n\n";	
    $mail = mail("example@gmail.com", $subject1, iconv ('utf-8', 'windows-1251', $company1), iconv ('utf-8', 'windows-1251', $header));

    if($mail) {
      echo 'OK';
    }

  } else {
    echo '<div class="notification_error">'.$error.'</div>';
  }

  $done = 'OK';
  echo json_encode($done);

}
?>