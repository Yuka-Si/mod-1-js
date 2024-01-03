// напиши скрипт для пошуку логіна
// якщо логіна немає, виведи повідомлення "Користувач [логін] відсутній "
// якщо логін є, виведи повідомлення "Користувач [логін] є "

// Спочатку через for
// Потім через for..of
// Логіка break
// Метод includes() з тернарним оператором

const logins = ["qweqwe", "yuka", "slava123", "nik2023", "cat777"];
const loginToFind = "cat777";

// let message = `Користувач ${loginToFind} відсутній`;

// for (let i = 0; i < logins.length; i += 1) {
//     const login = logins[i];

//     console.log('Login:', login);
//     console.log(`${login} === ${loginToFind}: `, login === loginToFind);
//     if (login === loginToFind) {
//         message = `Користувач ${loginToFind} є`;

//         break;
//     }


// // }
// for (const login of logins) {
//     console.log('Login:', login);
//     console.log(`${login} === ${loginToFind}: `, login === loginToFind);

//     if (login === loginToFind) {
//         message = `Користувач ${loginToFind} є`;

//         break;
//     }

// }
// console.log(message);

const message = logins.includes(loginToFind)
    ? `Користувач ${loginToFind} є`
    : `Користувач ${loginToFind} не знайдено`

console.log(message);