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
  // We can also change it to protected to make it available to extended classes
  protected employees: string[] = [];
  addEmployee(employee: string) {
    this.employees.push(employee);
  }
  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
  static currentYear = 2020;
  static createEmployee(name: string) {
    return { name: name };
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
  private lastReport: string;
  // We can use a get method to access private properties outside a class
  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found.");
  }
  // We can use a set method to create private value outside a class
  set mostRecentReport(value: string) {
    this.addReport(value)
  }
  constructor(id: string, private reports: string[]) {
    super(id);
    this.lastReport = reports[0];
  }
  addEmployee(name: string) {
    if (name === "max") {
      return;
    }
    this.employees.push(name);
  }
  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }
  printReports() {
    console.log(this.reports);
  }
}

const HR = new HRDepartment('3', []);
HR.addReport("Quarterly report on Mr. Willson's illicit hacking activities");
HR.addEmployee("Susan")
HR.printReports();
HR.printEmployeeInformation();
// Must set getter/setter function as a property not as a function
HR.mostRecentReport = "Report on Elliot illicit hacking activities aka Mr. Robot";
console.log(HR.mostRecentReport);
// We can create our own static methods where don't have to extend the department class
const newEmpoyee = Department.createEmployee("Ellen");
console.log(Department.currentYear, newEmpoyee);