
// #vLSZKMlO
//
// – Використовуючи данні з масиву, за допомоги document.write та циклу
//
// побудувати структуру за шаблоном

let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];

// let i = 0;
// for (let item of listOfItems) {
//     if (i <= listOfItems.length){
//         document.write(`<ul><li>${item}</li></ul>`);
//     }
// } // не те, бо вийшов не список, а 8 списків. Винеси ul за межі циклу:

document.write(`<ul>`);
for (let item of listOfItems) {
        document.write(`<li>${item}</li>`);
    }
document.write(`</ul>`);



