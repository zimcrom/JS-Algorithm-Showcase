// Assigning the user's string to a variable
function checkString() {
  let userString = document.querySelector("#inputForm").value;
  console.log(userString);

  // Make exception for if it's blank
  if (userString === "" || userString === null) {
    alert("Please enter something.");
  } else if (userString.length < 3 || userString.length > 60) {
    alert("Try to keep it between 3 and 60 characters, alright?");
  }

  // Function to return the string backwards
  function convertBackwards(str) {
    let backwardsString = str.split("").reverse().join("");
    console.log("The user string backwards is: " + backwardsString);
  }
  convertBackwards(userString);

  // Function to return the string in alphabetical order
  function alphabetizedString(str) {
    let alphString = str.split("").sort().join("");
    console.log("The user string alphabetized is: " + alphString);
  }
  alphabetizedString(userString);

  // Check if string is a palindrome
  function isPalindrome(str) {
    let remSpace = str.split(" ").join("");
    console.log("remSpace is: " + remSpace);
    let revRemSpace = remSpace.split("").reverse().join("");
    console.log("revRemSpace is: " + revRemSpace);
    if (revRemSpace === remSpace) {
      console.log("Yep, that's a palindrome");
    } else {
      console.log("That's not a palindrome");
    }
  }
  isPalindrome(userString);
}
// Now to select the button
let btn = document.getElementById("startBtn");
btn.addEventListener("click", checkString);
