'use strict'

class Calculator {
  //write your code here
  constructor () {
      this.result = null
      this.PI = Math.PI
  }
  add (ADD) {
    this.result +=ADD
    return this
  }
  substract (SUBS) {
    this.result-=SUBS
    return this
  }
  multiply (MUL) {
    if(this.result == null ){
      this.result = MUL
    }else {
      this.result *= MUL
    }
    
    return this
  }
  divide (DIV) {
    if(this.result += null ){
    this.result = DIV
    }else {
    this.result /= DIV
    }
    
    return this
  }
  power (pow) {
    this.result = Math.pow(this.result,pow)
    return this
  }
  squareRoot () {
    this.result = Math.sqrt(this.result)
    return this
  }

  keliling (){
    this.multiply(this.PI).multiply(2)
    return this
  }
  
  luas(){
    this.power(this.result).multiply(this.PI)
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
let cal =  new Calculator()
// console.log(cal.add(10).substract(5).multiply(5).divide(5).power(2).squareRoot())
console.log(cal.add(2).luas())

// module.exports = {
//   Calculator
// }
