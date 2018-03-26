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
