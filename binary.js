let array = [20,2,14,5,1,4,19,13,3,10,11,7,9,18,6,12,8,15,17,16];
array = array.sort(function(a, b){return a - b});
console.log(array.sort(function(a, b){return a - b}));

let guesses = 0;

let button = document.getElementById("btn");

button.addEventListener("click", () => {
  let number_to_guess = document.getElementById("number").value;

  function binary_search(array, number_to_guess) {
    var lowest = 0;
    var highest = array.length - 1;
    var middle, guess;

    while (lowest <= highest) {
      middle = Math.floor((lowest + highest) / 2);
      guess = array[middle];
      if (guess == number_to_guess) {
        return middle;
      } else if (guess < number_to_guess) {
        lowest = middle + 1;
      } else {
        highest = middle - 1;
      }
      guesses++;
    }
    return "Binear: Number was not found in the array";
  }

  binary_search(array, number_to_guess);
  console.log(
    "Binary: Number was found in the array after " + guesses + " guesses."
  );
});
