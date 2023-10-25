// //Задание 1
// function min(a, b) {
//     if (a < b) {
//         return a;
//     } else {
//         return b;
//     }
// }
// console.log(min(8, 4));
// console.log(min(6, 6));


// //Задание 2

// function evenOdd(n) {
//     if (n % 2 == 0) {
//         console.log('!четное');
//     } else {
//         console.log('нечетное');
//     }
// }
// evenOdd(8);
// evenOdd(3);

// //Задание 3.1

// function sqr(n) {
//     console.log(n ** 2);
// }
// sqr(6);

// //Задание 3.2

// function sqr(n) {
//     return n ** 2;
// }
// console.log(sqr(7));

// //Задание 4
// function age() {
//     let ageInp = prompt('Сколько вам лет');
//     if (ageInp < 0) {
//         console.log('Вы ввели отрицательное значение');
//     } else {
//         if ((ageInp >= 0 && ageInp < 13)) {
//             console.log('Привет, друг!');
//         } else {
//             console.log('Добро пожаловать!');
//         }
//     }
// }
// age();

// //Задание 5

// function operation(a, b) {
//     if (!isNaN(a) && !isNaN(b)) {
//         console.log(a * b);
//     } else {
//         console.log('Одно или оба значения не являются числом');
//     }
// }
// operation(4, 6);
// operation('a', 4);

// //Задание 6
// function operation() {

//     let userInp = prompt(' Введите любое число');
//     if (!isNaN(userInp)) {
//         userInp **= 3;
//         console.log(userInp);
//     } else {
//         console.log("Переданный параметр не является числом");
//     }
// }
// operation();

// //Задание 7
// function getArea() {
//     return this.radius ** 2 * 3, 14;
// }
// function getPerimeter() {
//     return this.radius * 3, 14 * 2;
// }

// let circle1 = {
//     radius: 6,
// }
// let circle2 = {
//     radius: 7,

// }
// console.log(getArea());
// console.log(getPerimeter());