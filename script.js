// Get random item
function getComputerChoice(arr) {
   const random = Math.floor(Math.random() * arr.length);
   const result = arr[random];
    return result;
}
const RockPaperScissors = ["Rock", "Paper", "Scissors"];
const result = getComputerChoice(RockPaperScissors);
console.log(result);