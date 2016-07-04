var imgs_url;

function passwordInput2(){

document.getElementById('passwordClear2').style.display = 'none';
document.getElementById('password2').style.display = 'block';
document.frmLogin.password.focus();
}
function changeInput2(){
var Login = this.document.frmLogin;
var Passwrd = document.frmLogin.password;
if(Passwrd.value==''){
document.getElementById('passwordClear2').style.display = 'block';
document.getElementById('password2').style.display = 'none';
}

$(document).on('click','.display_checkbox',function(){
	clearerrors(formId);
});
$(document).on('click','.gender_valid',function(){
	clearerrors(formId);
});
}

$(document).on('keyup','#mobileNo',function(){
	$('#mobileNo').keyup(function() {
		if (this.value.match(/[^0-9]/g)) {
				this.value = this.value.replace(/[^0-9]/g, '');
			}
		});
});

$(document).on('click','#termsAndConditions',function(){
	$('#termsErr').html('');
});


function popblur(breakval,formId){


var CommunityId=$('#'+formId+' #communityId').val();

var domainValue= $('#'+formId+' #domainName').val();  
	
		if(parseInt(domainValue)==0)
		{
			clearerrors(formId);
			$('#'+formId+' #domainErr').html('Please select the community site');
			//$('#'+formId+' #domainName').focus();
			return false;
		}else{
			$('#'+formId+' #domainErr').html('');
		}
	if(breakval == 'domain'){ 
		return;
	}

	var profileValue= $('#'+formId+' #profile').val();	
	
		if(parseInt(profileValue)<=0)
		{
			clearerrors(formId);
			$('#'+formId+' #profileErr').html('Please select the profile created by');
			return;
		}else{
			$('#'+formId+' #profileErr').html('');
		}
	if(breakval == 'profile'){
		
		return;
	}
	var pName = $.trim($('#'+formId+' #name').val());

		if(pName == '' || pName=='Name'){

			clearerrors(formId);
			$('#'+formId+' #nameErr').html('Please enter the name');
			return;
		}else if(!namealphabets(pName)){
			clearerrors(formId);
			$('#'+formId+' #nameErr').html('Name must be in alphabets, numeric value is not allowed');
			return;
		}else{
			$('#'+formId+' #nameErr').html('');
		}
	if(breakval == 'name'){
		return;
	}
	if(typeof($('#'+formId).find('input[name="gender"]:checked').val()) == 'undefined'){
		clearerrors(formId);
			$('#'+formId+' #genderErr').html('Please choose the gender');
	    return;
	} else{

		$('#'+formId+' #genderErr').html('');
	}
	if(breakval == 'profile'){
		return;
	}
	var dobDayValue= $('#'+formId+' #dobDay').val();
	var dobMonthValue= $('#'+formId+' #dobMonth').val();
	var dobYearValue= $('#'+formId+' #dobYear').val();	
		if(parseInt(dobDayValue)<=0)
		{
			clearerrors(formId);
			$('#'+formId+' #dobErr').html('Please select the date');
			$('#'+formId+' #dobDay').focus();
			return;
		}
		if(breakval == 'day'){
			return;
		}

		else if(parseInt(dobMonthValue)<=0)
		{
			clearerrors(formId);
			$('#'+formId+' #dobErr').html('Please select the month');
			$('#'+formId+' #dobMonth').focus();
			return;
		}
		if(breakval == 'month'){
			return;
		}
	
		else if(parseInt(dobYearValue)<=0)
		{
			clearerrors(formId);
			$('#'+formId+' #dobErr').html('Please select the year');
			$('#'+formId+' #dobYear').focus();
			return;
		}else if(!ageCheck(formId))
		{
			return;
		}else{
			$('#'+formId+' #dobErr').html('');
		}
		if(breakval == 'year'){
			return;
		}
	var maritalValue= $('#'+formId+' #maritalStatus').val();

		if(parseInt(maritalValue)<=0)
		{
			clearerrors(formId);
			$('#'+formId+' #maritalErr').html('Please select the marital status');
			return;
		}else{
			$('#'+formId+' #maritalErr').html('');
		}
	if(breakval == 'marital'){
		return;
	}

	var religionValue= $('#'+formId+' #religion').val();	
		if(parseInt(religionValue)<=0)
		{
			clearerrors(formId);
			$('#'+formId+' #religionErr').html('Please select the religion');
			return;
		}else{
			$('#'+formId+' #religionErr').html('');
		}
	
	if(breakval == 'religion'){
		return;
	}
	var denominationValue= $('#'+formId+' #denomination').val();
	var denominationLabel = $('#'+formId+' #denominationlabel').val();

		if(parseInt(denominationValue)<=0)
		{
			clearerrors(formId);
			$('#'+formId+' #denominationErr').html('Please select the '+denominationLabel);
			return;
		}else{
			clearerrors(formId);
			denomcheck(denominationValue,formId);
			$('#'+formId+' #denominationErr').html('');
		}

	if(denominationValue==9997){	
		$('#'+formId+' #denomination').css('width','75px');
		if(formId=='seoRegisterPopup' || formId=='popRegister'){
		$('#'+formId+' #denomination').css('width','110px');	
		}
		if(formId=='frmRegister'){
			$('#'+formId+' #denominationText').css('width','183px');
		}else if(formId=='seoRegisterPopup' || formId=='popRegister'){
		$('#'+formId+' #denominationText').css('width','143px !important');	
	}
		var denominationtxtValue= $('#'+formId+' #denominationText').val();	
		if(denominationtxtValue == '')
		{
			clearerrors(formId);
			$('#'+formId+' #denominationErr').html('Please enter the '+denominationLabel);
			return;
		}else if(!alphahumeric(denominationtxtValue))
		{
			clearerrors(formId);
			$('#'+formId+' #denominationErr').html(denominationLabel+' should be alpha numeric only');
			return;
		}else{
			$('#'+formId+' #denominationErr').html('');
			
		}
		
	}else{
		
		//$('#'+formId+' #denomination').css('width','235px;');
		//--------------------------------------------------------------
		if(formId=='frmRegister' || formId=='seoRegisterPopup' || formId=='popRegister')
		{ $('#'+formId+' #denomination').css('width','270px'); 	}
		else  
		{	$('#'+formId+' #denomination').css('width','235px'); }
		//--------------------------------------------------------------
		$('#'+formId+' #denominationText').val('');
	}

	if(breakval == 'denomination'){
		return;
	}
	var casteValue= $('#'+formId+' #caste').val();	
	var castelabel=$('#'+formId+' #castelabel').val()
	var castemanditary=$('#'+formId+' #castemandatory').val()
	
	if(parseInt(casteValue) <= 0 && castemanditary == 1)
		{
		clearerrors(formId);
			$('#'+formId+' #castespan').html('Please select the '+ castelabel);
			return;
		}else{
			castecheck(casteValue,formId);
			$('#'+formId+' #castespan').html('');
		}
	if(casteValue==9997){
	$('#'+formId+' #caste').css('width','75px');
	if(formId=='seoRegisterPopup' || formId=='popRegister'){$('#'+formId+' #caste').css('width','110px');}
	$('#'+formId+' #casteDivText').show();
	var casteDivtxtValue= $('#'+formId+' #casteOthers').val();	
		if(formId=='frmRegister')
		{	
			$('#'+formId+' #casteOthers').css('width','183px');	
			$('#'+formId+' #subCasteOthers').css('width','183px');
		}else if(formId=='seoRegisterPopup' || formId=='popRegister'){$('#'+formId+' #casteOthers').css('width','143px !important');}
		/*if(formId=='frmRegister')
		{	$('#'+formId+' #subCasteOthers').css('width','183px');	}*/
	 	if(casteDivtxtValue == '')
		{
			clearerrors(formId);
			$('#'+formId+' #castespan').html('Please enter the '+castelabel);
			return;
		}else if(!alphahumeric(casteDivtxtValue))
		{
			clearerrors(formId);
			$('#'+formId+' #castespan').html(castelabel+' should be alpha numeric only');
			return;
		}else{
			$('#'+formId+' #castespan').html('');
		}
	}else{
		
		//$('#'+formId+' #caste').css('width','235px');
		//--------------------------------------------------------------
		 if( formId=='frmRegister' || formId=='seoRegisterPopup' || formId=='popRegister') 
		{	
			//$('#'+formId+' #subCaste').css('width','270px');
			$('#'+formId+' #caste').css('width','270px');	
		}
		else  
		{
				//$('#'+formId+' #subCaste').css('width','235px'); 
				$('#'+formId+' #caste').css('width','235px');
		}
		//--------------------------------------------------------------
		
		$('#'+formId+' #casteDivText').hide();
		$('#'+formId+' #casteOthers').val('');
		
	}
	
	var casteTextValue= $('#'+formId+' #casteText').val();	
		if(casteTextValue == '' && castemanditary == 1)
		{
			clearerrors(formId);
			$('#'+formId+' #castespan').html('Please enter the '+castelabel);
			return;
		}else if(casteTextValue != '' && (!alphahumeric(casteTextValue)))
		{
			clearerrors(formId);
			$('#'+formId+' #castespan').html(castelabel+' should be alpha numeric only');
			return;
		}else{
			$('#'+formId+' #castespan').html('');
		}	
	if(breakval == 'caste'){
		return;
	}

	var subcasteValue= $('#'+formId+' #subCaste').val();
	
	var subcastelabel=$('#'+formId+' #subcastelabel').val();
	var subcastemandatory=$('#'+formId+' #subcastemandatory').val();
	
		if(parseInt(subcasteValue) <= 0 && subcastemandatory == 1)
		{
			
		clearerrors(formId);
			$('#'+formId+' #subcastespan').html('Please select the '+ subcastelabel);
			return;
		}else{
		
			subcasteckeck(subcasteValue,formId);
			$('#'+formId+' #subcastespan').html('');
		}

	if(subcasteValue==9997){
		
	$('#'+formId+' #subCaste').css('width','75px');
	if( formId=='seoRegisterPopup' || formId=='popRegister'  ){
		$('#'+formId+' #subCasteOthers').css('width','143px !important');
		$('#'+formId+' #subCaste').css('width','110px');
	}
	var subcasteDivtxtValue= $('#'+formId+' #subCasteOthers').val();	

		if((subcasteDivtxtValue == '') || (subcasteDivtxtValue == 'Subcaste'))
		{
			clearerrors(formId);
			$('#'+formId+' #subcastespan').html('Please enter the '+ subcastelabel +' others');
			return;
		}else if(!alphahumeric(subcasteDivtxtValue))
		{
			clearerrors(formId);
			$('#'+formId+' #subcastespan').html(subcastelabel+' should be alpha numeric only');
			return;
		}else{
			$('#'+formId+' #subcastespan').html('');
		}
	}else{
		$('#'+formId+' #subCasteOthers').val('');
		//$('#'+formId+' #subCaste').css('width','235px'); 	
		//--------------------------------------------------------------		
		if( formId=='frmRegister' || formId=='seoRegisterPopup' || formId=='popRegister' ) 
		{	 $('#'+formId+' #subCaste').css('width','270px'); }
		else  
		{	$('#'+formId+' #subCaste').css('width','235px'); }
		//--------------------------------------------------------------
	}
	var subcasteTextValue= $('#'+formId+' #subCasteText').val();	
		if(subcasteTextValue == '' && subcastemandatory == 1)
		{
			clearerrors(formId);
			$('#'+formId+' #subcastespan').html('Please enter the '+subcastelabel);
			return;
		}else if(subcasteTextValue != '' && (!alphahumeric(subcasteTextValue)))
		{
			clearerrors(formId);
			$('#'+formId+' #subcastespan').html(subcastelabel+' should be alpha numeric only');
			return;
		}else{
			$('#'+formId+' #subcastespan').html('');
		}	

	
	if(breakval == 'subcaste'){
			return;
		}



	if(CommunityId!=3000){
		var motherToungeValue= $('#'+formId+' #motherTongue').val();	
			if(parseInt(motherToungeValue)<=0)
			{
				clearerrors(formId);
				$('#'+formId+' #motherTongueErr').html('Please select the mother tongue');
				return;
			}else{
				$('#'+formId+' #motherTongueErr').html('');
			}
	}
	if(breakval == 'mothertounge'){
			return;
		}

	var countryValue= $('#'+formId+' #country').val();	
		if(parseInt(countryValue)<=0 || countryValue=='')
		{
			clearerrors(formId);
		$('#'+formId+' #countryErr').html('Please select the country');
		return;
		}else{
			$('#'+formId+' #countryErr').html('');
	}
	if(breakval == 'country'){
			return;
		}
	var countryCodeValue= $('#'+formId+' #countryCode').val();	
		if(parseInt(countryCodeValue)<=0 || countryCodeValue=='')
		{
			clearerrors(formId);
		$('#'+formId+' #mobileErr').html('Please select the country code');
		return;
		}else{
		$('#'+formId+' #mobileErr').html('');
	}
	if(breakval == 'countrycode'){
		return;
	}

	var mobileNoValue= $('#'+formId+' mobileNo').val();	
		if(mobileNoValue == '')
		{
			clearerrors(formId);
		$('#'+formId+' #mobileErr').html('Please enter the mobile number');
		return;
		}else if(!mobileval(formId)){
			clearerrors(formId);
			$('#'+formId+' #mobileErr').html('Please enter a valid mobile number');
			return;
		}else{
			
			$('#'+formId+' #mobileErr').html('');
			if(breakval == 'mobile'){
				mobilepartly('mobileNo',formId);
			}
	
		}
	if(breakval == 'mobile'){
		return;
	}

	var emailValue= $('#'+formId+' #email').val();	

		if(emailValue == '')
		{
			clearerrors(formId);
		$('#'+formId+' #emailErr').html('Please enter the email');
		return;
		}else if(!validemail(formId)){
			clearerrors(formId);
			$('#'+formId+' #emailErr').html('Please enter a valid email id');
			return;
		}else if(!emailremote(formId)){
			clearerrors(formId);
			$('#'+formId+' #emailErr').html('You have already registered with this email Id');
		}else{
			$('#'+formId+' #emailErr').html('');
			
			if(breakval == 'email'){
				mobilepartly('email',formId);
			}
		}
	if(breakval == 'email'){
		return;
	}

	var passwordValue= $('#'+formId+' #password').val();	
		if(passwordValue == '')
		{
			clearerrors(formId);
		$('#'+formId+' #passwordErr').html('Please enter the password');
		return;
		}else if(passwordValue.length < 6){
			clearerrors(formId);
			$('#'+formId+' #passwordErr').html('Password must be a minimum of 6 characters');
			return;
		}else if(passwordValue.length > 20){
			clearerrors(formId);
			$('#'+formId+' #passwordErr').html('Password must be a minimum of 20 characters');
			return;
		}else if(!alphanumericonly(passwordValue)){
			clearerrors(formId);
			$('#'+formId+' #passwordErr').html('Spaces or special characters are not allowed in password');
			return;
		}else if(!notequaltoname(formId)){
			clearerrors(formId);
			$('#'+formId+' #passwordErr').html('Name and password cannot be the same');
			return;
		}else{
			clearerrors(formId);
			$('#'+formId+' #passwordErr').html('');
		}	
		
	if(breakval == 'password'){
		return;
	}
		
}

