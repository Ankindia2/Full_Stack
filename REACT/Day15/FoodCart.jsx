import { useState } from "react";
import { addItems, removeItems } from "./Slice2";
import { useDispatch } from "react-redux";

export default function FoodCart({ value }) {

  const [inCart, setInCart] = useState(false);
  const dispatch = useDispatch();

  function handClick() {

    if (inCart) {
      dispatch(removeItems());
    } else {
      dispatch(addItems());
    }

    setInCart(!inCart);
  }

  return (
    <div style={{border:"1px solid black", padding:"20px"}}>
      <h1>{value.food}</h1>
      <h2>₹{value.price}</h2>

      <button onClick={handClick}>
        {inCart ? "Remove" : "Add"}
      </button>
    </div>
  );
}