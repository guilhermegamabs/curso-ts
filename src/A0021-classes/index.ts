// Versão Longa
export class Empresa {
  readonly nome: string;
  private readonly colaboradores: Colaborador[] = [];
  protected readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  setColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  getColaboradores(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }
}

// Versão Curta
export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

const empresa1 = new Empresa('Instagram', '11.111.111/1111-11');
const colaborador1 = new Colaborador('João', 'Alberto');
const colaborador2 = new Colaborador('Pedro', 'Lucas');
const colaborador3 = new Colaborador('Guilherme', 'Gama');

empresa1.setColaborador(colaborador1);
empresa1.setColaborador(colaborador2);
empresa1.setColaborador(colaborador3);
empresa1.getColaboradores();