function submitPopup(formId){   

var CommunityId=$('#'+formId+' #communityId').val();
var domainValue= $('#'+formId+' #domainName').val(); 
var Str_domain ='';
	if ($('#domain_title').length){Str_domain = $('#domain_title').attr('title').split(" ");}
		if(parseInt(domainValue)==0)
		{
			clearerrors(formId);
			$('#'+formId+' #domainErr').html('Please select the community site');
			$('#'+formId+' #domainName').focus();
			return false;
		}else{
			$('#'+formId+' #domainErr').html('');
		}

	var profileValue= $('#'+formId+' #profile').val();	

		if(parseInt(profileValue)<=0)
		{
			clearerrors(formId);
			$('#'+formId+' #profileErr').html('Please select the profile created by');
			$('#'+formId+' #profile').focus();
			return false;
		}else{
			$('#'+formId+' #profileErr').html('');
		}


	var pName = $.trim($('#'+formId+' #name').val());//$('#name').val();

		if(pName == '' || pName=='Name'){

			clearerrors(formId);
			$('#'+formId+' #nameErr').html('Please enter the name');
			$('#'+formId+' #name').focus();
			return false;
		}else if(!namealphabets(pName)){
			clearerrors(formId);
			$('#'+formId+' #nameErr').html('Name must be in alphabets, numeric value is not allowed');
			$('#'+formId+' #name').focus();
			return false;
		}else{
			$('#'+formId+' #nameErr').html('');
		}
	  if(typeof($('#'+formId).find('input[name="gender"]:checked').val()) == 'undefined'){
			clearerrors(formId);
			$('#'+formId+' #genderErr').html('Please choose the gender');
	    return false;
	} else{

		$('#'+formId+' #genderErr').hide();
	}
	
	var dobDayValue= $('#'+formId+' #dobDay').val();
	var dobMonthValue= $('#'+formId+' #dobMonth').val();
	var dobYearValue= $('#'+formId+' #dobYear').val();	
		if(parseInt(dobDayValue)<=0)
		{
			clearerrors(formId);
			$('#'+formId+' #dobErr').html('Please select the date');
			$('#'+formId+' #dobDay').focus();
			return false;
		}


		else if(parseInt(dobMonthValue)<=0)
		{
			clearerrors(formId);
			$('#'+formId+' #dobErr').html('Please select the month');
			$('#'+formId+' #dobMonth').focus();
			return false;
		}

	
		else if(parseInt(dobYearValue)<=0)
		{
			clearerrors(formId);
			$('#'+formId+' #dobErr').html('Please select the year');
			$('#'+formId+' #dobYear').focus();
			return false;
		}else if(!ageCheck(formId))
		{
			return false;
		}else{
			$('#'+formId+' #dobErr').html('');
		}

	var maritalValue= $('#'+formId+' #maritalStatus').val();

		if(parseInt(maritalValue)<=0)
		{
			clearerrors(formId);
			$('#'+formId+' #maritalErr').html('Please select the marital status');
			return false;
		}else{
			$('#'+formId+' #maritalErr').html('');
		}
		
	/*Appearance*/
	if(CommunityId==2502)
	{	
	  if(!( $("input[name='appearance']:checked").val())) {
		  clearerrors(formId);
			  $('#'+formId+' #appearanceErr').html('Please select the appearance');
		  return false;
	  } else{
		  $('#'+formId+' #appearanceErr').hide();
	  }
	}
	/*Appearance End*/

	var religionValue= $('#'+formId+' #religion').val();	
		if(parseInt(religionValue)<=0)
		{
			clearerrors(formId);
			$('#'+formId+' #religionErr').html('Please select the religion');
			return false;
		}else{
			$('#'+formId+' #religionErr').html('');
		}
	

	var denominationValue= $('#'+formId+' #denomination').val();	
	var denominationLabel = $('#'+formId+' #denominationlabel').val();
		if(parseInt(denominationValue)<=0)
		{
			clearerrors(formId);
			$('#'+formId+' #denominationErr').html('Please select the '+denominationLabel);
			return false;
		}else{
			clearerrors(formId);
			denomcheck(denominationValue,formId);
			$('#'+formId+' #denominationErr').html('');
		}
	
	if(denominationValue==9997){	
	
	$('#'+formId+' #denomination').css('width','75px');
	if(formId=='seoRegisterPopup' || formId=='popRegister'){
		$('#'+formId+' #denomination').css('width','110px');	
	}
	var denominationtxtValue= $('#'+formId+' #denominationText').val();	
		if(denominationtxtValue == '')
		{
			clearerrors(formId);
			$('#'+formId+' #denominationErr').html('Please enter the '+denominationLabel);
			return false;
		}else if(!alphahumeric(denominationtxtValue))
		{
			clearerrors(formId);
			$('#'+formId+' #denominationErr').html(denominationLabel+' should be alpha numeric only');
			return false;
		}else{
			$('#'+formId+' #denominationErr').html('');
		}
		
	}else{
		
		//$('#'+formId+' #denomination').css('width','235px');
		//--------------------------------------------------------------
	    if(formId=='frmRegister' || formId=='seoRegisterPopup' || formId=='popRegister') 
		{	$('#'+formId+' #denomination').css('width','270px'); }
		else  
		{	$('#'+formId+' #denomination').css('width','235px'); }
		//--------------------------------------------------------------
		$('#'+formId+' #denominationText').val('');
	}


	var casteValue= $('#'+formId+' #caste').val();	
	var castelabel=$('#'+formId+' #castelabel').val()
	var castemanditary=$('#'+formId+' #castemandatory').val()
		if(parseInt(casteValue) <= 0 && castemanditary == 1)
		{
		clearerrors(formId);
			$('#'+formId+' #castespan').html('Please select the '+ castelabel);
			return false;
		}else{
			castecheck(casteValue,formId);
			$('#'+formId+' #castespan').html('');
		}
	if(casteValue==9997){
	$('#'+formId+' #caste').css('width','75px');
	if(formId=='seoRegisterPopup' || formId=='popRegister'){$('#'+formId+' #caste').css('width','110px');}
	var casteDivtxtValue= $('#'+formId+' #casteOthers').val();	
	if(formId=='frmRegister')
		{	
			$('#'+formId+' #casteOthers').css('width','183px');	
			$('#'+formId+' #subCasteOthers').css('width','183px');
		}else if(formId=='seoRegisterPopup' || formId=='popRegister'){$('#'+formId+' #casteOthers').css('width','143px !important');}
		if(casteDivtxtValue == '')
		{
			clearerrors(formId);
			$('#'+formId+' #castespan').html('Please enter the '+castelabel);
			return false;
		}else if(!alphahumeric(casteDivtxtValue))
		{
			clearerrors(formId);
			$('#'+formId+' #castespan').html(castelabel+' should be alpha numeric only');
			return false;
		}else{
			$('#'+formId+' #castespan').html('');
		}
	}
	
	var casteTextValue= $('#'+formId+' #casteText').val();	
		if(casteTextValue == '' && castemanditary == 1)
		{
			clearerrors(formId);
			$('#'+formId+' #castespan').html('Please enter the '+castelabel);
			return false;
		}else if(casteTextValue != '' && !alphahumeric(casteTextValue))
		{
			clearerrors(formId);
			$('#'+formId+' #castespan').html(castelabel+' should be alpha numeric only');
			return false;
		}else{
			$('#'+formId+' #castespan').html('');
		}	


	var subcasteValue= $('#'+formId+' #subCaste').val();	
	var subcastelabel=$('#'+formId+' #subcastelabel').val()
		var subcastemandatory=$('#'+formId+' #subcastemandatory').val();
		if(parseInt(subcasteValue) <= 0 && subcastemandatory == 1)
		{
		clearerrors(formId);
			$('#'+formId+' #subcastespan').html('Please select the '+ subcastelabel);
			return false;
		}else{
		
			subcasteckeck(subcasteValue,formId);
			$('#'+formId+' #subcastespan').html('');
		}

	if(subcasteValue==9997){
	$('#'+formId+' #subCaste').css('width','75px');
	if( formId=='seoRegisterPopup' || formId=='popRegister'  ){
		$('#'+formId+' #subCasteOthers').css('width','143px !important');
		$('#'+formId+' #subCaste').css('width','110px');
	}
	var subcasteDivtxtValue= $('#'+formId+' #subCasteOthers').val();	

	if((subcasteDivtxtValue == '') || (subcasteDivtxtValue == 'Subcaste'))
		{
			clearerrors(formId);
			$('#'+formId+' #subcastespan').html('Please enter the '+ subcastelabel + ' others');
			return false;
		}else if(!alphahumeric(subcasteDivtxtValue))
		{
			clearerrors(formId);
			$('#'+formId+' #subcastespan').html(subcastelabel+' should be alpha numeric only');
			return false;
		}else{
			$('#'+formId+' #subcastespan').html('');
		}
	}
	var subcasteTextValue= $('#'+formId+' #subCasteText').val();
	if((subcasteTextValue == '' || subcasteTextValue=='Subcaste' ) && subcastemandatory == 1)
		{
			
			clearerrors(formId);
			$('#'+formId+' #subcastespan').html('Please enter the '+subcastelabel+' others');
			return false;
		}else if(subcasteTextValue != '' && (!alphahumeric(subcasteTextValue)))
		{
			clearerrors(formId);
			$('#'+formId+' #subcastespan').html(subcastelabel+' should be alpha numeric only');
			return false;
		}else{
			if(subcasteTextValue  == 'Subcaste'){
				  $('#'+formId+' #subCasteText').val('');
			 }
			$('#'+formId+' #subcastespan').html('');
		}	



	if(CommunityId!=3000){
		var motherToungeValue= $('#'+formId+' #motherTongue').val();	
			if(parseInt(motherToungeValue)<=0)
			{
				clearerrors(formId);
				$('#'+formId+' #motherTongueErr').html('Please select the mother tongue');
				return false;
			}else{
				$('#'+formId+' #motherTongueErr').html('');
			}
	}

	var countryValue= $('#'+formId+' #country').val();	
		if(parseInt(countryValue)<=0 || countryValue=='')
		{
			clearerrors(formId);
		$('#'+formId+' #countryErr').html('Please select the country');
		return false;
		}else{
		$('#'+formId+' #countryErr').html('');
	}

	var countryCodeValue= $('#'+formId+' #countryCode').val();	
		if(parseInt(countryCodeValue)<=0  || countryCodeValue=='')
		{
			clearerrors(formId);
		$('#'+formId+' #mobileErr').html('Please select the country code');
		return false;
		}else{
		$('#'+formId+' #mobileErr').html('');
	}


	var mobileNoValue= $('#'+formId+' #mobileNo').val();	
		if(mobileNoValue == '')
		{
			clearerrors(formId);
		$('#'+formId+' #mobileErr').html('Please enter the mobile number');
		$('#'+formId+' #mobileNo').focus();
		return false;
		}else if(!mobileval(formId)){
			clearerrors(formId);
			$('#'+formId+' #mobileErr').html('Please enter a valid mobile number');
			$('#'+formId+' #mobileNo').focus();
			return false;
		}else{
			$('#'+formId+' #mobileErr').html('');
		}


	var emailValue= $('#'+formId+' #email').val();	
		if(emailValue == '')
		{
			clearerrors(formId);
		$('#'+formId+' #emailErr').html('Please enter the email');
		$('#'+formId+' #email').focus();
		return false;
		}else if(!validemail(formId)){
			clearerrors(formId);
			$('#'+formId+' #emailErr').html('Please enter a valid email id');
			$('#'+formId+' #email').focus();
			return false;
		}else if(!emailremote(formId)){
			clearerrors(formId);
			$('#'+formId+' #emailErr').html('You have already registered with this email Id');
			$('#'+formId+' #email').focus();
			return false;
		}else{
			$('#'+formId+' #emailErr').html('');
		}

	var passwordValue= $('#'+formId+' #password').val();	
		if(passwordValue == '' || passwordValue=='Login Password')
		{
			clearerrors(formId);
		$('#'+formId+' #passwordErr').html('Please enter the password');
		$('#'+formId+' #password').focus();
		return false;
		}else if(passwordValue.length < 6){
			clearerrors(formId);
			$('#'+formId+' #passwordErr').html('Password must be a minimum of 6 characters');
			$('#'+formId+' #password').focus();
			return false;
		}else if(passwordValue.length > 20){
			clearerrors(formId);
			$('#'+formId+' #passwordErr').html('Password must be a minimum of 20 characters');
			$('#'+formId+' #password').focus();
			return false;
		}else if(!alphanumericonly(passwordValue)){
			clearerrors(formId);
			$('#'+formId+' #passwordErr').html('Spaces or special characters are not allowed in password');
			$('#'+formId+' #password').focus();
			return false;
		}else if(!notequaltoname(formId)){
			clearerrors(formId);
			$('#'+formId+' #passwordErr').html('Name and password cannot be the same');
			$('#'+formId+' #password').focus();
			return false;
		}else{
			clearerrors(formId);
			$('#'+formId+' #passwordErr').html('');
		}	

		var terms = $('#'+formId+' #termsAndConditions').is(':checked');
		
		if(!terms){
			clearerrors(formId);
			if(formId=='frmRegister')
				$('#'+formId+' #termsErr').html('Please read and confirm acceptance of our Terms and Conditions, Privacy Policy, and to receive emails and telephonic communications from us.');
			else
				$('#'+formId+' #termsErr').html('Please check the terms and conditions');
			return false;
		}
		if ($('#domain_title').length){GA_Event_Track('Registration',Str_domain[0]+'_homeRegister');}
	}


