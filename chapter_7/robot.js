// MEADOWFIELD
const roads = [
  "Alice's House-Bob's House",   "Alice's House-Cabin",
  "Alice's House-Post Office",   "Bob's House-Town Hall",
  "Daria's House-Ernie's House", "Daria's House-Town Hall",
  "Ernie's House-Grete's House", "Grete's House-Farm",
  "Grete's House-Shop",          "Marketplace-Farm",
  "Marketplace-Post Office",     "Marketplace-Shop",
  "Marketplace-Town Hall",       "Shop-Town Hall"
];
// we are interested in the destinations that can be reached from one point
// will need to convert the list into a data structure that tells us what 
// can be reached from where
function buildGraph(edges) {
  let graph = Object.create(null);
  function addEdge(from, to) {
    if (graph[from] == null) {
      graph[from] = [to]; // if key doesn't exist then add it and the destination
    } else {
      graph[from].push(to); // if it did then just add the destination
    }
  }
  for (let [from, to] of edges.map(r => r.split("-"))) {
    addEdge(from, to);
    addEdge(to, from);
  }
  return graph;
}
// console.log(buildGraph(roads));
const roadGraph = buildGraph(roads);

// THE TASK
class VillageState {
  constructor(place, parcels) {
    this.place = place;
    this.parcels = parcels;
  }

  move(destination) {
    if (!roadGraph[this.place].includes(destination)) {
      return this;
    } else {
      let parcels = this.parcels.map(p => {
        if (p.place != this.place) {
          return p;
        }
        return {place: destination, address: p.address};
      }).filter(p => p.place != p.address);
      return new VillageState(destination, parcels);
    }
  }
}

let first = new VillageState(
  "Post Office",
  [{place: "Post Office", address: "Alice's House"}]
);
let next = first.move("Alice's House");
console.log(next.place);
console.log(next.parcels);
console.log(first.place);

// PERSISTENT DATA
let object = Object.freeze({value: 5});
// ignores writes to properties, takes cpu extra effort
// possibly better to just rely on good will to not modify properties
// rather than freeze
object.value = 10;
console.log(object.value); // 5
