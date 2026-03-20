
const restaurant = [];
const images = ["first","second","third","fourth","fifth","sixth","seventh","eighth","ninth","tenth"]
const rest_name = ["Spice Route",
  "Urban Tandoor",
  "The Hungry Fork",
  "Royal Biryani House",
  "Café Delight",
  "Masala Magic",
  "Food Junction",
  "Taste of Punjab",
  "The Curry Leaf",
  "Street Bites",
  "Flavour Factory",
  "Desi Dhaba",
  "Ocean’s Grill",
  "The Golden Spoon",
  "Biryani Blues",
  "Chilli & Garlic",
  "Midnight Munchies",
  "Fusion Kitchen",
  "Little Italy",
  "Smoky Barbecue"
];
const foodTypes = [
  "Pizza",
  "Burger",
  "Biryani",
  "Pasta",
  "Sandwich",
  "Dosa",
  "Noodles",
  "Fried Rice",
  "Ice Cream",
  "Salad"
];
const kolkataLocations = [
  "Park Street",
  "Salt Lake (Bidhannagar)",
  "New Town",
  "Howrah",
  "Dum Dum",
  "Garia",
  "Behala",
  "Esplanade",
  "Sealdah",
  "Jadavpur"
];



for(let i=0; i<100; i++){

    const obj = {};
    obj["image"] = images[Math.floor(Math.random()*10)];
    obj["name"] = rest_name[Math.floor(Math.random()*20)];
    obj['rating'] = Math.floor(Math.random()*5+1);
    obj["foodTypes"] = foodTypes[Math.floor(Math.random()*10)];
    obj["price_for_two"] = Math.floor(Math.random()*2401+100);
    obj["location"] = kolkataLocations[Math.floor(Math.random()*10)];
    obj[" Distance_From_Customer_House"] = (Math.random()*10+1).toFixed(1);
    obj["offers"] = Math.floor(Math.random()*30);
    obj["alchol"] = Math.random() > 0.7;
    obj["restaurant_open_time"] = Math.floor(Math.random()*24);
    obj["Restaurant_close_time"] =(obj["restaurant_open_time"]+12)%24;

    restaurant.push(obj);


}

console.log(restaurant);

const jsonData = JSON.stringify(restaurant, null, 2);
console.log(jsonData);