function DaysInMonth(Year,Month)
{
	return 32 - new Date(Year, Month, 32).getDate();
}

function selectCountryCode(formId)
{
	var countryValue= $('#'+formId+' #country').val();					
	if(parseInt(countryValue)!=0)
	{
	$('#'+formId+' #countryCode').removeClass('error');
	$('#'+formId+' #countryCode').val(countryValue);
	return true;
	}
}

function toolTipBlur()							// remove tooltip on blur event
{

		$('#tip_name').removeClass("showspan");										
		$('#tip_name').addClass("hidespan");
}

function updateDays(Change,formName,YearName,MonthName,DayName){
	frmName = document.forms[formName];
	SelectedYear = frmName[YearName].value;
	SelectedMonth= frmName[MonthName].value;
	DaySelect = frmName[DayName];
	SelectedDays = frmName[DayName].value;
	if(SelectedYear==0) { SelectedYear = new Date().getFullYear()-18;}
		if(SelectedMonth>0) {
			if((Change=='year' &&  SelectedMonth==2) || Change=='month') {
			var Days = DaysInMonth(SelectedYear,SelectedMonth-1);
			DaySelect.length = 0;
			DaySelect.length = Days;
			var key= 0;
			while(key <= Days)
			{
			if(key==0)
			{ 
				if(formName=='popRegister') { DaySelect[key] = new Option("-Date-",key); }
				else { DaySelect[key] = new Option("DD",key); }
				key++; 
			}
			else
			{
			DaySelect[key] = new Option(key,key);
			key++;
			}
			}
			if(SelectedDays>Days) {
			DaySelect.selectedIndex = Days;
			}
			else{
			DaySelect.selectedIndex = SelectedDays;
			}										
		}
	}
}
/* Add Basic Cultural background functions start */

