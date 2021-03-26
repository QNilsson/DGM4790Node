import axios from 'axios';
import {Recipe} from '../models/recipe.js';

import * as dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config();

const seedMongo = async () => {
  await mongoose.connect (`${process.env.CONNECT_STRING}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const options = {
	method: 'GET',
	url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search',
	params: {query: 'chocolate'},
	headers: {
	  'x-rapidapi-key': `${process.env.RAPID_API_KEY}`,
	  'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
	  'Content-Type':'application/json',
	  "Access-Control-Allow-Methods":"GET,POST,PUT,DELETE, OPTIONS"
	}
  };
try{
	const response = await axios.request(options)
	await addRecipes(response.data.results)
	await mongoose.connection.close()
}catch(error){
	console.log(error)
}
}

const addRecipe = async (oneRecipe)=>{
	const recipe = new Recipe({
		title: oneRecipe.title,
		servings: oneRecipe.servings,
		time:oneRecipe.readyInMinutes,
		image: oneRecipe.image

	})
	await recipe.save()
	console.log('added successfully')
}

const addRecipes = async (recipeList) =>{
	for(let recipe of recipeList){
		await addRecipe(recipe)
	}
}

seedMongo()