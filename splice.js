const friends = [12, 23, 32, 45, 64, 57, 76, 89];
const partial = friends.splice(3, 4, 100, 110, 200);
console.log(partial);
console.log(friends);