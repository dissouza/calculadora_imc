

function resultadoImc(){
	
	var imc = "";
	var altura = parseInt(document.getElementById("altura").value);
	var peso = parseInt(document.getElementById("peso").value);
	var result = document.getElementById("result");
	var situacao = document.getElementById("situacao");

	imc = peso / (altura**2)*10000;
	
	if (imc < 18.5) {

		result.textContent = "Seu IMC É " + imc.toFixed(2);
		situacao.textContent = "MAGREZA";

	}

	else if (imc > 18.5 && imc <= 24.9) {

		result.textContent = "Seu IMC É " + imc.toFixed(2);
		situacao.textContent = "NORMAL";

	}	

	else if (imc >= 25 && imc <= 29.9) {

		result.textContent = "Seu IMC É " + imc.toFixed(2);
		situacao.textContent = "SOBREPESO";

	}

	else if (imc >= 30.0 && imc <= 39.9) {

		result.textContent = "Seu IMC É " + imc.toFixed(2);
		situacao.textContent = "OBESIDADE";

	}			
	
	else if (imc > 40) {

		result.textContent = "Seu IMC É " + imc.toFixed(2);
		situacao.textContent = "OBESIDADE GRAVE";

	}








}
