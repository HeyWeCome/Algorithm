let aa = {
	age: 18,
	name: 'aaa',
	address: {
		city: 'shanghai'
	}
}

let bb = {...aa};
bb.address.city = 'shenzhen';
bb.name = 'kang'

console.log(aa);  // shenzhen
