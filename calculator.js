'use strict'

class Calculator {
  //write your code here
  constructor () {
    this.value = 0
  }
  add (num) {
    this.value += num
    return this
  }
  substract (num) {
    this.value -= num
    return this
  }
  multiply (num) {
    this.value *= num
    return this
  }
  divide (num) {
    this.value = this.value / num
    return this
  }
  powerOf (num) {
    this.value = Math.pow(this.value,num)
    return this
  }
  squareRoot () {
    this.value = Math.sqrt(this.value)
    return this
  }
  pi(){
    this.value = Math.PI * this.value
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

console.log(hitung.add(20).substract(10).divide(5).multiply(2).powerOf(2).squareRoot().pi())

//circle radius of 13cm
console.log("circle radius of 13cm")
console.log(hitung.add(13).powerOf(2).pi())

module.exports = {
  Calculator
}
