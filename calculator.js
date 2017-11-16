'use strict'

class Calculator {
  //write your code here
  constructor () {
    this.hasil = 0;
  }
  addd (number) {
    debugger;
    // let tambah = this.hasil;
    // tambah += number;

    // return this.total(tambah);
    this.hasil += number
    return this

  }
  substract (number) {
    // let kurang = this.hasil;
    // kurang -= number
    debugger;
    this.hasil -= number;

    return this;
  }
  multiply (number) {
    debugger;
    if(this.hasil === 0){
      this.hasil = 1;
    }

    this.hasil *= number;

    return this;
  }
  divide (number) {
    debugger;
    if(this.hasil === 0){
      this.hasil = 1;
    }

    this.hasil /= number;

    return this;
  }
  square (number) {
    debugger;
    if(this.hasil === 0){
      this.hasil = number;
    }

    this.hasil = Math.pow(this.hasil, number);
    
    return this
  }
  squareRoot (number) {
    debugger;
    
    this.hasil = Math.sqrt(this.hasil);

    return this;
  }
  
}

var jumlah = new Calculator();
console.log(jumlah.square(20));

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
