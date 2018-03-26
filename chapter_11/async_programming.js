// CALLBACKS
// one approach is to make functions that perform
// a slow function take an extra arg, a callback func.
// when action finishes callback is called on the result
// e.g.
// setTimeout(() => console.log("Tick"), 500);

// performing multiple async functions in a row means
// callbacks have to be passed to new function

const {bigOak} = require("./crow-tech");

bigOak.readStorage("food caches", caches => {
  let firstCache = caches[0];
  bigOak.readStorage(firstCache, info => {
    console.log(info);
  });
});

// nest have a send method that send of a request, requires
// three arguments, target nest, type of request and
// content of request
bigOak.send(
  "Cow Pasture",
  "note",
  "Let's caw loudly at 7PM",
  () => console.log("Note delivered.")
); // finishing before previous section

const {defineRequestType} = require("./crow-tech");

defineRequestType("note", (nest, content, source, done) => {
  console.log(`${nest.name} received note: ${content}`);
  done();
});

// this is adding support for "note" requests
// fourth arg, done, is a callback function that must be called
// when it is done with the request
// async is contagious, any function calling another must itself
// be async

bigOak.send(
  "Cow Pasture",
  "note",
  "Let's caw loudly at 7PM",
  () => console.log("Note delivered.")
);

// PROMISES
// A promise is an async action that may complete at some point
// and produce a value. Notifies when its value is available.
// Easiest via Promise.resolve

let fifteen = Promise.resolve(15);
fifteen.then(value => console.log(`Got ${value}`)); // Got 15

// to get the result of the promise the then method is used.
// then also returns another promise. Can also use Promise
// as a constructor
function storage(nest, name) {
  return new Promise(resolve => {
    nest.readStorage(name, result => resolve(result));
  });
}
storage(bigOak, "enemies").then(value => console.log("Got", value));

// FAILURE
/*
callbacks make it difficult to make sure failures are reported
convention is first argument to callback is to indicate it failed,
second is value produced when successful. 
promises make this easier, rejections are auto passed to the new promise
that is returned by then, when a handler throws an exception, the promise produced
by it's then is rejected. like resolving a promise yields a value, rejecting 
provides a reason of rejection. Promise.reject creates a new immediately rejected
promise. Promises have a catch method, registers a handler to be called when
promise is rejected.
*/

// NETWORKS ARE HARD
class Timeout extends Error {}

function request(nest, target, type, content) {
  return new Promise((resolve, request) => {
    let done = false;
    function attempt(n) {
      nest.send(target, type, content, (failed, value) => {
        done = true;
        if (failed) reject(failed);
        else resolve(value);
      });
      setTimeout(() => {
        if (done) return;
        else if (n < 3) attempt(n + 1);
        else reject(new Timeout("Timed out"));
      }, 250);
    }
    attempt(1);
  });
}

// can define a wrapper for request
function requestType(name, handler) {
  defineRequestType(name, (nest, content, source, callback) => {
    try {
      Promise.resolve(handler(nest, content, source)).then(
        response => callback(null, response), failure => callback(failure)
      );
    } catch (exception) {
      callback(exception);
    }
  });
}
// Promise.resolve is used to convert a returned value to a promise if 
// it isn't one
// handler had to be wrapped in try block to make sure any exceptions
// raised are given to the callback

// COLLECTIONS OF PROMISES
// Promise.all is useful, it returns a promise after waiting for all promises
// in an array to resolve, and then resolves an array of values that these promises
// produced, if any promise is rejected the Promise.all is rejected
requestType("ping", () => "pong");
function availableNeighbors(nest) {
  let requests = nest.neighbors.map(neighbor => {
    return request(nest, neighbor, "ping").then(
      () => true, () => false);
  });
  return Promise.all(requests).then(result => {
    return nest.neighbors.filter((_, i) => result[i]);
  });
}

// NETWORK FLOODING
const {everywhere} = require("./crow-tech");

everywhere(nest => {
  nest.state.gossip = [];
});

function sendGossip(nest, message, exceptFor = null) {
  nest.state.gossip.push(message);
  for (let neighbor of nest.neighbors) {
    if (neighbor == exceptFor) continue;
    request(nest, neighbor, "gossip", message);
  }
}

requestType("gossip", (nest, message, source) => {
  if (nest.state.gossip.includes(message)) return;
  console.log(`${nest.name} received gossip '${message}' from ${source}`);
  sendGossip(nest, message, source);
});

sendGossip(bigOak, "Kids with airgun in the park");
