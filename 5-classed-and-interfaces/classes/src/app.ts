class Department {
  // defines property and type
  private name: string;
  // sets the name field to the constructors argument
  constructor(n: string) {
    // must use this keyword for local class variables
    this.name = n;
  }
  // indicates to TS that this should always refer to the Department class
  describe(this: Department) {
    console.log("Department: " + this.name);
  }
  // You can set properties and methods to private using the private keyword
  // It is now only accessible from inside the class with addEmployee
  private employees: string[] = [];
  addEmployee(employee: string) {
    this.employees.push(employee);
  }
  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department("Accounting");

accounting.describe();
accounting.addEmployee("Max");
accounting.addEmployee("Manuel");
accounting.printEmployeeInformation();

class Person {
  // We can add readonly to values that should not be changed
  constructor(public readonly id: string, public name: string) {}
}
const karl = new Person("1", "Karl");
console.log(karl);

class ITDepartment extends Department {
  // to add new arguments use the super keyword with the new argument
  constructor(id: string, public admins: string[]) {
    super(id);
  }
}

const IT = new ITDepartment("2", ["mark", "jessie"]);
console.log(IT)

class HRDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id)
  }
  addReport(text:string) {
    this.reports.push(text)
  }
  printReports() {
    console.log(this.reports)
  }
}

const HR = new HRDepartment('3', []);
HR.addReport("Quarterly report on Mr. Willson's illicit hacking activities");
HR.printReports();