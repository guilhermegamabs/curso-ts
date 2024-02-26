export abstract class Personagem {
  constructor(
    protected name: string,
    protected ataque: number,
    protected vida: number,
  ) {}

  atacar(personagem: Personagem): void {
    this.bordao();
    console.log(`${this.name} está atacando...`);
    personagem.perderVida(this.ataque);
  }

  perderVida(forcaAtaque: number): void {
    console.log(`${this.name} agora tem ${this.vida} de vida...`);
    this.vida -= forcaAtaque;
  }

  abstract bordao(): void;
}

export class Guerreira extends Personagem {
  bordao(): void {
    console.log('GUERREIRA AO ATAQUE!');
  }
}

export class Monstro extends Personagem {
  bordao(): void {
    console.log('MONSTRO AO ATAQUE!');
  }
}

const guerreira = new Guerreira('Guerreira', 100, 1000);
const monstro = new Monstro('Monstro', 80, 700);

guerreira.atacar(monstro);
guerreira.atacar(monstro);
guerreira.atacar(monstro);
