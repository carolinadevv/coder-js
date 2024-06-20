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

function calcular() {
  let comensalesAdultos = prompt("Ingresa cantidad de adultos");
  let comensalesMenores = prompt("Ingresa cantidad de niños");
  const comensalesEnteroAdultos = parseInt(comensalesAdultos);
  const comensalesEnteroMenores = parseInt(comensalesMenores);
  if (comensalesAdultos < 0) {
    alert("La cantidad de comensales debe ser mayor a 0");
  }
  if (comensalesMenores < 0) {
    alert("La cantidad de comensales debe ser mayor a 0");
  }

  const paellas = [];

  for (let index = 0; index < comensalesEnteroAdultos; index++) {
    const paella = new Paella();
    console.log(paella);
    paellas.push(paella);
  }

  for (let index = 0; index < comensalesEnteroMenores; index++) {
    const paella = new Paella();
    paella.paellaMenores();
    console.log(paella);
    paella.paellaMenores();
    paellas.push(paella);
  }

  console.log(paellas);
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

  alert(
    "Paellas Adultos: " +
      paellasAdultos.length +
      ", Paellas Menores: " +
      paellasMenores.length
  );

  alert(
    "Arroz total: " +
      arrozTotal +
      " gr " +
      ", Sepia total: " +
      sepiaTotal +
      " gr " +
      ", Calamar total: " +
      calamarTotal +
      " gr " +
      ", Caldo total: " +
      caldoTotal +
      " gr " +
      ", Cebolla total: " +
      cebollaTotal +
      " gr " +
      ", Guisante total: " +
      guisanteTotal +
      " gr " +
      ", Judia Verde total: " +
      judiaVerdeTotal +
      " gr " +
      ", Mejillon total: " +
      mejillonTotal +
      " gr " +
      ", Langostino total: " +
      langostinoTotal +
      " gr " +
      ", Almeja total: " +
      almejaTotal +
      " gr " +
      ", Ajo total: " +
      ajoTotal +
      " gr " +
      ", Tomate total: " +
      tomateTotal +
      " gr " +
      ", Azafran total: " +
      azafranTotal +
      " gr " +
      ", Aceite total: " +
      aceiteTotal +
      " gr "
  );

  alert(
    "Costo total: $" +
      (paellasAdultos.length * COSTO_PAELLA_ADULTO +
        paellasMenores.length * COSTO_PAELLA_MENOR)
  );
}
