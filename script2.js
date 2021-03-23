// part two
let selectedColors = ['green', 'blue', 'red'];
console.log(selectedColors);
console.log(selectedColors.length);
console.log(selectedColors[0]);
console.log(selectedColors[selectedColors.length - 1]);

selectedColors.push('yellow');
console.log(selectedColors);

selectedColors.push(5);
console.log(selectedColors);

selectedColors.push({ greeting: 'Hi, I am an object'});
console.log(selectedColors);
console.log(selectedColors[selectedColors.length - 1].greeting);