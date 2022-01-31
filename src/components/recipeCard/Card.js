import react, { useState, useEffect } from "react";
import axios from "axios";
import "./recipeCard.scss";
import { ImSpoonKnife, ImStopwatch } from "react-icons/im";

const Card = ({ title, img, id }) => {
  console.log(title);

  const urlInfoRecipe = `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=d13e45ffcd7c40e890c1c67237a73218`;

  const [infoRecipe, setInfoRecipe] = useState([]);

  const fetchInfoData = async () => {
    const response = await axios.get(urlInfoRecipe);
    console.log(response.data);
    setInfoRecipe(response.data);
  };

  useEffect(() => {
    fetchInfoData();
  }, []);

  return (
    <div className="card-component shadow">
      <h4>{title}</h4>
      <img src={img} alt="Vegetarian Recipe" />
      <div>
        <div>
          <ImStopwatch />
          <p>{`Preparation: ${infoRecipe?.readyInMinutes}`}</p>
        </div>
        <div>
          <ImSpoonKnife />
          <p>{`Servings: ${infoRecipe?.servings}`}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
