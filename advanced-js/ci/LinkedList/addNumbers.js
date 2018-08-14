let LinkedList = require('./LL')

// Excersise 2.4 => Add two numbers in LL

function test() {
    console.log('******************** Adding two numbers in LL ********************')
    let llOne = new LinkedList();
    let llTwo = new LinkedList();
    let llResult = new LinkedList();

    let NumberOne = 339;
    let NumberTwo = 823;
    console.log(`${NumberOne} + ${NumberTwo} = ${NumberOne+ NumberTwo}`)

    llOne.createLLFromNumbers(NumberOne)
    llOne.printLL()
    llTwo.createLLFromNumbers(NumberTwo)
    llTwo.printLL()

    llResult.addNumbers(llOne.head, llTwo.head)
    llResult.printLL()
    let finalNumber = llResult.createLLToNumber()
    console.log(`Final result from LL: ${finalNumber}`)
    console.log('\n\n')

}

module.exports = test