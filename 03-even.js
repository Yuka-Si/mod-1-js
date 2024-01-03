const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11];

// 1 створити змінну total
let total = 0;
// // 2 перебрати масив

// for (let i = 0; i < numbers.length; i += 1) {

//     const number = numbers[i];

//     console.log(numbers[i]);

//     // 3 на кожній ітерації перевірити елемент на парне

//     if (number % 2 === 0) {
//         console.log('Парне число');
//         // 4 якщо парне додаємо до total 

//         total += number;
//     }
// }

// ========Інший спросіб=======

for (const number of numbers) {
    console.log(number);
    if (number % 2 === 0) {
        console.log('Парне число');
    }
    total += number;
}
console.log('Total: ', total);