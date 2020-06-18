// CHAPTER # 21 TO 25

//Task 1
/*1. Write a program that takes two user inputs for first and last name using prompt and
merge them in a new variable titled fullName. Greet the user using his full name.*/

var fname = prompt("Enter First Name");
var lname = prompt("Enter Last Name");
var fullName = fname + " " + lname;
alert("Good Morning! " + fullName);

//Task 2
/*2. Write a program to take a user input about his favorite mobile phone model.
Find and display the length of user input in your browser*/

var mobileModel = prompt("Enter Your Favorite Mobile Phone Model");
document.write("My favorite phone is: " + mobileModel + "<br>");
var mobileLength = mobileModel.length
document.write("Length of String: " + mobileLength);

//Task 3
/*3. Write a program to find the index of letter “n” in the word “Pakistani” and display the
result in your browser. */

var name = 'Pakistani';
document.write("String: " + name + "<br>Index of 'n': " + name.indexOf('n'));

//Task 4
/*4. Write a program to find the last index of letter “l” in the word “Hello World” and display
the result in your browser */

var greet = 'Hello World';
document.write("String: " + greet + "<br>Last Index of 'l': " + greet.lastIndexOf('l'));

//Task 5
/*5. Write a program to find the character at 3rd index in the word “Pakistani” and display the
result in your browser. */

var name = 'Pakistani';
document.write("String: " + name + "<br>Character at Index 3: " + name.charAt(3));

//Task 6
//6.Repeat Q1 using string concat() method.

var fname = prompt("Enter First Name");
var lname = prompt("Enter Last Name");
var fullName = fname.concat(" ", lname);
alert("Good Morning! " + fullName);

//Task 7
/*7. Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display
the result in your browser*/

var city = 'Hyderabad';
document.write("City: " + city);
var cityHyder = city.slice(0, 5);
var cityIslam = cityHyder.replace(cityHyder, 'Islam');
var abad = city.slice(5);
var cityReplace = cityIslam + abad
document.write("<br>After Replacement: " + cityReplace);

//Task 8
/*8.Write a program to replace all occurrences of “and” in the string with “&” and display the
result in your browser. var message = “Ali and Sami are best friends. They play cricket and 
football together.”; */

var message = "Ali and Sami are best friends.They play cricket and football together.";
var replaceMessage = message.replace(/and/g, '&');
document.write(replaceMessage)

//Task 9
/*9. Write a program that converts a string “472” to a number 472.
Display the values & types in your browser. */

var number = 472;
var convertNumber = number.toString();
var a = typeof(convertNumber);
document.write("Value: " + number + "<br>Type: " + a);
var string = "472";
var convertString = parseInt(string);
var b = typeof(convertString);
document.write("<br>Value: " + string + "<br>Type: " + b);

//Task 10
/*10.Write a program that takes user input. Convert and show the input in capital letters. */

var userInput = prompt("Enter Any Dry Fruits Name");
document.write("User Input: " + userInput);
var upper = userInput.toUpperCase();
document.write("<br>Upper Case: " + upper);

//Task 11
/*11.Write a program that takes user input. Convert and show the input in title case */

var userInput = prompt("Enter Your Favorite Programming Language");
document.write("User Input: " + userInput)
var firstLetter = userInput.slice(0, 1);
var otherLetters = userInput.slice(1);
var ProgrammingLanguage = firstLetter.toUpperCase() + otherLetters
document.write("<br>Title Case: " + ProgrammingLanguage);

//Task 12
/*12. Write a program that converts the variable num to string.
var num = 35.36 ; Remove the dot to display “3536” display in your browser */

var num = 35.36;
document.write("Number: " + num + "<br>");
var string = num.toString();
var stringStart = string.slice(0, 2);
var stringEnd = string.slice(3);
var strings = stringStart + stringEnd;
document.write("Result: " + strings);

//Task 13
/*13. Write a program to take user input and store username in a variable.
If the username contains any special symbol among [@ . , !], prompt the user to enter a valid
username.
For character codes of [@ . , !]*/

