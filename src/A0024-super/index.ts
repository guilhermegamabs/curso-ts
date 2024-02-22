export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string,
  ) {}

  getIdade(): number {
    return this.idade;
  }

  getCpf(): string {
    return this.cpf;
  }

  getNomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

export class Aluno extends Pessoa {
  getNomeCompleto(): string {
    return `Aluno: ${this.nome} ${this.sobrenome}`;
  }
}

export class Cliente extends Pessoa {
  getNomeCompleto(): string {
    return `Cliente: ${this.nome} ${this.sobrenome}`;
  }
}

const aluno = new Aluno('Guilherme', 'Gama', 19, '111.111.111-11');
const cliente = new Cliente('João', 'Pedr0', 23, '222.222.222-22');
console.log(aluno.getNomeCompleto());
console.log(aluno);
console.log(cliente);
