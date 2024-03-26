import BankingAccount from "./BankingAccount";

export default class CheckingAccount extends BankingAccount{
    private overDraftLimit : number = 500;
    constructor(){
        super(50);
    }
    deposit(amount: number): void {
        this.balance += amount;
    }
    withdraw(amount: number): void {
        let avaiableBalance = this.balance - amount - this.overDraftLimit;
        if(avaiableBalance <= this.minimumBalance){
            throw new Error(`CheckingAccount AvaiableBalance less than MinimumBalance: ${avaiableBalance} < ${this.minimumBalance}`);
        }
        this.balance = avaiableBalance;
    }
    getBalance(): number {
        return this.balance;
    }
}