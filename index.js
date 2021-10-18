let words = prompt("Enter two words:")
let spacePosition = words.indexOf(" ")
let firstWord = words.substring(0, spacePosition)
let secondWord = words.substring(spacePosition + 1, words.length)
console.log(("Your first word is ") + firstWord + " and your second word is " + secondWord)
console.log("The first letter of your second word is " + words.charAt (spacePosition +1))

