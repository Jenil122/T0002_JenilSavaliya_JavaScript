let recipes = []; // Array to store recipes

// Function to add a new recipe
function addRecipe(recipe) {
  recipes.push(recipe);
}

// Function to edit a recipe by id
function editRecipe(id, updatedRecipe) {
  let index = recipes.findIndex((recipe) => recipe.id === id);
  if (index !== -1) {
    recipes[index] = { ...recipes[index], ...updatedRecipe };
  }
}

// Function to delete a recipe by id
function deleteRecipe(id) {
  recipes = recipes.filter((recipe) => recipe.id !== id);
}

// Function to list all recipes or filter by category
function listRecipes(category = null) {
  if (category) {
    return recipes.filter((recipe) => recipe.category === category);
  } else {
    return recipes;
  }
}

// Function to search recipes by ingredient
function searchRecipesByIngredient(ingredient) {
  return recipes.filter((recipe) =>
    recipe.ingredients.some((item) =>
      item.toLowerCase().includes(ingredient.toLowerCase())
    )
  );
}

// Example usage:
addRecipe({
  id: 1,
  name: "Pasta Carbonara",
  ingredients: ["spaghetti", "eggs", "pancetta", "parmesan cheese"],
  instructions:
    "Cook spaghetti; mix eggs, pancetta, and parmesan cheese; combine and serve.",
  category: "Italian",
});

console.log(listRecipes()); // List all recipes
console.log(searchRecipesByIngredient("eggs")); // Search recipes by ingredient
