// Chapter no 9_11.pdf--------
document.write("<h1>Chapter no 9_11.pdf----</h1>")
// Ques no 1
document.write("<h3>Ques no 1</h3>")
let city = prompt("Enter city name:");
if (city.toLowerCase() === "karachi") {
    alert("Welcome to the city of lights");
} else {
    alert("Welcome to " + city);
}

// Ques no 2
document.write("<h3>Ques no 2</h3>")
let gender = prompt("Enter Your Gender : ");
if (gender.toLowerCase() === "male") {
    alert("Good Morning Sir ");
}
else if (gender.toLowerCase() === "female") {
    alert("Good Morning Mam");
}
else {
    alert("put a correct gender name");
}

// Ques no 3
document.write("<h3>Ques no 3</h3>")
let signalColor = prompt("Enter the color of the road traffic signal:");
signalColor = signalColor.toLowerCase();
if (signalColor === "red") {
    alert("Must Stop");
} else if (signalColor === "yellow") {
    alert("Ready to Move");
} else if (signalColor === "green") {
    alert("Move Now");
} else {
    alert("Invalid color entered. Please enter Red, Yellow, or Green.");
}

// Ques no 4
document.write("<h3>Ques no 4</h3>")
let remainingFuel = prompt("Enter a remaining fuel in (liters) :");
remainingFuel = parseFloat(remainingFuel);
if (remainingFuel < 0.25) {
    alert("Please refill the fuel in your car");
}
else {
    alert("You have enough fuel");
}

// Ques no 5
document.write("<h3>Ques no 5</h3>")
// a.
var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}
// the answer is true....

// b.
var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}
// the answer is false run nhi hoga yahan condition pehle check ho rahi hai phir increament ho rahi hai isliye condition k time 82 thi value tu false hi rahega...

// c. 
var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}
// condition 1 alert nahi dikh raha kyunki 12 === 13 false hai.
if (c === 13) {
    alert("condition 2 is true");
}
// condition 2 alert dikh raha hai kyunki c ab 13 hai.
if (++c < 14) {
    alert("condition 3 is true");
}
// condition 3 alert nhi dikh raha kyunki 14 < 14 false hai.
if (c === 14) {
    alert("condition 4 is true");
}
// condition 4 alert dikh raha hai kyunki c ab 14 hai.

// d.
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}
// alert mai "the cost equal hoga"...
// e. 
if (true) {
    alert("True");
}
if (false) {
    alert("False");
}
// yahan condition true alert run hoga...

// f.
if ("car" < "cat") {
    alert("car is smaller than cat");
}
// yahan alert execute hoga condition true hai...

// Ques no 6
document.write("<h3>Ques no 6</h3>")
let sub1 = parseInt(prompt("Enter your Sub 1 Marks"));
let sub2 = parseInt(prompt("Enter your Sub 2 Marks"));
let sub3 = parseInt(prompt("Enter your Sub 3 Marks"));
let obtainMarks = sub2 + sub2 + sub3;
let totalMarks = 300;
let percentage = obtainMarks / totalMarks * 100;
let roundedPercentage = Math.round(percentage * 100) / 100;
document.write("<h1> Marks Sheet </h1>");
if (percentage >= 80) {
    document.write("<h3> Total Marks : " + totalMarks + "<br>" + "Marks Obtained : " + obtainMarks + "<br>"
        + "Percentage : " + roundedPercentage + "%" + "<br>" + " Grade : A-One " + "<br>" + " Remarks : Excellent </h3>");
}
else if (percentage >= 70) {
    document.write("Total Marks : " + totalMarks + "<br>" + "Marks Obtained : " + obtainMarks + "<br>" + "Percentage : " + roundedPercentage + "%" + "<br>" + " Grade : A " + "<br>" + " Remarks : Good ");
}
else if (percentage >= 60) {
    document.write("Total Marks : " + totalMarks + "<br>" + "Marks Obtained : " + obtainMarks + "<br>" + "Percentage : " + roundedPercentage + "%" + "<br>" + " Grade : B " + "<br>" + " Remarks : You need to improve ");
}
else if (percentage < 60) {
    document.write("Total Marks : " + totalMarks + "<br>" + "Marks Obtained : " + obtainMarks + "<br>" + "Percentage : " + roundedPercentage + "%" + "<br>" + " Grade : Fail " + "<br>" + " Remarks : Sorry ");
}

