///////////////////////////////////////
// Lecture: Hoisting

/*
calculateAge(1990);

function calculateAge(year){
    console.log(2020 - year);
}


// Hoisting doesnt work with funcion expresion but with funcion declaratinon
var retirement = function(year){
    console.log(65 - (2020 - year));
}

retirement(1990);

// variables

//console.log(age);
var age = 23;


function foo(){
    console.log(age);
    var age = 65;
    console.log(age);
}

foo();
console.log(age);
/*

/***
 * 
 * Scoping Chain
 */

 var a  = 'Hello!';
 first();

function first(){
    var b = 'first!';
    second();
    function second(){
        var c = 'Hey!';
        var a = 'lel!';
        third();
        function third(){
            var d = 'john';
            console.log(a+b+c+d);
        }
    }
}







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

/*
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
*/



///////////////////////////////////////
// Lecture: The this keyword









