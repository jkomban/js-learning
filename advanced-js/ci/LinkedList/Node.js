
class Node {

    constructor(d) {
        this.data = d === undefined || d === null ? -1 : d
        this.next = null
        this.position = Node.pos++;
    }
    toString() {
        if (this.next === null)
            return `${this.data}`
        else
            return `${this.data}->`
    }
}
Node.pos = 0;



module.exports = Node
