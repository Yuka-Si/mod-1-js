// Порахувати загальну кількість покупок в корзині


const card = [54, 28, 105, 70, 92, 17, 120];
// 2 зробити змінну total до цикла
let total = 0;

// // 1 перебрати масив
// for (let i = 0; i < card.length; i += 1) {
//     // console.log(card[i]);
//     // 3 кожен елемент додати до total
//     total += card[i];
// }
// console.log('Total: ', total);

// *************** другий варіант*******

for (const value of card) {
    total += value;
}
console.log('Total: ', total);









