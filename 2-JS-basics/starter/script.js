/************************************
*Lecture about variables and data types
*/

/*
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = "teacher";
console.log(job);
*/


/************************************
 * Variable Mutation and type coercion 
 */


 /*
 var firstName = 'John';
 var age = 28;

console.log(firstName + ' '+  age); // This works thanks to type coercion.


var job, isMarried;

job = 'teacher';
isMarried = false;


console.log(firstName + ' is a ' + age + ' year old '+ job + '. Is he married? ' +  isMarried);

// Variable mutation

age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old '+ job + '. Is he married? ' +  isMarried);

var lastName = prompt('What is his last name?');

console.log(firstName + ' ' + lastName);

*/

/*************************
 * Basic Operators
 */

/*
var year, yearJohn, yearMark;
year = 2020;
yearJohn = year-28;
yearMark = year - 33;

ageJohn = 28;
ageMark = 33;


console.log(ageJohn);
console.log(yearJohn);

console.log(year + 2);
console.log(year * 2);
console.log(year / 2);

console.log(ageJohn < ageMark);

// typeof operator
console.log(typeof ageJohn);
console.log(typeof true);
console.log(typeof 'Hello');
var x;
console.log(typeof x);
*/


/*******************************
 * The Ternary Operator and Switch Statements
 */


/*

var firstName = 'John';
var age = 23;

age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);


// Switch Statement
var job = 'ins';

switch(job){
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' drives an uber in Lisbon.');
        break;
    case 'designer':
        console.log(firstName + ' designes websites.');
        break;
    default:
        console.log(firstName + ' does something else.');
        break;
}



switch(true){
    case age < 13:
        console.log(firstName + ' is a boy');
        break;
    case age >=13 && age < 20:
        console.log(firstName + ' is a teenager');
        break;
    case age >=20 && age < 30:
        console.log(firstName + ' is a young man');
        break;
    default:
        console.log(firstName + ' is a man');
        break;
}

*/


/*******************************************************
 * 
 * Truthy and Falsy Values and equality operators
 */

 // Falsy values: undefined, null, 0, '', NaN
 // Trusthy values: NOT falsy values


 /*
 var height;

 height = 23;

 if(height || height === 0){
     console.log('Variable is defined');
 } else{
     console.log('Variable has not been defined');
 }


// ==  does type coercion (convert to the same type before comparing)  === doesnt do that 
if(height == '23'){
    console.log('The == operator does type coercion!');
}
*/


/****
 * 
 * Coding Challenge 2
 */

 /*

var avgJohn = (89 + 120 + 103)/3;
var avgMike = (11+94+123)/3;
var avgMary = (97+1+105)/3;

switch(true){
    case avgJohn > avgMike && avgJohn > avgMary:
        console.log('John is the winner with an average of ' + avgJohn);
        break;

    case avgMike > avgJohn && avgMike > avgMary:
        console.log('Mike is the winner with an average of ' + avgMike);
        break;

    default:
        console.log('Mary is the winner with an average of ' + avgMary);
        break;
}

*/

/******
 * Functions
 */

/*
function calculateAge(birthYear){
    return 2020 - birthYear;
}

var ageJohn = calculateAge(23);
console.log(ageJohn);

*/

/*******
 * Function Statements and Expressions
 */


/*

// Function expression
var whatDoYouDo = function(job, firstName){
    switch(job){
        case 'teacher':
            return firstName + ' teacher kids how to code';
            // No need for break bc there is already a return
        case 'driver':
            return firstName + ' knows how to drift a car';
        case 'designer':
            return firstName + ' is an artist';
        default:
            return firstName + ' does something else';
    }
}



console.log(whatDoYouDo('driver', 'antonio'));

*/

/**
 * Coding Challenge 3
 */

/*
var bills = [124,48,268];

function calculateTip(amount){
    switch(true){
        case amount < 50:
            return amount*0.2;
        case amount < 200:
            return amount*0.15;
        default:
            return amount*0.1;
    }
}

var tips = [];

bills.forEach( element => tips.push(calculateTip(element)));

var total = [];

bills.forEach( element => total.push(calculateTip(element) + element));

*/

/*****
 * Coding Challenge 4
 */

function calculateBMI(height, weight){
    return weight/(height**2);
}

var Mark = {
    name: 'Markus',
    weight: 78,
    height: 1.65,
    calcBMI: function(){
        this.BMI = calculateBMI(this.height, this.weight);
    }
};


var John = {
    name: 'John',
    weight: 70,
    height: 1.65,
    calcBMI: function(){
        this.BMI = calculateBMI(this.height, this.weight);
    }
};

Mark.calcBMI();
John.calcBMI();

if(John.BMI > Mark.BMI){
    console.log(John.name + ' has the highest BMI: ' + John.BMI);
}else if(John.BMI < Mark.BMI){
    console.log(Mark.name + ' has the highest BMI: ' + Mark.BMI);
}else{
    console.log(John.name + ' and '+ Mark.name + ' have the same BMI: ' + John.BMI);
}


