'use strict'

class Calculator {
  constructor () {
    this.result=0

  }

  add (input) {
    this.result+= input
    return this
  }

  substract (input) {
    this.result-= input
    return this
  }

  multiply (input) {
    this.result = this.result * input
    return this
  }

  divide (input) {
    this.result = this.result / input
    return this
  }

  square (input) {
    this.result = Math.pow(this.result, input);
    return this
  }

  squareRoot () {
    this.result=Math.sqrt(this.result);
    return this
  }
  printResult () {
    return `The Result is ${this.result}`
  }

}

/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/
let calculator = new Calculator
console.log(calculator.add(10).substract(5).square(2).divide(5).add(100).divide(5).multiply(10).substract(201).squareRoot().printResult());

module.exports = {
  Calculator
}
