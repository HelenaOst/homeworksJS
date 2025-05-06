// #0pm3EyTKy9
//
// – Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

// #mDMWMW5a
//
// – Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write


let array = [];

array[0] = 42;
array[1] = 3.14;
array[2] = "Hello";
array[3] = true;
array[4] = 100;
array[5] = "World";
array[6] = false;
array[7] = -7;
array[8] = "JavaScript";
array[9] = NaN;

for (let element of array) {
    console.log(element);
}

for (let i = 1; i <= 10; i++) {
    console.log(i);
    document.write(`Номер ітерації - ${i}<br>`);
}

// #4sXhaa5YMM
//
// – Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let i = 1; i <= 100; i++) {
    console.log(i);
    document.write(`Номер ітерації - ${i}<br>`);
}

// #s24slNyz7
//
// – Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

for (let i = 1; i <= 100; i+=2){
    console.log(i);
    document.write(`Номер ітерації - ${i}<br>`);
}

// #zananT5FR1
// //
// // – Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0){
        console.log(i);
        document.write(`Номер ітерації - ${i}<br>`);
    }
}

// #Tfrwls7FM
//
// – Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

for (i = 1; i <=100; i++){
    if(i % 2 === 1){
        console.log(i);
        document.write(`Номер ітерації - ${i}<br>`);
    }
}
