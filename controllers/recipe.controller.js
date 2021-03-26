import {Recipe} from '../models/recipe.js';

export const recipes = async (req, res) => {
  const recipes = await Recipe.find ();
  if (!recipes.length) {
    return res.status (400).json ({Message: `No recipes found`});
  }
  res.json (recipes);
};


export const addRecipe = async (req, res) => {
  const recipe = new Recipe ({
    title: req.body.title,
    servings: req.body.servings,
    time: req.body.time,
    image: req.body.image,
  });



  //hello i reuined this whole thing lol
  try {
    console.log (recipe);
    recipe.save (); // save method is provided by Mongoose
    res.json (recipe);
    res.status (200).json ({Message: 'success add'});
    console.log(recipe)
  } catch (err) {
    console.log ('error');
    res.status (400).json ({Message: `Could not create ${err}`});
  }
};

export const updateRecipe = async (req, res) => {
  const recipeId = req.body.data.recipeId;
  console.log (recipeId);
  const updatedObj = {
    title: req.body.data.title,
    servings: req.body.data.servings,
    time: req.body.data.time,
    image: req.body.data.image,
  };
  try {
    const recipe = await Recipe.findByIdAndUpdate (recipeId, updatedObj, {
      new: true,
    });
    console.log (recipe);
    console.log ('success');
    res.status (200).json (recipe);
  } catch (err) {
    console.log ('error');
  }
};

export const deleteRecipe = async (req, res) => {
    const recipeId = req.body.recipeId  
    console.log(`This is recipeId on controller: ${recipeId}`)
    try {
        const deletedRecipe= await Recipe.findByIdAndRemove(recipeId )
        console.log(deletedRecipe)
        console.log(`This is deletedRecipe: ${deletedRecipe}`)
        if (!deletedRecipe) {
            return res.status(400).json({Message: `Recipe to delete not found. ${deletedRecipe}`})
        }
        console.log(`Deleted the recipe: ${deletedRecipe}`)
        res.sendStatus(200) // a simple success
    } catch (err) {
        res.status(400).json({Message: `Invalid ID: ${err}`})
    }

}

