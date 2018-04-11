// CODING CHALLENGE
// by Kat Slump

// Given a list of words (it could be any length) and a string of text.
// Find the shortest substring that contains all the words in the list.

// For example -  given a list [cat, dog, chased] and the string.
// "My cat was missing today. I hope she comes back. She was chased by the dog next door. I love my cat"
// it should return "chased by the dog next door. I love my cat"

// TEST CASES
// "My cat was missing today. I hope she comes back. She was chased by the dog next door. I love my cat";
// ["cat", "dog", "chased"];
//
// "The world is here. this is a life full of ups and downs. life is world";
// ["life", "ups", "is", "world"];
//
// "My cat was missing today. I hope she comes back. She was chased by the dog next door. I love my cat";
// ['cat', 'dog', 'chased', 'back'];
//
// "this is a test. this is a programming test. a programming test this is";
// ["this", "test", "a", "programming"];

function findShortestSubstring(sentences, list) {
  let start = 0;
  let end = 0;
  let count = 0;
  let substring = "";
  let words = sentences.split(" ");
  let smallestSubstringLength = sentences.length;
  let checkForWords = new Array(list.length).fill(-1);

  if (sentences.length < list.join('').length) {
    throw 'Length of string is less than the length of words given';
  }

  // Traverse through sentences looking for a word from the list
  for (let i = 0; i < words.length; i++) {

    // Do the following if the word is in the list
    if (list.includes(words[i].replace(/\W+/g, ""))) {

      // Get the index of the word
      let indexOfWord = list.indexOf(words[i].replace(/\W+/g, ""));

      // If word has not been found add to the count
      checkForWords[indexOfWord] === -1 ? count++ : null;

      // Store the found word's index
      checkForWords[indexOfWord] = i;

      // When all the words in the list have been satisfied
      if (count === list.length) {

        // Find the smallest index in the array
        // Then find the length of the substring between the current index and the minimum index
        let min = Math.min(...checkForWords);
        let lengthOfSubstring = i - min;

        // If the length is less than the smallest substring length, assign it as the new start
        if (lengthOfSubstring < smallestSubstringLength) {
          start = min;
          end = i;
        }

      }

    }

  }

  if (count < list.length) {
    throw "Sentences did not contain all words in the list.";
  }

  // If all words in list are not present, return an empty string
  // Else return the substring of the text provided
  checkForWords.includes(-1) ? null : substring = words.slice(start, end + 1).join(' ');

  return substring;
}

