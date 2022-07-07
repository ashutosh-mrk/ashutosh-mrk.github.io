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


function interest(){
	var t1 = document.getElementById('text1').value;
	var t2 = document.getElementById('text2').value;
	var t3 = document.getElementById('text3').value;
	
	if(t1 && t2 && t3 !=""){
	var sum = (parseInt(t1)*parseInt(t2)*parseInt(t3))/100;
	document.getElementById('text4').value = sum;
	}
	else{
		document.getElementById('text4').value = "Enter All Values"
	}
}
//area of circle

function area(){
var v1= document.getElementById('v1').value;
var result=(3.14*+v1*+v1);
document.getElementById('v2').value = result;
}

function perimeter(){
var v1= document.getElementById('v1').value;
var result=(2*3.14*+v1);
document.getElementById('v3').value = result;
}





// area of rectangle
function ar(){
	var v1=document.getElementById("v1").value;
	var v2=document.getElementById("v2").value;
	var result = (+v1 * +v2);
	document.getElementById("v5").value = result;
	
}

function pr(){
	var v1= document.getElementById("v1").value;
	var v2=document.getElementById("v2").value;
	var result = 2*(+v1 + +v2);
	document.getElementById("v6").value = result;
	
}