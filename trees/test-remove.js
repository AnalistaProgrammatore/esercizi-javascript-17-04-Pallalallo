const BST = require('./BinarySearchTree')
const bst = new BST()

class Node {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }
}


bst.insert(1)
bst.insert(7)
bst.insert(30)
bst.insert(4)
bst.insert(13)
bst.insert(40)
bst.insert(3)
bst.insert(25)
bst.insert(38)
bst.insert(42)

bst.remove(3)

bst.preorder(bst.root)
console.log('\n')

bst.insert(3)
bst.remove(4)

bst.preorder(bst.root)
console.log('\n')

bst.remove(13)

bst.preorder(bst.root)
console.log('\n')

bst.remove(40)

bst.preorder(bst.root)