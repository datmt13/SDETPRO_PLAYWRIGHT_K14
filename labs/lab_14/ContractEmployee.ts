import Employee from "./Employee";

export default class ContractEmployee extends Employee {
    static salary : number = 40000;
    constructor(id : number, name : string){
        super(id, name, ContractEmployee.salary);
    }
}