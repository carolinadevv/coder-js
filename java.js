const porcionArrozPersonaGr = 75;
const porcionSepiaPersonaGr = 150;
const porcionCalamarPersonaGr = 62;
const porcionCaldoPersonaGr = 250;
const porcionCebollaPersonaGr = 60;
const porcionGuisantePersonaGr = 25;
const porcionJudiaVerdePersonaGr = 25;
const porcionMejillonPersona = 3;
const porcionLangostinoPersona = 2;
const porcionAlmejaPersona = 2;
const porcionAjoPersona = 1;
const porcionTomatePersona = 1;
const porcionAzafranPersona = 2;
const porcionAceiteOlivaPersona = 1.5;

const PAELLAS_TIPOS = [];

function cargarDatos() {
  fetch("/data.json")
    .then((response) => response.json())
    .then((data) => {
      for (paella of data) {
        if (PAELLAS_TIPOS.length <= 2) {
          PAELLAS_TIPOS.push(paella);
        }
      }
    });
}
cargarDatos();

class Paella {
  constructor() {
    this.adulto = true;
    this.arroz = porcionArrozPersonaGr;
    this.sepia = porcionSepiaPersonaGr;
    this.calamar = porcionCalamarPersonaGr;
    this.caldo = porcionCaldoPersonaGr;
    this.cebolla = porcionCebollaPersonaGr;
    this.guisante = porcionGuisantePersonaGr;
    this.judiaVerde = porcionJudiaVerdePersonaGr;
    this.mejillon = porcionMejillonPersona;
    this.langostino = porcionLangostinoPersona;
    this.almeja = porcionAlmejaPersona;
    this.ajo = porcionAjoPersona;
    this.tomate = porcionTomatePersona;
    this.azafran = porcionAzafranPersona;
    this.aceite = porcionAceiteOlivaPersona;
    this.precio = null;
  }

  paellaMenores() {
    this.adulto = false;
    this.arroz = this.arroz / 2;
    this.sepia = this.sepia / 2;
    this.calamar = this.calamar / 2;
    this.caldo = this.caldo / 2;
    this.cebolla = this.cebolla / 2;
    this.guisante = this.guisante / 2;
    this.judiaVerde = this.judiaVerde / 2;
    this.mejillon = this.mejillon / 2;
    this.langostino = this.langostino / 2;
    this.almeja = this.almeja / 2;
    this.ajo = this.ajo / 2;
    this.tomate = this.tomate / 2;
    this.azafran = this.azafran / 2;
    this.aceite = this.aceite / 2;
    this.precio = this.precio / 2;
  }
}

function inicio() {
  document.getElementById("botonEmpezar").disabled = "true";
  crearSeccionPaella();
  crearSeccionCalculadora();
}

function crearSeccionCalculadora() {
  const contenedor = document.getElementById("calculadora");
  const parrafo = document.createElement("p");
  parrafo.innerHTML = "<h3 id='txtAdultos'>Ingresa cantidad de adultos</h3>";
  contenedor.appendChild(parrafo);
  const inputNumber = crearInput("adultos");
  contenedor.appendChild(inputNumber);
  const parrafoNinos = document.createElement("p");
  parrafoNinos.innerHTML = "<h3 id='txtNinos'>Ingresa cantidad de niños</h3>";
  contenedor.appendChild(parrafoNinos);
  const inputNumberNinos = crearInput("ninos");
  contenedor.appendChild(inputNumberNinos);
  const botonCalcular = crearBoton("calcularButton");
  contenedor.appendChild(botonCalcular);

  botonCalcular.addEventListener("click", () => {
    Toastify({
      text: "Calculando cantidades",
      duration: 3000,
    }).showToast();
    document.getElementById("calcularButton").disabled = "true";
    calcular();
  });
}

