const Node = require('./Node')
class LinkedList {

    constructor() {
        this.head = null
        this.length = 0
        Node.pos = 0
    }

    addToEnd(d) {
        let trav = this.head
        if (this.head === null) {
            this.head = new Node(d)
            this.length++;
            return this.head
        }

        while (trav.next !== null) {
            trav = trav.next
        }

        trav.next = new Node(d)
        this.length++;
    }

    printLL() {
        let trav = this.head
        process.stdout.write(`Printing current LL[${this.length}]:\t`)
        while (trav !== null) {
            process.stdout.write(trav.toString());
            trav = trav.next;
        }
        console.log()
    }
    deleteNode(d) {
        let trav = this.head
        if (trav === null) return false
        console.log(`Deleting node ${d} from LL`)
        if (trav.data === d) {
            this.head = trav.next
        }

        while (trav.next !== null) {
            if (trav.next.data === d) {
                trav.next = trav.next.next
                this.length--;
                break
            }
            trav = trav.next
        }
    }

    removeDuplicates() {
        let i = this.head
        let cur = {}
        let prev = null
        if (i === null || i.next === null) return true
        let mainIndex = 0;
        console.log(`Removing Duplicates from LL:`)
        while (i != null && i.next !== null) {

            prev = i
            cur = i.next
            // console.log(`Iteration for ${i} ${cur}`)
            let x = mainIndex + 1
            while (cur !== null) {
                if (i.data === cur.data) {
                    // console.log(`\n${prev.data}<- Found for ${j.data}`)
                    // console.log(`${x++}: removing duplicates for ${i} ${prev} ${cur} ${cur.next}`)
                    this.length--;
                    prev.next = cur.next
                    cur = cur.next
                    continue
                    console.log(` :${prev}`)
                }
                prev = cur
                cur = cur.next
            }
            i = i.next
            // console.log('----------------')
            // this.printLL()
        }

    }

    sort() {
        let travI = this.head
        let iteration = 0;
        // let travJ = travI.next
        for (let i = this.head; i !== null; i = i.next) {
            {
                iteration++;
                // console.log(`Outside the inner loop ${i} ${i.next}`)
                for (let j = i.next; j != null; j = j.next) {
                    // process.stdout.write(`\tComparing ${i} ${j} [${this.head}] `)
                    if (i.data < j.data) {
                        // console.log(' : Yes')
                        let temp = j.data
                        // let temp = j
                        let next = j.next

                        // temp.data = j.data;
                        // temp.next = j.next
                        // console.log(`1 TempVar ${i} ${i.next} and ${j} ${j.next} and swap is:${temp} ${next} `)
                        // this.printLL()
                        // console.log('\n')

                        j.data = i.data
                        // j = i
                        // j.next = i.next
                        // console.log(`2 Swap ${i} ${i.next} and ${j} ${j.next} and swap is:${temp} ${next} `)

                        i.data = temp
                        // i = temp
                        // i.next = j
                        // j.next = next
                        // console.log(`3 Swap ${i} ${i.next} and ${j} ${j.next} and swap is:${temp} ${next} ${next != null ? next.next : next}`)

                        // Commented on 6/11/2018
                        // let k = i
                        // while (k != null) {
                        //     // process.stdout.write(k.toString())
                        //     k = k.next
                        // }
                    }
                    // console.log(' : No')

                    // this.printLL()
                    // while (i != null) {
                    //     process.stdout.write(i.toString())
                    //     i = i.next
                    // }
                    // break
                }
                // if (iteration === 1)
                //     this.head = i

            }
            // break
        }
        // this.printLL()
    }

    hasXthElementNull(currHead, position) {
        let trav = currHead
        // console.log(`Starting from ${currHead}`)
        while (position > 1) {
            trav = trav.next
            position--;
        }
        // console.log(`${currHead} ${trav.next === null}`)
        return (trav.next === null)
    }

    findNthLargest(position) {
        process.stdout.write(`Finding ${position}th to last element from LL is : `)
        if (this.length < position)
            return NaN
        let trav = this.head
        let pos = 0;
        while (trav != null && !this.hasXthElementNull(trav, position)) trav = trav.next
        console.log(`${trav}`)
        return trav
    }

    removeXthElement(ele) {
        console.log(`Removing element ${ele} from the LL: `)
        let trav = this.head
        let nextOne = null
        let found = false

        if (trav.data === ele.data) {
            this.head = trav.next
            found = true
        }


        while (trav != null && trav.next != null && found === false) {
            nextOne = trav.next
            if (nextOne.data === ele.data) {
                found == true
                trav.next = nextOne.next
                this.length--;
            }
            trav = trav.next
        }
    }

    removeWithAccessOnlyToTheElementToBeRemoved(ele) {
        console.log(`Element to be removed : ${ele}`)
        if (ele.next === null) {
            ele.data = 0
            ele.position = -1
            return
        }


        let prev = null
        while (ele.next !== null) {
            prev = ele
            ele.data = ele.next.data
            ele = ele.next
        }
        // console.log(prev)
        prev.next = null
    }

    createLLFromNumbers(number) {
        number.toString().split('').reverse().every((ele) => {
            this.addToEnd(ele)
            return true
        })
    }

    createLLToNumber() {
        let trav = this.head
        let value = 0
        while (trav !== null) {
            value = (value * 10) + Number(trav.data)
            trav = trav.next
        }
        return value.toString().split('').reverse().join('')
    }

    addNumbers(llOne, llTwo) {
        console.log(`Adding numbers `)
        let travOne = llOne
        let travTwo = llTwo
        let remainder = 0

        while (travOne != null) {
            let number = Number.parseInt(travOne.data) + Number.parseInt(travTwo.data) + remainder
            // console.log(`Inside ${travOne.data} ${travTwo.data} ${number}`)
            if (number > 9) {
                remainder = 1
                this.addToEnd(number % 10)
            } else {
                remainder = 0
                this.addToEnd(number)
            }

            travOne = travOne.next
            travTwo = travTwo.next
        }

        if (remainder)
            this.addToEnd(remainder)
    }


}


function testLL() {

    let ll = new LinkedList()
    ll.addToEnd(1)
    ll.addToEnd(1)
    ll.addToEnd(2)
    ll.addToEnd(3)
    ll.addToEnd(4)
    ll.addToEnd(3)
    ll.addToEnd(1)
    ll.printLL()

    // ll.deleteNode(4)
    ll.removeDuplicates()
    ll.printLL()
}


module.exports = LinkedList