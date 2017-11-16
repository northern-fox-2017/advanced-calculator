'use strict'

class Calculator {
  //write your code here
  constructor (init=0) {
    this.currentValue = init
  }
  add (add) {
    this.currentValue += add;
    return this
  }
  substract (sub) { 
    this.currentValue -= sub;
    return this
  }
  multiply (mul) {
    this.currentValue *= mul
    return this
  }
  divide (div) {
    this.currentValue /= div;
    return this
  }
  square () {
    this.currentValue = Math.pow(this.currentValue,2);
    return this
  }
  squareRoot () {
    this.currentValue = Math.sqrt(this.currentValue,2);
    return this
  }
}

let angka = new Calculator();
console.log(angka.add(6).add(3).substract(5).multiply(3).divide(2).square().squareRoot());

let angka2 = new Calculator();
console.log(angka2.add(5).add(4));
console.log(angka2.square());
console.log(angka2.squareRoot());

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
