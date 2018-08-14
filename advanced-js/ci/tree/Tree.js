'use strict'
const Node = require('./Node')

class Tree {
    constructor(root) {
        this._root = root
        this._depth = 0
    }

    get root() {
        return this._root;
    }

    addToTree(root, data) {
        if (data < root.data) {
            if (root.left === null)
                root.left = new Node(data)
            else
                this.addToTree(root.left, data)
        } else {
            if (root.right === null)
                root.right = new Node(data)
            else
                this.addToTree(root.right, data)
        }
    }

    printInOrderTree(root) {
        // console.log(`Looping.${root}`)
        if (root === null)
            return null
        this.printInOrderTree(root.left)
        process.stdout.write(` ${root} `)
        this.printInOrderTree(root.right)
    }

    printPreOrderTree(root) {
        if (root === null)
            return null

        process.stdout.write(` ${root} `)
        this.printPreOrderTree(root.left)
        this.printPreOrderTree(root.right)
    }

    printPostOrderTree(root) {
        if (root === null)
            return null

        this.printPostOrderTree(root.left)
        this.printPostOrderTree(root.right)
        process.stdout.write(` ${root} `)
    }

    findMinNode(root) {
        if (root === null)
            return root
        if (root.left === null)
            return root
        else
            return this.findMinNode(root.left)
    }

    search(root, key) {
        if (root === null)
            return null

        if (key < root.data)
            return this.search(root.left, key)
        else if (key > root.data)
            return this.search(root.right, key)
        else
            return root
    }

    treeFromArray(sortedArray, start, end, symbol) {
        if (start > end)
            return null

        let mid = Math.ceil((start + end) / 2)
        // console.log(`${symbol}: ${sortedArray} : ${start} ${end}=> ${Math.ceil((start + end) / 2)} vs ${mid}`)
        let node = new Node(sortedArray[mid])
        // console.log(node)
        node.left = this.treeFromArray(sortedArray, start, mid - 1, 'L')

        node.right = this.treeFromArray(sortedArray, mid + 1, end, 'R')
        // console.log(` ${node.left}  ${node} ${node.right}`)
        return node
    }
}

const testIt = function () {
    // const rootNode = new Node(10)
    // const leftChild = new Node(5)
    // const rightChild = new Node(15)
    // const tree = new Tree(rootNode)
    // rootNode.left = leftChild
    // rootNode.right = rightChild
    // leftChild.left = new Node(4)
    // leftChild.right = new Node(6)
    // tree.printInOrderTree(tree.root)

    const rootNode = new Node(10)
    const treeTwo = new Tree(rootNode)
    treeTwo.addToTree(treeTwo.root, 5)
    treeTwo.addToTree(treeTwo.root, 14)
    treeTwo.addToTree(treeTwo.root, 15)
    treeTwo.addToTree(treeTwo.root, 4)
    treeTwo.addToTree(treeTwo.root, 6)
    treeTwo.addToTree(treeTwo.root, 7)
    treeTwo.addToTree(treeTwo.root, 1)

    process.stdout.write(`InOrder: `)
    treeTwo.printInOrderTree(treeTwo.root)
    console.log('')

    process.stdout.write(`PreOrder: `)
    treeTwo.printPreOrderTree(treeTwo.root)
    console.log('')
    process.stdout.write(`PostOrder: `)
    treeTwo.printPostOrderTree(treeTwo.root)
    console.log('')

    console.log(`Min Node ${treeTwo.findMinNode(treeTwo.root)}`)

    console.log(`Finding node 5`)
    treeTwo.printInOrderTree(treeTwo.search(treeTwo._root, 5))



    const orderedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    console.log(`\n\nBalanced BST from sorted Array: ${orderedArray}`)
    const treeThreeRoot = treeTwo.treeFromArray(orderedArray, 0, orderedArray.length - 1)
    const treeThree = new Tree(treeThreeRoot)
    treeThree.printInOrderTree(treeThree.root)

    // treeFromArray(orderedArray)
}
// 10 , 5 , 15 , 4 , 6
//  (4)  <-(5)->  (6)  <-(10)->  (15)

testIt();

module.exports = Tree