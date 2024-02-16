let x = 10; // eslint-disable-line
const y = 10;

let a = 100 as const; // eslint-disable-line

console.log(x, y, a);

const pessoa = {
  nome: 'Guilherme' as const,
  sobrenome: 'Gama',
};

// pessoa.nome = 'a';
console.log(pessoa);

function escolhaCor(cor: 'Vermelho' | 'Amarelo' | 'Azul'): string {
  return cor;
}

console.log(escolhaCor('Amarelo'));

export default 1;
