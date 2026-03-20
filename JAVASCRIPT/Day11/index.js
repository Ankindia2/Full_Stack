// Scope and closure ,HOF
// Global scope:-accessible to everyone
// function scope:-accessible only to that funcsion.
// block scope:-accessible only to that block.
// Closure:-
// A closure is when a function remembers and uses variables from its outer (parent) function, even after the parent function has finished executing.
function outerFunction() {
    let count = 0;

    function innerFunction() {
        count++;
        console.log(count);
    }

    return innerFunction;
}

let counter = outerFunction();

counter(); // 1
counter(); // 2
counter(); // 3


// example

let user = (function () {
    let balance = 200;   // 🔒 private variable

    return {
        deposit: function(amount) {
            if (typeof amount === "number" && amount > 0) {
                balance += amount;
                return balance;
            }
        },

        withdraw: function(amount) {
            if (typeof amount === "number" && amount > 0 && balance >= amount) {
                balance -= amount;
                return balance;
            }
        },

        getBalance: function() {
            return balance;
        }
    };
})();


// ❌ Now this will NOT affect real balance
user.balance = "Ankit";

console.log(user.getBalance());  // ✅ 200
