

function resultadoImc(){
	
	let imc = "";
	let altura = parseInt(document.getElementById("altura").value);
	let peso = parseInt(document.getElementById("peso").value);
	let result = document.getElementById("result");
	const situacao = document.getElementById("situacao");

	imc = peso / (altura**2)*10000; /* Adicionado o 10000 para que cortasse quatro zeros, sem isso, o resultado fica em numeros decimais */

	if (imc < 18.5) { // Se for menor que 18 //

		result.textContent = "Seu IMC É " + imc.toFixed(2);
		situacao.textContent = "MAGREZA";
		situacao.style.padding = "10px";
		situacao.style.background = "white";
		situacao.style.color = "black";

	}

	else if (imc > 18.5 && imc <= 24.9) { // Se for maior a 18 e menor ou igual a 24.9 //

		result.textContent = "Seu IMC É " + imc.toFixed(2);
		situacao.textContent = "NORMAL";
		situacao.style.padding = "10px";
		situacao.style.background = "green";
		situacao.style.color = "white";

	}	

	else if (imc >= 25 && imc <= 29.9) { // Se for maior ou igual a 25 e menor ou igual a 29.9 //

		result.textContent = "Seu IMC É " + imc.toFixed(2);
		situacao.textContent = "SOBREPESO";
		situacao.style.padding = "10px";
		situacao.style.background = "yellow";
		situacao.style.color = "black";

	}

	else if (imc >= 30.0 && imc <= 39.9) { // Se for maior ou igual a 30 e menor ou igual a 39.9 //

		result.textContent = "Seu IMC É " + imc.toFixed(2);
		situacao.textContent = "OBESIDADE";
		situacao.style.padding = "10px";
		situacao.style.background = "orange";
		situacao.style.color = "black";

	}			
	
	else if (imc > 40) { // Se for maior que 40 //

		result.textContent = "Seu IMC É " + imc.toFixed(2);
		situacao.textContent = "OBESIDADE GRAVE";
		situacao.style.padding = "10px";
		situacao.style.background = "red";
		situacao.style.color = "white";


	}
}
