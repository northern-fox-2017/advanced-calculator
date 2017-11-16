'use strict'

class Calculator {
  //write your code here
  constructor () {
    this.result = 0
  }
  add (num) {
    this.result += num
    return this
  }
  substract (num) {
    this.result -= num
    return this
  }
  multiply (num) {
    this.result *= num
    return this
  }
  divide (num) {
    this.result /= num
    return this
  }
  square (num) {
    this.result = Math.pow(this.result, num )
    return this
  }
  squareRoot () {
    this.result = Math.sqrt(this.result);
    return this
  }
}

let hitung = new Calculator();
hitung.add(12).substract(1).multiply(2).divide(2).square(2).squareRoot()

console.log(hitung.result);

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
