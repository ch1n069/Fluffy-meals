import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";
import { useCallback, useEffect, useState } from "react";
import useApi from "../../hooks/use-api";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const transform = (data) => {
    const loadedMeals = [];

    // Extract meal objects into an array
    for (const key in data) {
      if (data.hasOwnProperty(key) && typeof data[key] === "object") {
        loadedMeals.push(data[key]);
      }
    }

    // Update state with extracted meal objects
    setMeals(loadedMeals);
  };
  console.log("dattttt", meals);
  const { data, error, isLoading, getData } = useApi();
  // useEffect
  useEffect(() => {
    getData(
      {
        url: "https://react-fundamentals-c4ee7-default-rtdb.firebaseio.com/Meals.json",
      },
      transform
    );
  }, []);
  const mealsList = meals.map((item) => (
    <MealItem
      key={item.id}
      // id={meal.id}
      name={item.name}
      description={item.description}
      price={item.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
