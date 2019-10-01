let employees = [];
let empId = 100;

// CLick on register Button
$('#register-btn').click(function() {

    let employee = {
        empId : empId,
        empName : $('#emp_name').val(),
        empAge : $('#emp_age').val(),
        empDesignation : $('#emp_desg').val(),
        empLocation : $('#emp_location').val()
    };
    empId++;
    employees.push(employee);
    displayEmployees(employees);
    clearFields();
});

// Display Employees
let displayEmployees = (employees) => {
    let empRows = '';
    for(let employee of employees){
        empRows += `<tr>
                       <td>${employee.empId}</td>
                       <td>${employee.empName}</td>
                       <td>${employee.empAge}</td>
                       <td>${employee.empDesignation}</td>
                       <td>${employee.empLocation}</td>
                   </tr> \n`;
    }
    $('#table_body').empty().append(empRows);
};

// clear Fields
let clearFields = () => {
    $('#emp_name').val('');
    $('#emp_age').val('');
    $('#emp_desg').val('');
    $('#emp_location').val('');
};