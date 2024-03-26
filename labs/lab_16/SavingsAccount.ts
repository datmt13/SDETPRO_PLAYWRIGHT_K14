import BankingAccount from "./BankingAccount";

export default class SavingAccount extends BankingAccount{
    constructor(){
        super(0);
    }
    deposit(amount: number): void {
        this.balance += amount;
    }
    withdraw(amount: number): void {
        let avaiableBalance = this.balance - amount;
        if(avaiableBalance <= this.minimumBalance){
            throw new Error(`SavingAccount AvaiableBalance less than MinimumBalance: ${avaiableBalance} < ${this.minimumBalance}`);
        }
        this.balance = avaiableBalance;
    }
    getBalance(): number {
        return this.balance;
    }
}