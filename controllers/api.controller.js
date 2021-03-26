export const api = ((req, res) =>{
	res.json({
		status:"good",
		name:"Quinn",
		isGirl:true,
		likes:[
			'Dogs',
			'Design'
		]
	})
})

export const status = ((req, res) =>{
	res.json({
		status:"ok",
		info:"Quinn was here"
	})
})