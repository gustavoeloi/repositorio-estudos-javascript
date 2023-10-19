const words = [
  "gustavo",
  "henrique",
  "eloi",
  "domingues",
  "Ana",
  "Barbosa",
  "Alfredo",
  "Barbara",
];

const arrayIniciaComA = words.filter(
  (nome) =>
    retornaPrimeiroNome(nome) === "A" || retornaPrimeiroNome(nome) === "B"
);

function retornaPrimeiroNome(nome) {
  nome = nome.split("");
  let primeiraLetra = nome[0];
  return primeiraLetra.toUpperCase();
}

// console.log(arrayIniciaComA);

// Filtrando valores de um JSON

let qtdMenoresDe18 = 0;

const listaConvidados = [
  {
    id: 1,
    nome: "Gustavo",
    idade: 19,
  },
  {
    id: 2,
    nome: "Michael Jordan",
    idade: 48,
  },
  {
    id: 3,
    nome: "Gui",
    idade: 6,
  },
  {
    id: 4,
    nome: "Joana",
    idade: 12,
  },
  {
    id: 5,
    nome: "João",
    idade: 19,
  },
];

function filterAgeIsHigherThan18(obj) {
  if (obj.idade < 18) {
    qtdMenoresDe18++;
    console.log(`${obj.nome} não é maior de 18 anos.`);
    return true;
  }
  return false;
}

const resultado = listaConvidados.filter(filterAgeIsHigherThan18);

console.log(resultado);
console.log(
  `${qtdMenoresDe18} convidados não estão aptos a partciparem da festa`
);
