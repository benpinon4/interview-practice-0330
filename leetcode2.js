/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
   console.log(init)
    
let val = init
console.log(val)

for (let index = 0; index < nums.length; index++) {
    console.log(val)
    val = fn(val, nums[index])
    console.log(val)
    
}
    console.log(val)

    return val
    
};

const sum = (a, b) => {return a+b}

console.log(reduce([1,2,3,4],sum,0))
