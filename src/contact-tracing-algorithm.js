// **DOUBLE CHECK TO SEE IF THE ALGORITHM WORKS PROPERLY**

const algorithm = (infected, adjList, degSafety) => { // adjList: list[obj]
  let visited = [];
  for (let i = 0; i < adjList.length; i++) {
    visited.push(false);
  }

  let requiresIsolation = [];
  dfs(infected, visited, adjList, degSafety, requiresIsolation);
  return requiresIsolation;
}

const dfs = (person, visited, adjList, deg, isolate) => { // depth first search
  if (deg >= 0) {
    isolate.push(person); // ITS POSSIBLE TO HAVE DUPLICATE VALUES (a person is in the list twice)

    const currentPerson = adjList[person.id];
    let vis = [...visited]; // create a copy of visited
    vis[person.id] = true;  // IDs start at 0 and from 0,1,2,...,n-1 where you have n people

    for (let i = 0; i < adjList[person.id].length; i++) {
      const neighbor = currentPerson[i];
      if (!vis[neighbor.id]) {
        dfs(neighbor, vis, adjList, deg-1, isolate);
      }
    }
  } 
}

module.exports.isolationAlgorithm = algorithm;