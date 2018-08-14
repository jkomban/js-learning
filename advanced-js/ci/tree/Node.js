'use strict'
module.exports = class Node {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }

    toString() {
        if (this.left === null && this.right === null)
            return `(${this.data})`
        else if (this.left !== null && this.right === null)
            return `<-(${this.data})`
        else if (this.left === null && this.right !== null)
            return `(${this.data})->`
        else
            return `<-(${this.data})->`
    }
}