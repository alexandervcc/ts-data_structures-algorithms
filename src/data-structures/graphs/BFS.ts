import Queue from "../queue/Queue";
import { Color, Graph, GraphType } from "./Graph";
import { initializeGraphColors } from "./util";

export const BFS = (
  graph: Graph,
  startVertice: GraphType,
  cb?: (param: GraphType) => any
) => {
  const vertices = graph.getVertices();
  const adjList = graph.getAdjList();
  const color = initializeGraphColors(vertices);
  const queue = new Queue<GraphType>();

  queue.enqueue(startVertice);

  while (!queue.isEmpty()) {
    const nextVert = queue.dequeue();
    const vertNeighbors = adjList.get(nextVert);

    //Vertex touched
    color[nextVert] = Color.GREY;

    for (let i = 0; i < vertNeighbors.length; i++) {
      const neigh = vertNeighbors[i];
      if (color[neigh] === Color.WHITE) {
        color[neigh] = Color.GREY;
        queue.enqueue(neigh);
      }
    }

    //Vertex fully visited
    color[nextVert] = Color.BLACK; 
    if (cb) {
      cb(nextVert);
    }
  }
};
