import Score from "../Score/Score";
import CardWrapper from "../Card/CardWrapper";
import Spinner from "../../utils/Spinner";
import classes from "./Main.module.css";
import React, { useState, useEffect, useCallback } from "react";

const Main = () => {
  const [foodData, setFoodData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedFood, setSelectedFood] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const CARD_AMOUNT = 8;

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    // setError(null);
    const foodDataArray = [];
    try {
      for (let i = 0; i < CARD_AMOUNT; i++) {
        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/random.php"
        );
        const data = await response.json();
        foodDataArray.push({
          id: data.meals[0].idMeal,
          name: data.meals[0].strMeal,
          image: data.meals[0].strMealThumb,
        });
      }
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
    return foodDataArray;
  }, []);

  useEffect(() => {
    const loadData = async () => {
      setFoodData(shuffleArray(await fetchData()));
    };
    loadData();
  }, []);

  const shuffleArray = (array) => {
    return [...array].sort((a, b) => 0.5 - Math.random());
  };

  const cardClickHandler = (e) => {
    const name = e.target.parentNode.lastChild.textContent;
    gameUpdate(name);
    setFoodData(shuffleArray(foodData));
  };

  const gameUpdate = (name) => {
    if (selectedFood.includes(name)) {
      resetGame();
    } else {
      const newCurrentScore = currentScore + 1;
      if (newCurrentScore > bestScore) setBestScore(newCurrentScore);
      setCurrentScore(newCurrentScore);
      setSelectedFood((prevState) => [...prevState, name]);
    }
  };

  const resetGame = () => {
    setSelectedFood([]);
    setCurrentScore(0);
  };

  let content = `Error! ${error}`;

  return (
    <React.Fragment>
      <Score currentScore={currentScore} bestScore={bestScore} />
      <div className={classes.center}>{isLoading && <Spinner />}</div>
      <div className={classes.center}>{error && content}</div>
      {!isLoading && !error && (
        <CardWrapper data={foodData} cardClickHandler={cardClickHandler} />
      )}
    </React.Fragment>
  );
};

export default Main;
