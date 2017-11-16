'use strict'

class Calculator {
  //write your code here
  constructor () {
    this.result = 0;
  }
  add (num) {
    this.result += num;
    return this;
  }
  substract (num) {
    this.result -= num;
    return this;
  }
  multiply (num) {
    this.result *= num;
    return this;
  }
  divide (num) {
    this.result /= num;
    return this;
  }
  square (exponent) {
    this.result = Math.pow(this.result, exponent);
    return this;
  }
  squareRoot () {
    this.result = Math.sqrt(this.result);
    return this;
  }
  getResult () {
    return `Hasilnya adalah ${this.result}`
  }
}

/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/

let valueLess = new Calculator()

console.log(valueLess.add(5).substract(1).multiply(2).divide(2).squareRoot().square(2).getResult());

module.exports = {
  Calculator
}
