<?php  require 'inc/common.php';
require 'inc/header.php'; ?>
<script src="assets/js/common.js"></script>
<style type="text/css">
.error{color:#C32143; font-size:80%; display:none}
</style>
<div class="grid_3">
  <div class="container">
   <div class="breadcrumb1">
     <ul>
        <a href="<?=base_url?>"><i class="fa fa-home home_1"></i></a>
        <span class="divider">&nbsp;|&nbsp;</span>
        <li class="current-page">Register</li>
     </ul>
   </div>
   <div class="services">
   	  <div class="col-sm-6 login_left">
	     <?php
		 $reg_id = $_SESSION['reg_id'];
		 //$reg_id = 2;
		 
		 $q = $conn->prepare("SELECT mat_id,name FROM register WHERE reg_id=:reg_id");
		 $q->execute(array(':reg_id'=>$reg_id));
		 
		 if($q->rowCount()>0){
			$row = $q->fetchAll(PDO::FETCH_ASSOC);
			echo 'Thanks <b>'.$row[0]['name'].'</b>, for registering on Mathili Matrimonial<br>';
			echo 'Your Matrimonial ID is: <b>'.$row[0]['mat_id'].'</b>';
		 }
		 ?>
	  </div>
	  <div class="col-sm-6">
	     <ul class="sharing">
			<li><a href="#" class="facebook" title="Facebook"><i class="fa fa-boxed fa-fw fa-facebook"></i> Share on Facebook</a></li>
		  	<li><a href="#" class="twitter" title="Twitter"><i class="fa fa-boxed fa-fw fa-twitter"></i> Tweet</a></li>
		  	<li><a href="#" class="google" title="Google"><i class="fa fa-boxed fa-fw fa-google-plus"></i> Share on Google+</a></li>
		  	<li><a href="#" class="linkedin" title="Linkedin"><i class="fa fa-boxed fa-fw fa-linkedin"></i> Share on LinkedIn</a></li>
		  	<li><a href="#" class="mail" title="Email"><i class="fa fa-boxed fa-fw fa-envelope-o"></i> E-mail</a></li>
		 </ul>
	  </div>
	  <div class="clearfix"> </div>
   </div>

  </div>
</div>

<?php require 'inc/footer.php'; ?>