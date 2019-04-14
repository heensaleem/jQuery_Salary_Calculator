//out employees array
let employees = [];
let monthlyCosts = 0;
const monthsInYear = 12;
$( document ).ready( readyNow );

function readyNow(){
    $('#submit').on('click', addEmployee);
    
    
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
    //push the object into our employees array
    employees.push(employee); 
    //display employees to table in DOM
    let el = $('.table');
     
    el.append(`<tr> 
                 <td>${employee.firstName}</td> 
                 <td>${employee.lastName}</td> 
                 <td>${employee.idNumber}</td> 
                 <td>${employee.jobTitle}</td> 
                 <td>${employee.annualSalary} </td>
               </tr> `)
         //append the listEmployee to DOM

    //display monthly costs to DOM
    
    clearInputFields(); 
    console.log(employees);
    displayMonthlyCosts(employees);

}//end addEmployee

    




 function displayMonthlyCosts ( employeeArray ){
      console.log('in display inventory');
      //target the annualsalary from the array
      //for loop to loop through the array of annual salary
    for(let i=0; i<employeeArray.length; i++){
        monthlyCosts +=  employeeArray[i].annualSalary / monthsInYear ;
    
    }
    $('#monthlyCostsOut').text(`Monthly Cost: ${monthlyCosts}`);
    if(monthlyCosts > 20000){
        document.body.style.backgroundColor = '#FF0000';
    }
   
}    //result is the monthly costs
    
 //end display employees
 function clearInputFields (){
    $( '#firstNameIn' ).val('');
    $( '#lastNameIn' ).val('');
    $( '#idNumberIn' ).val('');
    $( '#jobTitleIn').val('');
    $( '#annualSalaryIn').val('');

 }
 