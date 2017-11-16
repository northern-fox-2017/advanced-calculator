'use strict'

class Calculator {
  constructor () {
  this.result = 0;
  
  }
  add (tambah) {
    
    this.result += tambah
    return this 
  }
  substract (kurang) {
    this.result -= kurang
    return this
}
  multiply (kali) {

    this.result *= kali
    return this
  }
  divide (bagi) {
    this.result /= bagi 
    return this
  }
  square (pangkat) {
    this.result = Math.pow(this.result,pangkat)
    return this
  }
  squareRoot () {
    this.result = Math.sqrt(this.result)
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

console.log(new Calculator().add(4).substract(2).multiply(8).divide(2).square(2).squareRoot())
console.log(new Calculator().add(3).substract(2).multiply(8).divide(2).square(2).squareRoot())
console.log(new Calculator().add(2).substract(2).multiply(8).divide(2).square(2).squareRoot())
console.log(new Calculator().add(1).substract(2).multiply(8).divide(2).square(2).squareRoot())

module.exports = {
  Calculator
}
