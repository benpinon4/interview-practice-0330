/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let transformedArray = []
    for (let index = 0; index < arr.length; index++) {
        let val = fn(arr[index], index)
        transformedArray.push(val)
    }
    return transformedArray
    
    
};

const plusOne = (a,b) => {return a+1}
const indexOne = (a,b) => {return a+b}
const return42 = (a,b) => {return 42}

console.log(map([1,2,3],plusOne))
console.log(map([1,2,3],indexOne))
console.log(map([10,20,30],return42))