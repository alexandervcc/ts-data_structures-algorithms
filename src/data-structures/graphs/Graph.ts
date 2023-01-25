import Dictionary from "../dictionary/Dictionary";

type GraphKeyTypes = string | number;

export class Graph {
  isDirected: boolean;
  vertices: GraphKeyTypes[];
  adjList: Dictionary<GraphKeyTypes, GraphKeyTypes[]>;

  constructor(isDirected: boolean) {
    this.isDirected = isDirected;
    this.vertices = [];
    this.adjList = new Dictionary();
  }

  addVertex(v: GraphKeyTypes): void {
    if (!this.vertices.includes(v)) {
      this.vertices.push(v);
      this.adjList.set(v, []);
    }
  }

  addEdge(v1: GraphKeyTypes, v2: GraphKeyTypes) {
    if (!this.adjList.get(v1)) {
      this.addVertex(v1);
    }
    if (!this.adjList.get(v2)) {
      this.addVertex(v2);
    }
    this.adjList.get(v1).push(v2);
    if (!this.isDirected) {
      this.adjList.get(v2).push(v1);
    }
  }

  getVertices(): GraphKeyTypes[] {
    return this.vertices.slice();
  }

  getAdjList(): Dictionary<GraphKeyTypes, GraphKeyTypes[]> {
    return this.adjList;
  }

  toString() {
    let toString = "";
    this.vertices.forEach((vertice) => {
      toString += `${vertice} -> `;
      const neighbors = this.adjList.get(vertice);
      neighbors.forEach((verticeNeig) => {
        toString += `${verticeNeig} `;
      });
      toString += "\n";
    });
    return toString;
  }
}
