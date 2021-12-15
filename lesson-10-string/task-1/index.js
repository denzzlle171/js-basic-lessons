'use strict';

const getMessage = (userName, email, tasksCount) => {
  let string = `Hello again, ${userName}. Your email is ${email}. You have ${tasksCount} tasks for today`;
  
  return string;
};

console.log(getMessage('Alex', 'alex_11', '7'));
console.log(getMessage ('Denzzlle','den-47', '4'));
console.log(getMessage ('VikTOR','tor_64', '3'));