var userInput = prompt("Enter User Name");
var atTheRate = '@';
var fullStop = '.';
var comma = ',';
var exclaminationMark = '!';
for (var i = 0; i < userInput.length; i++) {
    var check = userInput.charAt(i)
    if (check == atTheRate || check == fullStop || check == comma || check == exclaminationMark) {
        alert("Enter a valid User Name");

    }

}

//Task 14
/*14. You have an array 
A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
Write a program to enable “search by user input” in an 
array. After searching, prompt the user whether the given 
item is found in the list or not.
Note: Perform case insensitive search. Whether the user 
enters cookie, Cookie, COOKIE or coOkIE, program  should inform about its availability. Example: */

var A = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
var userInput = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
var changeCase = userInput.toLowerCase();
switch (changeCase) {
    case 'cake':
        document.write("cake is <b>available</b> at index 0 in our bakery<br>");
        break;
    case 'apple pie':
        document.write("apple pie is <b>available</b> at index 1 in our bakery<br>");
        break;
    case 'cookie':
        document.write("cookie is <b>available</b> at index 2 in our bakery<br>");
        break;
    case 'chips':
        document.write("chips is <b>available</b> at index 3 in our bakery<br>");
        break;
    case 'patties':
        document.write("patties is <b>available</b> at index 4 in our bakery<br>");
        break;
    default:
        document.write(changeCase + " is not <b>available</b> in our bakery<br>");
        break;
}

//Task 15
/*15. Write a program to take password as an input from user.
The password must qualify these requirements: 
a. It should contain alphabets and numbers 
b. It should not start with a number
c. It must at least 6 characters long 
If the password does not meet above requirements,prompt the user to enter a valid password. 
For character codes of a-z, A-Z & 0-9, refer to ASCII table at the end of this document.*/

var password = prompt("Enter Your Password");
var passwordLength = password.length;
var smallLetters = /[a-z]/g;
var capitalLetters = /[A-Z]/g;
var numbers = /[0-9]/g;

if ((password.match(smallLetters) || password.match(capitalLetters)) && password.match(numbers)) {
    var notDigit = password.charAt(0);
    if (notDigit != 0 && notDigit != 1 && notDigit != 2 && notDigit != 3 && notDigit != 4 && notDigit != 5 && notDigit != 6 && notDigit != 7 && notDigit != 8 && notDigit != 9) {
        if (passwordLength > 5) {
            document.write("Enter Password: " + password);
            document.write("<br>Password Created");
        } else {
            document.write("Enter Password: " + password);
            document.write("<br>Minimum password length is 6");
            document.write("<br>Please enter a Valid Password");

        }
    } else {
        document.write("Enter Password: " + password);
        document.write("<br>Password can not begin with a number");
        document.write("<br>Please enter a Valid Password");
    }
} else {
    document.write("Enter Password: " + password);
    document.write("<br>Password should contain alphabets and numbers");
    document.write("<br>Please enter a Valid Password");

}

//Task 16
/*16. Write a program to convert the following string to an array using string split method. 
var university = “University of Karachi”;
Display the elements of array in your browser.  */

var university = 'University of Karachi';
let char = university.split('');
for (var i = 0; i < 21; i++) {
    document.write(char[i] + "<br>");

}
let arr = university.split();
console.log(arr);

//Task 17
/*17. Write a program to display the last character of a user input. */

var userInput = prompt("Enter any country name");
let firstCapital = userInput.slice(0, 1);
let otherLetters = userInput.slice(1);
let join = firstCapital.toUpperCase() + otherLetters;
document.write("User Input: " + join);
let lastCharcter = userInput.charAt(userInput.length - 1);
document.write("<br>Last Charcter of input: " + lastCharcter);

//Task 18
/*18. You have a string “The quick brown fox jumps over the lazy dog”.
Write a program to count number of occurrences of word “the” in given string. */

let string = 'The quick brown fox jumps over the lazy dog';
document.write("Text: " + string);
let lowerString = string.toLowerCase();
let countVariable = (lowerString.match(/the/g)).length;
document.write('<br>There are ' + countVariable + " occurrences of word 'the' ");

