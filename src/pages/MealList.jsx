import { Meal } from "./Meal";

export const MealList = ({ meals }) => {
  return (
    <div className="list">
      {meals.map(meal=> (
        <Meal key={meals.idMeal + '' + Math.random()} {...meal} />
      ))}
    </div>
  );
}