// Task #1
let user = {
    name: `John`,
    surname: `Smith`,
}

user.name = `Pete`;
console.log(user.name);

delete user.name;


// Task #2
const someUser = {
    name: `John`,
    age: 30,
}

someUser.name = `Pete`;
console.log(someUser.name);


//Task #3

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
}

let sum = 0;
for (let key in salaries) {
    sum += salaries[key];
}

console.log(sum);