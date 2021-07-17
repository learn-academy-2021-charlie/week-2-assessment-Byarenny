// ASSESSMENT 1: Coding conceptual questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Charlie 2021"
// console.log(cohort.split(""))

// a) Your answer: ["Charlie", "2021"]
// b) Verify and explain: I was partially correct. It did output an array like I had predictied, but each of the characters were separated in quotes. If it was .split(" "), I would have been correct. 


// --------------------2) What will this log?

const greeter = (string) => {
  `Hello, ${string}!`
}
// console.log(greeter("LEARN Student"))

// a) Your answer: undefined, there is no return 
// b) Verify and explain: I was correct, there was nothing to call on the `Hello, ${string}!`


// --------------------3) What will this log?

var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
// console.log(multBy2)

// a) Your answer: [8, 10, 12, 14, 16]
// b) Verify and explain: I was correct, .map() iterates through an array and in this case it multiplied 2 by each value in the array.


// --------------------4) What will this log?

var oddsOnly = [11, 12, 13, 14, 15].filter(value => value % 2 === 0)
console.log(oddsOnly)

// a) Your answer: [12, 14]
// b) Verify and explain: I was correct, I thought that it would log even numbers because a value divided by 2 with a remainder of 0 is an even number. 


// --------------------5) What will this log?

class Learn {
  constructor(){
    this.student = "George",
    this.cohort = "Charlie",
    this.year = 2021
  }
}
var learnStudent = new Learn
// console.log(learnStudent)

// a) Your answer: {student: "George" , cohort: "Charlie", year: 2021}
// b) Verify and explain: I was almost fully correct. I forgot to add learn outside of the curly brackets. 