//CHAPTER # 26 TO 30

//Task 1
/*1.Write a program that takes a positive integer from user & display the following in your browser. 
a. number
b. round off value of the number 
c. floor value of the number
d. ceil value of the number */

let number = +(prompt("Enter any postive integer"));
document.write("number: " + number + "<br>");
let round = Math.round(number);
document.write("round off value of: " + round + "<br>");
let floor = Math.floor(number);
document.write("floor value of: " + floor + "<br>");
let ceil = Math.ceil(number);
document.write("ceil value of: " + ceil);

//Task 2
/*2. Write a program that takes a negative floating point number from user & display the
following in your browser. 
a. number
b. round off value of the number
c. floor value of the number
d. ceil value of the number */

let number = +(prompt("Enter any negative floating point"));
document.write("number: " + number + "<br>");
let round = Math.round(number);
document.write("round off value of: " + round + "<br>");
let floor = Math.floor(number);
document.write("floor value of: " + floor + "<br>");
let ceil = Math.ceil(number);
document.write("ceil value of: " + ceil);

//Task 3
/*3. Write a program that displays the absolute value of a number. 
E.g. absolute value of -4 is 4 & absolute value of 5 is 5 */

let number = +(prompt("Enter any value to find absolute value"));
let absolute = Math.abs(number);
document.write("absolute value of " + number + " is " + absolute);

//Task 4
/*4. Write a program that simulates a dice using random() method of JS Math class.
Display the value of dice in your browser.: */

let dice = (Math.random()) * 7
let value = Math.floor(dice)
document.write('random dice value: ' + value);

//Task 5
/*5. Write a program that simulates a coin toss using random() method of JS Math class.
Display the value of coin in your browser */

let tail = 1;
let head = 2;
let numberGenerate = (Math.random()) * 3;
let coinToss = Math.floor(numberGenerate);
if (coinToss == 1) {
    document.write(tail + "<br>random coin value: Tail");
} else if (coinToss == 2) {
    document.write(head + "<br>random coin value: Head");
} else {
    document.write("Coin has vanished in System ☺");
}

//Task 6
/*6. Write a program that shows a random number between 1 and 100 in your browser.  */

let number = (Math.random()) * 101;
let floor = Math.floor(number);
document.write("Random number between 1 and 100: " + floor);

//Task 7
/*. Write a program that asks the user about his weight. Parse the user input and display his
weight in your browser.Possible user
inputs can be: 
a. 50 
b. 50kgs 
c. 50.2kgs 
d. 50.2kilograms  */

let weight = prompt("Enter your weight in kilograms");
document.write("The weight of user is: " + weight);

//Task 8
/*8. Write a program that stores a random secret number from 1 to 10 in a variable.
Ask the user to input a number between 1 and 10. If the user input equals the secret 
number, congratulate the user.  */

let secretNumber = 7;
for (var i = 1; i > 0; i++) {
    let userGuess = +(prompt("Enter a number from 1 to 10"));
    if (userGuess === secretNumber) {
        alert("Congratulation");
        break;
    } else {
        alert("Try Again");
    }
}

//CHAPTER # 31 TO 34

//Task 1
/*1. Write a program that displays current date and time in your browser.  */

let date = new Date();
document.write(date);

//Task 2
/*2. Write a program that alerts the current month in words. For example December. */

let monthsNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
let date = new Date();
let currentMonth = date.getMonth();
alert("Current Month: " + monthsNames[currentMonth]);

//Task 3
/*3. Write a program that alerts the first 3 letters of the current day,
for example if today is Sunday then alert will show Sun.*/

let dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat'];
let date = new Date();
let today = date.getDay();
alert("Today is " + dayNames[today]);

//Task 4
/*4. Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today. */

let dayNames = ['Sunday', 'Monday', 'Tueday', 'Wednesday', 'Thrday', 'Friday', 'Satday'];
let date = new Date();
let today = date.getDay();
if (dayNames[today] == 'Sunday') {
    alert("It's Fun Day");
}

