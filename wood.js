/* 
Fixed: per item wood recuirments
1. Chair ----> 5 cft
2. Table ----> 10 cft
3. Bed -----> 50 cft
Vary quantity
*/

function woodCalculator (chairQuantity, tableQuantity, bedQuantity){
    const perChairWood = 5;
    const perTableWood = 10;
    const perBedeWood = 50;

    const chairWood = chairQuantity * perChairWood;
    const tableWood = tableQuantity * perTableWood;
    const bedWood = bedQuantity * perBedeWood;

    const totalWood = chairWood + tableWood + bedWood;
    return totalWood;
}
const totalWood = woodCalculator(7, 2, 3);
console.log('Total Wood Required : ', totalWood);