///////////////////////////////////////
// Lecture: Hoisting
/*
// FUNCTIONS
//hoisting - in creation fase the function is stored in variable, so I can use before defining, it's already available in execution fase

//works for function declaration
calculateAge(1990); //OK

//function declaration
function calculateAge(year){
    console.log(2020 - year);
}

calculateAge(1990); //OK

//retirement(1988);//NOK - Exception

//function expressions - hoisting only works for function declaration, not works for function expressions
var retirement = function(year){
    console.log(65- (2020 - year));
}

retirement(1988); //OK


// VARIABLES 
//hoisting - scan for variables declarations and set to undefine
//NOTE: variables that are declared and not set are with the value undefined
//
console.log(age); //undefined
var age = 23;
console.log(age);

//console.log(notDeclared);//get an error - "notDeclared" is not defined

function foo(){
    console.log(age);
    var age = 65;
    console.log(age);
}
foo();
console.log(age);
*/

///////////////////////////////////////
// Lecture: Scoping

// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/


// Example to show the differece between execution stack and scope chain

var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}




///////////////////////////////////////
// Lecture: The this keyword