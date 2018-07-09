'use strict'

class Calculator {
  //write your code here
  constructor () {
    this.result = null;
  }
  add (tambah) {
    this.result += tambah;
    return this
  }
  substract (kurang) {
    this.result -= kurang;
    return this
  }
  multiply (kali) {
    if(this.result === null) {
      this.result = kali;
    } else {
      this.result *= kali;
    }

    return this;
  }
  divide (bagi) {
    if(this.result === null) {
      this.result = bagi;
    } else {
      this.result /= bagi;
    }
    return this
  }
  square (pangkat) {
    this.result = Math.pow(this.result, pangkat)
    return this
  }
  squareRoot () {
    this.result = Math.sqrt(this.result);
    return this;
  }
  countCircle(radius) {
    const phi = 3.14;

    this.result = radius * radius * phi;
    return this;
  }
}

var hasil = new Calculator();
var multiply = new Calculator();
var divide = new Calculator();
var countCircle = new Calculator();

console.log(hasil.add(5).substract(2).multiply(3).divide(3).square(3).squareRoot());
console.log(multiply.multiply(5));
console.log(divide.divide(4));
console.log(countCircle.countCircle(7));
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
