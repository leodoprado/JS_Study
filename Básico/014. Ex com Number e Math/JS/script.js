const numero = Number(prompt('Digite um número:'));

const numeroTitulo = window.document.getElementById('numero-titulo');
const texto = window.document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML += `<p>É NaN: ${isNaN(numero)} </p>`;
texto.innerHTML += `<p>Raiz quadrada: ${numero ** (1/2)} </p>`;
texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}</p>`;
texto.innerHTML += `<p>Arredondando para baixo: ${Math.floor(numero)}</p>`;
texto.innerHTML += `<p>Arredondando para cima: ${Math.ceil(numero)}</p>`;
texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}</p>`;