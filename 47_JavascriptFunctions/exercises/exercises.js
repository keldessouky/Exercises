/**
 * Returns true if a given month, day, and hemisphere is in summer; otherwise returns false
 * @param {int} month 
 * @param {int} day 
 * @param {string} hemisphere 
 */
function isSummer(month, day = 1, hemisphere = 'northern') {
  if (month === 7 || month === 8) {
    return hemisphere === 'northern';
  } else if (month === 6 && day >= 20) {
    return hemisphere === 'northern';
  } else if (month === 9 && day <= 20) {
    return hemisphere === 'northern';
  } else if (month === 1 || month === 2) {
    return hemisphere === 'southern';
  } else if (month === 12 && day >= 20) {
    return hemisphere === 'southern';
  } else if (month === 3 && day <= 20) {
    return hemisphere === 'southern';
  } else {
    return false;
  }
}

/**
 * Write a function called isAdmitted. It will check entrance
 * scores and return true if the students is admitted and
 * false if rejected. It takes three parameters:
 *
 *     * gpa
 *     * satScore (optional)
 *     * recommendation (optional)
 *
 * We admit them--return true--if:
 * gpa is above 4.0 OR
 * SAT score is above 1300 OR
 * gpa above 3.0 and they have a recommendation OR
 * SAT score is above 1200 and they have a recommendation
 * OTHERWISE reject it
 *
 * @param {number} gpa the GPA of the student, between 4.2 and 1.0
 * @param {number} [satScore=0] the student's SAT score
 * @param {boolean} [recommendation=false] does the student have a recommendation
 * @returns {boolean} true if they are admitted
 */

 function isAdmitted(gpa, satScore, recommendation) {

  if ((gpa > 4.0 || satScore > 1300) || (gpa > 3.0 || satScore > 1200) && recommendation) {
    return true;
  } else {
    return false;
  }
 }

/**
 * Write a function so that it takes an anonymous function and
 * uses that in `unfilteredArray` filter function. Return the result.
 *
 * @param {function} filterFunction the function to filter with
 * @returns {number[]} the filtered array
 */  

function useParameterToFilterArray(func) {
  let unfilteredArray = [1, 2, 3, 4, 5, 6];   
  return unfilteredArray.filter(func);
 }  


/**
 * Write a function called makeNumber to take two strings
 * of digits, concatenate them together, and then return
 * the value back as a number.
 *
 * So if two strings are passed in "42293" and "443", then this function
 * should return the number 42293443.
 *
 * @param {string} first the first string of digits to concatenate
 * @param {string} [second=''] the second string of digits to concatenate
 * @returns {number} the resultant number
 */

 function makeNumber (param1, param2) {
   return parseInt(param1 + param2);
 } 


/**
 * Write a function that takes an unknown number of parameters
 * and adds them all together. Return the result.
 *
 * @param {...number} num a series of numbers to add together
 * @returns {number} the sum of all the parameters (or arguments)
 */

 function addAll() {
   let total = 0;
   for (let i = 0; i < arguments.length; i++) {
      total += arguments[i];
   }

   return total;
 }

/*
 * Write and document a function called makeHappy that takes
 * an array and prepends 'Happy ' to the beginning of all the
 * words and returns them as a new array. Use the `map` function.
 */

 /**
  * Adds "Happy " to each word in an array, returns a new array.
  * @param {string[]} words 
  */
function makeHappy(words) {
  let prependHappy = words.map( (word) => {
    return "Happy " + word;
  });

  return prependHappy;
}

/*
 * Write and document a function called getFullAddressesOfProperties
 * that takes an array of associative arrays containing the
 * following keys:
 *     * streetNumber
 *     * streetName
 *     * streetType
 *     * city
 *     * state
 *     * zip
 *
 * and returns an array of strings that turns the associative array
 * into mailing addresses in the form of:
 *     streetNumber streetName streetType city state zip
 *
 * Use `map` and an anonymous function.
 */

 
 function getFullAddressesOfProperties(association) {

    return association.map( (address) => {
      return '${streetNumber} ${streetName} ${streetType} ${city} ${state} ${zip}';
    });
 }  


/*
 * Create and document a function called findLargest.
 *
 * Using `forEach`, find the largest element in an array.
 * It should work for strings and numbers.
 */

 function findLargest(input) {
  let largest = input[0];

   input.forEach(element => {
     if (largest < element) {
       largest = element;
     }
   });

   return largest;
 }

/*
 * CHALLENGE
 * Create and document a function called getSumOfSubArrayValues.
 *
 * Take an array of arrays and add up all sub values and return
 * the sum. For instance, if you got this array as a parameter:
 * [
 *   [1, 2, 3],
 *   [2, 4, 6],
 *   [5, 10, 15]
 * ];
 *
 * You would return 48. To do this, you will use two nested `reduce`
 * calls with two anonymous functions.
 *
 * Read the tests to verify you have the correct behavior.
 */
