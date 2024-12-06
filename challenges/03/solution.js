function findSafestPath(dream) {
  const rows = dream.length - 1;
  const cols = dream[0].length - 1;

  const stack = [{ coords: [0, 0], sum: dream[0][0] }];
  let safestPath = Number.POSITIVE_INFINITY;

  // While stack is not empty keep iterating
  while (stack.length > 0) {
    const node = stack.pop();

    // When you reach the final node
    if (
      node.coords[0] === rows &&
      node.coords[1] === cols &&
      safestPath > node.sum
    ) {
      safestPath = node.sum;
      continue;
    }

    if (node.coords[0] + 1 <= rows)
      stack.push({
        coords: [node.coords[0] + 1, node.coords[1]],
        sum: node.sum + dream[node.coords[0] + 1][node.coords[1]],
      });
    if (node.coords[1] + 1 <= cols)
      stack.push({
        coords: [node.coords[0], node.coords[1] + 1],
        sum: node.sum + dream[node.coords[0]][node.coords[1] + 1],
      });
  }

  return safestPath;
}