// Ques no 7
document.write("<h3>Ques no 7</h3>")
let secretNumber = Math.floor(Math.random() * 10) + 1;
let userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));
if (userGuess === secretNumber) {
    alert("Bingo! Correct answer");
} else if (userGuess + 1 === secretNumber || userGuess - 1 === secretNumber) {
    alert("Close enough to the correct answer ");
} else {
    alert("Sorry, try again. The correct number was " + secretNumber);
}

// Ques no 8
document.write("<h3>Ques no 8</h3>")
let userNum = parseInt(prompt("Enter your number here..."));
if (userNum % 3 === 0) {
    alert("Given Number is divisible by 3..");
}
else {
    alert("number is not divisible by 3 ");
}

// Ques no 9
document.write("<h3>Ques no 9</h3>")
let num = parseInt(prompt("Enter any number .."));
if (num % 2 === 0) {
    alert("The Given Number is Even");
}
else if (num % 2 === 1) {
    alert("The Given Number is Odd");
}
else {
    alert("Invalid input. Please enter a valid number.");
}

// Ques no 10
document.write("<h3>Ques no 10</h3>")
let temperature = parseFloat(prompt("Enter the temperature:"));
if (temperature > 40) {
    alert("It is too hot outside.");
}
else if (temperature > 30) {
    alert("The Weather today is Normal.");
}
else if (temperature > 20) {
    alert("Today’s Weather is cool.");
} else if (temperature > 10) {
    alert("OMG! Today’s weather is so Cool.");
}
else {
    alert("It's very cold outside.");
}

// Ques no 11
document.write("<h3>Ques no 11</h3>")
let firstNum = parseFloat(prompt("Enter First value here for calculation "));
let secondNum = parseFloat(prompt("Enter Second value here for calculation "));
let operation = prompt("Enter the operation (+, -, *, /, %) ");
let result;
if (operation === "+") {
    result = firstNum + secondNum;
}
else if (operation === "-") {
    result = firstNum - secondNum;
}
else if (operation === "*") {
    result = firstNum * secondNum;
}
else if (operation === "/") {
    result = firstNum / secondNum;
}
else if (operation === "%") {
    result = firstNum % secondNum;
}
alert("The calculated result of two numbers are: " + result);


// Chapter no 12_13.pdf-------------------
document.write("<h1>Chapter no 12_13.pdf----</h1>")
// Ques no 1
document.write("<h3>Ques no 1</h3>")
let input = prompt("Enter a character: ");
let asciiCode = input.charCodeAt(0);
if (asciiCode >= 48 && asciiCode <= 57) {
    alert("The given " + input + " is a number.");
} else if (asciiCode >= 65 && asciiCode <= 90) {
    alert("The given " + input + " is an uppercase letter.");
} else if (asciiCode >= 97 && asciiCode <= 122) {
    alert("The given " + input + " is a lowercase letter.");
} else {
    alert("The given input is not a number, uppercase letter, or lowercase letter.");
}

// Ques no 2
document.write("<h3>Ques no 2</h3>")
let int1 = parseInt(prompt("Enter first integer : "));
let int2 = parseInt(prompt("Enter Second integer : "));
let equal = int1 === int2;
let larger;
if (int1 > int2) {
    larger = int1;
}
else if (int2 > int1) {
    larger = int2;
}
else if (int1 === int2) {
    alert("the intergers are Equals : " + int1 === int2)
}
alert("The larger integer is : " + larger);

// Ques no 3
document.write("<h3>Ques no 3</h3>")
let userNumber = parseInt(prompt("Enter a Number here: "));
if (userNumber > 0) {
    alert("The given " + userNumber + " is positive.. ");
}
else if (userNumber < 0) {
    alert("The given " + userNumber + " is Negative.. ");
}
else {
    alert("The given " + userNumber + " is Zero.. ");
}

// Ques no 4
document.write("<h3>Ques no 4</h3>")
let inputChar = prompt("Enter a character for knowing vowel charascters : ");
let lowerChar = inputChar.toLowerCase();
if (lowerChar === 'a' || lowerChar === 'e' || lowerChar === 'i' || lowerChar === 'o' || lowerChar === 'u') {
    alert("The " + inputChar + " character is a vowel.");
} else {
    alert("The " + inputChar + " character is not a vowel.");
}

// Ques no 5
document.write("<h3>Ques no 5</h3>")
let userPass = prompt("Enter your Password");
let pass = "mahrukh";
if (userPass === "") {
    alert("Please Enter your password")
}
else if (userPass === pass) {
    alert("Your Password is Matched!..")
}

