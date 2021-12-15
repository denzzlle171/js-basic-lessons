function findUsersByName(users, name) {
  let newArry = [];
  for (let index = 0; index < users.length; index += 1) {
    let obj = users[index];

    if (name == obj.name) {
      newArry.push(obj);
    }
  }
  console.log(newArry);
  return newArry;
}

function findUsersByString(users, str) {
  let newArry = [];
  for (let index = 0; index < users.length; index += 1) {
    let obj = users[index];
    let checkName = obj.name;
    if (checkName.includes(str)) {
      newArry.push(obj);
    }
  }
  console.log(newArry);
  return newArry;
}

// examples
const users = [
  {
    id: 101,
    name: 'Denis',
    city: 'Kyiv',
  },
  {
    id: 102,
    name: 'Alexandr',
    city: 'Lviv',
  },
  {
    id: 103,
    name: 'Nastya',
    city: 'Kyiv',
  },
  {
    id: 104,
    name: 'Violetta',
    city: 'Odesa',
  },
  {
    id: 105,
    name: 'Mykola',
    city: 'Lviv',
  },
  {
    id: 106,
    name: 'Denis',
    city: 'Lviv',
  },
  {
    id: 107,
    name: 'Andrey',
    city: 'Odesa',
  },
  {
    id: 108,
    name: 'Alexey',
    city: 'Dnipro',
  },
];

findUsersByName(users, 'Denis'); // ===> [ { id: 101, name: 'Denis', city: 'Kyiv' }, { id: 106, name: 'Denis', city: 'Lviv' } ]
findUsersByName(users, 'Andrey'); // ===> [ { id: 107, name: 'Andrey', city: 'Odesa' } ]
findUsersByName(users, 'Anna'); // ===> [ ]

findUsersByString(users, 'Al'); // ===> [ { id: 102, name: 'Alexandr', city: 'Lviv' }, { id: 108, name: 'Alexey', city: 'Dnipro' } ]
findUsersByString(users, 't'); // ===> [ { id: 103, name: 'Nastya', city: 'Kyiv' }, { id: 104, name: 'Violetta', city: 'Odesa' } ]
findUsersByString(users, 'Vik'); // ===> [ ]

// findUsersByString(users, 'm'); // ===> [ ]
// // explanation: letter 'm' is not included in any user name, 'Mykola' includes 'M' not 'm', so it is not added to the result

/*
function findUsersByName(users, name) {

  let value = [];
  for (let i of users) {

       if (name === i.name) {
      value.push(i);
    }
  }
  
  console.log(value)
  return value;
}
*/
