//out employees array
let employees = [];

$( document ).ready( readyNow );

function addEmployee(){
 console.log('in addEmployees');
 //get user input
 //create a new object literal with the user input
    const employee = {
        firstName: $( '#firstNameIn' ).val(),
        lastName :$( '#lastNameIn' ).val(),
        idNumber : $( '#idNumberIn' ).val(),
        jobTitle : $( '#jobTitleIn').val()
        annualSalary : $( '#annualSalary').val()
    }//end employee
    //push the object into our employees array
    (employees).push(employee);
    //display employees to DOM
    display employees( employees );
}//end addEmployee


 