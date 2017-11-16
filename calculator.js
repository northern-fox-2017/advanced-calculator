'use strict'

class Calculator {
  //write your code here
  constructor () {
    this.num = 0
  }
  add (angkaTambah) {
    this.num += angkaTambah
    return this
  }
  substract (angkaKurang) {
    this.num -= angkaKurang
    return this
  }
  multiply (angkaKali) {
    this.num *= angkaKali
    return this
  }
  divide (angkaBagi) {
    this.num /= angkaBagi
    return this
  }
  square (angkaPangkat) {
    this.num = Math.pow(this.num, angkaPangkat)
    return this
  }
  squareRoot (angkaAkar) {
    this.num = Math.sqrt(this.num)
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
let calculator = new Calculator()
console.log(calculator.add(10).substract(10).multiply(0).add(10).square(10).squareRoot(15).multiply(0));


module.exports = {
  Calculator
}