function crearSeccionPaella() {
  const paellas = document.getElementById("paellas");
  const parrafoPaellas = document.createElement("p");
  parrafoPaellas.innerHTML = "<h2>Tipos de Paellas</h2>";
  paellas.appendChild(parrafoPaellas);

  PAELLAS_TIPOS.forEach((paella) => {
    const div = document.createElement("div");
    div.innerHTML = `
        <p><strong>Tipo:</strong> ${paella.tipo}</p>
        <p><strong>Ingredientes:</strong> ${paella.ingredientes}</p>
        <p><strong>Precio:</strong> $${paella.precio}</p>
        <hr>
    `;
    paellas.appendChild(div);
  });
}

function crearBoton(id) {
  const boton = document.createElement("button");
  boton.innerHTML = "Calcular";
  boton.type = "button";
  boton.id = id;
  boton.className = "btn btn-outline-secondary btn-lg px-4";
  return boton;
}

function crearInput(id) {
  const inputNumber = document.createElement("input");
  inputNumber.type = "number";
  inputNumber.min = 0;
  inputNumber.step = 1;
  inputNumber.id = id;
  inputNumber.className = "form-control";
  return inputNumber;
}

function calcular() {
  let comensalesAdultos = document.getElementById("adultos").value;
  let comensalesMenores = document.getElementById("ninos").value;

  console.log(comensalesAdultos);
  console.log(comensalesMenores);

  const paellas = [];

  for (let index = 0; index < comensalesAdultos; index++) {
    const paella = new Paella();
    paellas.push(paella);
  }

  for (let index = 0; index < comensalesMenores; index++) {
    const paella = new Paella();
    paella.paellaMenores();
    paellas.push(paella);
  }

  const paellasAdultos = paellas.filter((paella) => paella.adulto === true);
  const paellasMenores = paellas.filter((paella) => paella.adulto === false);

  monstrarResultado(paellasAdultos, paellasMenores);

  guardarResultado(paellasAdultos, paellasMenores);

  mostrarLocalStorage();
}

function monstrarResultado(paellasAdultos, paellasMenores) {
  const precio = PAELLAS_TIPOS.find((x) => x.id == 1).precio;
  console.log(precio);
  const resultado = document.getElementById("resultado");
  const parrafo = document.createElement("p");
  parrafo.innerHTML = "<h2>Total paellas<h2>";

  const costoTotal = `Costo paella adulto: ${
    paellasAdultos.length * precio
  }, Costo paella menores: ${(paellasMenores.length * precio) / 2}`;
  resultado.append(costoTotal);
}

function guardarResultado(paellasAdultos, paellasMenores) {
  const jsonPaellaAdulto = JSON.stringify(paellasAdultos);
  localStorage.setItem("paellaAdulto", jsonPaellaAdulto);
  const jsonPaellaMenor = JSON.stringify(paellasMenores);
  localStorage.setItem("paellaMenor", jsonPaellaMenor);
}

function mostrarLocalStorage() {
  const paellaAdulto = localStorage.getItem("paellaAdulto");
  const jsonAdulto = JSON.parse(paellaAdulto);
  const paellaMenor = localStorage.getItem("paellaMenor");
  const jsonMenor = JSON.parse(paellaMenor);
  const resultado = document.getElementById("resultado");
  console.log(jsonAdulto, jsonMenor);
  if (jsonAdulto && jsonAdulto.some && jsonMenor && jsonMenor.some) {
    resultado.append(
      ` Cantidad Arroz gr: ${jsonAdulto[0].arroz + jsonMenor[0].arroz}`,
      ` Cantidad Sepia gr: ${jsonAdulto[0].sepia + jsonMenor[0].sepia}`
    );
  }
}

function resetear() {
  localStorage.removeItem("paellaAdulto");
  localStorage.removeItem("paellaMenor");
  const inputNinos = document.getElementById("ninos");
  const inputAdultos = document.getElementById("adultos");
  const txtAdultos = document.getElementById("txtAdultos");
  const txtNinos = document.getElementById("txtNinos");
  const btnCalcular = document.getElementById("calcularButton");
  inputNinos.outerHTML = txtNinos.outerHTML = "";
  inputAdultos.outerHTML = txtAdultos.outerHTML = "";
  btnCalcular.outerHTML = "";
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = "";
  document.getElementById("calcularButton").disabled = "false";
  document.getElementById("botonEmpezar").disabled = "false";
}
