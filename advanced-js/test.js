'use strict'
var greet = function (harCoded, ...replacement) {
    return harCoded.join(' ') + replacement.join(' ') + '! Good Morning!'
}


var name = 'John';
var lastname = 'Komban'
var greetings = greet`Hello ${name}${lastname}`

console.log("greetings :", greetings)

class Animal {

    makeSound() {
        console.log("Animals make sound");
    }
}

class Cat extends Animal {
    constructor(name) {
        super()
        this.name = name;
    }

    cry() {
        console.log(this.name, " makes meow")
        this.makeSound()
    }
}

var oneCat = new Cat('Kitty')
Object.defineProperty(oneCat,'name',{
    enumerable:true,
    writable:false,
    value: 'abcd',

})

console.log( Object.getOwnPropertyNames(oneCat))
console.log(Object.keys(oneCat))

console.log('---------------')
// var catTwo = Object.create(oneCat)
var catTwo = Object.assign({},oneCat)


// console.log(catTwo.cry())

// console.log(Object.keys(catTwo))
console.log(Object.getOwnPropertyNames(catTwo))

