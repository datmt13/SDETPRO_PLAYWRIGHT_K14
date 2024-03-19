import Employee from "./Employee";

export default class FulltimeEmployee extends Employee {
    static salary : number = 50000;
    constructor(id : number, name : string){
        super(id, name, FulltimeEmployee.salary);
    }
}