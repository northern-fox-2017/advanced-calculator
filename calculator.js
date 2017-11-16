'use strict'

class Calculator {
  //write your code here
  constructor() {
    this.num = 0
    const pi = Math.PI
    this.pi = pi
    
  }
  add(input) {
    this.num = this.num + input
    return this
  }
  substract(input) {
    this.num = this.num - input
    return this
  }
  multiply(input) {
    this.num = this.num * input
    return this
  }
  divide(input) {
    this.num = this.num / input
    return this
  }
  square(input) {
    this.num = Math.pow(this.num, input)
    return this
  }
  squareRoot() {
    this.num = Math.sqrt(this.num)
    
    return this
  }
}

let kalkul = new Calculator()
kalkul.add(3).add(5)
console.log(`3 + 5 = ${kalkul.num}`)

kalkul = new Calculator()
kalkul.add(7).square(2).multiply(kalkul.pi)
console.log(`Luas Lingkaran Jari-jari 7 = ${kalkul.num}`)

kalkul = new Calculator()
kalkul.add(3).squareRoot()
console.log(`Akar 3  = ${kalkul.num}`)
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
