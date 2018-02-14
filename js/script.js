/*eslint-env browser*/

//// STEP 1
//var someMonth;
//function theMonth() {}
//const currentMonth;
//var summerMonth;
//function myLibraryAFunction() {}


//// STEP 2
//4.75 //numeric literal expression 
//"Welcome!" //string literal expression
//true //Boolean literal expression
//null //null literal expression


//// STEP 3
//var x = 3 * (2 + 1) + 4;
//var y += x;


//// STEP 4
// Camel Casing: 
//var firstName, lastName, address, city, state, zipCode, yourAge, referralSource, mayWeContactYou;

// Hungarian Notation: 
//var strFirstName, strLastName, strAddress, strCity, strState, strZipCode, intYourAge, strReferralSource, blnMayWeContactYou;


//// STEP 5
//var firstName;
//var lastName;
//firstName = 'Sophia';
//lastName = 'Wang';
//
//var address = '1234 College Ave',
//    city = 'San Diego',
//    state = 'CA',
//    zipCode = '92115';
//
//var yourAge = 99;
//var referralSource = 'google.com';
//var mayWeContactYou = true;



//// STEP 6
//var numberWithString = 'I am ' + 99 + ' years old :)';
//window.console.log(numberWithString);
//var booleanWithString = 'I am ' + false + ' employed :('
//window.console.log(booleanWithString);
//var numberWithBoolean = 99 + true;
//window.console.log(numberWithBoolean);


//// STEP 7
//// Demonstrate your knowledge of hoisting:
//var name = 'Sophia';
//window.console.log(name + ' is ' + job);
//var job = 'student'; //returns undefined because of hoisting


//// STEP 8
//// Wrong. Need to add \ to escape 
//var someString = 'Who once said, "Only two things are infinite, the universe and human stupidity, and I\'m not sure about the former."';
//window.console.log(someString);


//// STEP 9
//var name = null;
//window.console.log(name);
//var age;
//window.console.log(age);


//// STEP 10
//window.console.log(typeof "abc");
//window.console.log(typeof 123);
//window.console.log(typeof true);
//window.console.log(typeof [1, 2, 3]);
//window.console.log(typeof x);


//// STEP 11
//window.alert('Hello Sophia Wang, welcome to the JavaScript class!');


//// STEP 12
//var name = 'Sophia Wang';
//window.alert('Hello ' + name + ', welcome to the JavaScript class!');


//// STEP 13
//var course = 'JavaScript';
//window.alert('Hello ' + name + ', welcome to the ' + course + ' class!');


// STEP 14
//window.console.log('Hello ' + name + '.\nWelcome to the ' + course + ' class!');


//// STEP 15
//var userName = window.prompt('Please enter your name:');
//window.alert('Congratulations, ' + userName + '! You just won $10,000 :)');


//// STEP 16
//var className = window.prompt('Which class are you taking?');
//window.alert('The instructor of ' + className + ' class is great!');


//// STEP 17
//var x, y;
//x = 10;
//y = 20;
//window.console.log('x + y = ' + (x + y));


//// STEP 18
//var x = 20;
//x += 20;
//window.console.log(x);


//// STEP 19
//var x = 20;
//x *= 5;
//window.console.log(x);


//// STEP 20
//var x = 20 % 3;
//x /= 1;
//window.console.log(x);


//// STEP 21
//var x = 1;
//var y = 2;
//window.console.log((x * 2 > y) || (x + 1 === y));


//// STEP 22
//var a = 5;
//var b = 10;
//window.console.log(a < b && (a % 3) < (b % 3));


//// STEP 23
//var widget = new Object();
//window.console.log(typeof widget);


//// STEP 24
//var widget = {};
//window.console.log(widget instanceof Object);


//// STEP 25
//var widget = {};
//window.console.log(widget instanceof Date);
