//this default export is used when we want to export only one value from a module. It can be a function, class, object, or any other JavaScript entity. When we import a default export, we can give it any name we want.
// import mult from './Maths.js';
// console.log(mult(50,10));   


//this named export is used when we want to export multiple values from a module. We can export multiple functions, variables, or classes from a module using named exports. When we import named exports, we need to use the same name as the exported entity.
// import {add,subtract,divide,multiply} from './Maths.js';
 
// console.log(add(10,5));
// console.log(subtract(10,5));
// console.log(divide(10,5));
// console.log(multiply(10,5));

//aliased export means we can export a named export with a different name using the as keyword. This is useful when we want to avoid naming conflicts or when we want to give a more descriptive name to the exported entity.

import {add as sum, subtract as sub, multiply as mult, divide as div} from './Maths.js';
import {greet as greeting} from './Maths.js';

console.log(greeting("Alice"));
console.log(sum(10,5));
console.log(sub(10,5));
console.log(mult(10,5));
console.log(div(10,5));