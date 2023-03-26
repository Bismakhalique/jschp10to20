////////////chp12to13/////////////////////////
////////////////QUES 1////////////////////////
let input = prompt("Enter a character:");
let ascii = input.charCodeAt(0);

if (ascii >= 48 && ascii <= 57) {
  console.log(input + " is a number");
} else if (ascii >= 65 && ascii <= 90) {
  console.log(input + " is an uppercase letter");
} else if (ascii >= 97 && ascii <= 122) {
  console.log(input + " is a lowercase letter");
} else {
  console.log(input + " is not a valid input");
}
/////////////////QUES 2////////////////////////////////
let num1 = parseInt(prompt("Enter the first integer:"));
let num2 = parseInt(prompt("Enter the second integer:"));

if (num1 > num2) {
  console.log(num1 + " is larger");
} else if (num2 > num1) {
  console.log(num2 + " is larger");
} else {
  console.log("The two integers are equal");
}
//////////////////QUES 3///////////////////////////////
function isVowel(char) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    if (vowels.includes(char.toLowerCase())) {
      return true;
    } else {
      return false;
    }
  }
  console.log(isVowel('a'));  // Output: true
  console.log(isVowel('b'));  // Output: false



/////////////////QUES 5////////////////////////////////
// Define the correct password
const correctPassword = 'hey cutie';

// Prompt the user to enter their password
const userPassword = prompt('Enter your password:');

// Check if the user entered a password
if (!userPassword) {
  alert('Please enter your password.');
} else if (userPassword === correctPassword) {
  alert('Correct! The password you entered matches the original password.');
} else {
  alert('Incorrect password.');
}
//////////////////QUES 6////////////////////////////////////
var greeting;
var hour = prompt("WELCOME");
if(hour<18)
{alert("Good day");
}
else(hour>18)
{
    alert("Good evening")
} 
////////////////QUES 7//////////////////////////////////
function showTime(){
   var dt=new Date();
   var hh=dt.getHours();
   var mm=dt.getMinutes();
   var ss=dt.getSeconds();
   var h1,m1,s1;
if(hh<10)
h1="0"+hh;
else
h1=hh;
if(mm<10)
m1="0"+mm;
else
m1=mm;
if(ss<10)
s1="0"+ss;
else
s1=ss;
var time1=h1+":"+m1+":"+s1;
document.getElementById("sp2").innerHTML=time1;

}
function call()
{
setInterval(showTime,1000);



}

/////////////////QUES 4////////////////////////////////

var aeiou = prompt("Enter a character:");
var isVowel = false;

if (input.length == 1) {
  var vowels = ["a", "e", "i", "o", "u"];

  for (var i = 0; i < vowels.length; i++) {
    if (aeiou.toLowerCase() == vowels[i]) {
      isVowel = true;
      break;
    }
  }
}

if (isVowel) {
  document.write(aeiou + " is a vowel.");
} else {
  document.write(aeiou + " is not a vowel.");
}

/////////////////////////chp 9 to 11////////////
// ////<--- question 1--->/////

// var cityname = prompt("write your city name?",);
// if(cityname.toLocaleLowerCase()---"karachi")
// {
// console.log("welcome to city of lights");}
// else{
//  console.log("welcome to" + cityname);
// }

// <----question 2---->

var gender = prompt("write gender?" ,);
if(gender==="male")

alert("good morning sir");
else(gender==="female")

alert("good morning mam")

///<--question 3--->////

var color= prompt("red",);

if(color==="red")
{
alert("must stop");}
var color =prompt("yellow",);
if(color==="yellow")
{
alert("ready to move")}

var color =prompt("green",);
if(color==="green")
{
alert(" move now")}

/////<--- question 4--->/////

// Ask user for remaining fuel in car
let remainingFuel = prompt("Enter the remaining fuel in your car (in litres):");

// Check if fuel is less than 0.25 litres
if (remainingFuel < 0.25) {
  alert("Please refill the fuel in your car.");
}

