
    // get the user inputs

    var value1 = prompt('enter first value');
    var value2 = prompt('enter the second value');
    var choice = prompt('Choose your action (a)dd (s)ubtract (m)ultiply (d)ivide') || "a";


// // //option 1
// if (choice == "s") {
//   alert(value1-value2);
// } else if (choice == "m") {
//     alert (value1*value2);
// } else if (choice == "d") {
//   alert (value1/value2);
// } else {
//     alert(value1+value2);
// }

// //option 2
// if (choice == "s") {
//   alert("the difference is " + (value1-value2));
// } else if (choice == "m") {
//     alert("the product is " + (value1*value2));
// } else if (choice == "d") {
//   alert("the quotiant is " + (value1/value2));
// }else {
//     alert("the sum is " + (value1+value2));
// }

// //option 3
// if (choice == "s") {
//   console.log(value1- value2);
// } else if (choice == "m") {
//   console.log(value1* value2);
// } else if (choice == "d") {
//   console.log(value1/ value2);
// }else {
//   console.log(value1+ value2);
// }


//option 4
switch (choice) {
  case "a":
  alert (value1 + value2);
  break;
  case "s":
  alert (value1 - value2);
  break;
  case "m":
  alert (value1 * value2)
  break;
  case "d":
  alert (value1 / value2)
  break;
  default:
    alert (value1 + value2)
}

// var myArray = [0,0]
// console.log(myArray[0]+);
