// TODO: This component should show a list of all recipes and
// include a select element to filter recipes by category
import { useState, useEffect } from "react";
import { fetchAllRecipes } from "../data/dataAccess.js";
import { RecipeList } from "./RecipeList.js";

// Task #1 get all recipes to display.
// Task #1.1 create state.
// Task #1.2 get data from database.
// Task #1.3 display data.
// Task #2 then get filter to work.

import "./Recipes.css";

export const Recipes = () => {
  // TODO: Create State for recipes, categories, filteredRecipes, categoryChoice
  const [recipes, setRecipes] = useState([]);

  // TODO: Create a useEffect that fetches recipes and categories
  useEffect(() => {
    fetchAllRecipes().then((data) => setRecipes(data));
    /* 
    This is the same as above.
      fetch(`${API}/recipes`)
      .then((response) => response.json())
      .then((data) => setRecipes(data));
    */
  }, []);

  // TODO: Create a useEffect that updates the filteredRecipes state if categoryChoice changes

  return (
    <>
      <h1>Recipes!</h1>
      <div id='filter-bar'>
        {/* TODO: Create a select element that shows the categories as options. Select should have an onChange function that sets the categoryChoice */}
      </div>

      <div className='recipe-container'>
        {/* TODO: Display the filteredRecipes */}
        <ul>
          {recipes.map((recipe) => {
            return <RecipeList key={recipe.id} recipe={recipe} />;
          })}
        </ul>
      </div>
    </>
  );
};
