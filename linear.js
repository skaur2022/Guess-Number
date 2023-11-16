//let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let array=[20,2,14,5,1,4,19,13,3,10,11,7,9,18,6,12,8,15,17,16];
let array_length = array.length;

let button = document.getElementById("btn");

button.addEventListener("click", () => {
  let number_to_guess = document.getElementById("number").value;

  function linearSearch(array, number_to_guess, array_length) {
    for (let i = 0; i < array_length; i++) {
      if (array[i] == number_to_guess) {
        return i + 1;
      }
    }
    return -1;
  }

  let result = linearSearch(array, number_to_guess, array_length);
  if (result === -1) {
    console.log("Linear: Number was not found in the array");
  } else {
    console.log("Linear: Number was found in the array after " + result + " guesses.");
  }
});