function funGetReligion(formId) { 
	var casteFeature = $('#'+formId+' #castefeature').val();
	var casteOption  = $('#'+formId+' #casteOption').val();
	var religionId	 =$('#'+formId+' #religion').val();
	var relOpt		 = $('#'+formId+' #religionOption').val();
	var casteId		 = 0;

	var domainName=$('#'+formId+' #domainName').val();
	
	$('#'+formId+' #subCasteDivId').show();
	if(casteOption==1) 
	{ 
		casteId = $('#'+formId+' #caste').val();
	}
	if (casteFeature==1 && casteOption==1) { 
	
		if(domainName!="")
		{
			varParams = '&religionId='+religionId+'&casteId='+casteId+'&DomainName='+domainName;	
		}
		else
		{
			varParams = '&religionId='+religionId+'&casteId='+casteId; 
		}
		changeCult('subcaste',varParams,'subCasteDivId',formId);
		} 
		else {
		 
		if (religionId > 0) { 
			if(domainName!="")
			{
				
			varParams = '&religionId='+religionId+'&DomainName='+domainName;
			}
			else
			{
			
			varParams = '&religionId='+religionId;	
			}

			changeCult('caste',varParams,'casteDivId',formId);
			if((religionId=='8') || (religionId=='9')) { 
				varParams = '&religionId='+religionId; 
				changeCult('subcaste',varParams,'subCasteDivId',formId);
			}else
			{
				$('#'+formId+' #subCasteDivId').hide();
			}
		}
	}
}

