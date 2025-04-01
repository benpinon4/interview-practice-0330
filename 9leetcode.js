/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    function toBe(n){
        if(val === n && val != null){
            return val === n
        } else {
            throw new Error("Not Equal")
        }
        
    }
    function notToBe(n){
        if(val === n && val != null){
            throw new Error("Equal")
        } else {
            return true
            
        }
        
    }

    return{
        toBe,
        notToBe
    }
};


 console.log(expect(5).toBe(5)); // true
 console.log(expect(5).notToBe(null)); // throws "Equal"
