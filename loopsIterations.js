/**********************
 * Loops and Iteration
 */
/*
//for loop
 for(var i = 0; i < 10; i++){
    console.log(i);
 }
 */

 var john = ['John','Smith',1990, 'designer', false, 'blue'];
 /*
 console.log(john.length);
 for(i=0; i< john.length ; i++){
     console.log(john[i]);
 }


//While loop
var i = 0;
while(i < john.length){
    console.log(john[i++]);
}
*/

//continue and break statements
/*
for(var i =0; i<john.length; i++){
    //only display String caracters
    if(typeof john[i] !== 'string') continue;    
    console.log(john[i]);
}
console.log('########################################')
for(var i =0; i<john.length; i++){
    //only display until find something different of string
    if(typeof john[i] !== 'string') break;    
    console.log(john[i]);
}
*/

for(var i = john.length-1; i>=0; i--){
    console.log(john[i]);
}