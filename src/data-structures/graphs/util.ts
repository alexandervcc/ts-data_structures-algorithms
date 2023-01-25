import { Color } from "./Graph";

export const initializeGraphColors = (vertices: any[]) => {
  const color = {};
  vertices.forEach((v) => (color[v] = Color.WHITE));
  return color;
};
