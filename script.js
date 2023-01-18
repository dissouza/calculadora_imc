function resultadoImc(altura, peso){

	var altura = getElementByClassName("altura");
	const = altura.value;

	var peso = getElementByClassName("peso");
	const = peso.value;

	return peso.value / (altura.value * altura.value);
}

console.log(resultadoImc)