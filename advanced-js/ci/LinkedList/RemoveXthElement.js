// This is to remove Xth element from the LL with only access to that node

const LinkedList = require('./LL')

function test() {
    console.log('******************** Removing Xth Element ********************')
    let LL = new LinkedList()
    for (let i = 0; i < 10; i++) {
        let val = Math.round(Math.random() * 10) + 1;
        LL.addToEnd(val)
    }
    LL.removeDuplicates()
    LL.printLL()
    LL.sort()
    LL.printLL()
    let ele = LL.findNthLargest(LL.length )
    console.log(`Element to be removed : ${ele}`)
    LL.removeXthElement(ele)
    LL.printLL()
    console.log('\n\n')


    console.log('******************** Removing Xth Element with Only access to that Element ********************')
    for (let i = 0; i < 10; i++) {
        let val = Math.round(Math.random() * 10) + 1;
        LL.addToEnd(val)
    }
    LL.removeDuplicates()
    LL.printLL()
    let eleTR = LL.findNthLargest(0)
    LL.removeWithAccessOnlyToTheElementToBeRemoved(eleTR)
    LL.printLL()
    console.log('\n\n')
}


module.exports = test