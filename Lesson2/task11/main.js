// #iBvqtjEm
//
// – є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код, який
//
// буде присвоювати змінній х значення “default”,  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).

let x = prompt('Enter anything!')

// if (x === '0') {
//     x = 'default';
//     console.log(x);
// } else if (x === 'null') {
//     x = 'default';
//     console.log(x);
// } else if (x === 'undefined') {
//     x = 'default';
//     console.log(x);
// } else if (x === '') {
//     x = 'default';
//     console.log(x);
// } else if (x === 'NaN') {
//     x = 'default';
//     console.log(x);
// } else {
//     console.log(x);
// }

// КОРОТКИЙ ВАРІАНТ

if (x === '' || x === '0' || x === 'null' || x === 'undefined' || x === 'NaN' || x === 'false') {
    x = 'default';
    console.log(x);
} else  {
    console.log(x);
}
