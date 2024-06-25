// app.js

function manejarClick() {
  // Encripta el texto
  document.getElementById("myDIV").style.display = "none";
  document.getElementById("myResultado").style.display = "flex";

  // Capturar el valor del input
  let texto = document.getElementById("input-entrada").value;

  // Encriptar el texto
  let textoEncriptado = encriptar(texto);

  // Mostrar el resultado en el elemento correspondiente
  document.getElementById("input-resultado").value = textoEncriptado;
  document.getElementById("input-entrada").value = "";
}

function manejarClickDesencriptar() {
  // Capturar el valor del input
  let texto = document.getElementById("input-entrada").value;

  // Desencriptar el texto
  let textoDesencriptado = desencriptar(texto);

  // Mostrar el resultado en el elemento correspondiente

  document.getElementById("input-resultado").value = textoDesencriptado;
  document.getElementById("input-entrada").value = "";
}

function copiar() {
  // Copiar el texto del textarea
  let copyText = document.getElementById("input-resultado");
  copyText.select();
  copyText.setSelectionRange(0, 99999); // Para dispositivos móviles

  document.execCommand("copy");

  document.getElementById("input-resultado").value = "";

  alert("Copiado con éxito!");
}

function encriptar(texto) {
  let encriptado = "";
  for (let i = 0; i < texto.length; i++) {
    encriptado += String.fromCharCode(texto.charCodeAt(i) + 1); // Cambia cada caracter por el siguiente en la tabla ASCII
  }
  alert("Encriptado con éxito!");
  return encriptado;
}

function desencriptar(texto) {
  let desencriptado = "";
  for (let i = 0; i < texto.length; i++) {
    desencriptado += String.fromCharCode(texto.charCodeAt(i) - 1); // Cambia cada caracter por el anterior en la tabla ASCII
  }
  alert("Desencriptado con éxito!");
  return desencriptado;
}

function limpiarCaja() {
  document.getElementById("input-entrada").value = "";
  document.getElementById("input-resultado").value = "";

  document.getElementById("myDIV").style.display = "flex";
  document.getElementById("myResultado").style.display = "none";
}

// Conectar las funciones a los botones correspondientes
document
  .getElementById("encriptar-btn")
  .addEventListener("click", manejarClick);
document
  .getElementById("desencriptar-btn")
  .addEventListener("click", manejarClickDesencriptar);
document.getElementById("copy").addEventListener("click", copiar);
