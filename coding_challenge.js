/****************************************
 * Coding challenge 1
 */

 /*
 John and his family went on a holiday and went to 3 different restaurants, The bills were $124, $48 and $268.
 To tip the waiter a fair amount, John created a simple tip calculator (as a function). 
 He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, adn 10% if the bill is more than $200.
 In the end John would like to have 2 arrays:
 1) Containing all three tips (one for each bill)
 2) Containing all three final paid amounts (bill + tip).
 
 (Note: to calculate 20% of a value, simply multiply if with 20/100 = 0.2)
 */
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