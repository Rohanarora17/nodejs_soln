// Node JS Test
// Time Limit - 2 hours

// Test Guidelines:
//  All questions are mandatory to attempt
// Read the question properly and create a working solution for it.
// This test focuses on fundamental concepts of Node and JavaScript.
// Create a folder and keep all the files with proper naming .
// Push it to github.
// Fill out the google form: https://forms.gle/dLdVHLqExgtNEAhk8


// Question: Write a JavaScript program that uses a for loop to print numbers from 1 to 10.
// Example:
// Input: None
// Expected Output: 1 2 3 4 5 6 7 8 9 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
// Question: Write a JavaScript program that uses a while loop to calculate the sum of numbers from 1 to 10.
// Example:
// Input: None
// Expected Output: 55
let sum = 0;
let i = 1;


while (i <= 10) {
  sum += i;
  i++;
}


console.log(sum);


// Question: Write a JavaScript program that uses a for loop to iterate over the characters in a string and counts the number of vowels.
// Example:
// Input: "Hello, World!"
// Expected Output: 3
const inputString = "Hello, World!";
const vowels = ['a', 'e', 'i', 'o', 'u'];
let vowelCount = 0;


for (let i = 0; i < inputString.length; i++) {
  const character = inputString[i].toLowerCase();
  
  if (vowels.includes(character)) {
    vowelCount++;
  }
}


console.log(vowelCount);


// Question: Write a JavaScript program that uses a while loop to reverse a given number.
// Example:
// Input: 12345
// Expected Output: 54321
function reverseNumber(number) {
  let reversedNumber = 0;


  while (number > 0) {
    const remainder = number % 10;
    reversedNumber = (reversedNumber * 10) + remainder;
    number = Math.floor(number / 10);
  }


  return reversedNumber;
}


const inputNumber = 12345;
const reversedNumber = reverseNumber(inputNumber);


console.log(reversedNumber);



// Question: Write a JavaScript program that checks if a given string is a palindrome.
// Example:
// Input: "racecar"
// Expected Output: true
function isPalindrome(str) {
  const reversedStr = str.split('').reverse().join('');
  return str === reversedStr;
}


const inputStrin = "racecar";
const isPalindromeResult = isPalindrome(inputStrin);


console.log(isPalindromeResult);




// Question: Write a Node.js program that creates an HTTP server using the built-in 'http' module and responds with "Hello World!" when accessed.
const http = require('http');


const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World!\n');
});


const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});



// Question: Modify the previous program to include an HTTP header with the content type 'text/html' in the server response.



const serve = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Hello World!</h1>\n');
});


const por = 3001;
server.listen(por, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
// Question:
// Write a Node.js program that creates a server using the built-in 'http' module. Include a custom module called "myDateTime" that returns the current date and time. The server should respond to incoming requests by displaying the current date and time.
exports.getCurrentDateTime = function() {
  const currentDateTime = new Date();
  return currentDateTime.toUTCString();
};

Server.js
// server.js

const myDateTime = require('./myDateTime');

const serv = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(`Current date and time: ${myDateTime.getCurrentDateTime()}\n`);
});


server.listen(3002, () => {
  console.log(`Server running at http://localhost:${port}/`);
});


// Question: Write a Node.js program that reads the contents of an HTML file and returns the content as the response when accessed via an HTTP server.



Server.js

const fs = require('fs');



const se = http.createServer((req, res) => {
  fs.readFile('index.html', (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Internal Server Error');
    } else {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      res.end(data);
    }
  });
});


