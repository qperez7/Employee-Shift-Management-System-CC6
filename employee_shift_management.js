// Task 1: Create an Employees Array of Employee Objects
 employees = [
{ name: 'John', shifts: [{ day: 'Monday', hours: 8 }, { day: 'Wednesday', hours: 6 }] },
{ name: 'Sara', shifts: [{ day: 'Tuesday', hours: 5 }, { day: 'Thursday', hours: 7 }] }, 
{ name: 'David', shifts: [{ day: 'Monday', hours: 8 }] },
{ name: 'Emily', shifts: [{ day: 'Friday', hours: 8 }] }
];
console.log(employees)

// Task 2: Create a Function to Display Employee Shift Details
function displayEmployeeShifts (employees) {
    return employees.name, employees.shifts
}
console.log(displayEmployeeShifts(employees[0]));

// Task 3: Create a Function to Assign a New Shift
function assignShift(name,day,hours) {
    if(employees.name === name && employees.day === day) {
    return "error unable to assign" }
    else
    return {day: day,hours: hours} 
}
console.log(employees.push(assignShift('John','Tuesday',4))) //Output: adds shift to array

//Task 4: Create a Function to Calculate Total Hours Worked
function calculateTotalHours(employee) {
return employee,employeeHours 
}
employeeHours = 0;
for (let i = 0; i < employees.length; i++) {

  employeeHours += employees[i].hours;
}
console.log(calculateTotalHours('John')) //Output: is NAN 

//Task 5: Create a Function to List Employees with Free Days
function listAvailableEmployees(day) {
    if(employees.some(employee => day === employees.day))
    return "employees are not available" 
else
return employees.name
}
console.log(listAvailableEmployees('Monday')); //Output: is undefined