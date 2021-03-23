let person = {
   name: 'Lukas',
   age: 37,
};

person.name = 'Knol';
person['name'] = 'Lukas';

console.log(person);
console.log(person.name);
console.log(person.age);

let evalutions = [7, 10, 9];
console.log(evalutions);


let selectedColors = ['green', 'blauw'];
selectedColors[2] = 'red';
greeting = 'Hi. I am an object';
let total = selectedColors.push('yellow', 5,  greeting);

console.log(selectedColors[0]);
console.log(selectedColors[2]);
console.log(selectedColors);
console.log(selectedColors[greeting]);