//Task 5
/*5. Write a program that shows the message “First fifteen days of the month” if the date is
less than 16th of the month else shows “Last days of the month”. */

let date = new Date();
let day = date.getDate();
if (day < 16) {
    alert("First fifteen days of the month");
} else {
    alert("Last days of the month");

}

//Task 6
/*6. Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it
to a variable that hasn't been declared beforehand.
Use any variable you like to represent the Date object */

let todayDate = new Date();
document.write("Current Date: " + todayDate);
let miliseconds = todayDate.getTime();
document.write("<br>Elasped miliseconds since January 1, 1970: " + miliseconds);
let minutes = miliseconds / (60 * 60);
document.write("<br>Elasped minutes since January 1, 1970: " + minutes);

//Task 7
/*7. Write a program that tests whether it's before noon and
alert “Its AM” else “its PM”. */

let todayDate = new Date();
let time = todayDate.getHours();
if (time >= 0 && time < 12) {
    alert("It's AM");

} else if (time >= 12 && time < 24) {
    alert("It's PM");
}

//Task 8
/*8.Write a program that creates a Date object for the last day of the last month of 2020 and
assigns it to variable named laterDate. */

let date = new Date(2020, 11, 31);
document.write("Later date: " + date);

//Task 9
/*9. Create a date object of the starting date of this Ramadan and alert the number of days
past since 1st Ramadan? 
Note: 1st Ramadan was on June 18, 2015 */

let firstRamdan = new Date(2015, 6, 12);
let date = new Date(2015, 11, 30);
let miliseconds = date - firstRamdan;
let milisecondsConvertIntoDays = miliseconds / 8.64e+7;
alert(milisecondsConvertIntoDays + " days have passed since 1st Ramdan, 2015");

//Task 10
/*10. Write a program that displays in your browser the seconds that elapsed between the
reference date and the  beginning of 2015.  */

let referenceDate = new Date(2015, 11, 5, 22, 50, 16);
document.write("On Refernce Date: " + referenceDate);
let beginningDate = new Date(2015, 0, 1, 0, 0, 0);
let miliseconds = referenceDate - beginningDate;
let seconds = miliseconds / (60000);
let ceilSeconds = Math.ceil(seconds);
document.write("<br>" + ceilSeconds + " seconds had passed since beginning of 2015");

//Task 11
/*11.Create a Date object for the current date and time.Extract the hours, reset the date
object an hour ahead and finally display the date object in your browser. */

let currentDate = new Date();
let resetHour = new Date();
resetHour.setHours(2);
document.write("Current Date: " + resetHour);
document.write("<br>1 hour ago, it was: " + currentDate);

//Task 12
/*12. Write a program that creates a date object and show the date in an alert box that is
reset to 100 years back?  */

let currentDate = new Date();
let resetYears = new Date();
resetYears.setFullYear(1920);
alert("Current Date: " + currentDate + "\n100 years back, it was: " + resetYears);

//Task 13
/*13. Write a program to ask the user about his age. Calculate and show his birth year in
your browser. */

let age = +(prompt("Enter Your Age"));
let year = new Date();
let currentYear = year.getFullYear();
let birthYear = currentYear - age;
document.write('Your Age is: ' + age + "<br>Your Birth Year is: " + birthYear);

//Task 14
/*4. Write a program to generate your K-Electric bill in your browser.
All the amounts should be rounded off to 2 decimal places. Display the following fields: 
a. Customer Name
b. Current Month
c. Number of units
d. Charges per unit 
e. Net Amount Payable (within Due Date) 
f. Late Payment Surcharge 
g. Gross Amount Payable (after Due Date) */

