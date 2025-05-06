// #u3vmD0YJXh
//
// – Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
//
// #9stMq2ou
//
// – Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
//
// #mK4pmM4
//
// – Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи


let arr = [
    10,
    "Okten",
    true,
    3.14,
    "Hello",
    false,
    -5,
    "JavaScript",
    true,
    100.5
];

for(let el of arr){
    if (typeof el === 'boolean') {
        console.log(el);
    }
}

for (let el of arr){
    if (typeof el === 'number') {
        console.log(el);
    }
}

for (let el of arr){
    if (typeof el === 'string') {
        console.log(el);
    }
}
