/****************************************
 * Coding challenge 1
 
 John and his family went on a holiday and went to 3 different restaurants, The bills were $124, $48 and $268.
 To tip the waiter a fair amount, John created a simple tip calculator (as a function). 
 He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, adn 10% if the bill is more than $200.
 In the end John would like to have 2 arrays:
 1) Containing all three tips (one for each bill)
 2) Containing all three final paid amounts (bill + tip).
 
 (Note: to calculate 20% of a value, simply multiply if with 20/100 = 0.2)
 */

 /*
var rest_bill = [124,48,568]

function calcTip(bill){
    var tip;
    if(bill < 50){
        tip= bill*0.2;
    }else if(bill >=50 && bill < 200){
        tip = bill * 0.15;
    }else
        tip = bill*0.1;
    return bill + tip;
}
var rest_tip = [calcTip(rest_bill[0]), calcTip(rest_bill[1]), calcTip(rest_bill[2]) ];

console.log('Restaurant bill: '+ rest_bill);
console.log('Restaurant bill + tip: '+rest_tip );
*/



/****************************************
 * Coding challenge 2

In this codding challenge Mark and John compare their BMIs:
1. For each of them, create an object with properties for their full name, mass and height;
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method;
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.
Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).
 */

/*
var mark = {
   fullName: 'Mark Smith',
   mass: 90,
   height: 1.80,
   calcBMI: function(){
       this.bmi = this.mass /(this.height*this.height);
       return this.bmi;
   }
}

var john = new Object();
john.fullName = 'John Smith';
john.mass = 80;
john.height=1.50;
john.calcBMI = function(){
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
}

if(john.calcBMI() > mark.calcBMI()){
    console.log(john.fullName+' has a higher BMI of '+john.bmi);
}else if(mark.bmi > john.bmi){
    console.log(mark.fullName+' has a higher BMI of '+mark.bmi);
}else{
    console.log('They have the same BMI');
}
//console.log(bmiJohn>bmiMark?'BMI John is greater with: '+bmiJohn : 'BMI Mark is greater with:'+bmiMark);
console.log(mark);
console.log(john);
*/


/****************************************
 * Coding challenge 3
 
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!
This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10$ if the bill is more than $200. 
Implement a tip calculator using objects and loops:
1. Create an onbject with an array for the bill values;
2. Add a method to calculate the tip;
3. This method should include a loop to iterate over all the paid bills and do the tip calculations;
4. As an output, create 
    1) a new array containing all the tips,
    2) an array containig final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop. 
*/

 var calcJohn = {
    name : 'John Steves',
    bill : [124, 48, 268,180, 42],
    tip: [],
    billTip: [],
    calcTip: function(){
        for(var i=0; i< this.bill.length; i++){
            if(this.bill[i] < 50){
                this.tip[i]= this.bill[i]*0.2;
            }else if(this.bill[i]>=50 && this.bill[i] < 200){
                this.tip[i]= this.bill[i]*0.15;
            }else{
                this.tip[i]= this.bill[i]*0.1;
            }
            this.billTip[i] = this.tip[i] + this.bill[i];
        }
    }
 }

 calcJohn.calcTip();
 console.log('John family bill: '+calcJohn.bill);
 console.log('John family till: '+calcJohn.tip);
 console.log('John family bill + tip: '+calcJohn.billTip);

 /*
 EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $475, $110, and $45.
 Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between %100 and $300, and 25% if the bill is more than $300 (different than John).
 5. Implement the same functionality as before, this time using Mark's tipping rules
 6. Create a function (not a method) to calculate the average of a given array of tips. HINT: loop over the array, and in each iteration store the current
 sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
 7. Calculate the average ti+ for each family
 8. Log to the console which family paid the highest tip on average
 */
var calcMark = {
    name : 'Mark Miller',
    bill : [77, 475, 110, 45],
    calcTip: function(){
        this.tip = [];
        this.billTip = [];
        for(var i=0; i< this.bill.length; i++){
            if(this.bill[i] < 100){
                this.tip[i]= this.bill[i]*.2;
            }else if(this.bill[i]>=100 && this.bill[i] < 300){
                this.tip[i]= this.bill[i]*.1;
            }else{
                this.tip[i]= this.bill[i]*.25;
            }
            this.billTip[i] = this.tip[i] + this.bill[i];
        }
    }
 }

 calcMark.calcTip();
 console.log('Mark family bill: '+calcMark.bill);
 console.log('Mark family till: '+calcMark.tip);
 console.log('Mark family bill + tip: '+calcMark.billTip);

 function averageTip (tip){
     var totalTip=0;
     for(var i =0 ; i <tip.length; i++ ){
         totalTip += tip[i];
     }
     return totalTip/tip.length;
 }

 var averageJohn = averageTip(calcJohn.tip);
 console.log('Average tip John: '+averageJohn);
 var averageMark = averageTip(calcMark.tip)
 console.log('Average tip Mark: '+averageMark);
 if(averageJohn > averageMark){
     console.log('The average tip is greather in case of the John with '+averageJohn);
 }else     
    console.log('The average tip is greather in case of the Mark with '+averageMark);
