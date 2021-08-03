let MyMath = {
    sum() {
        console.log(this.a + this.b);
    },
    multiplication() {
        console.log(this.a * this.b);
    },
    division() {
        console.log(this.a / this.b);
    },
    subtraction() {
        console.log(this.a - this.b);

    }
};

MyMath.a = 5;
MyMath.b = 2;
// function suma(num1, num2) {
//     return console.log(num1 + num2);
// }
// function multiply(num1, num2) {
//     return console.log(num1 * num2);
// }
// function divide(num1, num2) {
//     return console.log(num1 / num2);
// }
// function subtract(num1, num2) {
//     return console.log(num1 - num2);
// }
console.log(MyMath);
// MyMath.sum = suma(MyMath.a, MyMath.b);
// MyMath.multiplication = multiply(MyMath.a, MyMath.b);
// MyMath.division = divide(MyMath.a, MyMath.b);
// MyMath.subtraction = subtract(MyMath.a, MyMath.b);

MyMath.sum();
MyMath.multiplication();
MyMath.division();
MyMath.subtraction();