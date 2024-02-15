const objectA: {
  chaveA: string;
  chaveB: string;
  [key: string]: unknown;
} = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};

objectA.chaveA = 'Valor C';
objectA.chaveAleatoria = 'Valor sfsdgfdg';

console.log(objectA);