else {
    alert("Enter Correct Password plz..")
}

// Ques no 6
document.write("<h3>Ques no 6</h3>")
var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
}
else {
    greeting = "Good evening";
}
alert("hello " + greeting);

// Ques no 7
document.write("<h3>Ques no 7</h3>")
var time = parseInt(prompt("Enter time in 24-hour format (e.g., 1900 for 7pm):"));
if (time >= 0 && time < 1200) {
    alert("Good morning!");
} else if (time >= 1200 && time < 1700) {
    alert("Good afternoon!");
} else if (time >= 1700 && time < 2000) {
    alert("Good evening!");
} else if (time >= 2000 && time <= 2359) {
    alert("Good night!");
} else {
    alert("Invalid input! Please enter a valid time in 24-hour format.");
}


// Chapter no 14_16.pdf-------------------
document.write("<h1>Chapter no 14_16.pdf----</h1>")
// Ques no 1
document.write("<h3>Ques no 1</h3>")
let studentNamesLiteral = [];
// Ques no 2
document.write("<h3>Ques no 2</h3>")
let studentNamesObject = new Array();
// Ques no 3
document.write("<h3>Ques no 3</h3>")
let studentNames = ["Mahrukh", "Manal", "Ounisa"];
// Ques no 4
document.write("<h3>Ques no 4</h3>")
let idNo = [101, 102, 103, 104, 105];
// Ques no 5
document.write("<h3>Ques no 5</h3>")
let quiz = [false, false, true, false];
// Ques no 6
document.write("<h3>Ques no 6</h3>")
let mixArray = [101, false, false, "Mahrukh", "Manal", 102, 103, 104];
// Ques no 7
document.write("<h3>Ques no 7</h3>")
let qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
let qualificationsList = "<h2>Qualifications</h2><ol>";
for (var i = 0; i < qualifications.length; i++) {
    qualificationsList += "<li>" + qualifications[i] + "</li>";
}
qualificationsList += "</ol>";
document.write(qualificationsList);

// Ques no 8
document.write("<h3>Ques no 8</h3>")
let student_Names = ["Michael", "John", "Emily"];
let stuMarks = [320, 420, 350];
document.write("<h2>Students Marks and Percentage:</h2>");

for (let i = 0; i < student_Names.length; i++) {
    let name = student_Names[i];
    let marks = stuMarks[i];
    let _percentage = (marks / 500) * 100;

    document.write("Score of " + name + " is " + marks + " and percentage is " + _percentage.toFixed(2) + "%<br>");
}

// Ques no 9
document.write("<h3>Ques no 9</h3>")
// 1. Initial Colors Array
let colors = ["Red", "Green", "Blue", "Yellow"];
document.write("<h2>Initial Colors:</h2>");
document.write(colors.join(", ") + "<br><br>");

// 2. Add Color to the Beginning
let colorToAddBeginning = prompt("Beginning mein add karne ke liye color batao:");
colors.unshift(colorToAddBeginning);
document.write("<h2>After Adding Color to the Beginning:</h2>");
document.write(colors.join(", ") + "<br><br>");

// 3. Add Color to the End
let colorToAddEnd = prompt("End mein add karne ke liye color batao:");
colors.push(colorToAddEnd);
document.write("<h2>After Adding Color to the End:</h2>");
document.write(colors.join(", ") + "<br><br>");

// 4. Add Two More Colors to the Beginning
colors.unshift("Purple", "Orange");
document.write("<h2>After Adding Two Colors to the Beginning:</h2>");
document.write(colors.join(", ") + "<br><br>");

// 5. Delete the First Color
colors.shift();
document.write("<h2>After Deleting the First Color:</h2>");
document.write(colors.join(", ") + "<br><br>");

// 6. Delete the Last Color
colors.pop();
document.write("<h2>After Deleting the Last Color:</h2>");
document.write(colors.join(", ") + "<br><br>");

// 7. Add Color at User-Defined Index
let indexToAdd = parseInt(prompt("Kaunsi position par color add karna hain (index number batao):"));
let colorToAddAtIndex = prompt("Color ka naam batao:");
colors.splice(indexToAdd, 0, colorToAddAtIndex);
document.write("<h2>After Adding Color at Index " + indexToAdd + ":</h2>");
document.write(colors.join(", ") + "<br><br>");

