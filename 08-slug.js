// Робимо slug  в URL із назви статті(наприклад на dev.to)
// Заголовок статті складається тільки із літер і пробілів

// нормалізуємо рядок
// розбиваємо на слова
// зшиваємо в рядок з розділеннями

// має вийти top-10-benefits-of-react-framework

const title = 'Top 10 benefits of React framework';
// const normalizeTitle = title.toLowerCase();
// console.log(normalizeTitle);

// const words = normalizeTitle.split(' ');
// // console.log(words);

// const slug = words.join('-');
// // console.log(slug);

const slug1 = title.toLowerCase().split(' ').join('-');
console.log(slug1);