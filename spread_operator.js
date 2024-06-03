//spreading the value
const users = ["user1", "user2"];
console.log(...users);

//combining two array
const team1 = ["user1", "user1"];
const team2 = ["user3"];

//using concat method
const myTeam = team1.concat(team2);
console.log(myTeam);

// using spread operator
const myNewTeam = [...team1, ...team2];
console.log(myNewTeam);

// Note: in this if we have multiple array to add then spread operator is usefull at this point

const newTeamMember = "newTeamMember";

// good appraoch
console.log(team1.concat(newTeamMember));
// bad approach
console.log([...team1, ...newTeamMember]);

//object

const emp = {
  name: "Johan",
};

const personal = {
  age: "20",
};

const newInfo = { ...emp, ...personal };
console.log(newInfo);

//spread operator in function call

const scorelist = [100, 40, 200, 89];
console.log(Math.min(...scorelist));

//immutibility with spread operator

const todos = [
  { task: "reading", complted: true },
  { task: "painting", complted: false },
];
const newTo = addToDo({ task: "recording", completed: false });
function addToDo(newToDo) {
  return [...todos, { ...newToDo }];
}

console.log(todos);
console.log(newTo);
