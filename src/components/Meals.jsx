import { useEffect, useState } from "react";
import MealItem from "./MealItem";

export function Meals(params) {
  const [loadedMeals, setLoadedMeals] = useState([]);

  useEffect(() => {
    async function fetchMeals(params) {
      const response = await fetch("http://localhost:3000/meals");

      if (!response.ok) {
      }

      const resData = await response.json();
      setLoadedMeals(resData);
    }

    fetchMeals();
  }, []);

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}
