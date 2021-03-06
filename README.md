## Node Crud Restful API server





## Requirements

**Deployed to Production service**

## Netlify Link:
https://loving-feynman-6ad039.netlify.app/recipes

## Heroku Link: 
https://quinn-node-server.herokuapp.com/recipe

Server URL: https://github.com/QNilsson/DGM4790Node

React URL : https://github.com/QNilsson/RIA

### At least 3 endpoints to GET data

```javascript
recipeRouter.get('/', recipes) //router

//seed file
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
```
```javascript


recipeRouter.get('/id', getRecipeById)//router

//controller
export const getRecipeById = async(req, res) =>{
  const recipeID = req.body.recipeID
  try{
    const recipe = await Recipe.findById(recipeID)
    if(!recipe){
      return res.status(400).json({Message: 'reicpe not found'})
    }
    res.json(recipe)
  }catch(err){
    return res.status(400).json({Message: `invalid id ${err}`})
  }
}

```
```javascript
recipeRouter.get('/fast', getFastRecipe)


```

### At least 1 endpoint to UPDATE using PUT or PATCH

```javascript
recipeRouter.put('/update', updateRecipe) //router

//controller
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




```

### At least 1 endpoint to CREATE and item via POST 

```javascript
recipeRouter.post('/', addRecipe)//router

//controller
//recipe adds at the bottom of the list right now...need to fix that
export const addRecipe = ((req, res) =>{
  console.log("want to add")
  const recipe = new Recipe({
    title:req.body.title,
    servings:req.body.servings,
    time:req.body.time,
    image:req.body.image
  })
  console.log(recipe)
  recipe.save()
  res.json(recipe)
})
```

### At least 1 endpoint allowing user to delete an item via DELETE

```javascript
recipeRouter.delete('/delete', deleteRecipe)//router

//controller
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




```
**Datastore will contain 25 items**

**All code loaded to Github**

**Descriptive ReadMe File**
