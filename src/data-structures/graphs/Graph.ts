import Dictionary from "../dictionary/Dictionary";

export type GraphType = string | number;

export enum Color {
  WHITE = 0,
  GREY = 1,
  BLACK = 2,
}
export class Graph {
  isDirected: boolean;
  vertices: GraphType[];
  adjList: Dictionary<GraphType, GraphType[]>;

  constructor(isDirected: boolean) {
    this.isDirected = isDirected;
    this.vertices = [];
    this.adjList = new Dictionary();
  }

  addVertex(v: GraphType): void {
    if (!this.vertices.includes(v)) {
      this.vertices.push(v);
      this.adjList.set(v, []);
    }
  }

  addEdge(v1: GraphType, v2: GraphType) {
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

  getVertices(): GraphType[] {
    return this.vertices.slice();
  }

  getAdjList(): Dictionary<GraphType, GraphType[]> {
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
