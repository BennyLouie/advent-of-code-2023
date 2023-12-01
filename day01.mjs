import { readFileSync } from "node:fs";

const lines = readFileSync("day01.txt", { encoding: "utf-8" }) // read day??.txt content
  .replace(/\r/g, "") // remove all \r characters to avoid issues on Windows
  .trim() // Remove starting/ending whitespace
  .split("\n"); // Split on newline

// Return a new object to avoid side effects between part 1 and 2
function getInput() {
  return [...lines];
}

// const sampleInput = [
//   "1abc2",
//   "pqr3stu8vwx",
//   "a1b2c3d4e5f",
//   "treb7uchet"
// ]

// const sampleSolution = 142;

const sampleInput2 = [
  "two1nine",
  "eightwothree",
  "abcone2threexyz",
  "xtwone3four",
  "4nineeightseven2",
  "zoneight234",
  "7pqrstsixteen"
]

const sampleSolution2 = 281;

// function getTotalValues(input) {
//   let sum = 0;
//   input.forEach(string => {
//     let firstNumber = string.match(/\d/);
//     let lastNumber = string.match(/\d(?=[^\d]*$)/);
//     firstNumber = firstNumber ? firstNumber[0] : null;
//     lastNumber = lastNumber ? lastNumber[0] : null;

//     const num = parseInt(firstNumber.concat(lastNumber));

//     sum+=num;
//   })
//   console.log(sum);
//   return sum;
// }

// function testSolution(input, func, solution) {
//   console.log(func(input) === solution ? true : false);
// }

function testSolution2(input, func, solution) {
    console.log(func(input) === solution ? true : false);
}

function getUpdatedValue(inputArray) {
  const numberMapping = {
    one: "1e",
    two: "2o",
    three: "3e",
    four: '4r',
    five: "5e",
    six: "6",
    seven: "7n",
    eight: "8t",
    nine: "9e",
    zero: "0o",
  };

  let sum = 0;

  for (let inputString of inputArray) {
    // Replace spelled-out numbers with digits
    let stringWithoutLetters = inputString.replace(
      /(one|two|three|four|five|six|seven|eight|nine|zero)/g,
      (match) => numberMapping[match]
    );
    let newString = stringWithoutLetters.replace(
      /(one|two|three|four|five|six|seven|eight|nine|zero)/g,
      (match) => numberMapping[match]
    );
      // console.log(newString);
    // Extracting all digits as a string
    let numbers = newString.match(/\d+/g).join("");
      // console.log(numbers)
    const twoDigits = parseInt(numbers[0] + numbers[numbers.length - 1]);
    console.log(twoDigits)
    sum += twoDigits;
  }
  console.log(sum);
  return sum;
}

const testInput = [
  "14nineight",
  "sevenine"
]

// testSolution(sampleInput, getTotalValues, sampleSolution);
// getTotalValues(getInput());
// console.log("Part 2: ----")
// testSolution2(sampleInput2, getUpdatedValue, sampleSolution2);

getUpdatedValue(getInput());
// getUpdatedValue(testInput);