function changeCult(varChange,varParams,varAppliedId,formId)
{

		//preLoadImg(varAppliedId);
		var communityId=$('#'+formId+' #communityId').val();

		if($('#'+formId+' #domainName').length!=0) 
		{
			var DomainName = $('#'+formId+' #domainName').val();
			var varFields = 'field='+varChange+varParams+'&communityId='+communityId+'&DomainName='+DomainName+'&formId='+formId+'&home_reg=yes';
			
		}
		else 
		{
			var varFields = 'field='+varChange+varParams+'&communityId='+communityId+'&popreg=yes'+'&formId='+formId;
		}

		var varRequestUrl	= '/register/populatecultural.php?'+varFields+'&rand='+Math.random();


		commonCulturalChange(varRequestUrl,varAppliedId,formId);
}

function commonCulturalChange(varRequestUrl,DivId,formId)
{
	//preLoadImg('#'+formId+' #'+DivId);
	$.ajax({
	url: varRequestUrl,
	type: 'POST',
	dataType: 'html',
	async: false,
	success: function(data) {
	$('#'+formId+' #'+DivId).html(data);

			} 
	 });
}
function showOther(formId)
{ 
	var subcasteval= $('#'+formId+' #subCaste').val();

	if(parseInt(subcasteval)!=0 && parseInt(subcasteval)==9997)
	{
		$('#'+formId+' #subCaste').css('width','75px');

			if( formId=='seoRegisterPopup' || formId=='popRegister'  ){
				 $('#'+formId+' #subCasteOthers').css('width','143px !important');
				 $('#'+formId+' #subCaste').css('width','110px');
			}
			else if(formId=='frmRegister')
			{	 $('#'+formId+' #subCasteOthers').css('width','183px');		}
			else {
				$('#'+formId+' #subCasteDivText').css('width','150px');
			}
		
		$('#'+formId+' #subCasteDivText').show();
	}
	else
	{
		//$('#'+formId+' #subCaste').css('width','235px');
		//--------------------------------------------------------------
		if(formId=='seoRegisterPopup' || formId=='popRegister'|| formId=='frmRegister')
		{	$('#'+formId+' #subCaste').css('width','270px'); }
		else  
		{   $('#'+formId+' #subCaste').css('width','235px'); }
		//--------------------------------------------------------------
		$('#'+formId+' #subCasteDivText').hide();
	}	
}

function mobileval(formId) {
	var countryCode=$('#'+formId+' #countryCode').val();
	var mobileNo=$('#'+formId+' #mobileNo').val();

	var samNum1 = mobileNo.substr(0,1);
	if(countryCode==98) {
		//if((mobileNo.charAt(0)==samNum1)&& (mobileNo.charAt(1)==samNum1) &&(mobileNo.charAt(2)==samNum1) && (mobileNo.charAt(3)==samNum1)) {
		 if(mobileNo.match("([0-9])\\1{9,}")){	
			 return false;
		 }
		} else {
			//if((mobileNo.charAt(0)==samNum1)&& (mobileNo.charAt(1)==samNum1) &&(mobileNo.charAt(2)==samNum1) && (mobileNo.charAt(3)==samNum1) && (mobileNo.charAt(4)==samNum1) ) {
			if(mobileNo.match("([0-9])\\1{9,}")){	
			 return false;
			}
		}

		if(countryCode==98) {
			mobileNo= mobileNo.replace(/\s+/g, ""); 
			result	= mobileNo.length == 10 &&
			mobileNo.match(/^((\+)?[1-9]{1,2})?([-\s\.])?((\(\d{1,4}\))|\d{1,4})(([-\s\.])?[0-9]{1,12}){1,2}$/);
			if(mobileNo.match(/^([0-9])\1*$/)!=null){

				return false;
			}
			else if(mobileNo.match(/^.*?([7-9]{1})([0-9]{9})$/)==null){
				return false;
				
			}
			
		}
		else if(countryCode==222 || countryCode==39 )
		{
			mobileNo= mobileNo.replace(/\s+/g, ""); 
			result	= mobileNo.length == 10 &&
			mobileNo.match(/^((\+)?[1-9]{1,2})?([-\s\.])?((\(\d{1,4}\))|\d{1,4})(([-\s\.])?[0-9]{1,12}){1,2}$/);
        }
	
		 else if(countryCode==220 || countryCode==129 || countryCode==13 )  {
			mobileNo= mobileNo.replace(/\s+/g, ""); 
			result	= mobileNo.length >= 9 &&
			mobileNo.match(/^((\+)?[1-9]{1,2})?([-\s\.])?((\(\d{1,4}\))|\d{1,4})(([-\s\.])?[0-9]{1,12}){1,2}$/);
		} else if(countryCode==221 || countryCode==189 || countryCode==114 || countryCode==185) {
			mobileNo= mobileNo.replace(/\s+/g, ""); 
			result	=  mobileNo.length >= 8 &&
			mobileNo.match(/^((\+)?[1-9]{1,2})?([-\s\.])?((\(\d{1,4}\))|\d{1,4})(([-\s\.])?[0-9]{1,12}){1,2}$/);
		} else {
			mobileNo= mobileNo.replace(/\s+/g, ""); 
			result	=  mobileNo.length >=8 &&
			mobileNo.match(/^((\+)?[1-9]{1,2})?([-\s\.])?((\(\d{1,4}\))|\d{1,4})(([-\s\.])?[0-9]{1,12}){1,2}$/);
		}

	return result;
}


function validemail(formId) {
	var email = $('#'+formId+' #email').val();
	var tempemail= email.split("@");
	tempemail1=(typeof tempemail[1] == 'undefined')?0:tempemail[1];
	if(tempemail1 != '0'){
		if((tempemail1.split(/\./g).length - 1)>=4){
			return false;
		}else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(email))) {
			return false;
		}
	}else{
		return false;
	}
	return true;
}


function emailremote(formId) {
	var Email           = $('#'+formId+' #email').val();
	var prvEmail        = $('#'+formId+' #prvEmail').val();
	var chkEmailReq;

	var prvEmailStatus       = $('#'+formId+' #prvEmailStatus').val();
	if($('#'+formId+' #email').val() !='') {
		if(prvEmail!=Email){
			chkEmailReq     = 1;
			prvEmailStatus       = 0;
		}
	}

	if(prvEmailStatus==1){
		return false;
	}
	
	if(chkEmailReq==1) {
		var CommunityId     = $('#'+formId+' #communityId').val();						
		var Domain          = "";									
		var genderRadio     = $('input:radio[name=gender]:checked').val();
		
		if($('#'+formId+' #domainName').val()){
			var DomainName  = $('#'+formId+' #domainName').val();
				Domain      = "&DomainName="+DomainName
		}

		//var Params = "Email="+Email+Domain+"&communityId="+CommunityId+"&gender="+genderRadio+'&rand='+Math.random();
		var Params  = "Email="+Email+"&DomainName="+Domain+"&communityId="+CommunityId+"&gender="+genderRadio+'&rand='+Math.random();
		var url     = "/register/checkemail.php?"+Params;									
		var get     = commonAjaxRequest('get','html',url,'');
		$('#'+formId+' #prvEmailStatus').val(get);
		if(get==0){
			
			return true;
		}
		return false;
		
	}else{
		return true;
	}
		
 }


