var altura = "";
var peso = "";
var result = "";

function resultadoImc(){
	
	altura = parseInt(document.getElementById("altura").value);
	peso = parseInt(document.getElementById("peso").value);
	result = peso / (altura * altura);


	if (result > 18.5){

	document.getElementById("#result").innerHTML = "Seu Imc é " + parseInt(result);

	}	
}
