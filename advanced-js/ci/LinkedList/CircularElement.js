let LinkedList = require('./LL')
let Node = require('./Node')

function localPrint(head) {
    let trav = head
    let max = 15;
    while (trav !== null && max > 0) {
        process.stdout.write(trav.toString());
        trav = trav.next;
        max--;
    }
    console.log()
}

function findCircularElement(head) {
    let travOne = head
    let travTwo = head

    while (travOne.next !== null) {
        travOne = travOne.next;
        travTwo = travTwo.next.next
        // console.log(`${travOne} ${travTwo}`)
        if (travOne.data === travTwo.data) {
            // console.log(travOne.data)
            break
        }
    }
    // console.log('reached here.')
    travOne = head
    while (travOne != travTwo) {
        travOne = travOne.next
        travTwo = travTwo.next
    }
    console.log(`Circular element is :${travOne.data}`)
}

function test() {
    let LL = new LinkedList()
    let a = new Node('a')
    let b = new Node('b')
    let c = new Node('c')
    let d = new Node('d')
    let e = new Node('e')
    let f = new Node('f')
    let g = new Node('g')
    let h = new Node('h')
    let i = new Node('i')

    a.next = b;
    b.next = c;
    c.next = d;
    d.next = e;
    e.next = f;
    f.next = g;
    g.next = h;
    h.next = i;
    i.next = c;
    localPrint(a)
    findCircularElement(a)
}

module.exports = test