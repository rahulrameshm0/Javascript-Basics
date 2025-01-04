// document.write("Hello world")
// alert("Hello world")

// console.log("Hello World");

document.write("<h1>Leran JS</h1>");

// string

var person = "Rahul";
var person2 = "Rohit";

document.write(typeof person + "<br>")

// number

var num1 = 25;
var num2 = 35.55;


document.write(num1 + "<br>")

// undefined

var test = test;

document.write(test + "<br>")

// constant (When a variable is assigned once you can't again.)

const pi = 31.55;
document.write(pi + "<br>")




// ARITHEMETIC OPERATORS

document.write("ARITHEMETIC OPERATORS")

var a  = 20;
var b = 30;

document.write(a + b + "<br>")

var a  = 20;
var b = 30;

document.write(a - b + "<br>")

var a  = 20;
var b = 30;

document.write(a * b + "<br>")

var a  = 20;
var b = 30;

document.write(a / b + "<br>")

var a  = 20;
var b = 30;

document.write(a % b + "<br>")


// ASSIGNMENT OPERATOR

document.write("ASSIGNMENT OPERATOR", "<br>")

var a = 10
var result = a += 25;
document.write(result + "<br>")

var a = 10
var result = a -= 5;
document.write(result + "<br>")

var a = 10
var result = a *= 25;
document.write(result + "<br>")

var a = 10
var result = a /= 3;
document.write(result + "<br>")

var a = 10
var result = a %= 3;
document.write(result + "<br>")

var a = 10
document.write(a)

// COMPARISON OPERATOR

document.write("COMPARISON OPERATOR", "<br>")

var a = 10;
var b = 20;
document.write(a == b, "<br>")

var a = 10;
var b = 10;
document.write(a == b, "<br>")

var a = 10;
var b = 20;
document.write(a > b, "<br>")

var a = 10;
var b = 20;
document.write(a < b, "<br>")

var a = 10;
var b = 20;
document.write(a <= b, "<br>")

var a = 10;
var b = 20;
document.write(a >= b, "<br>")

var a = 10;
var b = 20;
document.write(a == b, "<br>")

var a = "10";
var b = 10;
document.write(a == b, "<br>")

var a = 10;
var b = "10";
document.write(a === b, "<br>")

var a = 10;
var b = 540;
document.write(a != b, "<br>")

// LOGICAL OPERATOR
document.write("LOGICAL OPERATOR", "<br>")

var a = 10;
var b = 15;
document.write(a == 10 && b == 15, "<br>")

var a = 10;
var b = 15;
document.write(a == 10 || b == 20, "<br>")

// this one will give you the opposit result
var a = 10;
var b = 20;
document.write(!(a == 20), "<br>") 

// CONDITION STATEMENT 

document.write("CONDITION STAEMENT", "<br>")

// IF STATEMENT 

var a = 0;

if (a > 10){
    document.write("10 is a Positive number!");
}
else if (a < 10){
    document.write("10 is a Negative number!");
}
else{
    document.write("ZERO");
}


// SWITCH STATEMENT

var a = "h";

switch(a){
    case "A":
        document.write("Apple" + "<br>");
        break

    case "B":
        document.write("Banana" + "<br>");
        break

    case "C":
        document.write("Cat" + "<br>");
        break

    default:
        document.write("None" + "<br>");
        break

}

// LOOPS

// FOR LOOP

for(var a = 1; a <= 5; a++){
    document.write("Hello" + "<br>");
}

// WHILE LOOP

var a = 10;

while(a >= 1){
    document.write(a + "<br>");
    a--;
}

// DO WHILE

var i = 1
do{
    document.write(i + "<br>");
     i++;
}while(i <= 10)


// FUNCTION

function greeting(name){
    document.write("Good Morning", " Rahul","<br>")
}

function add(a,b){
    document.write("Total: ", a + b, "<br>")
}

function multiply(num1, num2){
    return (num1 * num2)
}
var result = multiply(5,6)
document.write("Total after multiplying: ",result)


// Arrays
document.write("<br>")
var animals = ["Lion","Dog", "Cat", "Tiger", "Bear"]

var x = animals[5] = "Elephent";
var x = animals.push("Fox");
document.write(animals, "<br>")
document.write(animals, "<br>")

// for(i = 0; i < x; i++){
//     document.write(animals[i], "<br>")
// }

// animals[0] = "Eagle";  
// document.write(animals, "<br>")
// for(i = 0, i < )

var numbers = [20,30,50,69,80];

numbers.shift();
numbers.pop();
numbers.splice()
document.write(numbers[0] + numbers[2])
    