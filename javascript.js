// {/* <script>
//     document.body.innerHTML =
//     "Hello World!";
// </script>

// console.log('Hello World');

// // notes
// <script defer="defer">
//     document.body.innerHTML= 
//     "hello world!";
// </script>


// --------------------------------
// // Python             Javascript              
// // "Hello!"           "Hello!"
// // 'Hello!'           'Hello!'

// // """Hello            'Hello
// // There!              There'
// // """
// //                     `
// --------------------------------
// python
// "Hello" + " " + "There"
// Javascript
// "Hello" + " " + "There"

// Concatenation is the same in Javascript and Python

// Python
// mystring = "hello"

// Javascript
// var mystring = "hello"
// --------------------------------

// var veryLongVariableName = "";
// // Yes!
// var very_long_variable_name = "";
// // Nope.

// mybool = true;
// --------------------------------

// var hey = "Hello There";
// hey.length
// // 11

// python
// l=length(mystring)

// Javascript
// var mystring = "hello";
// mystring.length
// console.log(mystring.length)

// ---------------------------------

// var undefined; //Undefined
// var number = 4;
// var float = 4.1;
// var string = "hello world";


// ---------------------------------
// var number = 4;
// var float = 4.1;

// var num =1; //integer
// var num = 1.2; //float


// ----------------------------------
// var emptyString = "";
// var string = 'This is a string';
// var string = "a";



// ----------------------------------
// String Operators

// var concat = "hello" + "world"; //helloworld
// var concat2 = 4 + "world"; //4world
// var length = concat2.length; //6
// var indexWorld = concat.indexOf('world'); //5


// indexof is a method 
// var concat ="hello" + "world world world world hello";
// console.log(concat);
// console.log(concat.indexOf("world"));

// concat will find the first occurance of the word world 
// the result will be 5

// ---------------------------------
// Boolean Operators

// var boolean = true;
// var not = !boolean; //false
// var and = boolean && false; //false
// var or = boolean || false; // true;
// var equals = true == false; //false;

// //python
// if not in []        and            or           == equality

// //javascript
// ! <-(not)           &&              ||          == equality

// var boolean = !true; (not true)

// console.log(object)

// var not = !boolean
// console.log (not)

// will return true */

// // var and = boolean && false;
// // console.log(and)

// //var or = boolean || true;;
// // console.log(or)
// // will return true


// // ----------------------------------
// // Javascript Operators
// // true
// // false
// // not !
// // == 
// // or  ||
// // and (&&)
// // >>=<<=
// // // notes
// // // python                       //python          //python        //python        //python
// // school = "Dig Crafts";          True                list            dict           print('Hello World')
// // // Javascript                  //Javascript      //Javascript     //Javascript      //Javascript
// // var school = "dig crafts"       true                array           object          console.log('Hello World')
// // )



// // -----------------------------------
// if (statement)

// if (age >= 21) {
//     console.log("You get free beer");
//   }

// // python
// //a = 4
// //b = 3
// //   if a equals b:
// //     print('equality')

// // javascript 
// //var a = 4;
// //var b = 3;
// // if(a == b){
// //     console.log('equality')
// // }

// // var age = 21;

// // if (age >= 21){
// //     console.log("you get free beer")
// // 



// ------------------------------------
// if - else if - else Statements

// if (age >= 21) {
//   console.log("You get free beer");
// } else if (age < 18) {
//   console.log("What are you even doing here?");
// } else {
//   console.log("Sorry no beer for you");
// }

// notes
// python
// age = 20
// if age >=21:
//     print("free beer")
// elif age <18:
//     print("why")
// else:
//     print("sorry no beer")


// javascript
//  if (age >= 21){
//      console.log("you get free beer")    indentations do not matter in javascript as long as the command is in {}
//  }
//  else if (age < 18){
//      console.log(" what are you even doing here?")
//  }
//  else{
//      console.log(" Sorry no beer for you")
//  }


// --------------------------------------
// Using if/else if blocks

// expr = "Papayas";
// if(expr == 'Oranges')
// {
//     console.log('Oranges are $0.59 a pound.');
// }
// else if(expr == 'Mangoes')
// {
// }
// else if(expr == 'Papayas')
// {
//     console.log('Mangoes and papayas are $2.79 a pound.');
//     // expected output: "Mangoes and papayas are $2.79 a pound."
// }
// else
// {
//     console.log('Sorry, we are out of ' + expr + '.');
// }

// var expr = "Papayas";
// switch (expr){

//     case 'Oranges':
//         console.log('Oranges are $0.59 a pound')
//         break;
//     case 'Mangoes':
//         console.log('Mangoes')
//         break;
//     case 'Papayas':
//         console.log('Mangoes and papayas are $2.79 a pound')
//         break;
    

// }


