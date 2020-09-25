const user = {
	name : 'Kim',
	active : 'true',
	cart : [],
	purchases : []
}

/*Features to implement using Functional programming and object oriented programming
1 add items to the cart 
2 30% tax on items in the cart
3 move items from cart to purchase 
4 return empty cart */

const compose = (f,g) => (...args) => f(g(...args));

purchaseItem (
  emptyCart,
  buyItems,
  applyTaxToItems,
  addItemToCart
	)(user, {name: 'laptop' , price:200})


function purchaseItem (...fns) {
	return fns.reduce(compose)
}

function addItemToCart (user,item) {
   const updateCart = user.cart.concat (item)
   return Object.assign({} , user, {cart: updateCart})
}

function applyTaxToItems (user) {
	const {cart} = user;
	const taxRate = 1.3%;
	const updatedCart = cart.map (item => {
		return {
			name : item.name
			price : item.price * taxRate
		}
	})
	return Object.assign ({}, user, {cart: updatedCart})
}


function buyItems (user) {
	return Object.assign ({}, user, {purchases: user.cart})
}


function emptyCart (user) {
	return Object.assign ({}, user, {cart: []})
}








































