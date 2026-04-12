 import {GrocerGridCards }from "../Utils/GroceryData"
 import GroceryCard from "./GroceryCard" 


 export default function GroceryOption(){


    return(
       <div className="w-[80%] container mx-auto mt-20 ">
            <h1 className="text-2xl font-black">Shop Groceries on instamart</h1>
            <div className="container mx-auto flex flex-nowrap overflow-x-auto mt-5 gap-5">
            {
                 GrocerGridCards.map((foodData)=><GroceryCard key={foodData.id} foodData={foodData}></GroceryCard>)
            }
            </div >
  
        </div>
    )
}