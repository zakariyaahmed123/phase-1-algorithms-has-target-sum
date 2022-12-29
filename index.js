function hasTargetSum(array, target) {
for(i=0; i<array.length; i++){
  let comp = array.splice(0, 1); 
  if(array.includes(target-comp)){
    debugger;
    return true
  }
}return false}

/* 
O(n)
*/

/* 
  Add your pseudocode here
should take an array and target number as arguments and return true if any sum of two array elements equals target number.
should return true if the difference of an element in the array and the target number exist in the array.
else should return false
/*
  function hasTargetSum accepts and array and a target as an argument and iterates over that array using a for loop.
  The for loop used the splice method to desctuctively remove the first number in the array and save it to the comp variable.
  The loop subtracts the spliced number from the target number to obtain the difference of those two numbers
  Then using an includes method to determine if the difference of those two numbers exists in the array.
  If so it returns true, if not it reiterates over the array of remaining numbers until it recieves a true statement in which case it returns true or reaches the end of the loop and returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
Footer

