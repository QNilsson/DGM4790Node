import { Router } from 'express'
export const recipeRouter = Router()
import { addRecipe, recipes, deleteRecipe, updateRecipe} from '../controllers/recipe.controller.js'

recipeRouter.post('/add', addRecipe)
recipeRouter.get('/', recipes)//done
recipeRouter.delete('/delete', deleteRecipe)//done
recipeRouter.put('/update', updateRecipe)//done
//attempting new get route
//recipeRouter.get('/crowd', getCrowd)
