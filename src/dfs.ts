const dfs = (graph) => {
  if (typeof graph !== 'object' || Array.isArray(graph) || graph == null) {
    throw new Error('INVALID_ARGUMENT');
  }
  const sum: string[] = [];
  const dfsHelper = (node: string) => {
    sum.push(node);
    graph[node].forEach((child) => {
      dfsHelper(child);
    });
  };
  dfsHelper(Object.keys(graph)[0]);
  return sum;
};

export default dfs;
