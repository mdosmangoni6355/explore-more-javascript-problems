const  phones = [
    {name: 'Samsung', ram: '6GB', storage: 64, price: 32000, color: 'black'},
    {name: 'Xiaomi', ram: '6GB', storage: 64, price: 22000, color: 'black'},
    {name: 'Oppo', ram: '6GB', storage: 64, price: 28000, color: 'black'},
    {name: 'Google', ram: '6GB', storage: 64, price: 55000, color: 'black'},
    {name: 'Apple', ram: '6GB', storage: 64, price: 95000, color: 'black'},
    {name: 'Realme', ram: '6GB', storage: 64, price: 18000, color: 'black'}
];

function cheapestPhone (phones){
    let cheapest = phones[0];
    for (let i = 0; i < phones.length; i++){
        const phone = phones[i];
        if (phone.price < cheapest.price){
            cheapest = phone;
        }
    }
    return cheapest;
}
const mySelection = cheapestPhone (phones);
console.log(mySelection);