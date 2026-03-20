// forEach , filter , reducer , map , set
 const arr = [10,20,30,5,78,90];
 let sum = 0;
 arr.forEach((number,index,arr,sum)=>{
    sum+= number;
    console.log(number,index,arr);

 })


//  filter
const arr1 = [10,20,30,5,78,90];
const newArr = arr1.filter((number)=>number>25);
console.log(newArr);

// example:-
let products = [
  { id: 13, name: "T-Shirt", category: "Clothing", price: 20, inStock: true },
  { id: 14, name: "Jeans", category: "Clothing", price: 60, inStock: false },
  { id: 15, name: "Jacket", category: "Clothing", price: 110, inStock: true },

  { id: 16, name: "Desk Lamp", category: "Home Goods", price: 15, inStock: true },
  { id: 17, name: "Scented Candle", category: "Home Goods", price: 15, inStock: true },
  { id: 18, name: "Picture Frame", category: "Home Goods", price: 22, inStock: false }
];
let price20Products = products.filter(product => product.price > 20).sort((a,b)=>b.price-a.price);

console.log(price20Products);
products.map((product)=>({name:product.name,price:product.price}))


// reduce:-
let productss= [
  { id: 13, name: "T-Shirt", price: 20 },
  { id: 14, name: "Jeans", price: 60 },
  { id: 15, name: "Cap", price: 20 },
  { id: 16, name: "Shoes", price: 20 }
];

let countPrice20 = productss.reduce((count, product) => {
    if (product.price === 20) {
        count++;
    }
    return count;
}, 0);

console.log(countPrice20);
// 3

// data structure set:-
 const arr2 = [10,20,30,10,25,39,29,20];
 console.log(arr2);

 const s1 = new Set(arr2);
 s1.add(11);
 console.log(s1);
 console.log(s1.has(23));
 s1.delete(11);
 s1.clear();
 console.log(s1);

 const email = ["ro@gm","mo@gm","mo@gm","ro@gm"];
 const uniqueEmail = [...new Set(email)];
 console.log(uniqueEmail);

//  const s1 = new Set(email);

// map:
const m1 = new Map([
    ["ROhit",40],
    [2,"Rohit"],
    [true,11],
    [[10,30,11],"Mohit"]
]);
m1.set({name:"Manish",age:20},false);
console.log(m1.size);

for(let [keys,value] of m1){
    console.log(keys, value);
}

