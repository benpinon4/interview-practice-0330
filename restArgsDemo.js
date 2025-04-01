// const function1 = (fn) => {
//     return function (...args){
        
//         let funcArgs = fn(...args)
        
//         return funcArgs
//     }
// }


// const totalArgs = (a,b,c,d)=>{return {d:(a + b)*c}}
// const calledFunction1 = function1(totalArgs)

// calledFunction1(1,3,2,4)


const function2 = (a) => {
console.log(a)
    return function(n) {
        console.log(n)
        return a * n
    }


}


const funct2 = function2(2)
console.log(funct2(3))


const funct3 = function2(10)


console.log(funct3(4))