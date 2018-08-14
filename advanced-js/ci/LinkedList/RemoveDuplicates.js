const LinkedList = require('./LL')

function testLL() {
    console.log('******************** REMOVING DUPLICATES ********************')
    let LL = new LinkedList()
    for (let i = 0; i < 10; i++) {
        let val = Math.round(Math.random() * 10) + 1;
        // val =1
        // process.stdout.write(`${val} `)
        LL.addToEnd(val)
    }
    LL.printLL()
    LL.removeDuplicates()
    LL.printLL()
    console.log('\n\n')
}

// testLL()
module.exports = testLL;