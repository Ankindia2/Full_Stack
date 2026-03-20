// console.log("hello world start");

// // fetch always returns a Promise
// const p1 = fetch("https://api.github.com/users");
// console.log(p1); 
// // Promise { <pending> }

// // then() is used to handle promise result
// p1.then((response) => {
//     console.log(response); // Response object
//     return response.json(); // convert to JS object
// })
// .then((data) => {
//     console.log(data); // actual data array

//     // DOM manipulation
//     const parent = document.getElementById("first");

//     for(let i=0;i<data.length;i++){

//     const image = document.createElement("img");
//     image.src = data[i].avatar_url;
//     image.width = 150;

//     parent.append(image);
//     }
// })
// .catch((error) => {
//     console.error("Error:", error);
// });
// another type catch:-
// .catch((error)=>{
//     const parent = document.createElement("first");
//     parent.textContent = error.message;
// })

const  j1 = {
    name: "Ankit",
    age: 21,
    address: "Chanpatia",
    c: undefined
}
// convert into json:-

const JsonFormate = JSON.stringify(j1);
console.log(JsonFormate);

// json formate code:-
 const JsonFormat = `{
    "name":"Ankit",
    "age":21,
    "address":"kolkata"
 }`

//  convert json code into JavaScript code:-

const JsObject = JSON.parse(JsonFormat);

console.log(JsObject);

// promise create for resolve:-
const p1 = new Promise((resolve,reject)=>{
    resolve("Hello");
})
console.log(p1);

//promise create for reject:-
const p2 = new Promise((resolve,reject)=>{
    reject("Hello");
})
p2.then((Response)=>{
    console.log(Response);
}).catch((error)=>{
    console.log(error);
});

// using promise instead of callback:-

const orderDetail = {
    orderId: 293008,
    food: ["Pizza", "Biryani", "Coke"],
    cost: 720,
    customer_name: "Ankit Samrat",
    customer_Address: "Kolkata",
    restaurant_location: "Howrah"
};

function placedOrder(orderDetail) {
    console.log(`${orderDetail.cost} payment is in process`);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Payment received and order placed");
            orderDetail.status = true;
            resolve(orderDetail);
        }, 3000);
    });
}

function preparingOrder(orderDetail) {
    console.log(`Your food preparation started: ${orderDetail.food.join(", ")}`);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Your order is now prepared");
            orderDetail.token = 123;
            resolve(orderDetail);
        }, 3000);
    });
}

function pickupOrder(orderDetail) {
    console.log(`Delivery boy is on the way to pickup order from ${orderDetail.restaurant_location}`);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Order picked up successfully");
            orderDetail.received = true;
            resolve(orderDetail);
        }, 3000);
    });
}

function deliverOrder(orderDetail) {
    console.log(`Delivering order to ${orderDetail.customer_Address}`);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Order delivered successfully ✅");
            orderDetail.delivery = true;
            resolve(orderDetail);
        }, 3000);
    });
}

// ✅ Promise chaining (NO callback hell)
placedOrder(orderDetail)
    .then(preparingOrder)
    .then(pickupOrder)
    .then(deliverOrder)
    .then((finalOrder) => {
        console.log("Final Order Details:", finalOrder);
    })
    .catch((error) => {
        console.log("Error:", error.message);
    })
    .finally(()=>{
        console.log("i am doing cleanup");

    })