let name = prompt("Enter Your Name");
let firstCapital = name.slice(0, 1);
let otherLetters = name.slice(1);
var fullname = firstCapital.toUpperCase() + otherLetters;
let month = prompt("Enter Current Month Name");
let startLetter = month.slice(0, 1);
let othersAlphabate = month.slice(1);
var MonthName = startLetter.toUpperCase() + othersAlphabate;
let numberOfUnits = +(prompt("Enter Number Of Units"));
let ChargesPerUnit = 16;
let netAmountPayable = numberOfUnits * ChargesPerUnit;
let LatePaymentSurcharge = 350;
let GrossAmountPayable = netAmountPayable + LatePaymentSurcharge;
document.write("<h1>K-Electric Bill</h1>");
document.write("Customer Name: <b>" + fullname + "</b><br>Month: <b>" + MonthName + "</b><br>Number of Units: <b>" + numberOfUnits + "</b><br>Charge Per Unit: <b>" + ChargesPerUnit + "</b>");
document.write("<br><br>Net Amount Payable (within Due Date): <b>" + netAmountPayable + "</b><br>Late Payment Surcharge: <b>" + LatePaymentSurcharge + "</b>");
document.write("<br>Gross Amount Payable (after Due Date): <b>" + GrossAmountPayable + "</b>")

//CHAPTER # 35 TO 38

//Task 1
/*1. Write a function that displays current date & time in your browser. */

let currentDate = new Date();
document.write(currentDate);

//Task 2
/*2. Write a function that takes first & last name and then it greets the user using his full name */

let first = prompt("Enter First Name");
let firstCapital = first.slice(0, 1);
let otherLetters = first.slice(1);
var firstName = firstCapital.toUpperCase() + otherLetters;
let last = prompt("Enter Last Name");
let firstAlphabate = last.slice(0, 1);
let othersAlphabate = last.slice(1);
var LastName = firstAlphabate.toUpperCase() + othersAlphabate;
let fullName = firstName.concat(" " + LastName);
alert("Good Moring " + fullName);

//Task 3
/*3. Write a function that adds two numbers (input by user)
and returns the sum of two numbers.*/

var num1 = +(prompt("Enter first number"));
var num2 = +(prompt("Enter second number"));

function add(a, b) {
    return a + b;
}
document.write("The sum of two numbers: " + add(num1, num2));

//Task 4
/*4. Calculator:  
Write a function that takes three arguments num1, num2 & operator & compute the desired
operation. Return and show the desired result in your browser. */

function Calculator(a, b, c) {
    if (b == '+') {
        return a + c;
    } else if (b == '-') {
        return a - c;
    } else if (b == '*') {
        return a * c;
    } else if (b == '/') {
        return a / c;
    } else if (b == '%') {
        return a % c;
    }
}

let num1 = +(prompt("Enter First Number"));
let num2 = +(prompt("Enter Second Number"));
let operator = prompt("Select any operator\n+ - * / %");

let ans = Calculator(num1, operator, num2);
document.write("The answer is: " + ans);

//Task 5
//5. Write a function that squares its argument.

function squares(a) {
    return a * a;
}
let num = +(prompt("Enter any number to find its square"));
let square = squares(num);
document.write("The square of " + num + " is: " + square);

//Task 6
/*6. Write a function that computes factorial of a number */

function factorial(n) {

    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);

}

let num = +(prompt("Enter any number to find its Factorial"));
let facNum = factorial(num);
document.write("The Factorial of " + num + " is: " + facNum);

//Task 7
/*7. Write a function that take start and end number as inputs & display counting in your browser. */

function counting(a, b) {
    for (var i = a; i <= b; i++) {
        document.write(i + "<br>");
    }
}
let StartNum = +(prompt("Enter Start Number"));
let EndNum = +(prompt("Enter End Number"));
counting(StartNum, EndNum);

//Task 8
/*8. Write a nested function that computes hypotenuse of a right angle triangle.  
Hypotenuse2 = Base2 + Perpendicular2 Take base and perpendicular as inputs. 
Outer function : calculateHypotenuse() 
Inner function: calculateSquare()  */

function calculateHypotenuse(a, b) {
    function calculateSquare(a, b) {
        var PerpendicularSquare = a * a;
        var BaseSquare = b * b;
        var squareValues = PerpendicularSquare + BaseSquare;
        var sqrt = Math.sqrt(squareValues);
        return sqrt.toFixed(2);
    }
    return calculateSquare(a, b);
}

