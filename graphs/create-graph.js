let Grafo = require('./Graphs')
function createGraph(vertices, funcEdges) {
    let graph = new Grafo()
    let spigoli = []
    for (let i = 0; i < vertices.length; i++) {
        graph.vertex[i] = new vertex(vertices[i])
        graph.edges[vertex[i].key] = []
    }
    for (let i = 0; i < funcEdges.length; i++) {
        spigoli[i] = new Edge(funcEdges[i][0], funcEdges[i][1], funcEdges[i][2])
        graph.edges[spigoli[i].vertex1.key] = spigoli[i]
        graph.edges[spigoli[i].vertex2.key] = spigoli[i]
    }
    return graph
}

module.exports = createGraph
