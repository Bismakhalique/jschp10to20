// //////////// Ques 1 nd 2//////////////                                                                                                                                                                                          const myArray = [[]];
// myArray[0].push(1);
// myArray[0].push(2);
// const myMatrix = [
//     [0, 1, 2, 3],
//     [1, 0, 1, 2],
//     [2, 1, 0, 1]
//   ];
//   //////////////////// CHECKING THE VALUES///////////////////////////
//   document.write(myMatrix[2][3]); // prints the element in row 2, column 3 (which is 2)
//   document.write("<br>");
//   document.write( myMatrix[0][2]); // prints the element in row 0, column 2 (which is 2)
//   document.write("<br>");
//   myMatrix[0][2] = 5; // change the element in row 0, column 2 to 5
//   document.write( myMatrix[0][2]); // prints the element in row 0, column 2 (which is now 5)
//   //////////// Ques 3//////////////                                                                                                                                         var i=1;
// for (i = 1; i <= 10; i++) {
//     document.write(i);
//     document.write("<br>");

//   }
//   //////////// Ques 4//////////////      
// const strNum = prompt("Enter the number for which you want to print the multiplication table: ");
// const strLength = prompt("Enter the length of the table: ");

// const num = Number(strNum);
// const length = Number(strLength);

// document.write(`Multiplication table for ${num}:<br>`);

// for(let i = 1; i <= length; i++){
//   document.write(`${num} x ${i} = ${num * i}<br>`);
// }
// //////////// Ques 5//////////////      
// const fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// console.log(fruits.length);
// for(let i = 0; i < fruits.length; i++){
//     document.write(fruits[i] + "<br>");
//   }
//   document.write("<br>");
// for(let i = 0; i < fruits.length; i++){
//   document.write("Element at index " + i + " is " + fruits[i] + "<br>");
// }
// //////////// Ques 6//////////////      
// // Counting: 1 to 15
// document.write("<h3>Counting:</h3>");
// for (let i = 1; i <= 15; i++) {
//   document.write(i + ", ");
// }

// // Reverse counting: 10 to 1
// document.write("<h3>Reverse counting:</h3>");
// for (let i = 10; i >= 1; i--) {
//   document.write(i + ", ");
// }

// // Even numbers: 0 to 20
// document.write("<h3>Even:</h3>");
// for (let i = 0; i <= 20; i += 2) {
//   document.write(i + ", ");
// }

// // Odd numbers: 1 to 19
// document.write("<h3>Odd:</h3>");
// for (let i = 1; i <= 19; i += 2) {
//   document.write(i + ", ");
// }

// // Series: 2k to 20k
// document.write("<h3>Series:</h3>");
// for (let i = 2; i <= 20; i += 2) {
//   document.write(i + "k, ");
//   //////////// Ques 7//////////////      
// const A = ["cake", "apple pie", "cookie", "chips", "patties"];

// const userInput = prompt("Welcome to Cookie Corner. What you want to order:");

// let found = false;
// for (let i = 0; i < A.length; i++) {
//   if (A[i] === userInput) {
//     found = true;
//     break;
//   }
// }

// if (found) {
//   alert(userInput + " is available in the list at index " + A.indexOf(userInput));
// } else {
//   alert("We are Sorry, " + userInput + " is not available in our bakery");
// }
// //////////// Ques 8//////////////      
// const A = [24, 53, 78, 91, 12];

// document.write("The array is: " + A + "<br>");
// let largest = A[0];
// for (let i = 1; i < A.length; i++) {
//   if (A[i] > largest) {
//     largest = A[i];
//   }
// }
// document.write("<br>");
// document.write("The largest number in the array is " + largest);
// //////////// Ques 9//////////////      
// const A = [24, 53, 78, 91, 12];

// document.write("The array is: " + A + ",");

// let smallest = A[0];

// for (let i = 1; i < A.length; i++) {
//   if (A[i] < smallest) {
//     smallest = A[i];
//   }
// }
// document.write("<br>");
// document.write("The smallest number in the array is " + smallest);
//////////// Ques 10//////////////      
for (let i = 1; i <= 20; i++) {
    document.write(i * 5 + ",");
  }