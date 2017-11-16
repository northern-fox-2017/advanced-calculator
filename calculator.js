'use strict'

class Calculator {
  constructor () {
    // this.arrLog = []
    this.result = 0
  }
  add(input) {
    this.result += input
    // this.arrLog.push((this.result == 0) ? this.result)
    return this;
  }
  substract(input) {
    this.result -= input
    return this;
  }
  multiply(input) {
    this.result *= input
    return this;
  }
  divide(input) {
    this.result /= input
    return this;
  }
  square(input) {
    this.result = Math.pow(this.result, input)
    return this;
  }
  squareRoot() {
    this.result = Math.sqrt(this.result)
    return this;
  }
  getResult() {
    // return `${this.arrLog.toString()} Result: ${this.result}`
    return `Result: ${this.result}`;
  }
}

let calc = new Calculator()
// console.log(calc.add(5).getResult()); // 5
console.log(calc.add(5).substract(2).multiply(3).divide(3).square(2).squareRoot(3).getResult()); // 3

module.exports = {
  Calculator
}
