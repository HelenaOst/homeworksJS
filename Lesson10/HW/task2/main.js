//#j693ca8
// – створити інпут, який приймає вік людини, та кнопку, яка підтверджує дію. При натисканні на кнопку
// зчитати інформацію з інпуту та перевірити вік, чи менше він за 18,
// та повідомити про це користувача

let button = document.getElementById('button');


button.onclick = function(event){
    event.preventDefault();
    let age = document.getElementById('age');
    if(Number(age.value) < 18){
        console.log('Ти занадто малий. Повернешся, коли виповниться 18!')
    }
    else {
        console.log('Тобі більше 18!')
    }
}