// ---------------------------------------------------------------
// Switch Statement

// switch (expression) {
//     case value1:
//       //Statements executed when the
//       //result of expression matches value1
//       [break;]
//     case value2:
//       //Statements executed when the
//       //result of expression matches value2
//       [break;]
//     ...
//     case valueN:
//       //Statements executed when the
//       //result of expression matches valueN
//       [break;]
//     [default:
//       //Statements executed when none of
//       //the values match the value of the expression
//       [break;]]
//   }


//   ________________________________________________________________
//   switch

//   var expr = 'Papayas';
// switch (expr) {
//   case 'Oranges':
//     console.log('Oranges are $0.59 a pound.');
//     break;
//   case 'Mangoes':
//   case 'Papayas':
//     console.log('Mangoes and papayas are $2.79 a pound.');
//     // expected output: "Mangoes and papayas are $2.79 a pound."
//     break;
//   default:
//     console.log('Sorry, we are out of ' + expr + '.');
// }
// {/* // notes */}



// _________________________________________________________________
// while (statement){
// code block
// }

// var count = 0;
// while (count < 10){
//     count = count + 1;
//     console.log(count);
// }
// {/* notes */}
// // while the (condition as long as count is less than 10 we will continue executing this block of code)
// count++; is the same as count = count + 1;  if you needed to add more than one it would be count += 3

// ____________________________________________________________________
// The good ol' while loop, with post-increment
// while (statement){
// code block
// }

// var count = 0;
// while (count < 10) {
//     console.log(count);
//     //count = count + 1;
//     count++;
// }
// {/*  notes */


// ______________________________________________________________________
// The for loop
// for (start; test; increment;){
// code block
// }

// for (var count= 0; count < 10; count ++)
// {
//     console.log(count);
//     for(var inner= 0; inner<3; inner++){
//         console.log(inner)
//     }
// }

// // notes



// ______________________________________________________________________
// A variable assigned to an empty array
// var arrayName = []

// var lottoNum = [];

// lottoNum.push(3);

// console.log(lottoNum);

// lottoNum.push(34);

// console.log(lottoNum)

// lottoNum.pop();
// console.log(lottoNum)

// outcome
// [ 3 ]
// [ 3, 34 ]
// [ 3 ]



// // notes



// ______________________________________________________________________
// Array.push()

// Adding values to an array

// var lottoNums = [];
//  lottoNums.push(23);
//  lottoNums.push(11);
//  lottoNums.push(43);
//  lottoNums.push(19);
//  lottoNums.push(37);
//  lottoNums.push(16);
// console.log(lottoNums);
// // [23, 11, 43, 19, 37, 16]

// // notes



// _________________________________________________________________
// A variable assigned to an array of numbers

// var lottoNums = [23, 11, 43, 19, 37, 16];
// console.log(lottoNums[2]);
//outcome will be 43 .. remember lists start with 0..23 1..11 2..43 3..19 4.37..

// // notes


// ________________________________________________________________
// Accessing an element in an array

// arrayName[indexOfArrayElement]


// var lottoNums = 
// [23, 11, 43, 19, 37, 16];
// console.log(lottoNums[0]); //23
// console.log(lottoNums[3]); //19
// No error here:
// console.log(lottoNums[300000]);
// //undefined

// // notes


// _________________________________________________________________
// Reassigning an element in an array
// arrayName[indexOfArrayElement]
// = newValue

// var lottoNums = 
// [23, 11, 43, 19, 37, 16];
// lottoNums[0] = 100;
// console.log(lottoNums[0]);

// // notes


// _________________________________________________________________
// Array.pop()

// Removing an element form the end of an array

// var lottoNums = 
// [23, 11, 43, 19, 37, 16];
// lottoNums.pop(); //removes *and* returns 16
// var thePoppedNumber = lottoNums.pop();
// console.log(thePoppedNumber); //37;

// // notes


// ________________________________________________________________
// Array.shift()

// Removing an element from the end beginning an array


// var lottoNums = 
// [23, 11, 43, 19, 37, 16];
// var theShiftedNumber = 
// lottoNums.shift();
// console.log(theShiftedNumber); // 23

// // notes


// _________________________________________________________________
// splice(beginI, num)

// Removing an element from the middle of an array
// The splice() method changes the contents of an array by removing existing elements and/or adding new elements.


// var lottoNums = 
// [23, 11, 43, 19, 37, 16];
// var arrayOfSplicedValues = 
// lottoNums.splice(2, 2);
// console.log(arrayOfSplicedValues);

// Multiple values

// var lottoNums = 
// [23, 11, 43, 19, 37, 16];
// var arrayOfSplicedValues = 
// lottoNums.splice(2, 3);
// console.log(arrayOfSplicedValues); 
// //[43, 19, 47]


