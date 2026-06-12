const EventEmitter = require("events");

const emitter = new EventEmitter();

const eventcount={
    "user-login":0,
    "user-logout":0,
    "user-purchase":0,
    "profile-update":0,
}

emitter.on("user-login",(username)=>{
    console.log(`User ${username} logged in`);
    eventcount["user-login"]++;
})

emitter.emit("user-login","John");
emitter.emit("user-login","Alice");

emitter.on("user-purchase",(username,item)=>{
    console.log(`User ${username} purchased ${item}`);
    eventcount["user-purchase"]++;
})
emitter.emit("user-purchase","John","Laptop");
emitter.emit("user-purchase","Alice","Tablet");

emitter.on("profile-update",(username,email)=>{
    console.log(`User ${username} updated their profile with email ${email}`);
    eventcount["profile-update"]++;
})

emitter.emit("profile-update","John","john@example.com");
emitter.emit("profile-update","Alice","alice@example.com");

console.log("Event count:",eventcount);

emitter.on("user-logout",(username)=>{
    console.log(`User ${username} logged out`);
    eventcount["user-logout"]++;
})

emitter.emit("user-logout","John");

console.log("Event count:",eventcount);