server.listen(3003, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
// Question: Create a Node.js program that appends the text "Hello content!" to a file called "mynewfile1.txt" using the fs.appendFile() method.



const filePat = 'read.txt';
const contentToAppend = 'Hello content!\n';


fs.appendFile(filePat, contentToAppend, (err) => {
  if (err) {
    console.error('Error appending file:', err);
  } else {
    console.log('Content appended to file successfully!');
  }
});
// Question: Modify the previous program to create a new file called "mynewfile2.txt" using the fs.open() method with the "w" flag.



const fileP = 'read2.txt';


fs.open(fileP, 'w', (err, fileDescriptor) => {
  if (err) {
    console.error('Error creating file:', err);
  } else {
    console.log('File created successfully!');
    fs.close(fileDescriptor, (closeErr) => {
      if (closeErr) {
        console.error('Error closing file:', closeErr);
      } else {
        console.log('File closed successfully!');
      }
    });
  }
});
// Question: Write a Node.js program that replaces the content of a file called "mynewfile3.txt" with the text "Hello content!" using the fs.writeFile() method.



const filePath3 = 'read3.txt';
const contentToWrite = 'Hello content!\n';


fs.writeFile(filePath3, contentToWrite, (err) => {
  if (err) {
    console.error('Error writing file:', err);
  } else {
    console.log('File content replaced successfully!');
  }
});
// Question: Implement a Node.js program that appends the text " This is my text." to the end of the file "mynewfile1.txt" using the fs.appendFile() method.



const file = 'read1.txt';
const textToAppend = ' This is my text.';


fs.appendFile(file, textToAppend, (err) => {
  if (err) {
    console.error('Error appending text to file:', err);
  } else {
    console.log('Text appended successfully.');
  }
});




// Question: Develop a Node.js program that deletes a file called "mynewfile2.txt" using the fs.unlink() method.



const fileName = 'read2.txt';


fs.unlink(fileName, (err) => {
  if (err) {
    console.error('Error deleting file:', err);
  } else {
    console.log('File deleted successfully.');
  }
});




// Question: Create a Node.js program that renames a file called "mynewfile1.txt" to "myrenamedfile.txt" using the fs.rename() method.



const oldFileName = 'read1.txt';
const newFileName = 'write1.txt';


fs.rename(oldFileName, newFileName, (err) => {
  if (err) {
    console.error('Error renaming file:', err);
  } else {
    console.log('File renamed successfully.');
  }
});




// Question: Write a JavaScript function multiplyByTwo that takes a number as an argument and multiplies it by two. Implement a callback function callback that receives the result of the multiplication and displays it on the console.
// Example Input: multiplyByTwo(5, callback);


function multiplyByTwo(number, callback) {
  const result = number * 2;
  callback(result);
}


// Usage example
multiplyByTwo(5, (result) => {
  console.log(result);
});




// Expected Output:Result: 10
// Question: Implement a JavaScript function calculateSum that takes an array of numbers as an argument and calculates their sum. The function should accept a callback function callback that receives the calculated sum. Invoke the callback function with the sum of the array elements.
// Example Input:calculateSum([2, 4, 6, 8], callback);


// Expected Output:Sum: 20


function calculateSum(numbers, callback) {
  const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  callback(sum);
}


// Usage example
calculateSum([2, 4, 6, 8], (sum) => {
  console.log('Sum:', sum);
});




// Question: Create a JavaScript function getUserData that simulates fetching user data from a server asynchronously. The function takes a callback function callback as an argument. Inside the getUserData function, after a delay of 2 seconds, invoke the callback function with a mock user object containing name, email, and age properties.
// Example Input: getUserData(callback);


// Expected Output:User Data:
// {
//   name: 'John Doe',
//   email: 'johndoe@example.com',
//   age: 25
// }
function getUserData(callback) {
  setTimeout(() => {
    const userData = {
      name: 'John Doe',
      email: 'johndoe@example.com',
      age: 25
    };


    callback(userData);
  }, 2000);
}


// Usage example
getUserData((user) => {
  console.log('User Data:');
  console.log(user);
});




// Question: Write a JavaScript function getRandomNumber that generates a random number between 1 and 10. Implement a promise that resolves with the generated random number. The promise should be rejected if the generated number is less than 5.
// Example Input:getRandomNumber()
// Expected Output:
// A promise object that will be resolved with a random number between 1 and 10 if it is greater than or equal to 5. If the generated number is less than 5, the promise should be rejected.
function getRandomNumber() {
  return new Promise((resolve, reject) => {
    const randomNumber = Math.floor(Math.random() * 10) + 1;


    if (randomNumber >= 5) {
      resolve(randomNumber);
    } else {
      reject(new Error('Generated number is less than 5.'));
    }
  });
}


// Usage example
getRandomNumber()
  .then((number) => {
    console.log(number); // Random number between 5 and 10 (inclusive)
  })
  .catch((error) => {
    console.error(error); // Generated number is less than 5.
  });






// Question: Write a JavaScript function checkFileExists that checks if a file exists asynchronously using promises. The function takes a file path as an argument and returns a promise. Inside the function, after a delay of 1 second, check if the file exists. If the file exists, resolve the promise. If the file does not exist, reject the promise.
// Example Input:checkFileExists('/path/to/file.txt')


// Expected Output:
// A promise object that will be resolved if the file exists after a delay of 1 second. If the file does not exist, the promise should be rejected.
function checkFileExists(filePath) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      
      const fileExists = true; 


      if (fileExists) {
        resolve('File exists.');
      } else {
        reject(new Error('File does not exist.'));
      }
    }, 1000);
  });
}


// Usage example
checkFileExists('/path/to/file.txt')
  .then((message) => {
    console.log(message); // File exists.
  })
  .catch((error) => {
    console.error(error); // File does not exist.
  });
