// Zomato application:-

const orderDetail = {
    orderId:293008,
    food:["Pizza","Biryani","Coke"],
    cost:720,
    customer_name: "Ankit Samrat",
    customer_Address:"Kolkata",
    resutration_location:"Howrah"
}
function palcedOrder(orderDetail,callback){
    console.log(`${orderDetail.cost} payment is in process`);

    setTimeout(()=>{
        console.log("payment is recevied and order get placed");
        orderDetail.status = true;
        callback(orderDetail);

    },3000);
}

function preparingOrder(orderDetail,callback){
    console.log(`your food preparation started of ${orderDetail.food}`);

    setTimeout(()=>{
        console.log("your order is now prepared");
        orderDetail.token = 123;
        callback(orderDetail);
    },3000);
}

function pickupOrder(orderDetail,callback){
    console.log(`Delivery boy is on way to pickup order from ${orderDetail.resutration_location}`);

    setTimeout(()=>{
        console.log("i have picked up the order");
        orderDetail.reeived = true;
        callback(orderDetail);
    },3000);
}

function deliverOrder(orderDetail){
    console.log(`i am on my way to deliver order ${orderDetail.customer_Address}`);

    setTimeout(()=>{
        console.log("order delivered successsfully");
        orderDetail.delivery = true;
    },3000)
}

// callback hell:-
palcedOrder(orderDetail,(orderDetail)=>{
    preparingOrder(orderDetail,(orderDetail)=>{
        pickupOrder(orderDetail,(orderDetail)=>{
            deliverOrder(orderDetail);
        });
    });
});

