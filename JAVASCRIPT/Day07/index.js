// Array:-

let marks = [100,85,90,80,86];
console.log(marks);
console.log(marks.length);

let arr = [100, 75,"Ankit",true];
console.log(arr);
arr[1] =90;
console.log(arr);
// push operation: add from the end
arr.push(86);
console.log(arr);
arr.push("Strike");
console.log(arr);
// pop operation: delte from the end
arr.pop();
console.log(arr);

// starting add kar sakta hu ,delete the element at first place:-
arr.unshift(10);
arr.unshift(50);
console.log(arr);

// for delte :-
arr.shift();
console.log(arr);

let arrr = [12,23,45,67,46,58];
for(let i=0;i<arrr.length;i++){
    console.log(arrr[i]);
}

// obeject (non primitive: copy by reference hota hai);
// premitive :copy by value

const  arr1 = [10,20,30,40];
const arr2 = ["Ankit",12,13,14,15];
const arr3 =[64,7,true];

// arr.push(arr2);
// const arr5 = arr.concat(arr2,arr3);

// // spread operator:-

// const arr6=[...ar1,...arr2,...arr3];
// console.log(arr6);

const names = ["alice","tommy","joggy","jakkie","bobs"];
// console.log(names.toString());
// console.log(names.join("-"));
// console.log(names.lastIndexOf("bobs"));
// console.log(names.includes("mmy"));
names.sort();
console.log(names);
// ascending order:-
const arr8 = [10,50,30,40,60,20];
arr8.sort((a,b)=>a-b);
console.log(arr8);
// descending order:-
arr8.sort((a,b)=>b-a);
console.log(arr8);

const arr9 = [10,20,30,[34,45,90],60];
console.log(arr9[3][1]);
const n = arr9.flat(Infinity);
console.log(n);





