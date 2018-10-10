// function add(a, b){
//     return a+b;
// }

// console.log(add(3,1));

// var toAdd = [9,5];

// console.log(add(...toAdd));

// var groupA = ['Tom', 'jen', 'corry'];
// var groupB = ['vickram'];
// var final = [3, ...groupA];

// console.log(final);

// var person = ['Andrew', 25];
// var person2= ['Elvin', 23];

// function func(name, age){
//     return "Hi " + name + ", you are " + age;
// }

// console.log(func("sada", 23));
// console.log(func(...person));

var names = ['Mike', 'Ben'];
var final = ['Elvin', ...names];

final.forEach((name) => {
    console.log("Hi " + name);
});