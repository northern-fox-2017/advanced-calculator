'use strict'

class Calculator {
  //write your code here
  constructor (init=0) {
    this.initValue = init
    this.currentValue = init
  }
  add () {
    let resultAdd = 0;
    for (let i = 0; i < arguments.length ; i++){
      resultAdd += arguments[i]
    }
    this.currentValue += resultAdd;
    return this
  }
  substract () {
    let resultSub = 0;
    for (let i = 0; i < arguments.length ; i++){
      resultSub -= arguments[i]
    }
    this.currentValue += resultSub;
    return this
  }
  multiply () {
    let resultMul = 1;
    for (let i = 0; i < arguments.length ; i++){
      resultMul *= arguments[i]
    }
    this.currentValue *= resultMul;
    return this
  }
  divide () {
    let resultDiv = 1;
    for (let i = 0; i < arguments.length ; i++){
      resultDiv *= arguments[i]
    }
    this.currentValue /= resultDiv;
    return this
  }
  square () {
    this.currentValue = Math.pow(this.currentValue,2);
    return this
  }
  squareRoot () {
    this.currentValue = Math.sqrt(this.currentValue,2);
    return this
  }
}

let angka = new Calculator();
console.log(angka.add(1,2).add(3).substract(5).multiply(3,2).divide(2).square().squareRoot());

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
