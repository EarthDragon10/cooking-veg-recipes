import react, { useState, useEffect } from "react";
import axios from "axios";
import InputSearch from "./inputSearch";
import RecipeCard from "./recipeCard";

const url =
  "https://api.spoonacular.com/recipes/complexSearch?apiKey=d13e45ffcd7c40e890c1c67237a73218";
const apiKey1 = "a2fac901400242a98a57a44a53cc73e8";
const apikey2 = "d13e45ffcd7c40e890c1c67237a73218";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    const response = await axios.get(url);
    setRecipes(response.data.results);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      <InputSearch />
      {isLoading ? <h3>Loading...</h3> : <RecipeCard recipes={recipes} />}
    </div>
  );
}

export default App;
