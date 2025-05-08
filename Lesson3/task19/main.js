// – Дано 2 масиви з рівною кількістю об’єктів.
// З’єднати в один об’єкт користувача та місто з відповідними “id” та “user_id” .
//
// Записати цей об’єкт в новий масив
//
// Example:
//
//     let usersWithCities = [
//
//         {
//
//             id: 1, // <===
//
//             name: ‘vasya’,
//
// age: 31,
//
//     status: false,
//
//     address: {
//
//     user_id: 1, // <===
//
//         country: ‘Ukraine’,
//
//     city: ‘Ternopil’
//
// }
//
// },
//
// // TO BE CONTINUED …..
//
// ]


let usersWithId = [
    { id: 1, name: 'vasya', age: 31, status: false },
    { id: 2, name: 'petya', age: 30, status: true },
    { id: 3, name: 'kolya', age: 29, status: true },
    { id: 4, name: 'olya', age: 28, status: false }
];

let citiesWithId = [
    { user_id: 3, country: 'USA', city: 'Portland' },
    { user_id: 1, country: 'Ukraine', city: 'Ternopil' },
    { user_id: 2, country: 'Poland', city: 'Krakow' },
    { user_id: 4, country: 'USA', city: 'Miami' }
];


let usersWithCities = [];

for (let i = 0; i < usersWithId.length; i++) {
    let user = usersWithId[i];
    for (let j = 0; j < citiesWithId.length; j++) {
        let city = citiesWithId[j];
        if (user.id === city.user_id) {
            user.address = city;   // створюємо новий об'єкт користувача з доданим містом
            usersWithCities.push(user);
        }
    }
}
console.log(usersWithCities);

//в JavaScript:
// Якщо поле ще не існує, ти можеш просто написати об'єкт.новеПоле = значення, і воно буде створене автоматично.
//
// Це одна з гнучких фішок JavaScript-об’єктів.
