// Get Element By Id

var a = document.getElementById("head1");
a.style.color = "green";


// Get Element By Name

var b = document.getElementsByClassName("head1");
// b[1].innerHTML = "Hello";
b[1].style.color = "red";

var c = document.getElementsByTagName("h1");
c[0].style.color = "blue";

// Get Element By Name  

var d = document.getElementsByName("text")[0];
var e = document.getElementById("head");

function message(){
    e.innerHTML = "Hello " + d.value;  
}

// Get Element by CSS Selectors(QuerySelectorALL)

var f = document.querySelectorAll(".hclass");
f[0].innerHTML = "Learn HTML";
f[1].style.color = "green"

var g = document.querySelector("#head2");
g.innerHTML = "Rahul";

// Dom create and remove

// Adding
var heading = document.createElement("h1");

function create(){
    heading.innerHTML = "Rahul";
    document.body.appendChild(heading);
}
// Remove

function remove(){
    heading.remove();
}


// DOM - Add Events

var heading = document.getElementById("heads");
var btn = document.getElementById("btn");

btn.addEventListener("click",changeColor);
btn.addEventListener("mouseover", changeBG)

function changeColor(){
    heading.style.color = "red";
}

function changeBG(){
heading.style.backgroundColor = "blue";
}

// Object Oriented Programming

// let employee = {
//     name: "Rahul",
//     age:25,
//     position: "Python Developer",
//     salary: 50000,

//     getsalary:function(){
//         document.write("Salary of ", this.name, " is ", this.salary, "<br>")
//     }
// }

// employee.getsalary();

// document.write(employee.age)

// Creating Class

class employees{
    constructor(name,position,salary){
        this.name = name,
        this.position = position,
        this.salary = salary
    }

    getsalarys(){
        document.write("Salary of ", this.name, " is ", this.salary)
    }
}

let e1 = new employees("Rahul","Python Devoloper", 25000);

e1.getsalarys();


