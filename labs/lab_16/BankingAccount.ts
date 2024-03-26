export default abstract class BankingAccount{
    protected balance : number = 0;
    protected minimumBalance : number = 0;
    constructor(minimumBalance : number){
        this.minimumBalance = minimumBalance;
    }
    abstract deposit(amount: number): void;
    abstract withdraw(amount : number) : void;
    abstract getBalance() : number;
}