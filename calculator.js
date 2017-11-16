'use strict'

class Calculator {
  //write your code here
  constructor (num) {
	  this.num = num
  }
  add (tambah) {
	  this.num += tambah 
	  return this
  }
  substract (kurang) {
	  this.num -= kurang
	  return this
  }
  multiply (kali) {
	  this.num *= kali
	  return this
  }
  divide (bagi) {
	  this.num /= bagi
	  return this
  }
  square (pangkat) {
	  this.num = Math.pow(this.num, pangkat)
	  return this
  }
  
  squareRoot () {
	  this.num = Math.sqrt(this.num)
	  return this
  }
}

var cal = new Calculator(0)
console.log(cal.add(50).substract(40).multiply(2).divide(2).square(2).squareRoot())

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
