import { Router } from 'express'
export const recipeRouter = Router()
import { addRecipe, getRecipeById, getFastRecipe,recipes, deleteRecipe, updateRecipe} from '../controllers/recipe.controller.js'

recipeRouter.post('/', addRecipe)
recipeRouter.get('/', recipes)//done
recipeRouter.delete('/delete', deleteRecipe)//done
recipeRouter.put('/update', updateRecipe)//done
recipeRouter.get('/id', getRecipeById)
//attempting new get route
recipeRouter.get('/fast', getFastRecipe)
