// singleton object 
// object literal
// Object.create constructor

const mySym = Symbol("mySym");

const jsUser = {

    name : "John",
    "full Name" : "John Doe",
    [mySym] : "myValue",
    age : 30,
    location : "New York",
    email : "John@google.com",
    isLoggedIn : true,
    lastLogginDays : ["Monday", "Tuesday", "Friday"],
}
    // console.log(jsUser["full Name"]);
    
// console.log(jsUser["full Name"]);
// console.log(jsUser[mySym]);
// console.log(jsUser);
// jsUser.location



 jsUser.greeting = function(){
    console.log("hello from jsUser");
    
 }
 console.log(jsUser.greeting());
 jsUser.greetingTwo = function(){
    console.log(`hello from jsUser ${this.lastLogginDays[0]}`);
    
 }
 console.log(jsUser.greetingTwo());


