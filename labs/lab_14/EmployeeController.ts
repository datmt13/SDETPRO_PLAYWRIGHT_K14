import Employee from "./Employee";

export class EmployeeController{
    static getTotalSalary(employees : Employee[]) : number{
        return employees.reduce((totalSalary, e) => {
            return totalSalary + e.getSalary();
          }, 0);
    }

    static getEmployeeHighestSalary(employees : Employee[]) : Employee{
        return employees.reduce(
            (prev, current) => {
              return prev.getSalary() > current.getSalary() ? prev : current
            }
          );
    }

    static getEmployeeLowestSalary(employees : Employee[] ) : Employee{
        return employees.reduce(
            (prev, current) => {
              return prev.getSalary() < current.getSalary() ? prev : current
            }
          );
    }

    static printEmployeeInfo(e : Employee) : void{
      console.log(`name: ${e.getName()} - has salary: ${e.getSalary()}`);
    }
}