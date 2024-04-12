function isPalindrome(word) {
  const inputWordArray = word.split("")
  const originalInputWordArray = [...inputWordArray];
  const palindromeWordArray = [];
  //console.log(inputWordArray)

  while (inputWordArray.length > 0) {
    let removedLastLetter = inputWordArray.shift();
    palindromeWordArray.unshift(removedLastLetter);

  }
  //console.log(palindromeWordArray)

  const inputString = originalInputWordArray.join("");
  const palindromeString = palindromeWordArray.join("");
  console.log(inputString)
  console.log(palindromeString)

  if (inputString === palindromeString) {
    return true
  }
  else {
    return false
  }
} 

console.log(isPalindrome('mom'))

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
Splits every letter in the input word argument into an array, loops through it and removes the first letter destructively and adds it to the beginning of a new array until the original is empty.
After that you make the new backwards array a string as well as an untouched input string and strictly compare them to returna boolean value*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
