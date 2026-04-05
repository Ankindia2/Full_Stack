import FoodCart from "./FoodCart";

const foodItems = [
  { id: 1, food: "Pizza", price: 200 },
  { id: 2, food: "Burger", price: 150 },
  { id: 3, food: "Pasta", price: 180 },
  { id: 4, food: "Sandwich", price: 120 },
  { id: 5, food: "Biryani", price: 250 },
  { id: 6, food: "Noodles", price: 160 },
  { id: 7, food: "Fried Rice", price: 170 },
  { id: 8, food: "Momos", price: 90 },
  { id: 9, food: "Paneer Tikka", price: 220 },
  { id: 10, food: "Ice Cream", price: 80 }
];

export default function Card() {
  return (
    <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "30px" }}>
      {foodItems.map((item) => (
        <FoodCart key={item.id} value={item} />
      ))}
    </div>
  );
}