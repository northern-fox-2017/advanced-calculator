'use strict'

class Calculator {
  //write your code here
  constructor () {
    this.result = 0;
  }
  add (tambah) {
    this.result += tambah
    return this
  }
  substract (kurang) {
    this.result -= kurang
    return this
  }
  multiply (kali) {

    this.result = this.result * kali
    return this
  }
  divide (bagi) {
    this.result /= bagi
    return this
  }
  square (pangkat) {
    this.result = Math.pow(this.result, pangkat)
    return this
  }
  squareRoot (akar) {
    this.result = Math.sqrt(this.result)
    return this
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

let result = new Calculator();

// console.log(result.substract(10));
console.log(result.add(10).substract(2).multiply(2).divide(2).square(2).squareRoot());