let base = +(prompt("Enter Base Value of Right Angle Triangle"));
let perpendicular = +(prompt("Enter Perpendicular Value of Right Angle Triangle"));
document.write("The value of Hypotenuse of a Right Angle Triangle " + calculateHypotenuse(perpendicular, base));

//Task 9
/*9. Write a function that calculates the area of a rectangle. 
A = width * height
Pass width and height in following manner: 
i. Arguments as value 
ii. Arguments as variables */

function CalculateArea(a, b) {
    return a * b
}
let height = 45;
document.write("The area of a rectangle is: " + CalculateArea(5, height));

//Task 10
/* 10. Write a JavaScript function that checks whether a passed string is palindrome or not?   
A palindrome is word, phrase, or sequence that reads the same backward as  forward, e.g., madam. */

function palindrome(str) {
    let a = str.split('');
    let b = a.reverse();
    let c = b.join('');
    if (str == c) {
        return alert('Yes it is palindrome word');
    } else {
        return alert("No it's not palindrome word");
    }
}
let word = prompt("Enter any word to check it is palindrome or not?");
palindrome(word);

//Task 11
/*11. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of
the string in upper case.  
EXAMPLE STRING: 'the quick brown fox'  
EXPECTED OUTPUT :'The Quick Brown Fox */

function upperCase(str) {
    var array = str.split(' ');
    var Newarr = [];

    for (var i = 0; i < array.length; i++) {
        Newarr.push(array[i].charAt(0).toUpperCase() + array[i].slice(1));
    }
    let upperValues = Newarr.join(' ');
    return alert(upperValues);
}
let sentence = prompt("Enter any sentence");
upperCase(sentence);

//Task 12
/*12. Write a JavaScript function that accepts a string as a
parameter and find the longest word within the string.  
EXAMPLE STRING: 'Web Development Tutorial'  
EXPECTED OUTPUT :'Development'  */

function LongWord(str) {
    let array1 = str.match(/\w[a-z]{0,}/gi);
    let result = array1[0];

    for (var i = 0; i < array1.length; i++) {
        if (result.length <= array1[i].length) {
            result = array1[i].charAt(0).toUpperCase() + array1[i].slice(1);
        }
    }
    return result;
}
let sentence = prompt("Enter any sentence");
let long = LongWord(sentence);
alert("The longest Word is: " + long);

//Task 13
/*13. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the
number of occurrences of the specified letter within the string.  
Sample arguments : 'JSResourceS.com', 'o' */

function count(a, b) {
    let countVariable = 0
    let lowerString = a.toLowerCase();
    for (var i = 0; i < lowerString.length; i++) {
        if (b == lowerString.charAt(i)) {
            countVariable += 1;
        }

    }
    return document.write('There are ' + countVariable + " occurrences of word " + b + "<br>Text: " + a);
}
let string = prompt("Enter any sentence");
let letter = prompt("Enter any letter to find in your sentence");
count(string, letter);

//Task 14
/*14. The Geometrizer 
Create 2 functions that calculate properties of a circle, using 
the definitions here. Create a function called calcCircumference:
• Pass the radius to the function.
• Calculate the circumference based on the radius, and output "The circumference is NN".
Create a function called calcArea:
• Pass the radius to the function.
• Calculate the area based on the radius, and output "The area 
is NN". */

function calcCircumference(r) {
    let circumferenceOfCircle = 2 * Math.PI * r;
    let twoDecimal = circumferenceOfCircle.toFixed(2)
    return document.write("The Circumference is: " + twoDecimal);
}

function calcArea(r) {
    let AreaOfCircle = Math.PI * r * r;
    let twoDecimal = AreaOfCircle.toFixed(2)
    return document.write("<br>The Area is: " + twoDecimal);
}

let radius = +(prompt("Enter Radius Value"));
calcCircumference(radius);
calcArea(radius);