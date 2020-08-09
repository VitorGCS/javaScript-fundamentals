/*************************************
 * Objects and properties
 */

 //object literal
 var john = {
     firstName:'John',
     lastName:'Smith',
     birthYear:1990,
     family:['Jane','Mark','Bob','Emily'],
     job: 'teacher',
     isMarried: false
 }

 console.log(john.firstName+' '+john.lastName);
 console.log(john['firstName'])
 var x = 'birthYear';
 console.log(john[x]);

 john.job = 'designer';
 john['isMarried'] = true;
 console.log(john);

 //new Object syntax
 var jane = new Object();
 jane.firstName = 'Jane';
 jane.birthYear = 1969;
 jane['lastName'] = 'Smith';
 console.log(jane);