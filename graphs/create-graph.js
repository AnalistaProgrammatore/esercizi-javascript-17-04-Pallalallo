const { Graph, Vertex, Edge } = require('./Graphs.js')
function createGraph(vertices, funcEdges) {
    let graph = new Graph()
    for (let i = 0; i < vertices.length; i++) {
        graph.vertex[i] = new Vertex(vertices[i])
        graph.edges[graph.vertex[i].key] = []
    }
    for (let i = 0; i < funcEdges.length; i++) {
        graph.addEdge(graph.vertex.find(el => el.key == funcEdges[i][0]), graph.vertex.find(el => el.key == funcEdges[i][1]), funcEdges[i][2])
    }
    return graph
}
vertici = [1, 2, 4, 5]
spig = [[1, 2, 1], [1, 4, 1], [2, 4, 1], [1, 5, 3], [4, 5, 2]]
grafo = createGraph(vertici, spig)

module.exports = grafo