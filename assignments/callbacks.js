// Create a callback function and invoke the function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];



  //Given this problem: 
  
  // function firstItem(arr, cb) {
     // firstItem passes the first item of the given array to the callback function.
  // }

  // // Potential Solution:
  // function firstItem(arr, cb) {
  //   return cb(arr[0]);
  // }

  // firstItem(items, function(first) {
  //   console.log(first)
  // });




// getLength passes the length of the array into the callback.
function getLength(arr, cb) {
  cb(arr.length);
}

getLength(items, function(arr){
  console.log(arr)
});




// last passes the last item of the array into the callback.
function last(arr, cb) {
  cb(arr[arr.length-1])
}

last(items, function(arr){
  console.log(arr)
})





// sumNums adds two numbers (x, y) and passes the result to the callback.
function sumNums(x, y, cb) {
  return cb(x, y);
}

function sum(num1, num2){
  console.log(num1 + num2);
}

sum (109, 48, sum);




// multiplyNums multiplies two numbers and passes the result to the callback.
function multiplyNums(x, y, cb) {
  return cb(x, y);
}

function multiply(num1, num2){
  console.log(num1 * num2);
}

multiplyNums(88, 400, multiply);





// contains checks if an item is present inside of the given array/list.
// Pass true to the callback if it is, otherwise pass false.
function contains(item, list, cb) {
  return cb(item, list);
}

function containsInList(item, list) {
  console.log(list.includes(item));
}

contains('Gum', items, containsInList);





/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
