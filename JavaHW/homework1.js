// assignment 1


// function madlib(name,subject) {
//     return name + '\'s favorite subject in school is ' + subject + '.';
// }
// var result = madlib('Alex', 'Math');

// console.log(result)

// assignment 2

// function tipAmount(bill,service){
//     if (service == 'good') { 
//         return 'The tip is $' + bill * .20          
//     } else if (service == 'fair') {
//         return 'The tip is $' + bill * .15          
//     } else if (service == 'bad') {
//         return 'The tip is $' + bill * .10        
//     } else {
//         return bill * 0;                       
//     }
// }

// console.log(tipAmount(10,'good'));

// assignment3

// function totalAmount(bill,service){
//    if (service == 'good') {
//        tipAmount = bill * .20;                
//        total = bill + tipAmount;              
//        return 'The total bill is $' + total;
//    } else if (service == 'fair') {
//       tipAmount = bill * .15;
//       total = bill + tipAmount;
//       return 'The total bill is $' + total;
//    } else if (service == 'bad') {
//       tipAmount = bill * .10;
//       total = bill + tipAmount;
//       return 'The total bill is $' + total;
//    } else {
//        tipAmount = bill * 0;
//        total = bill + tipAmount;
//        return 'The total bill is $' + total;
//    }
// }
// console.log( totalAmount(100,'good'));

// assignment 4

// function printNumbers(start,end) {
//     for (let n = start; n <= end; n++) {
//         console.log(n);
//     }
// }

// printNumbers(1,10);

// assignment 5

// drawSquare(5);
// function drawSquare(five){
//   var square="";
//   for(i=0;i<five;i++){    
//     for (j=0; j<five;j++) {
//     square+="*";
//     }
//     console.log(square);
//     square="";
//   } 
// }

// // assignment 6
// function printBox(width, height) {
//     for (let i = 0; i < height; i++) {    
//         if (i === 0 || i === height -1) {  
//             console.log('*'.repeat(width));  
//         } else {        
//             console.log('*' + ' '.repeat(width-2) + '*');
//     }
// }
// }
// printBox(6, 4);


// // assignment 7
// function printBanner(Text) {
// console.log('*'.repeat(Text.length+4))  
// console.log('* ' + Text + ' *');
// console.log('*'.repeat(Text.length+4)) 
// }
// printBanner('All this coding is making my head hurt')

//assignment 8
// function leetSpeak(leettext) {
//     let newText = "";
//     for (let i = 0; i < leettext.length; i++) {
//       let character = leettext[i];
//       switch (character.toUpperCase()) {
//         case "A": {
//           character = "4";
//           break;
//         }
//         case "E": {
//           character = "3";
//           break;
//         }
//         case "G": {
//           character = "6";
//           break;
//         }
//         case "L": {
//           character = "1";
//           break;
//         }
//         case "O": {
//           character = "0";
//           break;
//         }
//         case "S": {
//           character = "5";
//           break;
//         }
//         case "T": {
//           character = "7";
//           break;
//         }
//       }
//       newText += character;
//     }
  
//     return newText;
//   }
  
//   console.log(leetSpeak("Leet"));

// assignment 10
function Vowels(text) {
    let newText = "";
    for (let i = 0; i < text.length; i++) {
      let character = text[i];
      if (
        character == "a" ||
        character == "e" || 
        character == "i" ||
        character == "o" ||
        character == "u"
      ) {
        character = concat.character.repeat(5);
      }
      newText += character;
    }
    return newText;
  }
  
  console.log(Vowels("cheese"));