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
