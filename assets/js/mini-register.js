$(document).ready(function(){
	
	$("#name").on('blur',function(){
		if(IsEmpty('#name','text')){
			$("#nameErr").show();	
			return false;
		}
		else{
			$("#nameErr").hide();
		}
	});
	$("#name").on('focus',function(){
		$("#nameErr").hide();
	});
	
	
	$("#profile").on('blur',function(){
		if(IsEmpty('#profile','select')){
			$("#profileErr").show();	
		}
		else{
			$("#profileErr").hide();
		}
	});
	$("#profile").on('focus',function(){
		$("#profileErr").hide();
	});
	$("#email").on('blur',function(){
		if($("#email").val()==''){
			$("#emailErr").html('Please enter email address');
			$("#emailErr").show();
		}
		else if(!ValidateEmail($("#email").val())){
			$("#emailErr").html('Please enter valid email address');
			$("#emailErr").show();
		}
		else{
			$("#emailErr").hide();
		}
	});
	$("#email").on('focus',function(){
		$("#emailErr").hide();
	});
	
	$("#dob_d").on('blur',function(){
		if(IsEmpty('#dob_d','select')){
			$("#dob_dErr").show();	
		}
		else{
			$("#dob_dErr").hide();
		}
	});
	$("#dob_d").on('focus',function(){
		$("#dob_dErr").hide();
	});
	$("#dob_m").on('blur',function(){
		if(IsEmpty('#dob_m','select')){
			$("#dob_mErr").show();	
		}
		else{
			$("#dob_mErr").hide();
		}
	});
	$("#dob_m").on('focus',function(){
		$("#dob_mErr").hide();
	});
	$("#dob_y").on('blur',function(){
		if(IsEmpty('#dob_y','select')){
			$("#dob_yErr").show();	
		}
		else{
			$("#dob_yErr").hide();
		}
	});
	$("#dob_y").on('focus',function(){
		$("#dob_yErr").hide();
	});
	$("#mstatus").on('blur',function(){
		if(IsEmpty('#mstatus','select')){
			$("#mstatusErr").show();	
		}
		else{
			$("#mstatusErr").hide();
		}
	});
	$("#mstatus").on('focus',function(){
		$("#mstatusErr").hide();
	});
	$("#subcaste").on('blur',function(){
		if(IsEmpty('#subcaste','select')){
			$("#subcasteErr").show();	
		}
		else{
			$("#subcasteErr").hide();
		}
	});
	$("#subcaste").on('focus',function(){
		$("#subcasteErr").hide();
	});
	$("#mtongue").on('blur',function(){
		if(IsEmpty('#mtongue','select')){
			$("#mtongueErr").show();	
		}
		else{
			$("#mtongueErr").hide();
		}
	});
	$("#mtongue").on('focus',function(){
		$("#mtongueErr").hide();
	});
	$("#country").on('blur',function(){
		if(IsEmpty('#country','select')){
			$("#countryErr").show();	
		}
		else{
			$("#countryErr").hide();
		}
	});
	$("#country").on('focus',function(){
		$("#countryErr").hide();
	});
	$("#mobile").on('blur',function(){
		if($("#mobile").val()==''){
			$("#mobileErr").show();
		}
		else{
			$("#mobileErr").hide();
		}
	});
	$("#mobile").on('focus',function(){
		$("#mobileErr").hide();
	});
	$("#password").on('blur',function(){
		if($("#password").val()==''){
			$("#passwordErr").html('Please enter Password');
			$("#passwordErr").show();
		}
		else{
			$("#passwordErr").hide();
		}
	});
	$("#password").on('focus',function(){
		$("#passwordErr").hide();
	});
	$("#cpassword").on('blur',function(){
		if($("#cpassword").val()==''){
			$("#cpasswordErr").html('Please enter Confirm Password');
			$("#cpasswordErr").show();
		}
		else if($("#cpassword").val()!=$("#password").val()){
			$("#passwordErr").html('Password & Confirm Password didn\'t match');
			$("#passwordErr").show();
		}
		else{
			$("#cpasswordErr").hide();
		}
	});
	$("#cpassword").on('focus',function(){
		$("#cpasswordErr").hide();
	});
	
	$("#regFrm").on('submit',function(){
		$('input').trigger('blur');
		$('select').trigger('blur');
		var name = $('#name').val();
		var profile = $('#profile').val();
		var email = $('#email').val();
		var dob_d = $('#dob_d').val();
		var dob_m = $('#dob_m').val();
		var dob_y = $('#dob_y').val();
		var gender = $('#gender').val();
		var mstatus = $('#mstatus').val();
		var subcaste = $('#subcaste').val();
		var mtongue = $('#mtongue').val();
		var country = $('#country').val();
		var mobile = $('#mobile').val();
		var password = $('#password').val();
		var cpassword = $('#cpassword').val();

		
		if(name!='' && profile!='' && email!='' && dob_d!='' && dob_m!='' && dob_y!='' && gender!='' && mstatus!='' && subcaste!='' && mtongue!='' && country!='' && mobile!='' && password!='' && cpassword!=''){
			$.ajax({
				url: site_url+'inc/api.php',
				type: "POST",             // Type of request to be send, called as method
				data: new FormData(this), // Data sent to server, a set of key/value pairs (i.e. form fields and values)
				contentType: false,       // The content type used when sending data to the server.
				cache: false,             // To unable request pages to be cached
				processData:false,        // To send DOMDocument or non processed data file it is set to false
				crossDomain: true,
				success: function(data)   // A function to be called if request succeeds
				{
					if(data=="Y")
					{
						window.location = 'thank-you.php';
					}
					else if(data=='N'){
					alert("Please try again");	
					}
					else{
						alert(data);
					}
					
				}
			});
		}
		//var name = 
	});
});