'use strict'
// let and const keywords and Block scoping :)

// Block scoping with let
let productId = 12;
{
    let productId = 2000
}
console.log(productId);




let updateFunctions = []
for (let i = 0; i < 2; i++) {
    updateFunctions.push(function () { return i })
}
console.log(updateFunctions[0]());
console.log(updateFunctions[1]());

// const variable should always be declared
const TEST_CONST = 2
console.log(typeof TEST_CONST)


// Arrow functions
let getPrice = () => 5.99;
console.log(`Price is ${getPrice()}`)
getPrice = () => 5.99;
console.log(`Price with one expression is ${getPrice()}`)

getPrice = x => x * 5.99; // doesn't need any () for 1  argument 
console.log(`Price with one expression is ${getPrice(2)}`)


getPrice = (count, tax) => count * 5.99 * (1 + tax);
console.log(`Price with one expression is ${getPrice(2, .07).toFixed(3)}`)




// Understanding this keyword
console.clear()
var invoice = {
    number: 123,
    process: function () {
        console.log(`normal ES5 function  ${JSON.stringify(this.number)}`)
        return () => console.log(this.number)
    },
    arrowProcess: () => {
        console.log(`Big fat Arrow Function ${JSON.stringify(this.number)}`)
        return () => console.log(this.number)
    }
}
var newInvoice = {
    number: 144
}
console.log("Normal function which returns and arrow function")
invoice.process()();
console.log("Normal function which returns and arrow function, with newInvoice and .bind")
invoice.process().bind(newInvoice)();
console.log("Normal function which returns and arrow function, with call / apply")
invoice.process().call(newInvoice);

console.log("Arrow function which returns and arrow function")
invoice.arrowProcess()();
console.log("Arrow function which returns and arrow function")
invoice.arrowProcess().bind(newInvoice)();



// Creating a function dynamically
console.log("Creating a new function dynamically")
var getTotal = new Function("price=20.00", "console.log(\"Hello World from inside constructed function :) \"); return price+1");
console.log(getTotal())



// Rest and Spread 
// Rest->Gathering up parameters into single object
// Spread -> Spreading an array

var showCategories = function (productId, ...categories) {
    console.log(`Sample of rest-> ${categories.join(' ')}`)
}
showCategories(123, 'search', 'advertising')
console.log(showCategories)


// Object literal Extensions
var price = 5.99, quantity = 3;
var productView = {
    price: 70,
    quantity: 1,
    calculateValue() {
        console.log(`Object literal uses fat arrow by defaut, so this refers to context ${this.price}`)
        return this.price * this.quantity;
    }
}
console.log(productView.calculateValue())



