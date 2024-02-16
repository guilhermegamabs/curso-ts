type HasName = { name: string };
type HasLastName = { lastName: string };
type HasAge = { age: number };

type Person = HasName & HasLastName & HasAge;

const pessoa: Person = {
  name: 'Guilherme',
  lastName: 'Gama',
  age: 19,
};

console.log(pessoa);
