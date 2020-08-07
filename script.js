/*
var firstName='John';

console.log(firstName);

var lastName='Smith';
var age = 28;

var fullAge = true;

var job;
console.log(job)

job = 'Teacher'
console.log(job)

//variable naming rules
var _3years = 3;
*/

/*
//Type coercion
var firstName = 'John';
var age = 28;

console.log(firstName + ' '+ age)

var job, isMarried;
job = 'teacher';
isMarried = false;



//variable mutation
age = 'twenty eight';
job = 'driver';
alert(firstName + "  is a " +age+ ' year old ' + job+'. Is he married? '+isMarried)

console.log(firstName + "  is a " +age+ ' year old ' + job+'. Is he married? '+isMarried)

var lastName = prompt('What is his last Name?');
console.log(firstName+' '+lastName);
*/

/**********************************
 * Basic operators
 */
/*
//Math operators
var now, yearVitor, yearMark;
now = 2020;
ageVitor = 32;
ageMark = 18;
yearVitor = now - ageVitor;
yearMark = now - ageMark;
console.log("Vitor: "+yearVitor);
console.log("Mark: "+yearMark); 
console.log(now +2);
console.log(now -2);
console.log(now /2);

//Logical operators
var VitorOlder = ageVitor < ageMark;
console.log(VitorOlder);

//typeof operator
var ex;
console.log(typeof ageMark);
console.log(typeof VitorOlder);
console.log(typeof 12);
console.log(typeof ex);
*/

/**********************************
 * Operator precedence
 */
/*
 var now = 2018;
 var yearJohn = 1989;
 var fullAge = 18;

 //Multiple operators
 var isFullAge = now - yearJohn >= fullAge;
 //console.log(isFullAge);

 //Grouping
 var ageJohn = now - yearJohn;
 var ageMark = 35;
 var average = (ageJohn + ageMark) / 2;

 //Multiple assignments
 var x, y;
 x = y = ( 3 + 5 ) * 4 - 6;
 console.log(x, y);

 //More operators
//x = x * 2;
x *=2 ;
console.log(x);
//x++;
console.log(x++);
console.log(x);


var mass_Mark = prompt("What's Mark mass [kg]?");
var height_Mark = prompt("What's Mark height [meters] ?");

var mass_John = prompt("What's John mass [kg]?");
var height_John = prompt("What's John height [meters] ?");

var bmi_Mark = mass_Mark/(height_Mark * height_Mark);
var bmi_John = mass_John/(height_John * height_John);

var MarkGreatherBMIJohn = bmi_Mark > bmi_John;

if(MarkGreatherBMIJohn){
    console.log("Is Mark's BMI higher than John's");
}else{
    console.log("Is John's BMI higher than Mark's");
}
*/

/*****************************
 *  If / else statements
 */
/*
 var firstName = 'John';
 var civilStatus = 'single';


 var isMarried = false;

 
 if(isMarried){
    console.log(firstName + 'is marrid!');
}else{
    console.log(firstName+' will hopefully marry soon :)');
}
*/

/********************************
 * Boolean logic
 */
/*
var firstName='John';
var age = 21;
if(age < 13){
    console.log(firstName + ' is a boy');
} else if(age >= 13 && age <20){
    console.log(firstName + ' is a teenager');
} else if(age>20 && age < 30){
    console.log(firstName + ' is a young man');
} else{
    console.log(firstName + ' is a man'); 
}
*/

/******************************
 * The Ternary Operator and Switch Statements
 */

var firstName = 'John';
var age = 32;
/*
//Ternary operator
age >=18 ? console.log(firstName+' drinks beer.') : console.log(firstName+' drinks juice.')

var drink = age>=18 ? 'beer':'juice';
console.log(drink);


//Switch statement
var job='designer';
switch(job){
    case 'teacher':
        console.log(firstName+' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName+' drives an uber in Lisbon.');
        break;
    case 'designer':
        console.log(firstName+' designs beautiful websites.');
        break;
    default:
        console.log(firstName+' does something else.')
}

age=50;
switch(true){
    case age <13:
        console.log(firstName+' is a boy');
        break;
    case age >=13 && age < 20:
        console.log(firstName+' is a teenager.');
        break;
    case age >=20 && age < 30:
        console.log(firstName+' is a young man.');
        break;
    default:
        console.log(firstName+' is a man.');
}
*/

/*********************************
 * Truthy and Falsy values and equality operators
 */
//falsy values: undefined, null, 0, '', NaN
//truthy values: NOT falsy values
/*
var height;
height = 23;
if(height || height === 0){
    console.log('Variable is defined');
}else{
    console.log('Variable is NOT been defined');
}   

//Equality operators
if(height == '23'){
    console.log('The == operator does type coercion');
}
*/
var scoredJohnTeam = 89+120+103;
var scoredMikeTeam = 116+94+123;
var scoredMaryTeam = 97+134+105;

var averageJohnTeam = scoredJohnTeam/3;
var averageMikeTeam = scoredMikeTeam/3;
var averageMaryTeam = scoredMaryTeam/3;
console.log('Score John: '+averageJohnTeam+'\nScore Mike : '+averageMikeTeam+'\nScore Mary : '+averageMaryTeam);


if(averageJohnTeam > averageMikeTeam && averageJohnTeam > averageMaryTeam){
    console.log('John\'s team is the winner with average of '+averageJohnTeam);
}else if(averageMikeTeam > averageJohnTeam && averageMikeTeam > averageMaryTeam ){
    console.log('Mike\'s team is the winner with average of '+averageMikeTeam);
}else if(averageMaryTeam > averageJohnTeam && averageMaryTeam > averageMikeTeam ){
    console.log('Mary\'s team is the winner with average of '+averageMaryTeam);
}else{
    console.log('The three teams are draws');
}
