// #mkGDenYnNjn.html
//  Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:’USD’,value:25},{currency:’EUR’,value:42}],’USD’) // => 400

function exchange(sumUAH, currencyValues, exchangeCurrency){
    for (element of currencyValues){
        if(element.currency === exchangeCurrency){
            return sumUAH / element.value;
        }
    }
}


console.log(exchange(100, [
    {currency: 'USD', value: 41},
    {currency: 'EUR', value: 45}], 'EUR'))
