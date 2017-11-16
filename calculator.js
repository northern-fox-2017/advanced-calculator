'use strict'

class Calculator {
  constructor () {
    this.hasil = 0;
  }
  add (num) {
     this.hasil += num;
     return this;
  }
  substract (num) {
     this.hasil -= num;
     return this
  }
  multiply (num) {
     this.hasil *= num;
     return this
  }
  divide (num) {
     this.hasil /= num;
     return this
  }
  square (num) {
     this.hasil = Math.pow(this.hasil, num);
     return this
  }
  squareRoot (num) {
     this.hasil = Math.sqrt(this.hasil, num);
     return this
  }
}

var Hitung = new Calculator();
Hitung.add(1).substract(-2).divide(3).multiply(3).square(2).squareRoot(2);
console.log(Hitung.hasil);

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
