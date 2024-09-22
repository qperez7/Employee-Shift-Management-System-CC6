// Task 1: Create an Employees Array of Employee Objects
 const employees = [
{ name: 'John', shifts: [{ day: 'Monday', hours: 8 }, { day: 'Wednesday', hours: 6 }] },
{ name: 'Sara', shifts: [{ day: 'Tuesday', hours: 5 }, { day: 'Thursday', hours: 7 }] }, 
{ name: 'David', shifts: [{ day: 'Monday', hours: 8 }] },
{ name: 'Emily', shifts: [{ day: 'Friday', hours: 8 }] }
];
console.log(employees) // Output: logs employee array

// Task 2: Create a Function to Display Employee Shift Details
function displayEmployeeShifts(employees) {
let employeeName = employees.name;
let employeeShifts = employees.shifts;
return {employeeName,employeeShifts}
}
console.log(displayEmployeeShifts(employees[3])); // Output: Displays employee details for Emily

// Task 3: Create a Function to Assign a New Shift
function assignShift(name,days,hours) {

   if( employees.find(employee => employee.shifts.some(day => day === days)))
    
    return "cannot assign shift" 
    else 
    return {day:days,hours:hours}
};
console.log(employees.push(assignShift('John','Tuesday',4))) //Output: adds shift to array but not to Johns shifts

//Task 4: Create a Function to Calculate Total Hours Worked
function calculateTotalHours(employee) {
let findHours = employees.find(employee => employee.shifts.filter(hours => hours += hours))
return findHours
}
console.log(calculateTotalHours('John')) //Output: is wrong I cannot figure out how to access hours in the shifts array

//Task 5: Create a Function to List Employees with Free Days
function listAvailableEmployees(days) {
let notAvailable = employees.find(employee => employee.shifts.filter(day => day !== days));
    return notAvailable
       
    };

console.log(listAvailableEmployees('Monday')); //Output: it does the opposite of what I need