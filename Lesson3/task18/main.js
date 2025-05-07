// 1. Створити пустий масив та :

let arr = [];

//     a. заповнити його 50 парними числами за допомоги циклу.
let evenNumber = 2;
for (let i = 0; i < 50; i++){
    arr[i] = evenNumber;
    evenNumber = evenNumber + 2;
}
console.log(arr);

//     b. заповнити його 50 непарними числами за допомоги циклу.
let oddNumber = 1;
for (let i = arr.length; i < 100; i++){
    arr[i] = oddNumber;
    oddNumber = oddNumber + 2;
}
console.log(arr);

//     c. Заповнити масив 20-ма рандомними числами. (Google: Generate random number JS)

for (let i = arr.length; i < 120; i++){
    arr[i] = Math.floor(Math.random() * 100);
}
console.log(arr);

// d. Заповнити масив 20-ма рандомними числами в діапазоні від 8 до 732 (Google: Generate random number JS)

for (let i = arr.length; i < 140; i++){
    arr[i] = Math.floor(Math.random() * (732 - 8 + 1)) + 8;
}
console.log(arr);

// 2. Вивести за допомогою console.log кожен третій елемент
for (i = 2; i < arr.length; i = i + 3){
  console.log(arr[i]);
}

// 3. Вивести за допомогою console.log кожен третій елемент, тільки якщо цей елемент є парним.
for (let i = 2; i < arr.length; i = i + 3){
    if(arr[i] % 2 === 0){
        console.log(arr[i]);
    }
}

// 4. Вивести за допомогою console.log кожен третій елемент, тільки якщо цей елемент є парним, та записати їх в новий масив

let arrTwo = [];
let indexArrTwo = 0; // лічильник для відстеження індексу

for (let i = 2; i < arr.length; i = i + 3){
    if(arr[i] % 2 === 0){
        console.log(arr[i]);
        arrTwo[indexArrTwo] = arr[i];
        indexArrTwo++;
        }
}
console.log(arrTwo);

// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [1, 2, 3, 5, 7, 9, 56, 8, 67] -> Має бути виведено 1, 9, 56

for (let i = 0; i < arr.length - 1; i++){
    if(arr[i + 1] % 2 === 0){
        console.log(arr[i]);
    }
}

// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
arrThree = [100,250,50,168,120,345,188]

let purchasePrice = 0;
let averageBill;

for (let price of arrThree){
    purchasePrice = purchasePrice + price;
}
console.log(purchasePrice);
averageBill = purchasePrice / arrThree.length;
console.log(Math.round(averageBill)); //Math.round() - округлення до найближчого цілого числа

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.

let array1 = [];

let array1Length = 20;
for (let i = 0; i < array1Length; i++){
    let randomNumber = Math.floor(Math.random() * 10) + 1; // Випадкове число від 1 до 10
    array1[i] = randomNumber;
}
console.log(array1);

let array2 = [];
for (let i = 0; i < array1Length; i++){
    array2[i] = array1[i] * 5;
}
console.log(array2);

// 8. Створити масив з будь-якими значеннями (стрінги, числа, і т.д). пройтись по ньому, і, якщо елемент є числом,
// додати його в інший масив.

let myArr = [
    10,
    "Привіт",
    true,
    3.14,
    "Світ",
    false,
    -5,
    "JavaScript",
    { name: "John", age: 30 },
    [1, 2, 3]
];
let myArr2 = [];

let j = 0; // Додатковий лічильник для індексів myArr2
for (let i = 0; i < myArr.length; i++){
    if(typeof myArr[i] === "number") {
        myArr2[j] =  myArr[i];
        j++;
    }
}
console.log(myArr2);
