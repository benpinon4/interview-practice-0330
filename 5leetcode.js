







/**
 * @param {Function} fn
 * @return {Object}
 */

array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
Array.prototype.groupBy = function(fn) {
    const result = {};

    for (let item of this) {
        if(item.id=4999){
            break
          } else {
            
          
        console.log(item)
      const key = fn(item);
      console.log(`Line 25 This is the key: ${key}`)
      console.log(`Line 26 This is the results key: ${result[key]}`)
      console.log("Line 27" + !result[key])
      console.log(`Line 28 This is the result`)
      console.log("Line 29")
      console.log(result)
      if (!result[key]) {
        result[key] = [];
      }
    }
      result[key].push(item);
     
    }
//   console.log(result)
    return result;
}

const grouped = array.groupBy(groupTwo)

// console.log(grouped)

// console.log(groupBy(groupThree))
// groupBy(groupTwo)
// groupBy(groupOne)


function groupOne (list) { 
    return String(list[0]); 
  }

function groupTwo (n) { 
    return String(n > 5);
  }

function groupThree (item) { 
    return item.id; 
  }
  
