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
		var v1=document.getElementById("c1").value;
	var v2=document.getElementById("c2").value;
	var result = (+v1 * +v2);
	console.log(v1);
	document.getElementById("v5").value = result;
	
}

function pr(){
	var v1= document.getElementById("c1").value;
	var v2=document.getElementById("c2").value;
	var result = 2*(+v1 + +v2);
	document.getElementById("v6").value = result;
	
}