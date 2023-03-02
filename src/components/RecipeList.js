import React from "react";

export const RecipeList = ({ recipe }) => {
  return (
    <li key={recipe.id}>
      <img src={recipe.imageUrl} alt={recipe.name} />
      <div>{recipe.name}</div>
      <div>{recipe.recipeText}</div>
    </li>
  );
};
