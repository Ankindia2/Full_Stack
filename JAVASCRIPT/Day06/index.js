// String:-
const str1 = "Ankit";
const str2 = "Samrat";
const str3 = "i am coming soon";
console.log(str1,str2,str3);

// 

const str4 = "Ankit";
const str5 = "Ankit";
const day = 15;
const str6 = `i am coming 
on ${day}`;
console.log(str6);

const str7 = `hello guys`;
console.log(str7.length);
console.log(str7[1]);

// upper case:-
console.log(str7.toUpperCase());
// lower case:-
console.log(str7.toLocaleLowerCase());
// search:-
console.log(str7.indexOf(`llo`));
console.log(str7.lastIndexOf(`llo`));

// slice:-
console.log(str7.slice(2,5));
// negative index:-
console.log(str7.indexOf(-7));

// add str:-
const k = "Ankit";
const m = "Samrat";
const j = k+" "+m;
console.log(j);

console.log(24+"Ankit");
console.log(24+"Ankit"+10);
console.log(24+30+"Ankit");

console.log(str7.replace("llo",'asd'));

const user ="   Ankit Samrat  ";
 console.log(user.trim());

 const names = "Ankit , Aman,Anaya, Rohit";
 console.log(names.split(" , "))

//  how to find current time from our system:-
// const now = new Date();
// console.log(now);
console.log(now.toString());
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getFullYearg());







