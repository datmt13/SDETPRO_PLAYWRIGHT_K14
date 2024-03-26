import BankingAccount from "./BankingAccount";

export default class BankingAccountController{
    private bankingAccount : BankingAccount;

    constructor(bankingAccount : BankingAccount) {
        this.bankingAccount = bankingAccount;
    }

    deposit(amount : number):void{
        this.bankingAccount.deposit(amount);
    }

    withdraw(amount : number):void{
        this.bankingAccount.withdraw(amount);
    }

    getBalance():number{
        return this.bankingAccount.getBalance();
    }
}