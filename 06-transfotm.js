// Напиши скрипт, який об'єднує всі елементи масива в одне рядкове значення
// Елементів може бути довільна кількість
// Нехай елементи масива в рядку будуть розділені комою

// Спочатку через for
// Потім через join()

const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];

// let string = '';

// for (const friend of friends) {
//     string += friend + ',';

// }
// string = string.slice(0, string.length - 1);
// console.log(string);

const string = friends.join(', ')
console.log(string);

// Має вийти 'Mango', 'Poly', 'Kiwi', 'Ajax'

