"use strict";

const prompt = require("prompt-sync")()

const {getBalanceNow, withdrawNow, depositNow, validatePinNow} = require("./atm")

//TODO: Add debugger (see demo video)
//! Don't forget to add "console": "integratedTerminal" to .vscode/launch.json after creating launch configuration
//TODO: Import necessary functions from atm.js
//TODO: Utilize prompt-sync so we can get user input for various functions
//* Refer to Intro to Node.js PowerPoint for prompt-sync installation instructions

function accessATM() {
  let userInput = prompt("Please enter your PIN number")
  while(validatePinNow(userInput) != true && userInput != "quit"){
    userInput = prompt("Wrong PIN! Please enter your PIN number. Type 'quit' to exit.")
    if(userInput === "quit"){
      prompt("Have a nice day!")
    }
  }
  if(validatePinNow(userInput) === true){
    mainMenu()
  }
  //TODO: Prompt users for their pin
  //Use ATM.js validatePin function to verify pin matches
  //Proceed to main menu ONLY if they match
}

//TODO: Call accessATM function

function mainMenu() {
  let userInput = ""
while(userInput!=4 && userInput!=5){
  userInput = prompt(`Enter the number next to the option you would like to select i.e. enter '1' to view current balance.
  
  1. View account balance
  2. Make a deposit
  3. Make a withdrawal
  4. Restart
  5. Quit`)

  switch(userInput){
    case "1":
      getBalanceNow()
      break;
    case "2":
      let depositAmount = prompt("Enter amount you would like to deposit.")
      while(Number.isNaN(parseInt(depositAmount))===true){
        depositAmount = prompt("Invalid amount! Please type in a number to deposit")
      }
      depositNow(parseInt(depositAmount))
      break;
    case "3":
      let withdrawalAmount = prompt("Enter amount you would like to withdraw.")
      while(Number.isNaN(parseInt(withdrawalAmount))===true){
        withdrawalAmount = prompt("Invalid amount! Please type in a number to withdraw")
      }
      withdrawNow(parseInt(withdrawalAmount))
      break;
    case "4":
      accessATM()
      break;
    case "5":
      prompt("Thank you for using this ATM. Have a nice day!")
      break;
    default:
      prompt("Invalid syntax! Please, try again")
      break;
  }
}
  //TODO: Set up a main menu.  Prompt users for ATM selection to do the following:
  //! Remember - we should keep prompting the user for options until they quit!
  //Get current balance
  //Make a deposit
  //Make a withdrawal
  //Restart
  //Quit
}

accessATM()
//TODO: Call mainMenu function to start our app!
