const getCustomersList = (obj) => {
  const result = Object.entries(obj).map(([id, customer]) => ({id, ...customer})
);
  result.sort((a, b) => {
    return a.age - b.age;
  });
  return result;
};
const customer= {
  "customer-id-1": {
    name: "William",
    age: 54,
  },
  "customer-id-2": {
    name: "Tom",
    age: 18,
  },
};
console.log(getCustomersList(customer));
