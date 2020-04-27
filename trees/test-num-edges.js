const BST = require('./BinarySearchTree')
const bst = new BST()


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

console.log(bst.getNumEdges())