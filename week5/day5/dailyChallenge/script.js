// function to append the supported currency in the form
(async function() {
	try{
		const codesCur = await fetch("https://v6.exchangerate-api.com/v6/4b15e8d0eb3326f5e043117c/codes")
		
		if (codesCur.status == 200){
			const jsonCode = await codesCur.json()
			displayForm(jsonCode)
		}else{
			throw new Error("error code")
		}
	}catch(er){
		console.log(er.message)
	}
})()

function displayForm(obj) {
	const {supported_codes: array} = obj
	const fromForm = document.getElementById('fromCur')
	const toCur = document.getElementById('toCur')

	array.forEach(item => {
		let option = document.createElement("option")
		let textOpt = document.createTextNode(`${item[0]} - ${item[1]}`)
		option.appendChild(textOpt)
		toCur.appendChild(option)

		let opt = document.createElement("option")
		let textOpt2 = document.createTextNode(`${item[0]} - ${item[1]}`)
		opt.appendChild(textOpt2)
		fromForm.appendChild(opt)
	})

	
}

async function convert(e) {
	e.preventDefault()
	const fromCur = document.getElementById('fromCur').value
	const toForm= document.getElementById('toCur').value

	const cur1 = fromCur.substr(0,3);
	const cur2 = toForm.substr(0,3);	

	try{
		const conv = await fetch(`https://v6.exchangerate-api.com/v6/4b15e8d0eb3326f5e043117c/pair/${cur1}/${cur2}`)
		if(conv.status == 200){
			const jsonConv = await conv.json()
			console.log(jsonConv)
			displayConv(jsonConv)
		}else{
			throw new Error("error convert")
		}
	}catch(err){
		console.log(err.message)
	}
}

function displayConv(elem){
	const{conversion_rate : rate} = elem
	const p = document.getElementsByTagName('p')[0]
	p.textContent=""
	const amount = document.getElementById('amountText').value
	const result = amount * rate
	const to= document.getElementById('toCur').value
	const cur = to.substr(0,3)

	const textRes = document.createTextNode(`${result} ${cur}`)
	p.appendChild(textRes)


}

const form = document.getElementById('currencyForm')
form.addEventListener("submit", convert)