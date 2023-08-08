const country = "Bangladesh";
const age = 20;
const isIndependet = true;
const student = {id: 91, name: 'Atik', roll: 12, class: 12};
const friendMarks = [10, 14, 21, 32, 37, 48];
function add(a, b){
    return a + b;
}

console.log(typeof country);
console.log(typeof age);
console.log(typeof isIndependet);
console.log(typeof student);
// Check array using Array.isArray
console.log(Array.isArray(friendMarks));
console.log(typeof add);

// ----------------------
console.log(friendMarks.includes(15));
console.log(friendMarks.includes(21));

if (friendMarks.indexOf(22) !== -1){
    console.log('ache');
}
else {
    console.log("nai");
}

// concat
const friends = [3, 5, 9, 11, 20];
const allFriends = friends.concat(friendMarks);
console.log(allFriends);