// O método MAP invoca a função callback passada por argumento para cada elemento do Array e devolve um novo Array como resultado

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const map1 = arr.map((valor) => valor * valor);

// for (numero of map1) {
//   console.log(numero);
// }

// Pega nomes de um objeto e adicionar 1 ano a mais na idade e transformar o primeiro nome em maísculo

const objPessoas = [
  {
    nome: "gustavo eloi",
    idade: 18,
  },
  {
    nome: "dimitri payet",
    idade: 35,
  },
  {
    nome: "pablo vegetti",
    idade: 34,
  },
  {
    nome: "gabriel pec",
    idade: 23,
  },
];

let nomeUsuarios = objPessoas.map((pessoa) => {
  const obj = objGenerator(pessoa);
  return obj.nome;
});

let idadeUsuarios = objPessoas.map((pessoa) => {
  const obj = objGenerator(pessoa);
  delete obj.nome;
  return obj;
});

let usuarios = objPessoas.map((pessoa, i) => {
  let obj = objGenerator(pessoa);
  obj.id = idGenerator();
  return obj;
});

console.log(nomeUsuarios);
console.log(idadeUsuarios);
console.log(usuarios);
console.log(objPessoas);

function idGenerator() {
  return Math.floor(Math.random() * 100 + 1);
}

function objGenerator(objeto) {
  let obj = { ...objeto };
  return obj;
}
