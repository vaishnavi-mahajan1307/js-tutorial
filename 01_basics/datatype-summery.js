// premitive    in the memory not store directly  copy through  value

// 7 types :- String , number , boolean , null , undefined , bigint , symbol

// refeerence data types (non premitive)   by reference , directly allowcate in memory
// Object , Array , Function


const id = Symbol('1234');
// console.log(typeof id);
const id2 = Symbol('1234');
// console.log(id === id2);

// array

const heros = ['shaktiman', 'naagraj', 'doga'];
// console.log(heros);

let myobj = 
{
    name: "vaishnavi",
    age: 22,
    isloggedin: false
};
// console.log(myobj);


 const myFunct = function (){
    // console.log("hello world");
    
}

// console.log( typeof myFunct);




// ***************************************************************************
//  heap memory and stack memory



let myname = "vaishnavi";
// console.log(myname);
let mynaothername = myname
mynaothername = "vaishu";
// console.log(mynaothername);


console.log(myname);
console.log(mynaothername);

let userOne = {
    email: "user@google,com",
    upassword: "user123"
}

let usertwo = userOne
usertwo.email ="myname@gmail.com"
usertwo.upassword = "myname123"
console.log(userOne);
console.log(usertwo);
