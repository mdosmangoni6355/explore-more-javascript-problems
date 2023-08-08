/* 
1. first 100 ticket price 100
2. second 100 ticket price 90
3. rest ticket price 70
*/
function ticketPrice (ticketQuantity){
    const first100Price = 100;
    const second100Price = 90;
    const restTicketPrice = 70;
    if (ticketQuantity <= 100){
        const price = ticketQuantity * first100Price;
        return price;
    }
    else if (ticketQuantity <= 200){
        const first100Rate = 100 * first100Price;
        const restTicketQuantity = ticketQuantity - 100;
        const restTicketRate = restTicketQuantity * second100Price;
        const totalTicketPrice = first100Rate + restTicketRate;
        return totalTicketPrice;
    }
    else {
        const first100Rate = 100 * first100Price;
        const second100Rate = 100 * second100Price;
        const restTicketQuantity = ticketQuantity - 200;
        const restTicketRate = restTicketQuantity * restTicketPrice;
        const totalTicketPrice =first100Rate + second100Rate + restTicketRate;
        return totalTicketPrice;
    }
}
const totalPrice = ticketPrice(250);
console.log(totalPrice);