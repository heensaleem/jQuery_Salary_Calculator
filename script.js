//out employees array
let employees = [];
let monthlyCosts = 0;
const monthsInYear = 12;
$( document ).ready( readyNow );

function readyNow(){
    $('#submit').on('click', addEmployee);
    $('.tableBody').on('click','.deleteButton', function(){
        $(this).parents('tr').remove();
       
    });
    
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
    }//end employee 
    //push the object into our employees array
    employees.push(employee); 
    console.log(employees);
    //display employees to table in DOM
    let el = $('.tableBody');
     let employeeList = `<tr> 
     <td>${employee.firstName}</td> 
     <td>${employee.lastName}</td> 
     <td>${employee.idNumber}</td> 
     <td>${employee.jobTitle}</td> 
     <td>${employee.annualSalary} </td>
     <td id="remove"> <button class="btn btn-danger deleteButton">Delete</button></td>
   </tr> `

    el.append(employeeList);
         

    //display monthly costs to DOM
    displayMonthlyCosts(employees);
    clearInputFields(); 
   
   

}//end addEmployee

 function displayMonthlyCosts ( employees ){
      console.log('in display employees');
      //target the annualsalary from the array
      //for loop to loop through the array 
    for (let i=0; i < employees.length; i++){
        console.log("in employees array", employees[i].annualSalary);
        //getting monthlyCosts by dividing annualSalary / 12
        monthlyCosts +=  employees[i].annualSalary / monthsInYear ; 
        
    }
    console.log(monthlyCosts);
    
    $('#monthlyCostsOut').text(`Monthly Cost: ${monthlyCosts} `);
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
 