// // notes


// ________________________________________________________________
// slice(beginI, endI)

// Removing an element from the middle of an array
// The slice() method returns a shallow copy of a portion of an array into a new 
// array object selected from begin to end (end not included). The original array will not be modified.

// var animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
// console.log(animals.slice(2));
// // expected output: Array ["camel", "duck", "elephant"]

// Multiple values
// console.log(animals.slice(2, 4));
// // expected output: Array ["camel", "duck"]

// console.log(animals.slice(1, 5));
// // expected output: Array ["bison", "camel", "duck", "elephant"]

// // notes



// _________________________________________________________________
// S.split('seperator')

// Converting a string to an array of words

// var words ='oh hey how is it going';
// var newArray = words.split('');
// newArray.reverse();
// word2 = newArray.join('')
// console.log(word2) 
//outcome | gniog ti si woh yeh ho|
// console.log(reverse);
// console.log(newArray);
// var newArray = words.split("");

// console.log(newArray);
// // ["oh", "hey", "how", "is", "it", "going"]


// // notes


// ________________________________________________________________
// for

// Looping through an array
// for ([initialization]; [condition]; [final-expression]) statement

// var words = 
// 'oh hey how is it going'.split(' ');
// for(var i = 0; i<words.length; i++)
// {
//     console.log(words[i]);
// }

// // notes


// _________________________________________________________________
// Array.join()

// Putting an array together into a string

// var words = 
// 'oh hey how is it going'.split(' ');
// for(var i = 0; i<words.length; i++)
// {
//     console.log(words[i]);
// }
// console.log(words.join(' '));
// //'oh hey how is it going'


// // notes


// ________________________________________________________________
// S Objects: like a python dictionary, only different
// var objectName {key: value}

// var characterSheet = {
//     name: 'tim berners-lee',
//     title: 'sir',
//     powers: 'invent the web'
// }
//  console.log(characterSheet["name"])

// // notes
// var characterSheet = {
//     name: 'tim berners-lee',
//     title: 'sir',
//     powers: 'invent the web'
// } 

// var key= "name";

// var keys = ["name", "title", "powers"]
//  for (var index = 0; index < keys.length; index++){
//      var keyName = keys[index];
//      console.log(characterSheet[keyname]);A
//  }
// console.log(characterSheet[key])


// _________________________________________________________________
// Adding a property to an object
// objectName[keyName]
// = newValue

// var characterSheet = {};
// characterSheet['name'] = 'tim berners-lee';
// characterSheet['title'] = 'sir';
// characterSheet['powers'] = 'invent the web';


// // notes


// ________________________________________________________________
// delete

// Deleting properties from an object
// delete objectName[keyName]

// var characterSheet = {};
// characterSheet['name'] = 'tim berners-lee';
// characterSheet['title'] = 'sir';
// characterSheet['powers'] = 'invent the web';
// delete characterSheet['title'];

// notes



// _________________________________________________________________
// Dynamic key names

// var characterSheet = {
//     name: 'tim' berners-lee,
//     title: 'sir',
//     powers: 'invent the web'
// };
// var key = 'name';
// console.log(characterSheet[key]);

// notes



// ________________________________________________________________
// Dynamic key names in an array

// var characterSheet = {
//     name: 'tim' berners-lee,
//     title: 'sir',
//     powers: 'invent the web'
// };
// var keys = ['name', 'title', 'powers'];
// for (var i=0; i<keys.length; i++){
//     var keyName = keys[i];
//     console.log(characterSheet[keyName]);
// }

// // notes



// _________________________________________________________________
// Dynamic key names in an array, alternative

// var characterSheet = {
//     name: 'tim' berners-lee,
//     title: 'sir',
//     powers: 'invent the web'
// };
// var keys = ['name', 'title', 'powers'];
// for (var i = 0; i< keys.length; i++){
//     // var keyName = keys[i];
//     //console.log(characterSheet[keyName]);
//     console.log(characterSheet[keys[i]]);
// }

// notes



// ________________________________________________________________
// Obtaining the keys programmatically

// var characterSheet = {
//     name: 'tim berners-lee',
//     title: 'sir',
//     powers: 'invernt the word'
// };
// var keyNameList = Object.keys(characterSheet);
// for (var i= 0; i<keyNameList.length; 
//     i++){
//     console.log(characterSheet[keyNameList[i]]);
// }

// // notes


// _________________________________________________________________
// function

// function fname (arguments){
// code block
// }

// function hello (name) {
//     var output = 'Hello ' + name;
//     console.log(output);
//     return output;
//   }

// // notes
function hello(fname, lname){
    console.log("hello" + fname + " " + lname);
    
}

myReturn = hello("Alina", "Belova")
console.log(myReturn)
// ________________________________________________________________














