function createCounter() {
    let count = 0;
    return function () {
      count++;
      console.log("Call count:", count);
      return count;
    };
  }
  
  const myCounter = createCounter();
  
  myCounter(); // Call count: 1
  myCounter(); // Call count: 2