const queue = require('double-ended-queue');

const dijkstra = (nodeDict, costDict, S, n) => {
  const distances = Array.from({ length: n }, x => Infinity);
  const prev = Array.from({ length: n }, x => undefined);

  // set starting distance to zero
  distances[S] = 0;

  const q = queue();

  q.push((distances[S], S));

  while (!q.isEmpty) {
    const [uDist, u] = q.shift();
    const uChildren = nodeDict[u];
    const uCosts = costDict[u];
    for (let i = 0; i < uChildren.length; i += 1) {
      if (distances[uChildren[i]] > distances[u] + uCosts[i]) {
        distances[uChildren[i]] = distances[u] + uCosts[i];
        prev[uChildren[i]] = u;
        q.push([distances[i], uChildren[i]]);
      }
    }
  }

  return distances;
};

const _dijkstra = (adj, cost, S, t, n) => {
  // const nodeDict =
};

export default dijkstra;
