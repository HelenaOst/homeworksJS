// #Hdjws7E
//
// Використовуючи данні з масиву, за допомоги document.write та циклу
//
// побудувати структуру по шаблону
//
// Великими літерами прописанні властивості об’єкту які потрібно впровадити в шаблон

let products = [
    {title: 'milk',
     price: 22,
    image: 'https://images.milkandmore.co.uk/image/upload/w_iw/f_auto,q_auto:eco/d_back_up_image.jpg,w_1200,c_scale/v1/products/2020904_1.jpg'},

    {title: 'juice',
    price: 27,
    image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'},

    {title: 'tomato',
     price: 47,
     image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'},
    {title: 'tea',
     price: 15,
     image: 'https://us-east-1-shared-usea1-02.graphassets.com/A2lCPH6tTelhrsostvMQpz/auto_image/resize=fit:max,width:3840/quality=value:75/jUuQBCwBRZW8zNDRC9pV'},
];

for (let i = 0; i < products.length; i++) {
    let product = products[i];
    document.write(`
<div>
<h3 class="product-title">${product.title}. Price – ${product.price}</h3>
 <img src='${product.image}' alt='' class='product-image'>
</div>
`);
}

//
// for(let product of products) {
//     document.write(`
//      <div>
//        <h3 class="product-title">${product.title}. price – ${product.price}</h3>
//        <img src='${product.image}' alt='' class='product-image'>
// </div>
// `);
// }
