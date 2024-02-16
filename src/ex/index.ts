export class Quisito {
  filhos1: number;
  filhos2: number;
  filhos3: number;
  constructor(filhos1: number, filhos2: number, filhos3: number) {
    this.filhos1 = filhos1;
    this.filhos2 = filhos2;
    this.filhos3 = filhos3;
  }

  calcular(): void {
    const qtdFilhos = this.filhos1 + this.filhos2 + this.filhos3;
    let bolsa = 0;

    if (this.filhos1 > 1) {
      bolsa += this.filhos1 * 25.12;
    }

    if (this.filhos2 > 1) {
      bolsa += this.filhos2 * 15.88;
    }

    if (this.filhos3 > 1) {
      bolsa += this.filhos3 * 12.44;
    }

    console.log(
      `Você tem um total de ${qtdFilhos} filhos e vai receber R$${bolsa} de bolsa`,
    );
  }
}

const bolsa1 = new Quisito(5, 5, 5);
bolsa1.calcular();
