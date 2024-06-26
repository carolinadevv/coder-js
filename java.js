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

const COSTO_PAELLA_ADULTO = 10000;
const COSTO_PAELLA_MENOR = 5000;

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
  }
}

function inicio() {
  const contenedor = document.getElementsByTagName("div");
  const parrafo = document.createElement("p");
  parrafo.innerHTML = "<h2>Ingresa cantidad de adultos<h2>";
  contenedor[0].appendChild(parrafo);
  const inputNumber = crearInput("adultos");
  contenedor[0].appendChild(inputNumber);
  const parrafoNinos = document.createElement("p");
  parrafoNinos.innerHTML = "<h2>Ingresa cantidad de niños<h2>";
  contenedor[0].appendChild(parrafoNinos);
  const inputNumberNinos = crearInput("ninos");
  contenedor[0].appendChild(inputNumberNinos);
  const button = document.getElementById("calcularButton");
  button.hidden = false;
}

function crearInput(id) {
  const inputNumber = document.createElement("input");
  inputNumber.type = "number";
  inputNumber.min = 0;
  inputNumber.step = 1;
  inputNumber.id = id;
  return inputNumber;
}

function calcular() {
  let comensalesAdultos = document.getElementById("adultos").value;
  let comensalesMenores = document.getElementById("ninos").value;

  const paellas = [];

  for (let index = 0; index < comensalesAdultos; index++) {
    const paella = new Paella();
    paellas.push(paella);
  }

  for (let index = 0; index < comensalesMenores; index++) {
    const paella = new Paella();
    paella.paellaMenores();
    paella.paellaMenores();
    paellas.push(paella);
  }

  const paellasAdultos = paellas.filter((paella) => paella.adulto === true);
  const paellasMenores = paellas.filter((paella) => paella.adulto === false);

  const arrozTotal = paellas.reduce(
    (acumulador, paella) => acumulador + paella.arroz,
    0
  );
  const sepiaTotal = paellas.reduce(
    (acumulador, paella) => acumulador + paella.sepia,
    0
  );
  const calamarTotal = paellas.reduce(
    (acumulador, paella) => acumulador + paella.calamar,
    0
  );
  const caldoTotal = paellas.reduce(
    (acumulador, paella) => acumulador + paella.caldo,
    0
  );
  const cebollaTotal = paellas.reduce(
    (acumulador, paella) => acumulador + paella.cebolla,
    0
  );
  const guisanteTotal = paellas.reduce(
    (acumulador, paella) => acumulador + paella.guisante,
    0
  );
  const judiaVerdeTotal = paellas.reduce(
    (acumulador, paella) => acumulador + paella.judiaVerde,
    0
  );
  const mejillonTotal = paellas.reduce(
    (acumulador, paella) => acumulador + paella.mejillon,
    0
  );
  const langostinoTotal = paellas.reduce(
    (acumulador, paella) => acumulador + paella.langostino,
    0
  );
  const almejaTotal = paellas.reduce(
    (acumulador, paella) => acumulador + paella.almeja,
    0
  );
  const ajoTotal = paellas.reduce(
    (acumulador, paella) => acumulador + paella.ajo,
    0
  );
  const tomateTotal = paellas.reduce(
    (acumulador, paella) => acumulador + paella.tomate,
    0
  );
  const azafranTotal = paellas.reduce(
    (acumulador, paella) => acumulador + paella.azafran,
    0
  );
  const aceiteTotal = paellas.reduce(
    (acumulador, paella) => acumulador + paella.aceite,
    0
  );

  monstrarResultado(paellasAdultos, paellasMenores);

  guardarResultado(paellasAdultos, paellasMenores);

  mostrarLocalStorage();

  // alert(
  //   "Arroz total: " +
  //     arrozTotal +
  //     " gr " +
  //     ", Sepia total: " +
  //     sepiaTotal +
  //     " gr " +
  //     ", Calamar total: " +
  //     calamarTotal +
  //     " gr " +
  //     ", Caldo total: " +
  //     caldoTotal +
  //     " gr " +
  //     ", Cebolla total: " +
  //     cebollaTotal +
  //     " gr " +
  //     ", Guisante total: " +
  //     guisanteTotal +
  //     " gr " +
  //     ", Judia Verde total: " +
  //     judiaVerdeTotal +
  //     " gr " +
  //     ", Mejillon total: " +
  //     mejillonTotal +
  //     " gr " +
  //     ", Langostino total: " +
  //     langostinoTotal +
  //     " gr " +
  //     ", Almeja total: " +
  //     almejaTotal +
  //     " gr " +
  //     ", Ajo total: " +
  //     ajoTotal +
  //     " gr " +
  //     ", Tomate total: " +
  //     tomateTotal +
  //     " gr " +
  //     ", Azafran total: " +
  //     azafranTotal +
  //     " gr " +
  //     ", Aceite total: " +
  //     aceiteTotal +
  //     " gr "
  // );

  // alert(
  //   "Costo total: $" +
  //     (paellasAdultos.length * COSTO_PAELLA_ADULTO +
  //       paellasMenores.length * COSTO_PAELLA_MENOR)
  // );
}

function monstrarResultado(paellasAdultos, paellasMenores) {
  const resultado = document.getElementById("resultado");
  const parrafo = document.createElement("p");
  parrafo.innerHTML = "<h2>Total paellas<h2>";
  const total = `Adulto: ${paellasAdultos.length}, Menores: ${paellasMenores.length}`;
  resultado.append(total);
  const costoTotal = `Costo paella adulto: ${
    paellasAdultos.length * COSTO_PAELLA_ADULTO
  }, Costo paella menores: ${paellasMenores.length * COSTO_PAELLA_MENOR}`;
  resultado.append(costoTotal);
}

function guardarResultado(paellasAdultos, paellasMenores) {
  const jsonPaellaAdulto = JSON.stringify(paellasAdultos);
  localStorage.setItem("paellaAdulto", jsonPaellaAdulto);
}

function mostrarLocalStorage() {
  const paellaAdulto = localStorage.getItem("paellaAdulto");
  const json = JSON.parse(paellaAdulto);
  console.log(json[0]);
  const resultado = document.getElementById("resultado");
  resultado.append(`Cantidad Arroz: ${json[0].arroz}`);
}
