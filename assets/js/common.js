// JavaScript Document
//var site_url = 'http://localhost/matrimonial/';
var site_url = 'http://182.19.22.141/matrimonial/mini-register.php';
function ValidateEmail(Email)
{
	var funRegExp	      = new RegExp("^[A-Za-z0-9][A-Za-z0-9_\\.\-]*\\@[a-zA-Z0-9]+\\.[a-zA-Z]+[\\.]?[a-zA-Z]*$");
	if (!Email.match(funRegExp)) { return false; }//if
	return true;
}
$(document).on('keyup','.mobile',function(){
	$(this).keyup(function() {
		if (this.value.match(/[^0-9]/g)) {
				this.value = this.value.replace(/[^0-9]/g, '');
			}
		});
});

$(document).on('keyup','.textOnly',function(){
	$(this).keyup(function() {
		if (this.value.match(/[^a-z ]/i)) {
				this.value = this.value.replace(/[^a-z ]/i, '');
			}
		});
});

function IsEmpty(obj, obj_type)
{
	var obj = $(obj);
	if (obj_type == "text" || obj_type == "password" || obj_type == "textarea" || obj_type == "file")	{
		var objValue;
		objValue = obj.val().replace(/\s+$/,"");
		//objValue = obj.value.replace(/\s+$/,"");
		if (objValue.length == 0) {
			return true;
		} else {
			return false;
		}
	} else if (obj_type == "select" ) {
			if (obj.val()=='') 
			{
				return true;obj.focus();
			}
		else
		return false;	
	}/* else if (obj_type == "radio" || obj_type == "checkbox") {
		if (!obj[0] && obj) {
			if (obj.checked) {
				return false;
			} else {
				return true;	
			}
		} else {
			for (i=0; i < obj.length; i++) {
				if (obj[i].checked) {
					return false;
				}
			}
			return true;
		}
	} else {
		return false;
	}*/
}