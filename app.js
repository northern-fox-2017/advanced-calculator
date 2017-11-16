const {Calculator} = require('./calculator');
const pi = Math.PI.toFixed(2)
let angkaPertama = 5;
let newCalculator = new Calculator();

// console.log(`Hasil = ${newCalculator.add(2).multiply(8).squareRoot().hasil}`);
console.log(`
  --------------------------------
  ${pi}
  `);


console.log(`
  mencari lingkaran dengan r = 3
  Hasil Lingkaran = ${newCalculator.add(2).multiply(pi).multiply(3).hasil}`);
