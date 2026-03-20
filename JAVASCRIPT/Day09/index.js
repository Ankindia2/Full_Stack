// function:-
// function greeting(){
//     console.log("hello coder army ,strike is coming soon on 18 octuber");
// }

const { useCallback } = require("react");

// function addNumber(num1,num2,num3=0,num4=0){
//     const sum = num1+num2+num3+num4;
//     console.log(sum);
// }
// greeting();
// addNumber(3,4);
// addNumber(6,7);
// addNumber(6,7,6);
// addNumber(6,7,8,9);

// rest operator:-indivisual value ko catch karna hai.
function addNumber(...num){
    let sum = 0;
    for(let n of num){
        sum+=n;

    }
    console.log(sum);
}

// function:expression
console.log(addNumbeR(3,4));
function addNumbeR(num1,num2){
    return num1+num2;
}

const addNumbeRR =function(num1,num2){
    return num1+num2;
}

console.log(addNumbeRR(3,4));

// arrow function:-

// const addNum = (num1,num2)=>{
//     return num1+num2;
    
// }
// console.log(addNum(5,6));
// let arr = [17,33,2,666,35];
// arr.sort((a,b)=> a-b);
// const addNUM =(num1,num2)=>num1+num2;
// console.log(addNUM(9,9));

// const squareNumber = num => nu*num;
// console.log

// IIFE

(function greeting(){
    console.log("Hello ji");

})();
(()=>{
    console.log("hii");
})();

// call back
// function meet(Callback){
//     console.log("i am going to meet someone");
//     Callback
//     greet();
   
// }
// meet(greet);

function zomatoOrderPlaced(){
    console.log("we have started preparing your food");
}

function payment(amount){
    console.log(`${amount} payment has initilised`);
    console.log("payment is received");
    zomatoOrderPlaced();
    Callback();
}
payment(500,zomatoOrderPlaced);
