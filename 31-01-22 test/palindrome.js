const find = "madam";
const palindrome = find.split("").reverse().join("");

if (find === palindrome) {
  console.log("The given word", `${find}`, "is a palindrome");
} else {
  console.log("The given word", `${find}`, "is NOT a palindrome");
}