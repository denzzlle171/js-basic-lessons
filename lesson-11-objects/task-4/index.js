

function getGoalsStat(players) {
  let newArry = [];
  for (let index = 0; index < players.length; index += 1) {

    let newObj = {};
    let item = players[index];
    
    newObj.name = item.name;
    newObj.goals = item.goals;
    newObj.team = item.team;

    newArry.push(newObj)
    
  }
  console.log(newArry)
   return newArry
}

// examples
const players = [
  {
    name: 'Jason Mount',
    birthdate: '19.12.1993',
    country: 'Deutschland',
    number: '21',
    team: 'Manchester United',
    position: 'MF',
    goals: 4,
  },
  {
    name: 'Jason Mount',
    birthdate: '01.01.2001',
    country: 'Deutschland',
    number: '16',
    team: 'Manchester United',
    position: 'MF',
    goals: 0,
  },
  {
    name: 'Finne Bard',
    birthdate: '13.02.1995',
    country: 'Norwegen',
    number: '26',
    position: 'FW',
    team: 'Fulham United',
    goals: 1,
  },
  {
    name: 'Gerhardt Yannick',
    birthdate: '13.03.1994',
    country: 'Deutschland',
    number: 31,
    position: 'MF',
    team: 'Liverpool',
    goals: 8,
  },
];
// console.log(getGoalsStat(players));
getGoalsStat(players);
// ===>
// [
//   { name: 'Jason Mount', team: 'Manchester United', goals: 4 },
//   { name: 'Jason Mount, team: 'Manchester United', goals: 0 },
//   { name: 'Finne Bard', team: 'Fulham United', goals: 1 },
//   { name: 'Gerhardt Yannick', team: 'Liverpool', goals: 8 },
// ];
