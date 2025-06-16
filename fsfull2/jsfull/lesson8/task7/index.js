const getAdults = (obj) => {
  const obj1 = {};
  for(const key in obj) {
     if (obj[key] >= 18){
    obj1[key]=obj[key];
}
}
  return obj1;
};
console.log(getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 })); // ==> { 'John Doe': 19, Bob: 18 }
console.log(getAdults({ Ann: 56, Andrey: 7 })); // ==> { Ann: 56 }
