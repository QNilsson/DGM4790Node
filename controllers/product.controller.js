import Product from '../models/local_product.js'

export const postAddProduct = ((req,res) =>{
	const product = new Product(req.body.title)
	console.log(product)
	product.save()
	res.json(product)
})

export const getAllProducts = ((req, res) =>{
	console.log(Product.fetchAll())
	res.json(Product.fetchAll())
})