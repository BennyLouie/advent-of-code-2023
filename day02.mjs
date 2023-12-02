import { readFileSync } from "node:fs";
import { get } from "node:http";

const lines = readFileSync("day02.txt", { encoding: "utf-8" }) // read day??.txt content
  .replace(/\r/g, "") // remove all \r characters to avoid issues on Windows
  .trim() // Remove starting/ending whitespace
  .split("\n"); // Split on newline

// Return a new object to avoid side effects between part 1 and 2
function getInput() {
  return [...lines];
}

const test1Input = [
  "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green",
  "Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue",
  "Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red",
  "Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red",
  "Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green"
]

function part1(red, green, blue, input) {
  const total = red + green + blue;
  const hash = {
    red: red,
    green: green,
    blue: blue
  }
  let pattern = /Game /;
  let pattern2 = /^(\d+): /;;
  let sum = 0;
  input.forEach(game => {
    const removeGame = game.replace(pattern, "");
    // console.log(removeGame)
    let ID = 0;
    const removeID = removeGame.replace(pattern2, (match, capturedNumber) => {
        // Save the captured number to a variable
        ID = parseInt(capturedNumber, 10);

        // Return an empty string to remove the matched pattern
        return "";
      });   
      // console.log(removeID);
    let valid = true;
    // console.log(removeGame)
    // console.log(removeID)
    const array = removeID.split(";");
    array.forEach(round => {
      let colorHash = {};
      let pairs = round.split(",");
      let tot = 0;
      for (let i = 0; i < pairs.length; i++) {
        // Split each pair into number and color
        let [number, color] = pairs[i].trim().split(" ");

        // Convert the number to an integer
        number = parseInt(number);

        // Update the hash with the color as the key and the number as the value
        colorHash[color] = (colorHash[color] || 0) + number;
        tot += colorHash[color];
        if (colorHash[color] > hash[color] || tot > total) {
          valid = false;
          break;
        } 
      }
      // console.log(colorHash)
    })
    // console.log(valid)
    console.log(ID)
    valid === true ? sum += ID : sum
    // console.log("Sum: " + sum)
  })
  console.log('Sum: ' + sum);
}

function part2() {
  const input = getInput();
  //do something here
}

// part1(12, 13, 14, test1Input);
part1(12, 13, 14, getInput());
part2();
