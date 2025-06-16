
const pickProps = (obj, props) => {
let obj1 = {};
    for (let key in obj){
     if (obj.hasOwnProperty(key) && props.includes(key)) {
        obj1[key] = obj[key];
      }
    }
    return obj1;
  };
console.log(pickProps({ a: 1, b: 2, c: 3 }, ['a', 'c'])); // ==> { a: 1, c: 3 }
console.log(pickProps({ a: 1, b: 2, c: 3 }, ['a', 'c', 'd', 'hex'])); // ==> { a: 1, c: 3 }
