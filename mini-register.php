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
	     <form autocomplete="off" name="regFrm" onsubmit="return false" id="regFrm" method="post" action="">
	  	    <div class="form-group">
		      <label for="edit-name">Profile created by <span class="form-required" title="This field is required.">*</span></label>
		      <select name="profile" id="profile" class="form-control">
				<option value="" selected="selected">Select</option>
				<option value="Self">Self</option><option value="Parents">Parents</option><option value="Sibling">Sibling</option><option value="Relative">Relative</option><option value="Friend">Friend</option></select>
                <span id="profileErr" class="error">Please select Profile created by</span>
		    </div>
		    <div class="form-group">
		      <label for="name">Name <span class="form-required" title="This field is required.">*</span></label>
		      <input type="text" id="name" name="name" size="60" maxlength="128" class="form-text required textOnly" value="">
              <span id="nameErr" class="error">Please enter name</span>
		    </div>
		    <div class="form-group">
		      <label for="email">Email <span class="form-required" title="This field is required.">*</span></label>
		      <input type="email" id="email" name="email" value="" size="60" maxlength="60" class="form-text required">
              <span id="emailErr" class="error"></span>              
		    </div>
		    <div class="age_select">
		      <label for="dob_d">Date of Birth <span class="form-required" title="This field is required.">*</span></label>
		        <div class="age_grid">
		         <div class="col-sm-4 form_box">
                  <div class="select-block1">
                    <select name="dob_d" id="dob_d">
	                    <option value="">Date</option><?php for($i=1;$i<=31;$i++) {?><option value="<?=$i?>"><?=$i?></option><? } ?>
                    </select>
                  </div>
                  <span id="dob_dErr" class="error">Please select Date</span>
            </div>
            <div class="col-sm-4 form_box2">
                   <div class="select-block1">
                    <select name="dob_m" id="dob_m">
	                    <option value="">Month</option>
	                    <option value="01">January</option>
	                    <option value="02">February</option>
	                    <option value="03">March</option>
	                    <option value="04">April</option>
	                    <option value="05">May</option>
	                    <option value="06">June</option>
	                    <option value="07">July</option>
	                    <option value="08">August</option>
	                    <option value="09">September</option>
	                    <option value="10">October</option>
	                    <option value="11">November</option>
	                    <option value="12">December</option>
                    </select>
                    <span id="dob_mErr" class="error">Please select Month</span>
                  </div>
                 </div>
                 <div class="col-sm-4 form_box1">
                   <div class="select-block1">
                    <select name="dob_y" id="dob_y">
	                    <option value="">Year</option>
	                    <?php for($y=(date('Y')-18);$y>=1970;$y--) {?><option value="<?=$y?>"><?=$y?></option><? } ?>
                    </select>
                    <span id="dob_yErr" class="error">Please select Year</span>
                   </div>
                  </div>
                  <div class="clearfix"> </div>
                 </div>
              </div>
              <div class="form-group form-group1">
                <label class="col-sm-3 control-lable" for="sex">Sex : </label>
                <div class="col-sm-7">
                    <div class="radios">
				        <label for="radio-01" class="label_radio">
				            <input type="radio" checked="" name="gender" value="Male"> Male
				        </label>
				        <label for="radio-02" class="label_radio">
				            <input type="radio" name="gender" value="Female"> Female
				        </label>
	                </div>
                </div>
                <div class="clearfix"> </div>
             </div>
			  <div class="form-group">
			     <label for="mstatus">Marital Status <span class="form-required" title="This field is required.">*</span></label>
				 <select class="form-control" name="mstatus" id="mstatus">
					<option value="" selected="selected">Select Marital Status</option>
					<option value="Unmarried">Unmarried</option><option value="Widow / Widower">Widow / Widower</option><option value="Divorced">Divorced</option><option value="Separated">Separated</option></select>
                    <span id="mstatusErr" class="error">Please select Marital Status</span>
			  </div>
              <div class="form-group">
			     <label for="subcaste">Subcaste <span class="form-required" title="This field is required.">*</span></label>
				 <select class="form-control" name="subcaste" id="subcaste">
					<option value="" selected="selected">Select Subcaste</option>
                    <?php $subcaste = getSubCaste(); 
					foreach($subcaste as $caste){ ?><option value="<?=$caste['id']?>"><?=$caste['subcast']?></option><? } ?>
                    </select>
                    <span id="subcasteErr" class="error">Please select Subcaste</span>
			  </div>
              <div class="form-group">
			     <label for="mtongue">Mother Tongue <span class="form-required" title="This field is required.">*</span></label>
				 <select class="form-control" name="mtongue" id="mtongue"><option value="" selected="selected">Select Mother Tongue</option>
					<?php $mtongue = getMotheToungue(); 
					foreach($mtongue as $mt){ ?><option value="<?=$mt['id']?>"><?=$mt['mother_tongue']?></option><? } ?></select>
                    <span id="mtongueErr" class="error">Please select Mother Tongue</span>
			  </div>
              <div class="form-group">
			     <label for="country">Country <span class="form-required" title="This field is required.">*</span></label>
				 <select class="form-control" name="country" id="country">
					<option value="" selected="selected">Select Country</option>
                    <?php $allCountry = getCountry(); 
					foreach($allCountry as $country){ ?><option value="<?=$country['country_id']?>"><?=$country['name']?></option><? } ?></select>
                    </select>
                    <span id="countryErr" class="error">Please select Country</span>
			  </div>
              <div class="form-group">
			     <label for="mobile">Mobile <span class="form-required" title="This field is required.">*</span></label>
					<input type="text" id="mobile" name="mobile" size="60" maxlength="10" class="form-text required mobile" placeholder="9812345678">
                    <span id="mobileErr" class="error">Please enter Mobile number</span>
			  </div>
              <div class="form-group">
			     <label for="password">Password <span class="form-required" title="This field is required.">*</span></label>
					<input type="password" id="password" name="password" size="60" maxlength="30" class="form-text required">
                    <span id="passwordErr" class="error"></span>
			  </div>
              <div class="form-group">
			     <label for="cpassword">Confirm Password <span class="form-required" title="This field is required.">*</span></label>
					<input type="password" id="cpassword" name="cpassword" size="60" maxlength="30" class="form-text required">
                    <span id="cpasswordErr" class="error">Please enter Confirm Password</span>
			  </div>
			  <div class="form-actions">
              <? $formKey = md5(uniqid(rand(), true)); 
			  $_SESSION['formKey'] = $formKey;
			  ?>
              <input type="hidden" name="formkey" value="<?=$formKey?>" />
			    <input type="submit" name="register" id="register" value="Submit" class="btn_1 submit">
			  </div>
		 </form>
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
<script type="text/javascript" src="assets/js/mini-register.js"></script>
<?php require 'inc/footer.php'; ?>