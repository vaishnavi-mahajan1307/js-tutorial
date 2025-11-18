// // arrayz


// let myarry = [1234, 'vamshi', true, null, undefined, 'bangluru'];
// console.log(myarry);
// console.log(myarry[5]);
// myarry[1] = 'gloablia';
// console.log(myarry);
// myarry.push('tere'); // adds at the end
// console.log(myarry);
// myarry.pop(); // removes from the end
// console.log(myarry);
// myarry.unshift('hello'); // adds at the beginning
// console.log(myarry);
// myarry.shift(); // removes from the beginning
// console.log(myarry);
// console.log(myarry.length);

// console.log(myarry.includes('gloablia'));


// const newarray = myarry.slice(1,4); // does not change the original array
// console.log(newarray);

// const myNewArray = myarry.join(' vaish ');
// console.log(myNewArray);



let fruits = ['apple', 'banana', 'grapes', 'mangoes', 'orange'];
// console.log(fruits);


let newarray =  fruits.slice(1,4); // does not change the original array
console.log(newarray);
console.log(`Original array :- ${fruits}`);


let splicearray =  fruits.splice(1,4); // changes the original array
console.log(splicearray);
console.log(`Original array :- ${fruits}`);