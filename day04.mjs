import { readFileSync } from "node:fs";

const lines = readFileSync("day04.txt", { encoding: "utf-8" }) // read day??.txt content
  .replace(/\r/g, "") // remove all \r characters to avoid issues on Windows
  .trim() // Remove starting/ending whitespace
  .split("\n"); // Split on newline

// Return a new object to avoid side effects between part 1 and 2
function getInput() {
  return [...lines];
}

const sample = [
  'Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53',
  'Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19',
  'Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1',
  'Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83',
  'Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36',
  'Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11'
]

function part1(input) {
  let hash = [];
  let totalpoints = 0;
  for (let i = 0; i < input.length; i++) {
    let result = input[i].replace(/Card \d+: /, "");
    let array = result.split(" | ")
    let points = 0;
    const wins = array[0].split(" ").filter(str => str !== "");
    const numbers = array[1].split(" ").filter((str) => str !== "");
    // console.log('wins: ')
    // console.log(wins)
    // console.log("my numbers: ")
    // console.log(numbers)
    numbers.forEach(num => {
      if (wins.includes(num)) {
        if (points === 0) {
          points += 1;
        } else {
          points *= 2;
        }
      }
    })
    totalpoints+=points;
  }
  console.log(totalpoints);
}

function part2() {
  const input = getInput();
  //do something here
}

part1(sample);
part1(getInput());
part2();