// 8. Delete Colors at User-Defined Index
let indexToDelete = parseInt(prompt("Kaunsi position se color(s) delete karna hain (index number batao):"));
let numberOfColorsToDelete = parseInt(prompt("Kitne colors delete karne hain (number batao):"));
colors.splice(indexToDelete, numberOfColorsToDelete);
document.write("<h2>After Deleting " + numberOfColorsToDelete + " Color(s) from Index " + indexToDelete + ":</h2>");
document.write(colors.join(", ") + "<br><br>");

// Ques no 10
document.write("<h3>Ques no 10</h3>")
let studentScores = [320, 230, 480, 120];
document.write("Scores of Students : " + studentScores + "<br>");
studentScores.sort((a, b) => a - b);
document.write("Ordered Scores of Students :  " + studentScores.join(", ") + "<br>");

// Ques no 11
document.write("<h3>Ques no 11</h3>")
let cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
let selectedCities = cities.slice(2, 4);
document.write("<h4>Cities List :</h4>");
document.write(cities.join(", ") + "<br>");
document.write("<h4>Selected Cities List:</h4>");
document.write(selectedCities.join(", ") + "<br>");

// Ques no 12
document.write("<h3>Ques no 12</h3>")
let multipleString = ["This", "is", "my", "cat"]
document.write("Array : " + "<br>" + multipleString + "<br>");
let singleString = multipleString.join(" ");
document.write("Single String Array : " + "<br>" + singleString + "<br>");

// Ques no 13
document.write("<h3>Ques no 13</h3>")
let devicesFifo = ["Keyboard", "Mouse", "Printer", "Monitor"];
document.write("Devices : " + "<br>" + devicesFifo + "<br>");
for (let i = 0; i < devicesFifo.length; i++) {
    document.write("Out : ", "<br>", devicesFifo[i], "<br>");
}

// Ques no 14
document.write("<h3>Ques no 14</h3>");
let devicesLifo = ["Keyboard", "Mouse", "Printer", "Monitor"];
document.write("Devices : " + "<br>" + devicesLifo + "<br>");
for (let i = devicesLifo.length - 1; i >= 0; i--) {
    document.write("Out : ", "<br>", devicesLifo[i], "<br>");
}

// Ques no 15
document.write("<h3>Ques no 15</h3>");
let phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write("<select>");
for (let i = 0; i < phoneManufacturers.length; i++) {
    document.write("<option value='" + phoneManufacturers[i] + "'>" + phoneManufacturers[i] + "</option>");
}
document.write("</select>");



// Chapter no 17_20.pdf ------------------
document.write("<h1>Chapter no 17_20.pdf----</h1>")

// Ques no 1
document.write("<h3>Ques no 1</h3>");
let multidimensionalArray = [];
document.write("Empty multidimensional array:", multidimensionalArray);

// Ques no 2
document.write("<h3>Ques no 2</h3>");
let matrix = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
];
for (let i = 0; i < matrix.length; i++) {
    document.write(matrix[i].join(" ") + "<br>");
}

// Ques no 3
document.write("<h3>Ques no 3</h3>");
for (let i = 1; i <= 10; i++) {
    document.write(i + "<br>");
}

// Ques no 4
document.write("<h3>Ques no 4</h3>");
let tableNum = parseInt(prompt("Enter a Number to Show its multiplication table : "));
let tableLength = parseInt(prompt("Enter the length to Show the multiplication table : "));

if (isNaN(tableNum) || isNaN(tableLength) || tableNum <= 0 || tableLength <= 0) {
    document.write("Please enter valid positive numbers for both inputs.");
} else {
    document.write(`<h3>Multiplication Table of ${tableNum}</h3>`);
    for (let i = 1; i <= tableLength; i++) {
        document.write(`${tableNum} x ${i} = ${tableNum * i}<br>`);
    }
}

// Ques no 5
document.write("<h3>Ques no 5</h3>");
let fruits = ["apple", "banana", "mango", "orange", "strawberry"];
for (let i = 0; i < fruits.length; i++) {
    document.write(fruits[i] + "<br>");
}
for (let i = 0; i < fruits.length; i++) {
    document.write(`element at index ${i} is ${fruits[i]}<br>`);
}

// Ques no 6
document.write("<h3>Ques no 6</h3>");
// a. Counting: 1 to 15
document.write("a. Counting: ");
for (let counting = 1; counting <= 15; counting++) {
    document.write(counting);
    if (counting < 15) {
        document.write(", ");
    }
}
document.write("<br>");

