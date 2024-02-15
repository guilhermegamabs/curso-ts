export function criaError(): never {
  throw new Error('Erro Qualquer');
}

console.log(criaError());
