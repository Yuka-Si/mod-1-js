// Працюємо з колекцією карток в трело
// - Метод splice()
// Видалити
// Додати
// Обновити

const cards = [
    'Картка-1',
    'Картка-2',
    'Картка-3',
    'Картка-4',
    'Картка-5',
];
console.table(cards);
// Видалення по індексу
// const cardToRemove = 'Картка-3';
// const index = cards.indexOf(cardToRemove);
// console.log(index);

// cards.splice(index, 1);
// console.table(cards);

// Додавання по індексу
// const cardToInsert = 'Картка-6';
// const index = 3

// cards.splice(index, 0, cardToInsert);
// console.table(cards);

// оновлення по індексу
const cardToUpdate = 'Картка-4';
const index = cards.indexOf(cardToUpdate);
console.log(index);

cards.splice(index, 1, 'new cards 4')
console.table(cards);


