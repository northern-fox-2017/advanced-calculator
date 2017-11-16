'use strict'

class Calculator {
  constructor (angka) {
    this.angka = angka
  }
  add (tambah) {
    this.angka += tambah
    return this
  }
  substract (kurang) {
    this.angka -= kurang
    return this
  }
  multiply (kali) {
    this.angka *= kali
    return this
  }
  divide (bagi) {
    this.angka /= bagi
    return this
  }
  square (pangkat) {
    this.angka = Math.pow(this.angka, pangkat)
    return this
  }
  squareRoot () {
    this.angka = Math.sqrt(this.angka)
    return this
  }
  result(){
    return this.angka
  }
}

let kalkulator = new Calculator(7)
console.log(kalkulator.add(2).substract(7).multiply(3).divide(2).square(4).squareRoot().add(1).result());

module.exports = {
  Calculator
}