function commonAjaxRequest(typeOpt,dataTypeOpt,varRequestUrl,preLoadId){		//common ajax request function						
	preLoadImg(preLoadId);
	return  response = $.ajax({
					url:varRequestUrl,
					type:typeOpt,
					dataType:dataTypeOpt,
					async: false,
					success: function(data) {
					} 
			}).responseText;
//return response;
}

function alphanumericonly(password) {
	if (!password.match(/[^a-zA-Z0-9]/g)) {
		return true;
	}else{
		return false; 
	}
}

function notequaltoname(formId) {
	var name = $('#'+formId+' #name').val().toUpperCase();
	var password = $('#'+formId+' #password').val().toUpperCase();
	if( name !=  password) {
			return true; 
	}else{
		return false; 
	}
}

function namealphabets(value) { 
	return /^[a-zA-Z\s]+(\.{0,1})([a-zA-Z\s]{0,10})+$/i.test(value); 
}

function ageCheck(formId) {

	var dobDay		= $('#'+formId+' #dobDay').val();
	var dobMonth	= parseInt($('#'+formId+' #dobMonth').val(),10);
	var dobYear		= $('#'+formId+' #dobYear').val();
	if(dobDay!=0 && dobMonth!=0 && dobYear!=0) {
		return  chkValidAge(formId);
	}
}

function chkValidAge(formId){ 

	var communityId		= $('#'+formId+' #communityId').val();
	var ageselected		= $('#'+formId+' #age').val();
	var agetoregister	= 18;
	var dobDay			= $('#'+formId+' #dobDay').val();
	var dobMonth		= parseInt($('#'+formId+' #dobMonth').val(),10);
	var dobYear			= $('#'+formId+' #dobYear').val();

		if(dobDay!=0 && dobMonth!=0 && dobYear!=0) {
		
		if(parseInt(communityId)==2000){
			if($('#'+formId+' #gendermale').is(':checked')) { var agetoregister = 40;} else { var agetoregister =35; }
		} else {
			if($('#'+formId+' #gendermale').is(':checked')) { var agetoregister = 21;} else { var agetoregister =18; }
		}

		if(agetoregister>ageselected) {
			clearerrors(formId);
			$('#'+formId+' #dobErr').html('Age must be greater than '+agetoregister+' years');
			return false;
		}else{
			
			$('#'+formId+' #dobErr').html('');
			return true;
		}
	}
}
function agevaluecheck(formId) {
		dobchange(formId);
		chkValidAge(formId);
}
function dobchange(formId) {

	var dobDay		= $('#'+formId+' #dobDay').val();
	var dobMonth	= parseInt($('#'+formId+' #dobMonth').val(),10);
	var dobYear		= $('#'+formId+' #dobYear').val();
	if(parseInt(dobDay)!=0 && parseInt(dobMonth)!=0 && parseInt(dobYear)!=0) {
		var future	= new Date(dobYear,dobMonth-1,dobDay);
		var now		= new Date();
		var oneyear = 31557600000;	 // 1000*60*60*24*365.25 Micro seconds for one year..
		var diff	= now-future;
		$("input[type=hidden][name=age]").val((Math.floor(diff/oneyear)));
	}
}
function updateYearGender(gender,formName,YearName){
	frmName = document.forms[formName];
	YearSelect = frmName[YearName];
	SelectedYear = frmName[YearName].value;
	var CommunityId 	= $('#'+formName+' #communityId').val();
	var varSYear =new Date().getFullYear()-70;
		if(gender==1){
			 
			 if(CommunityId==2503) {
			 	$("#maritalStatus option[value='5']").remove();
			 	$("#maritalStatus").append('<option value="5">Married</option>');
			 	
			 }
			 else if(CommunityId==2006) {
			 	$("#maritalStatus option[value='6']").remove();
			  	}
			if(CommunityId==2000)	
				var varYear = new Date().getFullYear()-40;	
			else
				var varYear = new Date().getFullYear()-21;	
		  }
		else{
			if(CommunityId==2503) {
			 	$("#maritalStatus option[value='5']").remove();
			 	
			 }
			 else if(CommunityId==2006) {
				$("#maritalStatus option[value='6']").remove();
			 	$("#maritalStatus").append('<option value="6">War widow</option>');
			 	}
			if(CommunityId==2000)
				var varYear = new Date().getFullYear()-35;	
			else
				var varYear = new Date().getFullYear()-18;	
		  }
	var key= 0;
	YearSelect.length = 0;
	var len =varYear-varSYear;
	YearSelect.length = len;
	
	while(key < len)
	{
		
		if(key==0){ 
			YearSelect[key] = new Option("YYYY",key); 
			key++;
		}
		else
		{
			YearSelect[key] = new Option(varYear-key+1,varYear-key+1);
			if(SelectedYear==varYear-key+1){
				YearSelect.selectedIndex = key;
			}
			key++;
		}
	}
	$('#dobYear').prop('selectedIndex', 0);	
}

function denomcheck(denominationval,formId) {
	var denominationlabel= $('#'+formId+' #denominationlabel').val();								
	var CommunityId=$('#'+formId+' #communityId').val();
	var denominationmandatory=$('#'+formId+' #denominationmandatory').val();
	var denominationfeature=$('#'+formId+' #denominationfeature').val();

	if(parseInt(denominationfeature)==0) {
		return;
	}

	if(parseInt(denominationval)!=0 && parseInt(denominationval)!=9997) {
		$('#'+formId+' #denominationDivText').hide();
		return;
	}
	if(parseInt(denominationval)!=0 && parseInt(denominationval)==9997) {
		$('#'+formId+' #denominationDivText').show();
		return;
	}
	$('#'+formId+' #denominationDivText').hide();
	return;
}

function funGetDenomination(formId){
		var selectedIndexes =$('#'+formId+' #denomination').val(); 
		var denominaId =$('#'+formId+' #denomination').val(); 
		var denominationOpt	=$('#'+formId+' #denominationOption').val(); 
		var casteFeature = $('#'+formId+' #castefeature').val();
		var casteOption  = $('#'+formId+' #casteOption').val();									
		var casteId		 = 0;


		if(casteOption==1) 
		{									
		casteId = $('#'+formId+' #caste').val();
		}
		if (casteFeature==1 && casteOption==1) { 
				varParams = '&denominationId='+denominaId+'&casteId='+casteId+'&formId='+formId;
				changeCult('subcaste',varParams,'subCasteDivId',formId);
				
		} 
		else {
			
			if(denominaId>0){	
				if(denominaId==9997){	

					$('#'+formId+' #denominationText').show(); 
				} 
				$('#'+formId+' #denominationText').val('');
				

				 varParams = '&denominationId='+denominaId+'&formId='+formId;

				changeCult('caste',varParams,'casteDivId',formId);

			}
		}
}

