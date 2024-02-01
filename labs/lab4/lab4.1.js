// Creating 1 object representing Bank Count Number with below structure:

// {
//     accountNumber: String,
//     routingNumber: String,
//     balance: Number
// }
// . Creating another Bank Account Object which clone from the previous one and update the accountNumber only . Put them into ann array call: bankAccounts

// . Write a consolse interface app to:

// allow user to find account by using accountNumber, if the account is existing, print the name and balance info out (NOT all the object)
// allow user to withdraw the money and avoid user to take more than current balance
// Note: Strongly recommend to create functions to process each tasks
// === Banking application===
// 1. Find an account
// 2. Update balance
// 0. Exit the program

const readline = require("readline-sync");
let bankAccounts = initBankAccounts();
let exitProgram = false;
let currentAccount;
while (!exitProgram) {
  printMenu();
  runProgram();
}

function runProgram() {
  var optionMenu = getChooseOptionMenu();
  console.log(optionMenu);
  if (optionMenu === "0") {
    console.log("Bye bye!");
    exitProgram = true;
  } else if (optionMenu === "1") {
    currentAccount = findAccountByAccountNumber(bankAccounts);
  } else if (optionMenu === "2") {
    if (currentAccount === undefined) {
      console.log("Please choose option menu 1 before");
    } else {
      updateBalance(currentAccount);
    }
  } else {
    console.log("Error option");
  }
}

function getChooseOptionMenu() {
  return readline.question("Please choose option menu (0 -> 2): ");
}

function updateBalance(currentAccount) {
  let withdrawFail = true;
  while (withdrawFail) {
    var withdrawMoney = readline.question(
      "Please enter withdraw money for account number " +
        currentAccount.accountNumber +
        ": "
    );
    const withdrawMoneyParseNumber = Number(withdrawMoney);
    const isInteger = Number.isInteger(withdrawMoneyParseNumber);
    if (!isInteger) {
      console.log("Please enter number type");
    } else {
      if (currentAccount.balance < withdrawMoneyParseNumber) {
        console.log("Invalid amount");
      } else {
        currentAccount.balance -= withdrawMoneyParseNumber;
        logAccountInfo(currentAccount);
        withdrawFail = false;
      }
    }
  }
}

function findAccountByAccountNumber(bankAccounts) {
  var accountNumber = readline.question("Please enter the account number: ");
  var account = bankAccounts.find((x) => x.accountNumber === accountNumber);
  if (account === undefined) {
    console.log("account not found");
  } else {
    logAccountInfo(account);
  }
  return account;
}

function logAccountInfo(account) {
  console.log("Account info");
  console.log("AccountNumber: ", account.accountNumber);
  console.log("RoutingNumber: ", account.routingNumber);
  console.log("Balance: ", account.balance);
}

function initBankAccounts() {
  let bankCountNumber = {
    accountNumber: "123",
    routingNumber: "456",
    balance: 10000,
  };

  let bankCountNumberSecond = { ...bankCountNumber };
  bankCountNumberSecond.accountNumber = "999";
  bankCountNumberSecond.balance = 2000;
  let bankAccounts = [bankCountNumber, bankCountNumberSecond];
  return bankAccounts;
}

function printMenu() {
  const contentMenu = `
    === Banking application ===
        1. Find an account
        2. Update balance
        0. Exit the program
    `;
  console.log(contentMenu);
}
