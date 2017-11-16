'use strict'

class Calculator {
  //write your code here
  constructor (input) {
    this.input = 0
  }
  add (num) {
    this.input += num
    return this
  }
  substract (num) {
    this.input -= num
    return this
  }
  multiply (num) {
    this.input = this.input * num
    return this
  }
  divide (num) {
    this.input = this.input / num
    return this
  }
  square (num) {
    this.input = Math.pow(this.input,num)
    return this
  }
  squareRoot () {
    this.input = Math.floor(Math.sqrt(this.input))
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

let hitung = new Calculator()
console.log(hitung.add(2).substract(1).multiply(5).divide(3).squareRoot();

//
// module.exports = {
//   Calculator
// }
