// Напиши скрипт який замінює регістр кожного символа в рядку на протилежне
// Наприклад якщо рядок "JavaScript" то результат має бути 'jAVASCRIPT'

const string = 'JavaScript';

const letters = string.split('');
let invertedString = '';

console.log(letters);

for (const letter of letters) {
    console.log(letter);

    // if (letter === letter.toLocaleLowerCase()) {
    //     console.log('ця літера в нижньому регістрі!!! - ', letter);

    //     invertedString += letter.toUpperCase();
    // }
    // else {
    //     console.log('ця літера в верхньому регістрі!!! - ', letter);

    //     invertedString += letter.toLowerCase()
    // }
    invertedString +=
        letter === letter.toLowerCase()
            ? letter.toUpperCase()
            : letter.toLowerCase();
}
console.log(invertedString);
