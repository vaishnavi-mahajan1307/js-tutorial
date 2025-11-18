
function basicFuc(num1 , num2){

    //    let result = num1 + num2;
    //     return result
 return  num1 + num2;
} 
// console.log(basicFuc(undefined , 6));
 let result  = basicFuc(2, 3);
//  console.log(`Result :- ${result}`);


function loginUserMessage(username ="same"){

    if (username === undefined){
        console.log("Please enter a valid username");
       
        return;
    }
    else {
        return `Welcome back ${username} !`
    }
}

console.log(loginUserMessage("vaishnavi"));




function calculateCartPrice(...prices){
    return prices;
}

// console.log(calculateCartPrice(23,45,67,89));



const UserOjb = {
    username : "vaishnavi",
    price : 4500,
}


function handleObject(anyobj){
    // console.log(`my name is ${anyobj.username} , and my price is ${anyobj.price}`);
    
}
handleObject(UserOjb);

let myFirstArray = ["vaishnavi" , "mahajan" , 23 , true ];

let myNewArray = [200 , 400 , 600 , 700];


function returnsecondValue(newArray){
    return newArray[3];
}
console.log(returnsecondValue(myFirstArray));
