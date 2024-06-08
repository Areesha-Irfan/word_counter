#! usr/bin/env code
import inquirer from "inquirer";

const answers: {
     sentence :string
} = await inquirer.prompt(
    [
        {
           name : "sentence",
           type : "input",
           message : "Enter your sentence to count the words" 

        }
    ]

);
const words = answers.sentence.trim().split(" ");
console.log(words);
console.log(`your words in your sentence : ${words.length}`);
const alphabet = words.join("");
console.log(`the alphabets in your sentence is ${alphabet.length}`);



