// 🧠 Main Concepts Covered

// What is Memory Management in JavaScript?
// The video teaches how JavaScript allocates and manages memory while your code runs.
//  It shows how values and variables are stored in the system’s RAM so that 
// the JavaScript engine can use them during execution.

// Stack Memory:

// The stack stores simple and short-lived data such as 
// function calls and primitive values (numbers, booleans, etc.).

// It follows a Last In, First Out (LIFO) structure. 
// When a function runs, its variables get pushed onto the stack;
//  when the function ends, they are popped off automatically.

// Memory access here is fast but limited.

// Heap Memory:

// The heap is a larger area of memory used for dynamic or complex data, like objects and arrays.

// When you create objects or allocate memory dynamically, it goes into the heap.

// Garbage collection removes unused memory from the heap when it’s no longer referenced.

// Differences Between Stack and Heap:

// Stack: fast, automatic memory management, limited size, used for function contexts and primitives.

// Heap: slower access, manual or dynamic allocation, stores objects and reference types.

// Stack is organized, while heap is more flexible.

// 🛠 Practical Insights

// When JavaScript Runs Code:
// The engine stores variables in these memory spaces based on type.
//  Understanding this helps you write efficient code and know when memory might leak.

// Garbage Collection:
// JavaScript automatically removes unused data from the heap, 
// which is crucial for performance and preventing memory leaks.

// 💡 Overall: The video teaches beginners how memory works under the hood in JavaScript 
// with clear explanations of stack vs heap, helping to build a stronger foundation in JS internals.