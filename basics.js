// const friend = ['Mango', 'Kivi', 'Polly', 'Ajax'];
// console.table(friend)

// friend[2] = 'Yulia';

// console.table(friend);



// const lastIndex = friend.length - 1;
// console.log(lastIndex);




// let a = [1, 2, 3]
// let b = a;

// console.log('a', a);
// console.log('b', b);

// a[0] = 500;

// console.log('a', a);
// console.log('b', b);

// console.log(a === b);



const friends = ['Mango', 'Kivi', 'Polly', 'Ajax'];

// console.table(friends);
// const lastIndex = friend.length - 1;

// for (let i = 0; i <= lastIndex; i += 1) {
//     friend[i] += '-1';
// }
for (const friend of friends) {
    console.log(friend);
}

// console.table(friend);