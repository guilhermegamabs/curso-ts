/* eslint-disable */
let nome: string = 'Guilherme';
let idade: number = 19;
let adulto: boolean = true;
let simbolo: symbol = Symbol('qualquer-symbol');
// let big: bigint = 10n;

let arrayDeNumero: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arrayDeNumero2: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let arrayDeStrings: Array<string> = ['a', 'b', 'c'];
let arrayDeStrings2: string[] = ['a', 'b', 'c'];

let pessoas: { nome: string, idade: number, adulto?: boolean } = {
  nome: 'Guilherme',
  idade: 19,
  adulto: true
};

function soma(x: number, y: number) {
  return x + y;
}

const soma2: (x: number, y: number) => number = (x, y) => x + y;

const rsult = soma(2, 2);
