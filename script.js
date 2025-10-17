const input = document.getElementById('input');
const identifier = document.getElementById('identifier');
const highestToLowest = document.getElementById('highest-to-lowest');
const lowestToHighest = document.getElementById('lowest-to-highest');
const sameNumbers = document.getElementById('same-numbers');
const button = document.getElementById('button');
let numbers;

function clearDOM() {
  input.value = '';
  identifier.innerHTML = '';
  highestToLowest.innerHTML = '';
  sameNumbers.innerHTML = '';
}

button.addEventListener('click', () => {
  if (!input.value || input.value.split('').length != 3) {
    clearDOM();
    return alert('Please enter 3 numbers. i.e 943');
  }
  clearDOM();

  numbers = input.value;
  numbers = numbers.split('').map(Number);

  if (checkSameNumbers(numbers)) {
    sameNumbers.innerHTML += `All the numbers are the same`;
  } else {
    highestCenterMinor(numbers);
    descendingAscending(numbers);
  }
});

function highestCenterMinor(numbers) {
  const max = Math.max(...numbers);
  const min = Math.min(...numbers);
  identifier.innerHTML += `The highest number is ${max}, the lowest is ${min} and the one in the center is ${numbers[1]}`;
}

function descendingAscending(numbers) {
  const ascending = numbers.sort().join('');
  const descending = numbers.sort().reverse().join('');
  highestToLowest.innerHTML += `Lowest to Highest order: ${ascending}<br/>Highest to lowest order: ${descending}`;
}

function checkSameNumbers(numbers) {
  const allSame = numbers.every((num) => num === numbers[0]);
  return allSame;
}
