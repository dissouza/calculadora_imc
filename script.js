

function resultadoImc(){
	
	var imc = "";
	var altura = parseInt(document.getElementById("altura").value);
	var peso = parseInt(document.getElementById("peso").value);
	var result = document.getElementById("result");

	imc = peso / (altura**2);
	
	result.textContent = imc;


	if (result >= 18.5){

	document.getElementById("result").innerHTML = `Seu Imc é ${result}`;

	}	
}
