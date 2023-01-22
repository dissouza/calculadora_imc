

function resultadoImc(){
	
	var imc = "";
	var altura = parseInt(document.getElementById("altura").value);
	var peso = parseInt(document.getElementById("peso").value);
	var result = document.getElementById("result");
	var situacao = document.getElementById("situacao");

	imc = peso / (altura**2)*10000; /* Adicionado o 10000 para que cortasse quatro zeros, sem isso, o resultado fica em numeros decimais */

	if (imc < 18.5) {

		result.textContent = "Seu IMC É " + imc.toFixed(2);
		situacao.textContent = "MAGREZA";
		situacao.style.padding = "10px";
		situacao.style.background = "white";
		situacao.style.color = "black";

	}

	else if (imc > 18.5 && imc <= 24.9) {

		result.textContent = "Seu IMC É " + imc.toFixed(2);
		situacao.textContent = "NORMAL";
		situacao.style.padding = "10px";
		situacao.style.background = "green";
		situacao.style.color = "white";

	}	

	else if (imc >= 25 && imc <= 29.9) {

		result.textContent = "Seu IMC É " + imc.toFixed(2);
		situacao.textContent = "SOBREPESO";
		situacao.style.padding = "10px";
		situacao.style.background = "yellow";
		situacao.style.color = "black";

	}

	else if (imc >= 30.0 && imc <= 39.9) {

		result.textContent = "Seu IMC É " + imc.toFixed(2);
		situacao.textContent = "OBESIDADE";
		situacao.style.padding = "10px";
		situacao.style.background = "orange";
		situacao.style.color = "black";

	}			
	
	else if (imc > 40) {

		result.textContent = "Seu IMC É " + imc.toFixed(2);
		situacao.textContent = "OBESIDADE GRAVE";
		situacao.style.padding = "10px";
		situacao.style.background = "red";
		situacao.style.color = "white";


	}
}
