import mongoose from 'mongoose'

const Schema = mongoose.Schema

const recipeSchema = new Schema({
	title:{
		type:String,
		required:true
	},
	servings: {
		type:Number,
		required:true
	},
	time:{
		type:Number,
		required:true,
	},
	image:{
		type:String,
		required:false
	},
	
	id:{
		type:String,
		required:false
	}
})

export const Recipe = mongoose.model('Recipe', recipeSchema)