////<--- question 5--->/////

 var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}

 var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}

var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
 var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
 var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
 if (true){
alert("True");
}
if (false){
alert("False");
}
if("car" < "cat"){
    alert("car is smaller than cat");
    }


// ///<--- question 6--->/////

 var subject1 = prompt("Enter marks obtained in subject 1");
var subject2 = prompt("Enter marks obtained in subject 2");
var subject3 = prompt("Enter marks obtained in subject 3");
var totalMarks = (300);

// Converting the input strings to numbers using the Number() function
var marks1 = Number(subject1);
var marks2 = Number(subject2);
var marks3 = Number(subject3);
var total = Number(totalMarks);

// Calculating the percentage
var percentage = (marks1 + marks2 + marks3) / total * 100;

// Rounding off the percentage to 2 decimal places
percentage = percentage.toFixed(2);

// Calculating the grade and remarks based on percentage
var grade, remarks;

if (percentage >= 80) {
  grade = "A one";
  remarks = "Excellent";
} else if (percentage >= 70) {
  grade = "A";
  remarks = "Good";
} else if (percentage >= 60) {
  grade = "B";
  remarks = "You need to improve";
} else if (percentage >= 50) {
  grade = "Fail";
  remarks = "Sorry";
} else {
  grade = "N/A";
  remarks = "No remarks";
}

// Displaying the result on the page
document.write("<h1>Marks Sheet</h1>");
document.write("Total marks: " + total + "<br>");
document.write("Marks obtained: " + (marks1 + marks2 + marks3) + "<br>");
document.write("Percentage: " + percentage + "%<br>");
document.write("Grade: " + grade + "<br>");
document.write("Remarks: " + remarks);





// ///<--- question 7--->/////

var secretNumber = 7;
var guess = prompt("Guess the secret number (between 1 and 10):");

if (guess == secretNumber) {
  alert("Bingo! Correct answer.");
} else if (guess == secretNumber - 1 || guess == secretNumber + 1) {
  alert("Close enough to the correct answer.");
} else {
  alert("Sorry, try again.");
}

// ///<--- question 8--->/////
// Take input from user
const num = parseInt(prompt("Enter a number: "));

// Check if number is divisible by 3
if (num % 3 === 0) {
  console.log(`${num} is divisible by 3`);
} else {
  console.log(`${num} is not divisible by 3`);

}

// ///<--- question 9--->/////

// var num=prompt("enter your favorite no");
// if(num %2===0){
//     console.log("this is even no");
// }
// else{
//     console.log("this is odd no");
// }



// ///<--- question 10-->/////

let temperature = prompt("Enter the temperature in Celsius:");
temperature = parseInt(temperature);

if (temperature > 40) {
  document.write("It is too hot outside.");
} else if (temperature > 30) {
  document.write("The Weather today is Normal.");
} else if (temperature > 20) {
  document.write("Todays Weather is cool.");
} else if (temperature > 10) {
  document.write("OMG! Todays weather is so Cool.");
} else {
  document.write("Enter a valid temperature.");
}


// ///<--- question 11--->/////

let num3 = parseInt(prompt("Enter the first number:"));
let num4 = parseInt(prompt("Enter the second number:"));
let operation = prompt("Enter the operation (+, -, *, /, %):");

if (operation === "+") {
  let result = num3 + num4;
  console.log(`${num3} + ${num4} = ${result}`);
} else if (operation === "-") {
  let result = num3 - num4;
  console.log(`${num3} - ${num4} = ${result}`);
} else if (operation === "*") {
  let result = num3 * num4;
  console.log(`${num3} * ${num4} = ${result}`);
} else if (operation === "/") {
  let result = num3 / num4;
  console.log(`${num3} / ${num4} = ${result}`);
} else if (operation === "%") {
  let result = num3 % num4;
  console.log(`${num3} % ${num4} = ${result}`);
} else {
  console.log("Invalid operation");
}
