function add(num1, num2){
    if (typeof num1 !== 'number' || typeof num2 !== 'number'){
        return "Please enter a number";
    }
    return num1 + num2;
}
const result = add('ss', 5);
console.log(result);

// -----How to find an error-----

function multiply(num1, num2){
    return num1 * num2;
}
const output = multiply(27*10); // check this line
console.log(output);