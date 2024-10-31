// Initialize an empty array to store employees
let employeesArray = [];

const addEmployeesBtn = document.querySelector("#add-employees-btn");

const collectEmployees = function () {
  const numEmployees = parseInt(
    prompt("How many employees would you like to add?")
  );

  if (isNaN(numEmployees) || numEmployees <= 0) {
    alert("Please enter a valid number of employees.");
    return;
  }

  // Collect employee data for each employee
  for (let i = 0; i < numEmployees; i++) {
    const employeeFirstName = prompt(`Enter employee ${i + 1}'s first name:`);
    const employeeLastName = prompt(`Enter employee ${i + 1}'s last name:`);
    const employeeSalary = parseFloat(
      prompt(`Enter employee ${i + 1}'s salary:`)
    );

    // Input validation: Ensure salary is a number
    if (isNaN(employeeSalary)) {
      alert("Please enter a valid salary.");
      return;
    }

    // Create an employee object and add it to the array
    const employee = {
      firstName: employeeFirstName,
      lastName: employeeLastName,
      salary: employeeSalary,
    };

    employeesArray.push(employee);
  }

  return employeesArray;
};

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  let totalSalary = 0;
  employeesArray.forEach((employee) => {
    totalSalary += employee.salary;
  });

  let averageSalary = totalSalary / employeesArray.length;

  // Log the average salary with two decimal places
  console.log(
    `The average employee salary between our ${
      employeesArray.length
    } employee(s) is $${averageSalary.toFixed(2)}`
  );
};

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  const randomIndex = Math.floor(Math.random() * employeesArray.length);
  const randomEmployee = employeesArray[randomIndex];
  console.log(
    `Congratulations to ${randomEmployee.firstName} ${randomEmployee.lastName}, our random drawing winner!`
  );
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
