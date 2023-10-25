
// //Задание 1
// const numbs =[1, 5, 4, 10, 0, 3];
// for (let i = 0; i < numbs.length; i++) {
//     if (numbs[i]==10) break;
//     console.log(numbs[i]);
// };

// //Задание 2

// const numbs=[1, 5, 4, 10, 0, 3];
// for (let i = 0; i < numbs.length; i++) {
//    if (numbs[i]==4) {
//     console.log(i);
//     break;
//    }
// }

// //ИЛИ
// const numbs=[1, 5, 4, 10, 0, 3];
// let position = numbs.indexOf(4);
// console.log(position);



// //Задание 3

// let numbs = [1, 3, 5, 10, 20];
// numbs = numbs.join(' ');
// console.log(numbs);


// //Задание 4

// const arr = [];
// for (let i = 0; i < 3; i++) {
//     arr.push([]);
//     for (let n = 0; n < 3; n++) {
//         arr[i].push("1");
//     }
// }
// console.log(arr);

// //Задание 5

// const arr = [1, 1, 1];
// const arr2 = [2,2,2];
// console.log(arr.concat(arr2));


// //Задание 6

// const arr = [9, 8, 7, 'a', 6, 5];
// arr.sort();
// arr.pop();
// console.log(arr);


// //Задание 7

// const arr = [9, 8, 7, 6, 5];
// if (arr.includes(Number(prompt('Угадай число')))) {
//     alert('Угадал');
// } else {
//     alert('Не угадал'); 
// }


// //Задание 8

// let arr='abcdef';
// arr=arr.split('');
// arr.reverse();
// arr=arr.join("");
// console.log(arr);


// //Задание 9

// const arr = [[1, 2, 3,],[4, 5, 6]];
// let result= arr.reduce(function (a,b) {
//     return a.concat(b);
// });
// console.log(result);

// //Задание 10

// const arr = [3, 5, 7, 9, 4, 6];
// for (let i = 0; i < arr.length - 1; i++) {
//     sum = arr[i] + arr[i + 1];
//     console.log(arr[i] + arr[i + 1]);
// }


// //Задание 11
// const arr = [3, 5, 7, 9, 4, 6];
// const sqr = arr.map(el => el ** 2);
// console.log(sqr);


// //Задание 12

// const arr = ['слово', '', 'слог', 'длинное предложение', 'буква'];
// const getLengthWords = function (arr) {
//     const lengthArr = arr.map(el => el.length);
//     return lengthArr;
// }
// console.log(getLengthWords(arr));

// ИЛИ ( не понимаю  в чем сакральный смысл добавления функцииб ведь работает одинаково )

// const arr = ['слово', '', 'слог', 'длинное предложение', 'буква'];
// const getLengthWords = arr.map(el => el.length);
// console.log(getLengthWords);


//Задание 12

// const arr = [-1, 0, 5, -10, 56];
// const filterPositive = arr.filter(i => {
//     if (i < 0) {
//         return true;
//     } else {
//         return false
//     }
// });
// console.log(filterPositive);

// //ИЛИ
// const arr = [-1, 0, 5, -10, 56];
// const filterPositive = arr.filter(i => i < 0);

// console.log(filterPositive);