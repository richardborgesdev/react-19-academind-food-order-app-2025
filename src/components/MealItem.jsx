import * as formatting from "../util/formatting";
import Button from "./UI/Button";

export default function MealItem({ meal }) {
  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
        <div>
          <h3>{meal.name}</h3>
          <p className="meal-item-price">
            {formatting.currencyFormatter.format(meal.price)}
          </p>
          <p className="meal-item-description">{meal.description}</p>
          <p className="meal-item-actions">
            <Button>Add to Cart</Button>
          </p>
        </div>
      </article>
    </li>
  );
}
