const names = ['abul', 'babul', 'kabul', 'cabul', 'dabul', 'abul', 'cabul', 'babul', 'kabul'];
// console.log(names);

function removeDuplicates (names){
    const uniqueName = [];
    for (let i = 0; i < names.length; i++){
        let name = names[i];
        if (uniqueName.includes(name) === false){
            uniqueName.push(name);
        }
    }
    return uniqueName;
}
const result = removeDuplicates(names);
console.log(result);