#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
// computer will Generate a Random Number
// Use input for Guessing Number
// Compare user input with computer generated number
const randomNumber = Math.floor(Math.random() * 10 + 1);
console.log("Welcome to the Number Guessing Game");
const answers = await inquirer.prompt([
    {
        name: "userGuessnumber",
        type: "number",
        message: "Guess a Number Between 1 and 10",
    },
]);
if (answers.userGuessnumber === randomNumber) {
    console.log(chalk.blue(`${"You Win! you Guessed the Right number!"}`));
}
else {
    console.log(chalk.green(`${"You lose! Try again!"}`));
}
console.log(randomNumber);
