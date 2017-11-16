'use strict'

class Calculator {
  //write your code here
  constructor (number = 0) {
    this.calculate = number
  }
  add (addition) {
    this.calculate += addition
    return this
  }
  substract (substractor) {
    this.calculate -= substractor
    return this
  }
  multiply (multiplier) {
    this.calculate = this.calculate * multiplier
    return this
  }
  divide (divider) {
    this.calculate = this.calculate / divider
    return this
  }
  square (exponent) {
    this.calculate = Math.pow(this.calculate, exponent)
    return this
  }
  squareRoot (root) {
    this.calculate = Math.sqrt(root)
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

let calculator = new Calculator(1)
// console.log(calculator.add(4).calculate);
// console.log(calculator.add(4).substract(1).calculate);
// console.log(calculator.add(4).substract(1).multiply(2).calculate);
// console.log(calculator.add(4).substract(1).multiply(2).divide(4).calculate);
// console.log(calculator.add(4).substract(1).multiply(2).divide(4).square(3).calculate);
console.log(calculator.add(4).substract(1).multiply(2).divide(4).square(3).squareRoot(2).calculate);