// Array<T> - T[]

export function mulArgs(...args: Array<number>): number {
  return args.reduce((acc, valor) => acc * valor, 1);
}

export function concatenaStrings(...args: string[]): string {
  // return args.reduce((acc, valor) => acc + valor);
  return args.join();
}

export function toUpperCase(...args: string[]): string[] {
  return args.map((valor) => valor.toUpperCase());
}

console.log(mulArgs(2));
console.log(concatenaStrings('Hello', ' World'));
console.log(toUpperCase('a'));
