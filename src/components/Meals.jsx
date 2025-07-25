import { useEffect, useState } from "react";

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
        <li key={meal.id}>{meal.name}</li>
      ))}
    </ul>
  );
}