function funGetCaste(argCasteId,submittedSubCasteId,formId)
{


		var casteId = 0;
		var religionId =0;
		var denominaId = 0;
		var varReli =  "";
		var varDenom = "";

		var communityId =$('#'+formId+' #communityId').val(); 
				var religionGetValue = $('#'+formId+' #religion').val();
				var denominationGetValue = $('#'+formId+' #denomination').val();

		if(religionGetValue){ 
				religionId = $('#'+formId+' #religion').val();
				varReli = "&religionId="+religionId;
		}
		else if(denominationGetValue){	
				denominaId = $('#'+formId+' #denomination').val();
				varDenom = "&denominationId="+denominaId;
		}
		if(argCasteId=='') 
		{
								var casteGetValue = $('#'+formId+' #caste').val();
				if(casteGetValue) {

						if($('#'+formId+' #caste').get(0).tagName == 'SELECT') {

								casteId=$('#'+formId+' #caste').val(); 
						} else {
								casteId=$('#'+formId+' #caste').val(); 
						}
				}
		}
		else
		{
		casteId = argCasteId;
		}

		if (casteId > 0) {
				if(submittedSubCasteId) {varParams = varReli+varDenom+'&casteId='+casteId+'&subcasteId='+submittedSubCasteId+'&formId='+formId;}
				else {varParams = varReli+varDenom+'&casteId='+casteId+'&formId='+formId;}		
				$('#'+formId+' #subCasteDivId').show();
				changeCult('subcaste',varParams,'subCasteDivId',formId);
		}
}

function alphahumeric(value) {
	return /^[a-zA-Z0-9 ]+$/.test(value);
}

function subcasteckeck(subcasteval,formId) {

		var subcastemandatory=$('#'+formId+' #subcastemandatory').val();
		var subcastefeature=$('#'+formId+' #subcastefeature').val();

		if(parseInt(subcastemandatory)==0)
		{
		return;
		}

		if(parseInt(subcasteval)!=0 && parseInt(subcasteval)==9997)
		{
			if( formId=='seoRegisterPopup' || formId=='popRegister'  ){
				$('#'+formId+' #subCasteDivText').css('display','inline-block');
			}else{
				$('#'+formId+' #subCasteDivText').css('display','block');
			}

		$('#'+formId+' #subCasteDivText').show();	
		return;
		}
		if(parseInt(subcasteval)!=0 && parseInt(subcasteval)!=9997)
		{
		$('#'+formId+' #subCasteDivText').hide();	
		return;
		}					

		return;
}

function castecheck(casteval,formId) {
		var CommunityId=$('#'+formId+' #communityId').val();
		var castemandatory=$('#'+formId+' #castemandatory').val();
		var castefeature=$('#'+formId+' #castefeature').val();
		var castelabel=$('#'+formId+' #castelabel').val();

		if(parseInt(castemandatory)==0)
		{
		return;
		}

		if(parseInt(casteval)!=0 && parseInt(casteval)!=9997)
		{
				$('#'+formId+' #casteDivText').hide();
		return;
		}
		if(parseInt(casteval)!=0 && parseInt(casteval)==9997)
		{
				$('#'+formId+' #casteDivText').show();
		return;
		}

		return;
}

function clearerrors(formId){
	$('#'+formId+' #profileErr').html('');
	$('#'+formId+' #nameErr').html('');
	$('#'+formId+' #dobErr').html('');
	$('#'+formId+' #genderErr').html('');
	$('#'+formId+' #dobErr').html('');
	$('#'+formId+' #maritalErr').html('');
	$('#'+formId+' #appearanceErr').html('');
	$('#'+formId+' #appearancespan').html('')
	$('#'+formId+' #religionErr').html('');
	$('#'+formId+' #denominationErr').html('');
	$('#'+formId+' #motherTongueErr').html('');
	$('#'+formId+' #countryErr').html('');
	$('#'+formId+' #mobileErr').html('');
	$('#'+formId+' #passwordErr').html('');
	$('#'+formId+' #emailErr').html('');
	$('#'+formId+' #castespan').html('')
	$('#'+formId+' #subcastespan').html('')
	$('#'+formId+' #termsErr').html('')
	
	
	
}

function mobilepartly(val,formId) {
    
		 var profileValue= $('#'+formId+' #profile').val();
		 var pName = $.trim($('#'+formId+' #name').val());
		 var dobDay		= $('#'+formId+' #dobDay').val();
		 var dobMonth	= parseInt($('#'+formId+' #dobMonth').val(),10);
		 var dobYear		= $('#'+formId+' #dobYear').val();
		 var countryValue= $('#'+formId+' #country').val();
		 var countryCode=$('#'+formId+' #countryCode').val();
		 var mobileno		= $("#"+formId+" #mobileNo").val();
		 var maritalValue= $('#'+formId+' #maritalStatus').val();          

		if((profileValue !=0) && (pName != '') && (parseInt(dobDay)!=0) && (dobMonth !=0) && (parseInt(dobYear)!=0) && (parseInt(countryValue)!=0) && (parseInt(countryCode)!=0) && (mobileno != '') && (parseInt(maritalValue)>0) && ($('input:radio[name=gender]:checked').val() !='undefined')) {

			var prvmobileno		= $("#"+formId+" #prvMobileNo").val();
			var email           = $('#'+formId+' #email').val();
			var prvEmailStatus  = $("#"+formId+" #prvEmailStatus").val();
			var prvEmail        = $("#"+formId+" #prvEmail").val();
			var sendReq;
			
			if(prvmobileno!=mobileno){
				$('#'+formId+' #prvMobileNo').val(mobileno);
				sendReq     = 1;

			}

			if(val=='email' && prvEmailStatus==0 && prvEmail!=email) {
				sendReq     = 1;
				$('#'+formId+' #prvEmail').val(email);
							   
			}
					   
			if(sendReq==1){
				$.ajax({
					type:'POST',
					url: '/register/mobilepartly.php',
					data:$('#'+formId).serialize(),
					success: function(response) {
						$("#"+formId+" #partlymobileid").val(response);
					}
				});
			}
		}
	}

function appearenceChk(val,formId)
{
	
	var Appear = document.frmRegister.appearance;
	var CommunityId = document.frmRegister.communityId.value;
	var Gender	= document.frmRegister.gender[0].checked
	
	
	if(Appear && Gender==true) {
		if(IsEmpty(Appear,'radio')) {
			getId('appearancespan').innerHTML="Please select the appearance";
			getId('appearancelbl').className="rgdivlt normtxt1 bld fleft errclr";
			return false;
		} else {
			getId('appearancespan').innerHTML="";
			getId('appearancelbl').className="rgdivlt normtxt1 bld fleft";
			return true;
		}
	}
	return true; 
}
//<Start for home page registration form>
function getId(srcId) {
	return document.getElementById(srcId);
}

