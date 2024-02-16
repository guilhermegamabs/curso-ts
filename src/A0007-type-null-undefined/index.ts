let x;

if (typeof x === 'undefined') x = 20;
console.log(x);

export function createPerson(
  firstName: string,
  lastName?: string,
): {
  firstName: string;
  lastName?: string;
} {
  return {
    firstName,
    lastName,
  };
}

export function squareOf(x: unknown): number | null {
  if (typeof x === 'number') {
    return x * x;
  }

  return null;
}

console.log(createPerson('Guilherme', 'Gama'));
console.log(squareOf('a'));
