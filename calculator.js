'use strict'

class Calculator {
  //write your code here
  constructor (angkaPertama = 0) {
    // this.firstNum = firstNum
    this.hasil = angkaPertama
  }

  add (nextNum) {
    this.hasil += nextNum
    return this;
  }

  substract (nextNum) {
    this.hasil -= nextNum
    return this;
  }

  multiply (nextNum) {
    this.hasil *= nextNum
    return this;
  }

  divide (nextNum) {
    this.hasil /= nextNum
    return this;
  }

  square (nextNum) {
    this.hasil = Math.pow(this.hasil, nextNum)
    return this;
  }

  squareRoot () {
    this.hasil = Math.sqrt(this.hasil)
    return this;
  }
}

/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/

// Jika menggunakan fungsi / Method pertama selain add masukkan angkaPertama sebagai Parameter terlebih dahulu di class Calculator
// contoh => let newCalculator = new Calculator(angkaPertama);


module.exports = {
  Calculator
}