// b. Reverse counting: 10 to 1
document.write("b. Reverse counting: ");
for (let Reverse = 10; Reverse >= 1; Reverse--) {
    document.write(Reverse);
    if (Reverse > 1) {
        document.write(", ");
    }
}
document.write("<br>");

// c. Even: 0 to 20 (even numbers)
document.write("c. Even: ");
for (let even = 0; even <= 20; even += 2) {
    document.write(even);
    if (even < 20) {
        document.write(", ");
    }
}
document.write("<br>");

// d. Odd: 1 to 19 (odd numbers)
document.write("d. Odd: ");
for (let odd = 1; odd <= 19; odd += 2) {
    document.write(odd);
    if (odd < 19) {
        document.write(", ");
    }
}
document.write("<br>");

// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
document.write("e. Series: ");
for (let series = 2; series <= 20; series += 2) {
    document.write(series + "k");
    if (series < 20) {
        document.write(", ");
    }
}

// Ques no 7
document.write("<h3>Ques no 7</h3>");
let A = ["cake", "apple pie", "cookie", "chips", "patties"];
let userInput = prompt("Enter a food item to search:");
userInput = userInput.toLowerCase();
let foundIndex = false;
let found = false;
for (let i = 0; i < A.length; i++) {
    if (A[i].toLowerCase() === userInput) {
        found = true;
        foundIndex = i;
        break;
    }
}
if (found) {
    document.write(userInput + " is available at index " + foundIndex + " in the list.");
}
else {
    document.write("We are sorry " + userInput + " is not available in our bakery .");
}

// Ques no 8
document.write("<h3>Ques no 8</h3>");
let L = [24, 53, 78, 91, 12];
let largestNumber = L[0];
let arrayItems = "";
for (let i = 0; i < L.length; i++) {
    arrayItems += L[i];
    if (i < L.length - 1) {
        arrayItems += ", ";
    }
    if (L[i] > largestNumber) {
        largestNumber = L[i];
    }
}
document.write("Array Items: ", arrayItems, "<br>");
document.write("The largest number in the array is: ", largestNumber);

// Ques no 9
document.write("<h3>Ques no 9</h3>");
let S = [24, 53, 78, 91, 12];
let smallestNumber = S[0];
let arraySmallest = "";
for (let i = 0; i < S.length; i++) {
    arraySmallest += S[i];
    if (i < S.length - 1) {
        arraySmallest += ", ";
    }
    if (S[i] < smallestNumber) {
        smallestNumber = S[i];
    }
}
document.write("Array Items: ", arraySmallest, "<br>");
document.write("The smallest number in the array is: ", smallestNumber);

// Ques no 10
document.write("<h3>Ques no 10</h3>");
for (i = 5; i <= 100; i += 5) {
    document.write(i);
    if (i < 100) {
        document.write(", ");
    }
}



// Chapter no 21_25.pdf-------------------
document.write("<h1>Chapter no 21_25.pdf----</h1>")

// Ques no 1
let fName = prompt("Please enter your first name:");
let lName = prompt("Please enter your last name:");
let fulName = `${fName} ${lName}`;
document.write(`Hello, ${fulName}! Welcome!`);

// Ques no 2
document.write("<h3>Ques no 2</h3>");
let mobile = prompt("Tell me your fav mobile model : ");
document.write("Your Favorite Mobile Model is : " + mobile + "<br>" + "Length of String is : " + mobile.length)

// Ques no 3
document.write("<h3>Ques no 3</h3>");
let stringWord = "Pakistani";
document.write("string : " + stringWord + "<br>" + "Index of n : " + stringWord.indexOf('n'));

// Ques no 4
document.write("<h3>Ques no 4</h3>");
let stringLast = "Hello World";
document.write("string : " + stringLast + "<br>" + "Last Index of L : " + stringLast.lastIndexOf('l'));

// Ques no 5
document.write("<h3>Ques no 5</h3>");
let stringChar = "Pakistani";
document.write("string : " + stringChar + "<br>" + " Character at index 3 : " + stringChar.charAt('3'));

// Ques no 6
document.write("<h3>Ques no 6</h3>");
let firstName = prompt("Enter your First name : ");
let lastName = prompt("Enter your Last name : ");
let fullName = firstName + " " + lastName;
alert("Wellcome dear " + fullName);

