//– Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
//
//
//
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
//
// Приклад структури знаходиться у файлі example.png, який лежить в папці з поточним файлом


for(course of coursesArray) {
    //створення обгортки
    let wrapperDiv = document.createElement('div');
    wrapperDiv.classList.add('wrapper');
    document.body.appendChild(wrapperDiv);

    //додавання заголовку
    let titleH2 = document.createElement('h2');
    titleH2.innerText = course.title;
    wrapperDiv.appendChild(titleH2);

    //додавання р з тривалістю курсу
    let durationP = document.createElement('p');
    durationP.innerText = `Тривалість курсу: ${course.monthDuration} міс./ ${course.hourDuration} год.`;
    wrapperDiv.appendChild(durationP);

    //створення списку модулів
    let listOfModules =  document.createElement('ul');
    listOfModules.classList.add('list');
    wrapperDiv.appendChild(listOfModules);

    //додавання модулів
    for(let item of course.modules){
        let moduleLi =  document.createElement('li');
        moduleLi.innerText = item;
        listOfModules.append(moduleLi);
    }
}
