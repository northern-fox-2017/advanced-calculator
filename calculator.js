'use strict'

class Calculator {
  //write your code here
  constructor () {
    this.sum=0;
  }
  add (input) {
    this.sum+=input;
    return this
  }
  substract (input) {
    this.sum+=input;
    return this
  }
  multiply (input) {
    this.sum*=input;
    return this
  }
  divide (input) {
    this.sum/=input;
    return this
  }
  square (input) {
    this.sum=Math.pow(this.sum,input);
    return this
  }
  squareRoot () {
    this.sum=Math.sqrt(this.sum)
    return this
  }
  PI(){
    this.sum=this.sum*Math.PI
    return this
  }
  reset(){ 
    this.sum=0;
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
var calcul = new Calculator();
calcul.add(4).squareRoot();
console.log(`Angkar pangkat 4 = ${calcul.sum}`)


calcul.reset();
calcul.add(14).multiply(2).PI()
console.log(`Luas lingkaran dari jari-jari 14 = ${calcul.sum}`)
module.exports = {
  Calculator
}

//MODEL CALCULATOR 2 PARAMETER

// class Calculator {
//   //write your code here
//   constructor (firstNumber,secondNumber) {
//     this.firstNumber=firstNumber
//     this.secondNumber=secondNumber
//     this.sum=0;
//   }
//   add () {
//     this.sum=this.firstNumber+this.secondNumber;
//     return this
//   }
//   substract () {
//     this.sum=this.firstNumber-this.secondNumber;
//     return this
//   }
//   multiply () {
//     this.sum=this.firstNumber*this.secondNumber;
//     return this
//   }
//   divide () {
//     this.sum=this.firstNumber/this.secondNumber;
//     return this
//   }
//   square () {
//     this.sum=Math.pow(this.firstNumber,this.secondNumber);
//     return this
//   }
//   squareRoot () {
//     this.sum=Math.sqrt(Math.pow(this.firstNumber,this.secondNumber))
//     return this
//   }
// }

// /** note : you can use several features from ecmascript, such as:
// * - Classes
// * - Default Parameters
// * - Destructured Assignment
// * - Template Literals
// * - Method Chaining
// */
// var calcul = new Calculator(2,3);
