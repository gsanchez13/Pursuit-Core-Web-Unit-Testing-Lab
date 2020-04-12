// 1.
// Write a function called isOdd that returns whether or not a number is odd.
// If something that is not a number is passed in, return false.

// Write Tests for the following cases
// input => output 
// 3     => true
// 5     => true
// "3"   => false
// 0     => false
// 2     => false
// 7     => true
// 4     => false
// 10    => false
// NaN   => false
// "hi"  => false

function isOdd(num) {
  if (typeof (num) !== "number" || isNaN(num)) {
    return false
  }
  return Math.abs(num) % 2 === 1
};

// 2.
// Write a function called numberOfDigits that returns how many digits are in a given number

// Write a few tests
// * That verify that for different inputs this function's return value is correct 

function numberOfDigits(num) {
  if (typeof (num) === 'number' && !isNaN(num)) {
    return Math.abs(num).toString().length
  }
  else if (num === "") {
    return num.length
  }
  return null
};

// 3.
// Write a function called disemvowel that removes all of the vowels from a string.
// Treat y as a consonant, not a vowel

// Write a few tests
// * That verify that for different inputs this function's return value is correct 

function disemvowel(str) {
  if (typeof (str) !== "string") {
    return undefined
  }
  let outputStr = ""
  for (let char of str) {
    if (typeof (char) === "number") {
      outputStr += char
    }
    const lowercasedChar = char.toLowerCase()
    if (lowercasedChar !== "a" && lowercasedChar !== "e" && lowercasedChar !== "i" && lowercasedChar !== "o" && lowercasedChar != "u") {
      outputStr += char
    }
  }
  return outputStr
}

// 4.
// Write a function called secondSmallest that returns the second smallest number in an array

// Write a few tests
// * That verify that for different inputs this function's return value is correct 

function secondSmallest(arr) {
  if (!Array.isArray(arr)) {
    return undefined;
  }
  else if (arr.length === 1) {
    return (typeof (arr[0]) === "number" && !isNaN(arr[0])) ? arr[0] : undefined
  }
  let min = Infinity
  let secondSmallest = Infinity
  for (let num of arr) {
    if (typeof (num) === "number" && !isNaN(num)) {
      if (num < min) {
        let temp = min
        min = num
        secondSmallest = temp
      } else if (num < secondSmallest) {
        secondSmallest = num
      }
    }
  }
  return secondSmallest
}

// 5.
// Write a function called getLocations that takes in an array of objects that look like the array below,
// and returns an array of the strings corresponding to the value of the location property

// Sample input:
// [{location: "Algeria", population: 41}, {location: "Belize", population: 0.4}, {location: "China", population: 1386}, {location: "Denmark", population: 6}]

// Sample output:
// ["Algeria", "Belize", "China", "Denmark"]

// Write a few tests
// * That verify that for different inputs this function's return value is correct 
function getLocations(objArr) {
  if (!Array.isArray(objArr)) {
    return undefined;
  }
  let finalArr = [];
  for (let obj of objArr) {
    if (obj.location) {
      finalArr.push(obj.location);
    }
  }
  if (finalArr.length === 0) {
    return null;
  }
  return finalArr
}

// 6.
// Write a function called onlyOddStrings that takes in an array of strings as input and returns an array that only includes strings with an odd number of characters
// Your function should use a higher-ordered function in its implementation

// Write a few tests
// * That verify that for different inputs this function's return value is correct 
function onlyOddStrings(arr) {
  return arr.filter(str => str.length % 2 === 1)
}

// 7.
// Function that converts a linked list into an array
// Example
// Input: A head node to the following link list: 1->8->100->2->7->365->999
// Output: [1, 8, 100, 2, 7, 365, 999]

// Write a few tests
// * That verify that for different inputs this function's return value is correct


function linkedListToArray(node) {
  let crr = node
  let arr = []
  while (crr) {
    arr.push(crr.val)
    crr = crr.next;
  }
  return arr;
}

// *NOTE*: When testing you will need to create a linked list for this. Use only the Node class below
class Node {
  constructor(val) {
    this.val = val;
    this.next = null
  }
}

// Sample linked list
// 1->4->100. n1 will be the head node
let n1 = new Node(1);
let n2 = new Node(4);
let n3 = new Node(100)
n1.next = n2
n2.next = n3

module.exports = {
  isOdd,
  numberOfDigits,
  disemvowel,
  secondSmallest,
  getLocations,
  onlyOddStrings,
  linkedListToArray,
  Node
}
