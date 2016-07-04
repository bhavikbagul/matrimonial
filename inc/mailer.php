<?php
include 'class.smtp.php';
include 'class.phpmailer.php';
$mail = new PHPMailer;

$method = $_SERVER['REQUEST_METHOD'];
if($_REQUEST['send']==true){
	//From email address and name
	//$from = $_REQUEST['from_name'];
	$mail->From = $_REQUEST['from_email'];
	$mail->FromName = $_REQUEST['from_name'];
	
	//To address and name
	/*
	$mailIds = explode(",",$_REQUEST['to']);
	foreach$mailIds as $emailID){
		//$mail->addAddress($_REQUEST['to']);
		$mail->addAddress($emailID);
	}
	*/
	$mail->addAddress($_REQUEST['to']);
	
	
	//Address to which recipient will reply
	//$mail->addReplyTo("reply@yourdomain.com", "Reply");
	
	//CC and BCC
	//$mail->addCC("deepak.nagane@carrottech.in");
	$mail->addBCC("deepak.nagane@carrottech.in");
	
	//Send HTML or Plain Text email
	
	$mail->isHTML(true);
	
	$mail->Subject = $_REQUEST['subject'];
	$mail->Body = $_REQUEST['message'];
	$mail->AltBody = "This is the plain text version of the email content";
	
	if(!$mail->send()) 
	{
	echo "Mailer Error: " . $mail->ErrorInfo;
	} 
	else 
	{
		//echo "Message has been sent successfully";
	}
}
else
http_response_code(404);