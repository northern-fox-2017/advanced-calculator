'use strict'

class Calculator {
  //write your code here
  constructor () {
      this.value = 0;
  }
  add (num) {
    this.value += num;
    return this;
  }
  substract (num) {
    this.value -= num;
    return this;
  }
  multiply (num) {
    this.value *= num;
    return this
  }
  divide (num) {
    this.value /= num;
    return this
  }
  square (num) {
    this.value = Math.pow(this.value, num);
    return this
  }
  squareRoot () {
    this.value = Math.sqrt(this.value);
    return this
  }
  result(){
    return `hasil akhir = ${this.value}`;
    // return this
  }
}

/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/
let output = new Calculator();
// console.log(output.add(5).substract(2).multiply(5).divide(2).square(2).squareRoot().result())
console.log(output.add(5).substract(3).multiply(10).divide(2).square(3).squareRoot().result())
// module.exports = {
//   Calculator
// }
