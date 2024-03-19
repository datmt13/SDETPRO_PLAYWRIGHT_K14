

import FulltimeEmployee from "./FulltimeEmployee";
import ContractEmployee from "./ContractEmployee";
import {EmployeeController} from "./EmployeeController";
let fullEmp1 = new FulltimeEmployee(1, "Nguyen Van A");
let fullEmp2 = new FulltimeEmployee(2, "Nguyen Van B");
let fullEmp3 = new FulltimeEmployee(3, "Nguyen Van C");

let constractEmp1 = new ContractEmployee(4, "Le Thao A");
let constractEmp2 = new ContractEmployee(4, "Le Thao B");
let constractEmp3 = new ContractEmployee(4, "Le Thao C");

let employees = [fullEmp1,fullEmp2,fullEmp3,constractEmp1,constractEmp2,constractEmp3];
let totalSalary = EmployeeController.getTotalSalary(employees);
console.log(`total salary: ${totalSalary}`);

let getEmployeeHighestSalary = EmployeeController.getEmployeeHighestSalary(employees);
console.log(EmployeeController.printEmployeeInfo(getEmployeeHighestSalary));

let getEmployeeLowestSalary = EmployeeController.getEmployeeLowestSalary(employees);
console.log(EmployeeController.printEmployeeInfo(getEmployeeLowestSalary));





