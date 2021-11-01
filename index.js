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
  if(validatePinNow(userInput) === true){
    mainMenu()
  }
  else{
    alert("Invalid PIN number")
    accessATM()
  }
  //TODO: Prompt users for their pin
  //Use ATM.js validatePin function to verify pin matches
  //Proceed to main menu ONLY if they match
}

//TODO: Call accessATM function

function mainMenu() {
  let userInput = prompt(`Enter the number next to the option you would like to select i.e. enter '1' to view current balance.
  
  1. View account balance
  2. Make a deposit
  3. Made a withdrawal
  4. Restart
  5. Quit`)

  switch(userInput){
    case "1":
      getBalanceNow()
      mainMenu()
      break;
    case "2":
      
  }
  //TODO: Set up a main menu.  Prompt users for ATM selection to do the following:
  //! Remember - we should keep prompting the user for options until they quit!
  //Get current balance
  //Make a deposit
  //Make a withdrawal
  //Restart
  //Quit
}

//TODO: Call mainMenu function to start our app!
