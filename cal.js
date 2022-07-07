function sum(){
	var value1=document.getElementById("value1").value;
	var value2=document.getElementById("value2").value;
	var result = ("addition",+value1+ +value2);
	document.getElementById('value3').value = result;
	
}

function sub(){
	var value1=document.getElementById("value1").value;
	var value2=document.getElementById("value2").value;
	var result = ("substraction",+value1- +value2);
	document.getElementById('value4').value = result;
	
	
}
function multiple(){
	var value1=document.getElementById("value1").value;
	var value2=document.getElementById("value2").value;
	var result = ("multiplication",+value1* +value2);
	document.getElementById('value5').value = result;
	
}
function div(){
	var value1=document.getElementById("value1").value;
	var value2=document.getElementById("value2").value;
	var result = ("division",+value1/ +value2);
	document.getElementById('value6').value = result;
	
}





