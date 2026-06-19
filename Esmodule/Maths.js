// //defaul export example
// const add=(a,b)=>{
//     return a+b;
// }   
// const subtract=(a,b)=>{
//     return a-b;
// }   
// // export default function multiply(a,b){
// //     return a*b;
// // }   
// const multiply=(a,b)=>{
//     return a*b;
// }

// const divide=(a,b)=>{
//     return a/b;
// }   

// export default multiply;  // default export


// // //named export example
// const add=(a,b)=>{
//     return a+b;
// }

// const subtract=(a,b)=>{
//     return a-b;
// }

// const divide=(a,b)=>{
//     return a/b;
// }
// export const multiply=(a,b)=>{
//     return a*b;
// }

// export {add,subtract,divide};  // named exports 

//aliased import example
const add=(a,b)=>{
    return a+b;
}
const subtract=(a,b)=>{
    return a-b;
}
const divide=(a,b)=>{
    return a/b;
}   
const multiply=(a,b)=>{
    return a*b;
}
export const greet=(name)=>{
    return `Hello, ${name}! Welcome to the ES6 module system.`;
}
export {add,subtract,divide,multiply};  //aliased export