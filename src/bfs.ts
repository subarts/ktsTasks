const bfs = (graph) => {
  if (typeof graph !== 'object' || Array.isArray(graph) || graph == null) {
    throw new Error('INVALID_ARGUMENT');
  }
  const sum: string[] = [];
  let arr = [Object.keys(graph)[0]];

  while (arr.length > 0) {
    let node = arr.shift();

    if (node) {
      sum.push(node);
      arr.push(...graph[node]);
    }
  }
  return sum;
};

export default bfs;
