// Operator
// Arithmetic
console.log(4+5);
console.log(8-5);
console.log(4*5);
console.log(15/5);
console.log(9%5);
console.log(5**3);

// Assignment Operator:-
let x = 40;
let y = 20;
r = x+y ;
m = x-y ;
n = x/y ;
p = x%y ;
console.log(r);
console.log(m);
console.log(n);
console.log(p);

// comparision Operator:-
 
let s = 30;
let t = 20;
console.log(s>t);
console.log(s<t);
console.log(s>=t);
console.log(s<=t);
console.log(s==t);
console.log(s===t);

// convert string to number(string-->number)
let v = "12";
let k = Number(v);
console.log(k);

// NaN: not a number (type of it is number)

let w = "121ac";
let e = Number(w);
console.log (e) ;

// boolean convert into number:-
console.log(Number(true));
console.log(Number(false));

console.log(Number(null));
console.log(Number(undefined));
// null-->0;
// /undefined-->NaN;
console.log(String(true));

// for loop:-
for(let i=0; i<10; i++){
    console.log(i);
}

// while loop:-
let i = 0;
while(i<10){
    console.log(i);
    i++;

}

// do while:-
let u = 0;
do{
    console.log(u);
    u++;
}while(u<10);

// if else condition:-
let age = 25;
if(age>=18){
    console.log("elegible for vote");
}
    else{
          console.log(" not elegible for vote");
    }

let agee= 20;
if(agee<18){
      console.log("you are kid");
}
      else if(agee<=45){
          console.log("you are adult");
      }
      else{
          console.log("you are old");
      }

    // logocal operator:-

    console.log(true && true);
    console.log(true && false);
    console.log(false && false);
    console.log(false && true);

    console.log(true || true);
    console.log(true || false);
    console.log(false || false);
    console.log(false || true);

