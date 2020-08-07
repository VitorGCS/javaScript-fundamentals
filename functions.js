/************************
 * Functions => DRY don't repeat yourself
 */

 /*
 function calculateAge(birthYear){
     return 2020-birthYear;
 }

 var ageJohn = calculateAge(1988);
 var ageMike = calculateAge(1948);
 var ageJane = calculateAge(1969);
 console.log(ageJohn, ageMike, ageJane);

 function yearUntilRetirement(year, firstName){
     var age = calculateAge(year);
     var retirement = 65 - age;
     if(retirement > 0){
        console.log(firstName+' retires in '+retirement+' years.');
     }else{
         console.log(firstName+' is already retired.');
     }
     
 }

 yearUntilRetirement(1988, 'Vitor');
 yearUntilRetirement(1986, 'Rita');
 yearUntilRetirement(1946, 'John');
 */

 /**************************************
  * Function Statements and Expressions
  */

//Function declaration -  don't realy return anything is a statement !
//function whatDoYouDo (job, firstName){}

//Function Expression
var whatDoYouDo = function(job, firstName){
    switch(job){
        case 'teacher':
            return firstName+' teaches kids how to code';
        case 'driver':
            return firstName+' drives an uber in Lisbon';
        case 'designer':
            return firstName+' designs beautifuk websites';
        default:
            return firstName+' does something else';
    }
}

console.log( whatDoYouDo('teacher', 'John'));
console.log( whatDoYouDo('designer', 'Jane'));
console.log( whatDoYouDo('retired', 'Mark'));
 