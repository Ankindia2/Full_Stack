// Execution context
// memory allocation
// a = undefined
// b= undefined
// addNumber = fnCode
// sumResult1 = undefined
// sumResult2 = undefined


// Execution phase

var a = 10;
var b = 20;
function addNumber(num1,num2){
    var sum = num1+num2;
    return sum;
}
var sumResult1 = addNumber(a,b);
var sumResult2 = addNumber(4,5);
console.log(sumResult1,sumResult2);

// Explainantion in full details:-


// JavaScript Execution Context & Hoisting (Behind the Scenes)

// The video explains:

// How JavaScript executes code internally

// What is Execution Context

// Memory Creation Phase (Hoisting)

// Code Execution Phase

// How var, function, let, const behave

// How function calls create new execution contexts

// Why some variables show undefined

// 1️⃣ What is Execution Context?

/*👉 Execution Context = Environment where JS code is executed

Whenever JavaScript runs, it creates an Execution Context.

There are two main types:

Global Execution Context (GEC)

Function Execution Context (FEC)*/

// 2️⃣ Two Phases of Execution Context

// Every execution context has 2 phases:

// 🔹 Phase 1: Memory Creation Phase (Hoisting Phase)

// Before executing code, JS:

// Allocates memory for variables

// Stores function definitions

// Initializes var variables with undefined

// In your code:
// var a = 10;
// var b = 20;
// function addNumber(num1, num2) { ... }
// var sumResult1 = addNumber(a,b);
// var sumResult2 = addNumber(4,5);

// Memory Phase (internally):
// Name	Value Stored in Memory
// a	undefined
// b	undefined
// addNumber	full function code
// sumResult1	undefined
// sumResult2	undefined

// 👉 This is why we say Hoisting happens

// 🔹 Phase 2: Code Execution Phase

// Now JS runs code line by line:

// Step by step:
// var a = 10;   // a = 10
// var b = 20;   // b = 20

// Function Call 1:
// var sumResult1 = addNumber(a, b);


// ➡ New Function Execution Context created

// Inside function:

// num1 = 10
// num2 = 20
// sum = 30
// return 30


// So:

// sumResult1 = 30

// Function Call 2:
// var sumResult2 = addNumber(4, 5);


// New Function Execution Context again:

// num1 = 4
// num2 = 5
// sum = 9
// return 9


// So:

// sumResult2 = 9

// Final Output:
// console.log(sumResult1, sumResult2);


// ✅ Output:

// 30 9

// 3️⃣ What is Hoisting?

// 👉 Hoisting means:

// JavaScript moves variable & function declarations to the top during memory phase.

// With var:
// console.log(a);
// var a = 10;


// Internally becomes:

// var a;        // a = undefined
// console.log(a);  // undefined
// a = 10;


// So output = undefined

// 4️⃣ Function Hoisting
// Function Declaration (Works):
// add();

// function add() {
//   console.log("Hello");
// }


// ✅ Works because full function is hoisted.

// Function Expression (Does NOT Work):
// add();

// var add = function() {
//   console.log("Hello");
// }


// ❌ Error: add is undefined
// Because only var add is hoisted, not function body.

// 5️⃣ let & const (Temporal Dead Zone - TDZ)

// The video also explains:

// console.log(x);
// let x = 10;


// ❌ ReferenceError

// Why?

// let & const are hoisted

// BUT not initialized

// They are in Temporal Dead Zone (TDZ)

// 6️⃣ Call Stack (Usually in Video)

// The video likely also shows:

// Global Execution Context pushed to stack

// Function Execution Context pushed on top

// When function ends → popped from stack

// This explains how nested functions work.

// Why This Topic is Important (For You)

// Since you are B.Tech & learning JS, this helps in:

// ✅ Debugging
// ✅ Interviews
// ✅ Understanding async JS later
// ✅ Writing better JS code
// ✅ Knowing why undefined happens.

// Short Summary (Exam Style)

 /*JavaScript runs in Execution Context

Two phases: Memory Creation & Code Execution

var = hoisted + initialized to undefined

Functions = fully hoisted

let & const = hoisted but in TDZ

Each function call creates new execution context

Call Stack manages execution order*/