// Ques no 7
document.write("<h3>Ques no 7</h3>");
let stringCity = "Hyderabad";
document.write("City : " + stringCity + "<br>" + " After Replacement : " + stringCity.replace("Hyder" , "Islam"));

// Ques no 8
document.write("<h3>Ques no 8</h3>");
let stringMsg = "Ali and Sami are best friends. They play cricket and football together.";
let modifiedMsg = stringMsg.replace(/and/g , "&");
document.write("string : " + stringMsg + "<br>" + " Modified Message : " + modifiedMsg );

// Ques no 9
document.write("<h3>Ques no 9</h3>");
let val = "472";
let valNum = parseInt(val);
document.write("Value: " + val + "<br>");
document.write("Type: " + typeof valNum + "<br>");

let value = 472;
let valStr = value.toString();
document.write("Value: " + value + "<br>");
document.write("Type: " + typeof valStr);

// Ques no 10
document.write("<h3>Ques no 10</h3>");
let valUpper = prompt("Enter a word string for converting : ") ;
document.write("User Input : " + valUpper + "<br>" + "Upper Case : " + valUpper.toUpperCase());

// Ques no 11
document.write("<h3>Ques no 11</h3>");
let userTitleCase = prompt("Enter some text to convert in title case : ");
let words = userTitleCase.split(" ");
for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
}
let titleCaseInput = words.join(" ");
document.write("User Input : " + userTitleCase + "<br>");
document.write("Title Case: " + titleCaseInput);

// Ques no 12
document.write("<h3>Ques no 12</h3>");
let numInt = 35.36;
let numStr = numInt.toString();
let convertResult = numStr.replace('.', '');
document.write("Original Number : " + numInt + "<br>");
document.write("Convert Result : " + convertResult);

// Ques no 13
document.write("<h3>Ques no 13</h3>");
let invalidChars = "@.,!";
let username = prompt("Enter a username (no special symbols [@ . , !]):");
let containsInvalidChar = false;
for (let i = 0; i < invalidChars.length; i++) {
    if (username.indexOf(invalidChars[i]) !== -1) {
        containsInvalidChar = true;
        break;
    }
}
if (containsInvalidChar) {
    alert("Invalid username! Please avoid using special symbols [@ . , !].");
} else {
    document.write("Valid username: " + username);
}

// Ques no 14
document.write("<h3>Ques no 14</h3>");
let A2 = ["cake", "apple pie", "cookie", "chips", "patties"];
let userInput2 = prompt("Enter a food item to search:");
userInput2 = userInput2.toLowerCase();
let foundIndex2 = false;
let found2 = false;
for (let i = 0; i < A2.length; i++) {
    if (A2[i].toLowerCase() === userInput2) {
        found2 = true;
        foundIndex2 = i;
        break;
    }
}
if (found2) {
    document.write(userInput2 + " is available at index " + foundIndex2 + " in the list.");
}
else {
    document.write("We are sorry " + userInput2 + " is not available in our bakery .");
}

// Ques no 15
document.write("<h3>Ques no 15</h3>");
let password = prompt("Enter your password:");
if (password.length < 6) {
    password = prompt("Password should be at least 6 characters long. Please enter again:");
} else if (!isNaN(password[0])) {
    password = prompt("Password shouldn't start with a number. Please enter again:");
} else if (!/[a-zA-Z]/.test(password)) {
    password = prompt("Password should contain at least one letter. Please enter again:");
} else if (!/\d/.test(password)) {
    password = prompt("Password should contain at least one number. Please enter again:");
}
alert("Password is valid!");

// Ques no 16
document.write("<h3>Ques no 16</h3>");
let university = "University of Karachi";
let universityArray = university.split("");
for (let i = 0; i < universityArray.length; i++) {
    document.write(universityArray[i] + "<br>");
}

// Ques no 17
document.write("<h3>Ques no 17</h3>");
let userInput3 = prompt("Enter a string:");
let lastCharacter = userInput3.charAt(userInput3.length - 1);
document.write("User Input : " + userInput3 + "<br>" + "The last character of your input is: " + lastCharacter);

// Ques no 18
document.write("<h3>Ques no 18</h3>");
let sentence = "The quick brown fox jumps over the lazy dog";
let lowerCaseSentence = sentence.toLowerCase();
let word = lowerCaseSentence.split(" ");
let count = 0;
for (let i = 0; i < word.length; i++) {
    if (word[i] === "the") {
        count++;
    }
}
document.write("Text : " + sentence + "<br>" + "There are " + count + " occurences  of word 'the' .");

