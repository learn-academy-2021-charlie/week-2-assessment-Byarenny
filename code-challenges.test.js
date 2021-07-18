// ASSESSMENT 2: Coding practical questions with Jest

// Please read all questions thoroughly
// All problems can be solved with concepts covered in class or in the syllabus
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function

// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// a) Create a test with expect statements for each of the variables provided.
var num1 = 15
// Expected output: "15 is divisible by three"
var num2 = 0
// Expected output: "0 is divisible by three"
var num3 = -7
// Expected output: "-7 is not divisible by three"
//PROCESS:
    //Describe a method that lists the name of the function
    //it method, nested within the describe code block, that describes what the function does.
    //an expected method, nested within the it block, calling on the function followed by the .toEqual() matcher that checks the expected output

 describe("evenDiv", () => {
    it("returns whether a number is divisible by three", () => {
        expect(evenDiv(num1)).toEqual("15 is divisible by three")
        expect(evenDiv(num2)).toEqual("0 is divisible by three")
        expect(evenDiv(num3)).toEqual("-7 is not divisible by three")
    })
})

// b) Create the function that makes the test pass.
//PROCESS:
    //decalre a function named evenDiv
    //if num % 3 === 0 , return num is divisible by three
    //else return num is not divisible by three

   const evenDiv = (num) => {
       if(num % 3 === 0) {
           return `${num} is divisible by three`
       } else {
           return `${num} is not divisible by three`
       }
   }


// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

var randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]

var randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]

//PROCESS:
    //describe a method that list the name of the function
    //it method, nested within descibe block that describes what the function does
    //expect method, nested within the it block, calling the function, followed by the .toEqual() matcher that checks the expected output of the function return

    describe("capsArray", () => {
    it("returns an array with all words capitalized", () => {
        expect(capsArray(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
        expect(capsArray(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"])
    })
})

// b) Create the function that makes the test pass.
//PROCESS:
    //declare a function named capsArray
    //return array.map(value => value[0].toUpperCase() + value.substring(1))
    

const capsArray = (array) => {
    return array.map(value => value[0].toUpperCase() + value.substring(1))  
    }  
    


// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

var vowelTester1 = "learn"
// Expected output: 1
var vowelTester2 = "academy"
// Expected output: 0
var vowelTester3 = "challenge"
// Expected output: 2
//PROCESS:
    //describe a function
    //it method to describe the test
    //expect method to list the expected outputs

    describe("firstVowel", () => {
    it("returns the index of the first vowel of a string", () => {
        expect(firstVowel(vowelTester1)).toEqual(1)
        expect(firstVowel(vowelTester2)).toEqual(0)
        expect(firstVowel(vowelTester3)).toEqual(2)
    })
})

// b) Create the function that makes the test pass.
//PROCESS:
    //decalre a function named firstVowel
    //use for loop iteration to look through each character in a string for the first vowel and outputs the indexof the first vowel
    
    const firstVowel = (string) => {
        for(let i=0; i<string.length; i++) {
        if(string[i] === "a" || string[i] === "e" || string[i] === "i" || string[i] === "o" || string[i] === "u") {
        return string.indexOf(string[i])
            }
        }
        }
