'use strict'

class Calculator {
  constructor () {
    this.hasil = 0;
    const pi = Math.PI;
    this.pi = pi;
  }
  add (tambah) {
    this.hasil += tambah;
    return this
  }
  substract (kurang) {
    this.hasil -= kurang
    return this
  }
  multiply (kali) {
    this.hasil *= kali
    return this
  }
  divide (bagi) {
    this.hasil /= bagi
    return this
  }
  square (pangkat) {
    this.hasil = Math.pow(this.hasil, pangkat)
    return this
  }
  squareRoot (akar) {
    this.hasil = Math.sqrt(this.hasil, akar)
  }
}

/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/

module.exports = {
  Calculator
}

let calculatorAndrey = new Calculator();
calculatorAndrey.add(5).multiply(10)
console.log(calculatorAndrey.hasil)


//Menghitung luas lingkaran
//PI * r^2
calculatorAndrey.add(7).square(2).multiply(calculatorAndrey.pi)
console.log(calculatorAndrey.hasil)