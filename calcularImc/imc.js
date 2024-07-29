const formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  const peso = Number(formulario.querySelector("#peso").value);
  const altura = Number(formulario.querySelector("#altura").value);
  const resultado = document.querySelector("#resultado");

  const calcularImc = (peso, altura) => {
    return peso / (altura * altura);
  };

  resultadoImc = calcularImc(peso, altura);

  const exibirResultado = (mensagem) => {
    resultado.innerHTML = `Seu IMC: ${mensagem.toFixed(2)}`;
  };

  imc = exibirResultado(resultadoImc);
});
