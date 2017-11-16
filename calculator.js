'use strict'

class Calculator {
  constructor (angka) {
    this.angka = angka
  }

  add (tambah = 5) {
    this.angka = this.angka + tambah
    return this
  }

  substract (kurang = 5) {
    this.angka = this.angka - kurang
    return this
  }
  multiply (kali = 5) {
    this.angka = this.angka * kali
    return this
  }
  divide (bagi = 2) {
    this.angka = this.angka / bagi
    return this
  }

  square (pangkat = 2) {
    this.angka = Math.pow(this.angka, pangkat)
    return this
  }

  squareRoot () {
    this.angka = Math.sqrt(this.angka);
    return this;
  }
}

let nilai = new Calculator(20);
console.log(nilai.add().substract().multiply().divide().square().squareRoot());
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
