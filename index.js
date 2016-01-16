var prompt = require('prompt');
var user = {health: 100, foodRations: 50};
var zombie = {health: 20};
var day = 1;

console.log("What is your name?");
prompt.start();
prompt.get(['name'], function (err, result) {
  user.name = result.name;
  console.log('Welcome to the Apocalypse, ' + user.name + ".");
  console.log("Day " + day + ".");
  }

  function zombieEncounter(){
    prompt.start();