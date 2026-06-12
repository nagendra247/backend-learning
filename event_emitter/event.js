const EventEmitter = require("events");

const emitter = new EventEmitter();

// Registering a event listener for the greet event

// emitter.on("greet",()=>{
//     console.log("Hello, welcome to the event emitter example!");
// })

// emitter.emit("greet");

// passing the argument to the event listener
// emitter.on("greet",(name)=>{
//      console.log(`hello ${name} , welcome to the event emitter example!`);
// })

// emitter.emit("greet","John");

//passing the multiple arguments to the event listener

emitter.on("greet",(arg)=>{
    console.log(`hello ${arg.name} , and your age is ${arg.age}`);
}   )

emitter.emit("greet",{name:"John",age:30});