const LinkedList = require('./LL')

function test() {
    console.log('******************** Nth Largest Element ********************')
    let LL = new LinkedList()
    for (let i = 0; i < 10; i++) {
        let val = Math.round(Math.random() * 10) + 1;
        LL.addToEnd(val)
    }
    LL.removeDuplicates()
    LL.printLL()
    LL.sort()
    LL.printLL()
    LL.findNthLargest(LL.length - 2)
    console.log("\n\n")
}


module.exports = test