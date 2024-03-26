import BankingAccountController from "./BankingAccountController";
import CheckingAccount from "./CheckingAccount";
import SavingAccount from "./SavingsAccount";


let savingAccount = new SavingAccount();
let checkingAccount = new CheckingAccount();

let savingAccountTestFlow = new BankingAccountController(savingAccount);
savingAccountTestFlow.deposit(5000);
savingAccountTestFlow.withdraw(4000);
console.log(savingAccountTestFlow.getBalance());


let checkingAccountTestFlow = new BankingAccountController(checkingAccount);
checkingAccountTestFlow.deposit(5000);
checkingAccountTestFlow.withdraw(4000);
console.log(checkingAccountTestFlow.getBalance());