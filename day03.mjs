import { readFileSync } from "node:fs";

const lines = readFileSync("day03.txt", { encoding: "utf-8" }) // read day??.txt content
  .replace(/\r/g, "") // remove all \r characters to avoid issues on Windows
  .trim() // Remove starting/ending whitespace
  .split("\n"); // Split on newline

// Return a new object to avoid side effects between part 1 and 2
function getInput() {
  return [...lines];
}

const sampleEngine = [
  "467..114..",
  "...*......",
  "..35..633.",
  "......#...",
  "617*......",
  ".....+.58.",
  "..592.....",
  "......755.",
  "...$.*....",
  ".664.598..",
]

function checkSymbol(char) {
  // console.log(char);
  if (char !== "." && /[^A-Za-z0-9]/.test(char)) {
    return true; // Return true if a non-period symbol is found
  }
}

function checkAndCreateKey(obj, key) {
  if (obj.hasOwnProperty(key)) {
    // Key exists, create a new key by prepending a zero
    let newKey = `0${key}`;

    // Call itself recursively to ensure the new key is unique
    newKey = checkAndCreateKey(obj, newKey);

    obj[newKey] = obj[key];
    return newKey;
  } else {
    // Key doesn't exist, return the original key
    return key;
  }
}

function part1(input) {
  let sum = 0;
  let symbols = [];
  let numbers = [];
  for (let i = 0; i < input.length; i++) {
    let tmp = "";
    // console.log(input[i])
    const line = input[i]
    // console.log(line.length)
    let symb = []
    let numb = {}
    for (let j = 0; j < line.length; j++) {
      if (checkSymbol(line[j]) || line[j] === ".") {
        if (tmp.length > 0) {
          let key = checkAndCreateKey(numb, tmp);
          // if (tmp == '923') {
          //   console.log(key)
          // }
          numb[key] = [j];
          let d = j - 1;
          for (let x = 0; x <= tmp.length; x++) {
            numb[key].push(d - x);
          }
          // console.log(numb[key])
          // console.log(key)
          // console.log(j)
        }
        tmp = "";
        if (checkSymbol(line[j])) {
          symb.push(j);
        }
      } else {
        tmp += line[j]
      }
    }
    symbols.push(symb);
    numbers.push(numb);
  }
  // console.log("Symbols: ")
  // console.log(JSON.stringify(symbols, null, 2));
  // console.log("Numbers: ")
  // console.log(JSON.stringify(numbers, null, 2));
  for (let n = 0; n < numbers.length; n++) {
    let symbolsArray = [...symbols[n]];
    const currObj = numbers[n]
    if (symbols[n-1]) {
      symbolsArray.push(...symbols[n-1]);
    }
    if (symbols[n+1]) {
      symbolsArray.push(...symbols[n+1]);
    }
    // console.log(currLine)
    for (const key in currObj) {
      console.log("---")
      console.log(key)
      console.log(currObj[key])
      console.log("Symbols:")
      console.log(symbolsArray)
      if (symbolsArray.some(r => currObj[key].includes(r))) {
        console.log("Key added: " + key)
        sum += parseInt(key);
        console.log ("sum: " + sum)
      }
    }
  }
  console.log(sum)
}

function part2() {
  const input = getInput();
  //do something here
}

// part1(sampleEngine);
part1(getInput());
part2();

/**
 * Failed
 * 
 * 510068
 * 511086
 * 
 */