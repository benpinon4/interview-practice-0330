
/**
 * @param {Function} fn
 * @return {Function}
 */


var once = function(fn) {
    
    let called = false;
    let result;
  console.log(called)
    return function (...args) {
      if (!called) {
        result = fn(...args);
        called = true;
        return result;
      }
      return undefined;
    };

      
       
}
    



 let fn = (a,b,c) => (a + b + c)
 let onceFn = once(fn)
// console.log(once(fn(1,2,3)))
// console.log(once(fn(20,4,3)))
// console.log(once(fn(20,4,3)))
 console.log(onceFn(1,2,3)); // 6
 console.log(onceFn(2,3,6)); // returns undefined without calling fn

 