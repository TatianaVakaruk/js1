const rooms = {
  room1: [
        {name: "Jack"},
        {name: "Andrey"},
        {name: "Ann"}
    ],
    room2: [
        {name: "Julia"},
        {name: "Angela"},
    ],
    room3: [
        {name: "Anhela"},
        {name: "Anjelika"},
        {name: "Tom"},
    ]
};
const getPeople = obj => {
  // put your code here
  const arr = Object.values(obj);
  const result = arr.flat();
  return result.map(el=>el.name);
};
console.log(getPeople(rooms));
