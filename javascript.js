/******************************************************************************
WELCOME TO YOUR FIRST JAVASCRIPT BASIC ASSIGNMENT!

All the assignment instructions are commented out so that you can write your 
code in between them. Remember to read the instructions CAREFULLY, write short 
comments for your code, and feel free to ask for help if you're stuck.

GOOD LUCK!
******************************************************************************/

/******************************************************************************
ASSIGNMENT 1

Your first task will be to link this javascript file to the index.html file
using one of the methods I showed in the first lecture.

<-- Locate the index.html file in the file browser and link it to this file, 
javascript.js
******************************************************************************/
welcome = "Welcome on the page!";
console.log(welcome);
/****************************************************************************** 
ASSIGNMENT 2

Last lecture I showed you how to make variables that can hold values of the 
various data types. Make some variables of the following datatypes: 
String, number, boolean, array
You can choose what the actual content is.
Try to use both the let and const keywords
******************************************************************************/
//your code here

//String:
const name = "Gosia";
console.log(name);

// Number:
let age = 35;
console.log(age);

// Boolean:
const userIsBanned = true;
console.log(userIsBanned);

//Array:

const userActivity = [
  "Reading Books",
  "Hiking",
  "Jogging",
  "Skiing",
  "Playing Chess",
];
console.log(userActivity);
console.log(userActivity[4]);

//Datatypes:

userData = {
  name: "Gosia",
  age: 35,
  userActivity: [
    "Reading Books",
    "Hiking",
    "Jogging",
    "Skiing",
    "Playing Chess",
  ],
  userIsBanned: true,
};
console.log(userData.name);
console.log(userData.age);
console.log(userData.userActivity[1]);
console.log(userData.userIsBanned);

/****************************************************************************** 
ASSIGNMENT 3

Try out a few of the operators we looked at (+, -, /, *)
as well as a few of the shorthand operators (++, --, +=, -=)
******************************************************************************/

//your code here
x = 10;
y = 5;
console.log(x * y);

unknown = x / y;
console.log(unknown);

a = 5;
b = a + 2;
console.log(b - 1);

const number = 5 === 5;
console.log(number);
console.log("4" == 5);

a++;
console.log(a);
c = 11;
c--;
console.log(c);
c += 5;
console.log(c);
c -= 3;
console.log(c);

/****************************************************************************** 
ASSIGNMENT 4

Write an IF/ELSE conditional statement that checks that userName isn't 
empty(""), that the user age is 18+, and that userIsBlocked is false. 

(HINT: Use the && (logical AND) to check all 3 in one IF statement)

If all of these conditions are true, change the userIsLoggedIn variable to true 
and the goToPage variable to "/home" then console.log a welcome message. 

If any of the conditions for logging in are not met, console.log an error 
message.

Try changing the values of the variables to make sure your IF/ELSE conditional
can handle all cases correctly 
******************************************************************************/

let userName = "";
let userAge = 18;
let userIsLoggedIn = false;
let userIsBlocked = false;
let goToPage = "";

//your code here
// Write an IF/ELSE conditional statement that checks that userName isn't
// empty(""), that the user age is 18+, and that userIsBlocked is false.
if (userName !== "" && userAge >= 18 && userIsBlocked === false) {
  console.log("Welcome " + userName);
} else {
  console.log("No access");
}

/******************************************************************************
ASSIGNMENT 5

Make a variable called userTitle and set the content equal to "Mr." if userMale 
is true, or to "Mrs." if userMale is false. Use the TERNARY conditional to do 
this:

const variable = statement ? "this if true" : "this if not true"

Try changing userMale to both true and false and console.log your new variable,
to see that your conditional is working.
******************************************************************************/

const userMale = false;

//your code here
const userTitle = userMale ? "Mr." : "Mrs.";
console.log(userTitle);
