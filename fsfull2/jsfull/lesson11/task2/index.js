const sortContacts = (contacts, isAsc = true) => {
  let result = [];
  if (!Array.isArray(contacts)) {
    return null;
  }
  if (isAsc === false) {
    result = contacts.sort((a, b) => {
      return b.name.localeCompare(a.name);
    });
    return result;
  }
  result = contacts.sort((a, b) => {
  return a.name.localeCompare(b.name);
  });
  return result;
};
const constacts = [
  {
    name: "Tom",
    phone: 777-77-77,
  },
  {
    name: "Ann",
    phone: 444-44-44,
  },
  {
    name: "John",
    phone: 333-33-33,
  },
  {
    name: "Sam",
    phone: 555-55-55,
  },
];
console.log(sortContacts(constacts, false));