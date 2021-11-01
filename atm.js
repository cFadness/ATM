"use strict";

const {userAccountBalance, userAccountPin} = require("./account")

//TODO: Import necessary values from account.js

function getBalance() {
  return userAccountBalance
  //TODO: Return the customer's acct. balance
}

function withdraw(withdrawAmount) {
  let withdrawBalance = userAccountBalance - withdrawAmount
  console.log(withdrawBalance)
  //TODO: withdraw amount from current acct. balance
  // Log the current balance after withdrawal is made
}

function deposit(depositAmount) {
  let depositBalance = userAccountBalance + depositAmount
  console.log(depositBalance)
  //TODO: deposit amount to current acct. balance
  // Log the current balance after deposit is made
}

function validatePin(enteredPin) {
  if(enteredPin == userAccountPin){
    return true
  }
  else{
    return false
  }
  //TODO: Check if entered pin matches account.js pin
  //Allow access to ATM if matching
  //Return value should be a Boolean (true or false)
  //In English: if the PIN entered is correct, return True. Otherwise, return False.
}

module.exports = {
  getBalanceNow = getBalance,
  withdrawNow = withdraw,
  depositNow = deposit,
  validatePinNow = validatePin
}

//TODO: Export these functions
