// object:-
// const user = {
//     name: "Ankit",
//     age: 21,
//     emailId: "samratankit55@gmail.com",
//     amount: 4999
// }
// console.log(user);
// // CRUD(Create,Read,Update,Delete)
// console.log(user.age);
// user.aadhar = 182770389417;
// user.amount = 9999;
// console.log(user);
// // delete
//   delete user.emailId;
//   console.log(user);

//   const user2 = user;
//   user2.age = 90;
//   console.log(user);
// // important:-
// //   console.log(Object.keys(user));
// //   console.log(Object.values(user));
// //    console.log(Object.entries(user));

// //    for(let num in user){
// //     console.log(keys,user[keys]);
// //    }
// // object ko destructure karna
// const {name,age} = user;
// console.log(name,age);

// // for loop array ke liye:-

// for(let keys of temparr){
//     console.log(keys);
// }

// for(let values of Object.values(user)){
//     console.log(values);
// }

 const user = {
    name: "Ankit",
    age: 21,
    emailId: "samratankit55@gmail.com",
    amount: 4999,
    greeting:function(){
        console.log(`Strike is coming on 18oct ${this.name}`);
        return 20;
     }
}

const user2 = {
    name: "Rohit",
    age: 221,
    emailId: "samratankit55@gmail.com",
    amount: 4999,
    greeting:function(){
        console.log(`Strike is coming on 18oct ${this.name}`);
        return 20;
     }
}
user2.greeting = user.greeting;
user2.greeting();
const va = user.greeting();
console.log(va);

const user3 ={
    name: "Ankit",
    age:23,
    emailId:"samrat@gmail.com",
    amount:3988,
    address: {
        city: "bettiah",
        state: "Bihar"
    }
}
console.log(user3);
console.log(user3.address);
console.log(user3.address.city);

const user4 ={...user3};
user4.name="rohit";
console.log(user4);

// shallow copy
const user5 = {...user3};
user5.name ="mohan";
user5.address.city ="kolkata";
console.log(user5);

// deep copy:-

const user6 =structuredClone(user3);
user6.address.city = "chanpatia";
console.log(user6);

// intretsing:-
const user7 = {
    name: "ankit",
    age:21,
    0:101,
    2:"rohan"
}
console.log(user7[0]);

// key:- string || symbol
const sym = Symbol("id");
const user8 = {
    name: "ankit",
    age:21,
    0:101,
    2:"rohan",
    [sym]:"hello ji"
}
console.log(user8[sym]);

// map pointer , property pointer ,element pointer


