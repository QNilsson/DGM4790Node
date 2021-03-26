
const products = []

export default class Prodcut{
	constructor(t){
		this.title = t
	}

	save(){
		products.push(this)
	}

	static fetchAll(){
		return products
	}
}