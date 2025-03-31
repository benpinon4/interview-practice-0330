/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let modifiedInt = init
    function increment(){
        return modifiedInt = modifiedInt + 1
    }
    function decrement(){
        return modifiedInt = modifiedInt - 1
    }
    function reset(){
        return modifiedInt = init
    }

    return {
        increment,
        decrement,
        reset
    }
    

};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */

const counter = createCounter(5)
console.log(counter.increment());
console.log(counter.reset());
console.log(counter.decrement());

// 6