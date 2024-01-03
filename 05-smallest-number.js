// Напиши скрипт пошуку найменшого числа в масиві
// за умовою що числа унікальні і не повторюються

const numbers = [51, 18, 13, 24, 7, 85, 19];

let smallesNumber = numbers[0];

for (const number of numbers) {

    if (number < smallesNumber) {
        smallesNumber = number
    }

}

console.log(smallesNumber);