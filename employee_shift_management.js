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
let found = employees.find(name => employees.name === name);
let available = employees.some(day => employees.day != day);
if (found && available)
    return {name:name,day:day,hours:hours}
else
return "error unable to assign"
}
console.log(employees.push(assignShift('John','Tuesday',4)))

//Task 4: Create a Function to Calculate Total Hours Worked
function calculateTotalHours(employee) {
let totalHours = employee.shifts.hours;
let employeeHours = totalHours.reduce((total,hour) => total + hour,0); 
return employeeHours 
}
//console.log(calculateTotalHours('Sara'))
