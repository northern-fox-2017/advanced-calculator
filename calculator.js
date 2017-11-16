'use strict'

class Calculator {
  //write your code here
  constructor (input) {
    this.input = 0
    this.phi = Math.PI
    
  }
  add (numberAdd) {
    this.input = this.input + numberAdd
    return this
  }
  substract (numberSubstract) {
    this.input = this.input - numberSubstract
    return this
  }
  multiply (numberMultiply) {
    this.input = this.input * numberMultiply
    return this
  }
  divide (numberDivide) {
    this.input = this.input / numberDivide
    return this
  }

  square (numberSquare) {  
    this.input = Math.pow(this.input, numberSquare)
    return this
  }

  squareRoot () {
    this.input = Math.sqrt(this.input)
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
let addNumber = new Calculator()
addNumber.add(9).substract(1).square(2)
console.log(`Hasil : 9 - 1 pangkat 2 adalah ${addNumber.input} `)

module.exports = {
  Calculator
}
