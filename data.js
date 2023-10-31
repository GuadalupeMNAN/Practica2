// 1~ Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.

let challenge = '30DaysOfJavaScript';



// 2~ Print the string on the browser console using console.log()

console.log(challenge);



// 3~ Print the length of the string on the browser console using console.log()

console.log(challenge.length);



// 4~ Change all the string characters to capital letters using toUpperCase() method

console.log(challenge.toUpperCase());



// 5~ Change all the string characters to lowercase letters using toLowerCase() method

console.log(challenge.toLowerCase());



// 6~ Cut (slice) out the first word of the string using substr() or substring() method

console.log(challenge.substring(2)); 



// 7~ Slice out the phrase 'DaysOfJavaScript' from '30DaysOfJavaScript'
 // Output: 'DaysOfJavaScript'

console.log(challenge.slice(2));



// 8~ Check if the string contains a word 'Script' using includes() method
// Output: true

console.log(challenge.includes('Script')); 



// 9~ Split the string into an array using split() method

console.log(challenge.split('')); 



// 10~ Split the string '30DaysOfJavaScript' at the space using split() method

console.log(challenge.split(' '));



// 11~ 'Facebook,Google,Microsoft,Apple,IBM,Oracle,Amazon' split the string at the comma and change it to an array
// Output: ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

let companies = 'Facebook,Google,Microsoft,Apple,IBM,Oracle,Amazon';
console.log(companies.split(','));



// 12~ Change '30 Days Of Java Script' to '30Days Of Node' using replace() method
// Output: '30DaysOfNode'

console.log(challenge.replace('JavaScript', 'Node')); 



// 13~ What is the character at index 15 in '30 Days Of Java Script' string? Use charAt() method
// Output: 'S'

console.log(challenge.charAt(15)); 



// 14~ What is the character code of 'J' in '30 Days Of Java Script' string using charCodeAt()
// Output: 74

console.log(challenge.charCodeAt(11)); 



// 15~ Use indexOf to determine the position of the first occurrence of 'a' in 30 Days Of Java Script
// Output: 4

console.log(challenge.indexOf('a')); 



// 16~ Use lastIndexOf to determine the position of the last occurrence of 'a' in 30 Days Of Java Script
// Output: 11

console.log(challenge.lastIndexOf('a')); 



/* 17~ Use indexOf to find the position of the first occurrence of the word because in the following sentence:
'You cannot end a sentence with because because because is a conjunction'*/
// Output: 31

let sentence = 'You cannot end a sentence with because because because is a conjunction';
console.log(sentence.indexOf('because'));



/* 18~ Use last IndexOf to find the position of the last occurrence of the word because in the following sentence:
'You cannot end a sentence with because because because is a conjunction'*/
// Output: 51

console.log(sentence.lastIndexOf('because')); 



/* 19~ Use search to find the position of the first occurrence of the word because in the following sentence:
'You cannot end a sentence with because because because is a conjunction'*/
// Output: 31

console.log(sentence.search('because')); 



// 20~ Use trim() to remove any trailing whitespace at the beginning and the end of a string
// Output: '30DaysOfJavaScript'

let stringWithWhitespace = '30DaysOfJavaScript';
console.log(stringWithWhitespace.trim()); 



// 21~ Use startsWith() method with the string 30 Days Of Java Script and make the result true
// Output: true

console.log(challenge.startsWith('30DaysOf')); 



// 22~ Use endsWith() method with the string 30 Days Of Java Script and make the result true
// Output: true

console.log(challenge.endsWith('JavaScript')); 



// 23~ Use match() method to find all the 'a's in 30 Days Of Java Script
// Output: ['a', 'a']

console.log(challenge.match(/a/g)); 



// 24~ Use concat() and merge '30 Days Of' and 'Java Script' to a single string, '30 Days Of Java Script'
// Output: '30DaysOfJavaScript'

console.log('30DaysOf'.concat('JavaScript')); 



// 25~ Use repeat() method to print 30 Days Of Java Script 2 times
// Output: '30DaysOfJavaScript30DaysOfJavaScript'
console.log(challenge.repeat(2)); 