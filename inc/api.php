<?php
require 'common.php';

if(isset($_REQUEST['formkey']) && $_REQUEST['formkey']==$_SESSION['formKey']){
	
	$name = trim($_REQUEST['name']);
	$profile = trim($_REQUEST['profile']);
	$email = trim($_REQUEST['email']);
	$dob_d = trim($_REQUEST['dob_d']);
	$dob_m = trim($_REQUEST['dob_m']);
	$dob_y = trim($_REQUEST['dob_y']);
	$dob = $dob_y.'-'.$dob_m.'-'.$dob_d;
	$gender = trim($_REQUEST['gender']);
	$mstatus = trim($_REQUEST['mstatus']);
	$subcaste = trim($_REQUEST['subcaste']);
	$mtongue = trim($_REQUEST['mtongue']);
	$country = trim($_REQUEST['country']);
	$mobile = trim($_REQUEST['mobile']);
	$password = trim($_REQUEST['password']);
	
	if($name!='' && $profile!='' && $email!='' && $dob_d!='' && $dob_m!='' && $dob_y!='' && $gender!='' && $mstatus!='' && $subcaste!='' && $mtongue!='' && $country!='' && $mobile!='' && $password!=''){
		$matid = getMatID();
		$validKey = getValidationKey();
		$sql = "INSERT INTO register(`mat_id`, `name`, `email`, `password`, `dob`, `gender`, `mstatus`, `subcaste`, `mtongue`, `country`, `mobile`, `created_by`,`validation_key`) VALUES 
	(:mat_id,:name,:email,:password,:dob,:gender,:mstatus,:subcaste,:mtongue,:country,:mobile,:created_by,:validation_key)";
			
			$q = $conn->prepare($sql);
			$q->execute(array(':mat_id'=>$matid,':name'=>$name,':email'=>$email,':password'=>$password,':dob'=>$dob,':gender'=>$gender,':mstatus'=>$mstatus,':subcaste'=>$subcaste,':mtongue'=>$mtongue,':country'=>$country,':mobile'=>$mobile,':created_by'=>$profile,':validation_key'=>$validKey));
			
			$reg_id = $conn->lastInsertId();
			$count=$q->rowCount();
		if($count>0){
			$active_link = base_url.'?activate.php?key='.$validKey.'&user='.$email;
			//mail code
			include 'class.smtp.php';
			include 'class.phpmailer.php';
			$mail = new PHPMailer;
			$mail->From = "support@mathiliweb.com";
			$mail->FromName = "Maithil Matrimony";
			$mail->addAddress($email);
			$mail->addCC("bhavik.bagul@carrottech.in");
			//$mail->addBCC("bhavik.bagul@carrottech.in");
			$mail->isHTML(true);
			$mail->Subject = "Mathili Matrimony Registration";
			$mail->Body = "Hello $name,<br>Thanks for registration on Mathili web.<br>Please <a href='".$active_link."'>click here</a> to activate your acount. <br> OR copy the following link & paste it in browser's address bar<br>".$active_link;
			//$mail->AltBody = "This is the plain text version of the email content";
			if(!$mail->send()) 
			{
			echo "Mailer Error: " . $mail->ErrorInfo;
			}
			
			echo 'Y';
			$_SESSION['formKey']=null;
			$_SESSION['newReg']=$reg_id;
		}
		else
		echo 'N';
	}
	else
	echo 'Please fill all the required fields';
}

?>