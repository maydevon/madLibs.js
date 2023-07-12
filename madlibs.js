const prompt = require("prompt-sync") ({sigint: true});
const adjective1 = prompt("Enter an adjective: ");
const animal1 = prompt("Enter an animal: ");
const noun1 = prompt("Enter a room in a house: ");
const verb1 = prompt("Enter a verb (past tense): ");
const verb2 = prompt("Enter a verb: ");
const name = prompt("Enter a name: ");
const noun2 = prompt("Enter a noun: ");
const noun3 = prompt("Enter a noun: ");
const verb3 = prompt("Enter a verb ending in -ing: ");
const noun4 = prompt("Enter a body part: ");
const noun5 = prompt("Enter a type of bug plural: ")

//alert ('Hold up right quick we generating');

const sentence1 = ("Woke up to the" + " " + adjective1 + " " + "smell of" + animal1 + " " + "roasting in the" + " " + noun1 + " " + "downstairs.");
const sentence2 = ("I" + verb1 + " " + "down the stairs to see if i could help" + " " + verb2, " ", "the dinner.");
const sentence3 = ("My mom said, see if" + " " + name + "" + "needs a fresh" + " " + noun2 + ".");
const sentence4 = ("So I carried a tray of glasses full of" + " " + noun3 + " " + "into the" + " " + verb3 + " " + "room.");
const sentence5 = ("When I got there, i couldn't believe my" + " " + noun4 + " " + "!");
const sentence6 = ("THERE WERE" + " " + noun5 +"!");


console.log(sentence1 + sentence2 + sentence3 + sentence4 + sentence5 + sentence6);




//const madlibs = `${noun} ${verb} the ${adjective} ${adverb}.`;

//console.log(madlibs);

//woke up to the adjective1 smell of noun1 roasting in the noun1 downsttairs.
//I verb1 down the stairs to see if i could help verb2 the dinner.
//My mom said, see if name needs a fresh noun2.
//So I carried a tray of glasses full of NOUN3 into the VERB3 room.
//When I got there, i couldn't believe my NOUN4! 
//There were NOUN5!