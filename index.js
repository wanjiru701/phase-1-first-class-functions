const chai = require("chai");

function receivesAFunction(callback) {
    return callback();
}


function returnsANamedFunction(beforeAll) {
    return receivesAFunction;
}
beforeAll();

  function returnsAnAnonymousFunction() {
   return ()=> console.log("anonymous function")
 }

