const shopingCart = [
    {name: 'shirt', price: 1200, quantity: 2},
    {name: 'pant', price: 1500, quantity: 3},
    {name: 't-shirt', price: 900, quantity: 4},
    {name: 'shoe', price: 2100, quantity: 2},
    {name: 'belt', price: 550, quantity: 6}
]

function totalCost (products){
    let sum = 0;
    for (let i = 0; i < products.length; i++){
        const product = products[i];
        const productQuantity = product.price * product.quantity;
        sum = sum + productQuantity;
        // console.log(product);
    }
    return sum;
}
const myExpense = totalCost(shopingCart);
console.log("total expenses today", myExpense);