function SelectedDomain(DomainName,formId){

				if(DomainName!="" && DomainName!=0) 
				{
					if(typeof($('#'+formId).find('input[name="gender"]:checked').val())!='undefined'){
						//$('#'+formId).find('input[name="gender"]:checked').val('');
						$('#'+formId).find('input[name="gender"]').attr('checked', false);
						$('#dobYear').prop('selectedIndex', 0);
					}
					homeCulturalBackground();
					MotherTongue();
					MaritalStatus();		
					$('#appearanceDiv').html('');
					if(DomainName=="sikhmatrimony.com") {
							Appearence();
					}

					if(DomainName=="defencematrimony.com") { 
							$("#"+formId+" #homeCountryLiving1").hide().find('#country').attr('disabled', 'disabled');
							$("#"+formId+" #homeCountryLiving").html("<dd id='homeCountryDefence'><input type='hidden' name='country' id='country' value='98'><span style='position:relative;top:4px;'><b>India</b></span>");
							$("#"+formId+" #MOBILEBOX").find('#homeCountry1').hide().find('#countryCode').attr('disabled', 'disabled');
							$("#"+formId+" #homeCountry").html("<div id='homeDefence'><input type='hidden' name='countryCode' id='countryCode' value='98'><span style='position:relative;top:4px;'><b>India ( 91 )</b></span></div>");
					}
					else{ 
						  $("#"+formId+" #homeCountryDefence").hide();
						  $("#"+formId+" #homeCountryLiving1").show().find('#country').attr('disabled', false);
						  $("#"+formId+" #MOBILEBOX").find('#homeDefence').hide();
						  $("#"+formId+" #MOBILEBOX").find('#homeCountry1').show().find('#countryCode').attr('disabled', false);
					}
					if(DomainName=="40plusmatrimony.com" || DomainName=="agarwalmatrimony.com" || DomainName=="anycastematrimony.com" || DomainName=="aroramatrimony.com" || DomainName=="bhatiamatrimony.com" || DomainName=="brahminmatrimony.com" || DomainName=="christianmatrimony.com" || DomainName=="coorgmatrimony.com" || DomainName=="defencematrimony.com" || DomainName=="divorceematrimony.com" || DomainName=="ghumarmatrimony.com" || DomainName=="intercastematrimony.com" || DomainName=="jainmatrimony.com" || DomainName=="jaiswalmatrimony.com" || DomainName=="jatmatrimony.com" || DomainName=="kambojmatrimony.com" || DomainName=="keralachristianmatrimony.com" || DomainName=="khandelwalmatrimony.com" || DomainName=="khatrimatrimony.com" || DomainName=="kshatriyamatrimony.com" || DomainName=="lubanamatrimony.com" || DomainName=="majabimatrimony.com" || DomainName=="manglikmatrimony.com" || DomainName=="muslimmatrimony.com" || DomainName=="oswalmatrimony.com" || DomainName=="porwalmatrimony.com" || DomainName=="rajputmatrimony.com" || DomainName=="ramdasiamatrimony.com" || DomainName=="ramgariahmatrimony.com" || DomainName=="ravidasiamatrimony.com" || DomainName=="sainimatrimony.com" || DomainName=="sikhmatrimony.com" || DomainName=="tonkkshatriyamatrimony.com" || DomainName=="vaishyamatrimony.com") {
						$('#hpreg dl').css("padding","6px 0px 6px 0px");
					}
					else
					{
						$('#hpreg dl').css("padding","10px 0px");
					}
				} 
		}

function homeCulturalBackground()
{	
		var DomainName	= "";	
		DomainName	=$('#domainName').val();		
		varRequestUrl = "/register/homepageculturalbackground.php?DomainName="+DomainName;
		homeCommonCulturalChange(varRequestUrl,'culturalBackground');


}

function MotherTongue(submitedMotherTongue)
{
		var motherTongue = "";
		var DomainName = "";	
		DomainName	=$('#domainName').val();
		if(submitedMotherTongue!=""){
				motherTongue = "&mothertongue="+submitedMotherTongue;
		}

		varRequestUrl = "/register/mothertongue.php?DomainName="+DomainName+motherTongue+"&home_reg=yes";
		homeCommonCulturalChange(varRequestUrl,'MotherTongueDivId');
}

function MaritalStatus(submitedMaritalStatus)
{
		var maritalStatus = "";
		var DomainName = "";		

		DomainName	=$('#domainName').val();
		if(submitedMaritalStatus!=""){
				maritalStatus = "&maritalstatus="+submitedMaritalStatus;
				if(document.frmRegister.noOfChildren) {
				var onOfChild = $('#noOfChildren').val();
				maritalStatus = maritalStatus+"&noOfChildren="+onOfChild;
				}
		}

		varRequestUrl = "/register/maritalstatus.php?DomainName="+DomainName+maritalStatus+"&home_reg=yes";
		homeCommonCulturalChange(varRequestUrl,'maritalStatusDivId');

}

function Appearence(submitedAppearId)
{
		var AppearenceId = "";
		var DomainName = "";
		DomainName	=$('#domainName').val();	
		if(submitedAppearId!=""){
				AppearenceId = "&appearenceId="+submitedAppearId;
		}

		varRequestUrl = "/register/appearence.php?DomainName="+DomainName+AppearenceId+"&home_reg=yes";
		homeCommonCulturalChange(varRequestUrl,'appearanceDiv');

}

function homeCommonCulturalChange(varRequestUrl,DivId)
{
preLoadImg(DivId);										
$.ajax({
url: varRequestUrl,
type: 'POST',
dataType: 'html',
async: false,
success: function(data) {

	$("#"+DivId).html(data);
		} 
 });
}

//Pre Loading Div
function preLoadImg(loadingDivId){	
	 if (loadingDivId == '' || loadingDivId == undefined) return;
	 load = '<img src="'+imgs_url+'/loadingicon.gif"/>';
	 $('#'+loadingDivId).html(load);
}

function passwordInput1(){
	document.getElementById('passwordClear1').style.display = 'none';
	document.getElementById('password1').style.display = 'block';
	document.Login.password.focus();
}
function changeInput1(){
	var Login = this.document.Login;
	var Passwrd		= document.Login.password;
	if(Passwrd.value==''){
	document.getElementById('passwordClear1').style.display = 'block';
	document.getElementById('password1').style.display = 'none';
	}
}



// common ajax call to load registration popup
function seoAjaxRegForm(regFormFlag,purpose,id,name){
  var purpose = (typeof(purpose)!=='undefined')? purpose:'';
  var id = (typeof(id)!=='undefined')? id:'';
  var name = (typeof(name)!=='undefined')? name:'';  

	$.ajax({		 		
		url: "/register/reg-popup-new.php?rFflag="+regFormFlag,
		type: "GET",
		success: function (response) {			
			$("#lightpic").html(response);
			//$("#countryCode option[value=98]").attr("selected","selected");
			 setTitle(regFormFlag,purpose,id,name);
			//check whether timer has set or not if set then empty the timer
			if (timer) {
				clearTimeout(timer); //cancel the previous timer.
				timer = null;
			}
			$('#lightpic').css("display","block");
			$('#lightpic').bPopup({	  
			positionStyle:ie6Fixed, position: ["auto","3%"],escClose:false,
	        followSpeed: 1500		
			});
		 }

	 });
}

function setTitle(regFormFlag,purpose,id,name){
	var seo_gend = srch_gend = gender_val = '';
	if(cook_id==''){	
		 var form_id = '';
		 srch_gend = ($('#frmSearchConds').length>0) ? $("#frmSearchConds input[name=gender]").val(): '';
		 seo_gend = $('.graytab .active').length>0 ? $('.graytab .active').text() : '';
		 
		 if(regFormFlag==4)
			form_id = 'popRegister';
		 else if(regFormFlag==5)
            form_id = 'seoRegisterPopup';
		 
		 if(srch_gend!='' && typeof(srch_gend)!=='undefined')
			gender_val = (srch_gend=='1') ? 'Grooms' : 'Brides';
		 else if(seo_gend!='' && typeof(seo_gend)!=='undefined')
				gender_val = (seo_gend=='Brides') ? 'Brides' : 'Grooms';

		// preselect the gender value
		if(gender_val=='Brides'){
			$("input:radio[name=gender][value=1]").attr('checked', 'checked');
			updateYearGender(1,form_id,'dobYear');		
		}else if(gender_val=='Grooms'){
			$("input:radio[name=gender][value=2]").attr('checked', 'checked');			
			updateYearGender(2,form_id,'dobYear');	
		}

		if(purpose=='default'){
			 $(".reg-title span").html('Join for FREE and <br/>see your matching '+gender_val+' now!');
		}else if(purpose=='cta'){
			if(name.length>15)
				name = name.substring(0, 15)+'...';
			if (name.indexOf("+") >= 0)
				name = name.replace(/[^A-z0-9]/g,' ');
		  $(".reg-title span").html('Join for FREE and <br/>see '+name+'&#39;s full profile now!');
		  $("#loginid").attr('href',ser_url+'/login/index.php/?redirect='+ser_url+'/profiledetail/index.php?id='+id);

		}	
	}
}
