// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector("#add-employees-btn");

// Collect employee data
const collectEmployees = function () {
  // TODO: Get user input to create and return an array of employee objects
  // store employee in array create array
  const employeeFirstName = prompt("Employee's first name");
  const employeeLastName = prompt("Employee's last name");
  const employeeSalary = prompt("Enter employee's salary");

  const employee = {
    firstName: employeeFirstName,
    lastName: employeeLastName,
    salary: employeeSalary,
  };
  console.log(employee);
};
employeesArray.push({ FirstName, lastName, salary });
// Display the average salary
const displayAverageSalary = function (employeesArray) {
  // TODO: Calculate and display the average salary
  displayAverageSalary(employees);
  {
    let totalSalary = 0;
    employees.forEach((employee) => {
      totalSalary += employee.salary;
    });
    let averageSalary = totalSalary / employees.length;

    // Log the average salary with two decimal places
    console.log(
      `The average employee salary between our ${
        employees.length
      } employee(s) is $${averageSalary.toFixed(2)}`
    );
  }
};

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  // TODO: Select and display a random employee
  getRandomEmployee(employees);
  {
    const randomIndex = Math.floor(Math.random() * employees.length);

    const randomEmployee = employees[randomIndex];
    console.log(
      `Congratulations to ${randomEmployee.firstName} ${randomEmployee.lastName}, our random drawing winner!`
    );
  }
};
/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector("#employee-table");

  // Clear the employee table
  employeeTable.innerHTML = "";

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
};

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log("==============================");

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
};

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener("click", trackEmployeeData);
