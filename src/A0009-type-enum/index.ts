enum Cores {
  VERMELHO = 10, // 0
  AZUL = 100, // 1
  AMARELO = 1000, // 2
  // PRETO = 'Preto',
}

console.log(Cores.VERMELHO);
console.log(Cores[1000]);
// console.log(Cores.PRETO);

function chooseColor(cor: Cores): void {
  console.log(Cores[cor]);
}

chooseColor(Cores.AZUL);
