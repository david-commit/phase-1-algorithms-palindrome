function isPalindrome(word) {
  let re = /[^A-Za-z0-9]/g;
  let lowWord = word.toLowerCase().replace(re, '')
  let reverseWord = lowWord.split('').reverse().join('')
  return lowWord === reverseWord
}

/* 
  function declaration
  if word is === to palindrome
    return true
    else
    return false
*/

/*
  Add written explanation of your solution here
*/

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
