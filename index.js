#!/usr/bin/env node
import inquirer from "inquirer";
// let randumNumber = 13 ; fixed number
let randumNumber = Math.floor(Math.random() * 5 + 1);
let gusseNumber = await inquirer.prompt([
    {
        name: "userInput",
        type: "number",
        message: "please gusse your number between 1-10 for continue the game"
    },
]);
if (gusseNumber.userInput === randumNumber) {
    console.log("Congratulation you are win the 1st prize ");
}
else {
    console.log(`the correct number is ${randumNumber} try again best of luck`);
}
