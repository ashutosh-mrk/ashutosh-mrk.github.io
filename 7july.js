function add(){
	console.log("Hello Mirketa");
	var A1 = document.getElementById('t1').value;
	var result = 2*+A1
	console.log(result);
}

function clr(){
    var A1 = document.getElementById('t1').value;
	document.getElementById('result').textContent = "Result is " + 2*A1;
       

}

function sort(){
    document.getElementById('t1').value= "";
       

}