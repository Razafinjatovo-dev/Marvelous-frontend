const fruits = [
  { id: 111, name: "banana" },
  { id: 222, name: "orange" },
  { id: 333, name: "strawberry" },
];

const idToPopulate = [333, 111];

let dataPopulated = [];

for (let i = 0; i < fruits.length; i++) {
  for (let z = 0; z < idToPopulate.length; z++) {
    if (fruits[i].id === idToPopulate[z]) {
      dataPopulated.push({
        id: fruits[i].id,
        name: fruits[i].name,
      });
    }
  }
}

console.log(dataPopulated);

// DELETE

const fruits = [
  { id: 111, name: "banana" },
  { id: 222, name: "orange" },
  { id: 333, name: "strawberry" },
];

const idToRemove = [111, 222];

let dataUpdated = [];

for (let i = 0; i < fruits.length; i++) {
  let isDifferent = 0;
  for (let z = 0; z < idToRemove.length; z++) {
    if (fruits[i].id !== idToRemove[z]) {
      isDifferent++;
    }
  }
  if (isDifferent === idToRemove.length) {
    dataUpdated.push(fruits[i]);
  }
}

console.log(dataUpdated);
