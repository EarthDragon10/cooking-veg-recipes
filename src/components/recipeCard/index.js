import react from "react";
import Card from "./Card";
import axios from "axios";
import "./recipeCard.scss";

const RecipeCard = ({ recipes }) => {
  return (
    <div className="box-card">
      {recipes.map((recipe) => {
        return (
          <Card
            key={recipe.id}
            title={recipe.title}
            img={recipe.image}
            id={recipe.id}
          />
        );
      })}
    </div>
  );
};

export default RecipeCard;
