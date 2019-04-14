//out employees array
let employees = [];
let monthlyCosts = 0;
const monthsInYear = 12;
$( document ).ready( readyNow );

function readyNow(){
    $('#submit').on('click', addEmployee);
    displayMonthlyCosts( employees );
}

function addEmployee(){
 console.log('in addEmployees');
 //get user input
 //create a new object literal with the user input
    const employee = {
        firstName: $( '#firstNameIn' ).val(),
        lastName :$( '#lastNameIn' ).val(),
        idNumber : $( '#idNumberIn' ).val(),
        jobTitle : $( '#jobTitleIn').val(),
        annualSalary : $( '#annualSalaryIn').val()
    }//end employee object literal

    let el = $( '.table');
     el.empty();
    //  //loop through the employees array
    //  for (let i=0; i<employees.length; i++){
    //     // display each employee as li
        const listEmployee = `<tr><td>${employee.firstName}</td> 
        <td>${employee.lastName}</td> 
        <td>${employee.idNumber}</td> 
        <td>${employee.jobTitle}</td> 
        <td>${employee.annualSalary} </td></tr> `
          //append the listEmployee to DOM
          el.append(listEmployee)
    //push the object into our employees array
    employees.push(employee);
    //empty input fields
    // $( '#firstNameIn' ).val('');
    // $( '#lastNameIn' ).val('');
    // $( '#idNumberIn' ).val('');
    // $( '#jobTitleIn').val('');
    // $( '#annualSalaryIn').val('');
    //display employees to DOM
    displayMonthlyCosts( employees );

}//end addEmployee


 function displayMonthlyCosts ( arrayToShow ){
     console.log('in display inventory');
     //target the annualsalary from the array
     //for loop to loop through the array of annual salary
     for(let i=0; i<employees.length; i++){
         monthlyCosts += (employees[i], employees.annualSalary / monthsInYear);
         ('#monthlyCostsOut').append(monthlyCosts);
     }
     
     //result is the monthly costs
     
 }//end display employees

 