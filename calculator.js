'use strict'

class Calculator {
  //write your code here
  constructor () {
    this.number = 0
  }

  add (numberInput) {
    this.number += numberInput
    return this
  }
  
  substract (numberInput) {
    this.number -= numberInput
    return this
  }

  multiply (numberInput) {
    this.number *= numberInput
    return this
  }

  divide (numberInput) {
    this.number /= numberInput
    return this
  }

  square (numberInput) {
    this.number = Math.pow(this.number,numberInput)
    return this
  }

  squareRoot () {
    this.number = Math.sqrt(this.number)
    return this
  }

  circle(){
    this.number = Math.PI * (this.number + this.number)
    return this
  }

  getHasil(){
    return this.number
  }
}

/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/

let calculator = new Calculator()
calculator.add(2).multiply(8).squareRoot().circle()
console.log(calculator.number);

module.exports = {
  Calculator
}
