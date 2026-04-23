const {sum,sub} = require ("./second.js")
console.log("hello i am from first.js file");

sum(8,4);
sub(8,6);

// CJS: Common JS module
// I need second.js code in my first.js file 
/*function sum(a,b){
    console.log(a+b);
} :-YY FUNCTION ISALIYE NHI CHALA KYUKI YY ALREADY EK FUNCTION ME WRAP HO KE AA RAHA HAI
 LIKE:-(function sum(a,b){
       CONSOLE.LOG("Hello ji i am from second.js file");
       console.log(a+b);
       })();*/


// NOTE:-SECOND FILE ME FUNCTION NHI KIYE HAI
