/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    console.log( `line 6 ${n}`)
    let n1 = n;
   
    let count = 0;
        return  function() {
        count++
        if(count === 1){
           return n1 
        } else {
            n1++
        return n1
        }
      
            

    };
};

 
 const counter = createCounter(10)
 console.log(counter()) // 10
 console.log(counter()) // 11
 console.log(counter()) // 12
 console.log(counter()) // 12
 console.log(counter()) // 12
 console.log(counter()) // 12
 console.log(counter()) // 12
 console.log(counter()) // 12
 console.log(counter()) // 12
 console.log(counter()) // 12







