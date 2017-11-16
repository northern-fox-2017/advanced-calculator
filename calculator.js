'use strict'

class Calculator {
  //write your code here
  constructor(num = 1) {
    this.num = num;
  }

  add(num) {
    this.num += num;
    return this;
  }

  substract(num) {
    this.num -= num;
    return this;
  }

  multiply(num) {
    this.num *= num;
    return this;
  }

  divide(num) {
    this.num /= num;
    return this;
  }

  square(num) {
    this.num = Math.pow(this.num, num);
    return this;
  }

  squareRoot() {
    this.num = Math.sqrt(this.num);
    return this;
  }

  pi() {
    this.num = Math.PI * this.num;
    return this;
  }
}

const calculate = new Calculator();
console.log(calculate.add(10).substract(5).multiply(3).divide(2).square(2).squareRoot().pi());

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
