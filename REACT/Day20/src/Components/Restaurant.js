import { useEffect, useState } from "react";
import RestCard from "./RestCard";

export default function Restaurant() {
  const [RestData, setRestData] = useState([]);
  const [allRestData, setAllRestData] = useState([]);  // ✅ was missing
  const [foodData, setFoodData] = useState([]);        // ✅ was missing

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true"
        );
        const json = await res.json();

        const cards = json?.data?.cards || [];

        // ✅ Find restaurants
        const restCard = cards.find(
          (c) => c?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );
        const restaurants =
          restCard?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

        setRestData(restaurants);
        setAllRestData(restaurants);

        // ✅ Find food/category info
        const foodCard = cards.find(
          (c) => c?.card?.card?.gridElements?.infoWithStyle?.info
        );
        setFoodData(
          foodCard?.card?.card?.gridElements?.infoWithStyle?.info || []
        );

      } catch (error) {
        console.error("Failed to fetch restaurant data:", error);
      }
    }

    fetchData();
  }, []);

console.log(RestData);

  // ✅ Loading state guard
  if (RestData.length === 0) {
    return (
      <div className="flex justify-center items-center mt-20 text-xl">
        Loading restaurants...
      </div>
    );
  }

  return (
    <div className="flex flex-wrap w-[80%] mx-auto mt-20">
      {RestData.map((restInfo) => (
        <RestCard key={restInfo?.info?.id} restInfo={restInfo} />
      ))}
    </div>
  );
}