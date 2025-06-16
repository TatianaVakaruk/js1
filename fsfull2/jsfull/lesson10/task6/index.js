const getRandomNumbers = (length, from, to) => {
    // put your code here
    if (Math.floor(to) === Math.floor(from)) {
        return null;
      }
      if (from > to){
    return null;
      }
     const start = Math.ceil(from);
      const end = Math.ceil(to);
      return new Array(length).fill().map(el => {
        return Math.floor(Math.random() * (end - start) + start);
      }); 
  };
console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [2, 2, 2, 3, 2]
console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [3, 2, 2, 2, 2]
console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [3, 3, 2, 3, 2]
console.log(getRandomNumbers(3, 2.4, 4.5)); // ==> [4, 3, 4]
console.log(getRandomNumbers(3, 1.9, 2.5)); // ==> [2, 2, 2]
console.log(getRandomNumbers(7, 1.4, 1.9)); // ==> null
console.log(getRandomNumbers(7, 2.11, 2.9)); // ==> null
console.log(getRandomNumbers(1, 2.5, 0.9)); // ==> null
  
