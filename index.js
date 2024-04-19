function isPalindrome(word) {
  // Write your algorithm here
  word= word.toLowerCase().replace(/[^a-z]/g,'');
}
let left = 0;
let right = str.length - 1;

while (left < right) {
  if (str[left] !== str[right]) {
    return false;
  }
  left++;
  right--;
}

return true;



/* 
  Add your pseudocode here
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
