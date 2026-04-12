import { imageGridCards } from "../Utils/FoodData"
import FoodCard from "./FoodCard"


export default function FoodOption(){ 
    return(
      <div className="w-[80%] container mx-auto mt-20">
    <h1 className="text-2xl font-black">Order our best food options</h1>
    <div className="container mx-auto flex flex-wrap mt-5 gap-5">
        {
            imageGridCards.map((foodData) => (
                <FoodCard key={foodData.id} foodData={foodData} />
            ))
        }
    </div>
</div>
    )
}