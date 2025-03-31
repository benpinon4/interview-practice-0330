/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
  let filteredarry = [];
  for (let index = 0; index < arr.length; index++) {
    let arryValidation = fn(arr[index], index);
    // console.log(arryValidation);
       if(arryValidation == true){
        // console.log(`In true ${arr[index]}`)
        filteredarry.push(arr[index])
       } else if(arryValidation === false) {
        filteredarry;
       }
  }

  return filteredarry;
};

const arryFilter = (a, b) => {
  return a > 10;
};

const arryPlusOne = (a, b) => {
  return a + 1 != 0;
};

const arryIndexZero = (a, b) => {
  return b != 0;
};

console.log(filter([0, 10, 20, 30], arryFilter));

console.log(filter([-2,-1,0,1,2], arryPlusOne));
console.log(filter([0, 10, 20, 30], arryIndexZero));
