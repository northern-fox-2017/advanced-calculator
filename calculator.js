'use strict'

class Calculator {
  //write your code here
  constructor (number) {
    this.number = number
  }
  add (angka) {
     this.number += angka
     return this
  }
  substract (angka) {
    this.number -= angka
    return this
  }
  multiply (angka) {
    this.number *= angka
    return this
  }
  divide (angka) {
    this.number /= angka
    return this
  }
  square () {
    this.number = Math.sqrt(this.number)
    return this
  }
  squareRoot (angka) {
    this.number = Math.pow(this.number, angka)
    return this
  }
  mathPi (){
    this.number = this.number * Math.PI
    return this
  }
}

let calculate = new Calculator(10)
console.log(calculate.add(8).mathPi());


// function squirt(n, g) {
//     if (!g) {
//         // Take an initial guess at the square root
//         g = n / 2.0;
//     }
//     var d = n / g;              // Divide our guess into the number
//     var ng = (d + g) / 2.0;     // Use average of g and d as our new guess
//     if (g == ng) {
//         // The new guess is the same as the old guess; further guesses
//         // can get no more accurate so we return this guess
//         return g;
//     }
//     // Recursively solve for closer and closer approximations of the square root
//     return squirt(n, ng);
// }
//
// console.log(squirt(42)); // 6.48074069840786




/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/
//
// module.exports = {
//   Calculator
// }
