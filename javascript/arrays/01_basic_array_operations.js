/**
 * Basic Array Operations in JavaScript
 * 
 * This file demonstrates fundamental array operations that every programmer should know.
 * Arrays in JavaScript are dynamic, meaning they can grow and shrink in size.
 */

// 1. Creating Arrays
console.log('\n1. Creating Arrays:');
// Method 1: Using array literal
const fruits = ['apple', 'banana', 'orange'];
console.log('Array literal:', fruits);

// Method 2: Using Array constructor
const numbers = new Array(1, 2, 3, 4, 5);
console.log('Array constructor:', numbers);

// Method 3: Creating an empty array of specific size
const emptyArray = new Array(3); // Creates array with 3 empty slots
console.log('Empty array:', emptyArray);

// 2. Accessing Elements
console.log('\n2. Accessing Elements:');
console.log('First element:', fruits[0]); // Output: apple
console.log('Last element:', fruits[fruits.length - 1]); // Output: orange
console.log('Array length:', fruits.length); // Output: 3

// 3. Adding Elements
console.log('\n3. Adding Elements:');

// Add to end of array
fruits.push('grape');
console.log('After push:', fruits);

// Add to beginning of array
fruits.unshift('mango');
console.log('After unshift:', fruits);

// Add at specific index
fruits.splice(2, 0, 'pear'); // Insert 'pear' at index 2
console.log('After splice insert:', fruits);

// 4. Removing Elements
console.log('\n4. Removing Elements:');

// Remove from end
const lastFruit = fruits.pop();
console.log('Removed last element:', lastFruit);
console.log('After pop:', fruits);

// Remove from beginning
const firstFruit = fruits.shift();
console.log('Removed first element:', firstFruit);
console.log('After shift:', fruits);

// Remove at specific index
const removedElements = fruits.splice(1, 1); // Remove 1 element at index 1
console.log('Removed element at index 1:', removedElements);
console.log('After splice remove:', fruits);

// 5. Searching Elements
console.log('\n5. Searching Elements:');

// Find index of an element
const appleIndex = fruits.indexOf('apple');
console.log('Index of apple:', appleIndex);

// Check if element exists
const hasBanana = fruits.includes('banana');
console.log('Has banana?:', hasBanana);

// 6. Iterating Over Arrays
console.log('\n6. Iterating Over Arrays:');

// Method 1: for...of loop (recommended for simple iteration)
console.log('Using for...of:');
for (const fruit of fruits) {
    console.log(fruit);
}

// Method 2: forEach method
console.log('\nUsing forEach:');
fruits.forEach((fruit, index) => {
    console.log(`${index}: ${fruit}`);
});

// Method 3: Traditional for loop (when you need index)
console.log('\nUsing traditional for:');
for (let i = 0; i < fruits.length; i++) {
    console.log(`${i}: ${fruits[i]}`);
}

/**
 * Common Array Methods Worth Noting:
 * 
 * 1. map() - Creates a new array with the results of calling a function for every array element
 * 2. filter() - Creates a new array with all elements that pass the test
 * 3. reduce() - Reduces an array to a single value (from left-to-right)
 * 4. sort() - Sorts the elements of an array
 * 5. reverse() - Reverses the order of the elements in an array
 * 
 * Time Complexity Analysis:
 * - Accessing elements: O(1)
 * - Insertion/Removal at end (push/pop): O(1)
 * - Insertion/Removal at beginning (unshift/shift): O(n)
 * - Searching: O(n)
 * - Accessing length: O(1)
 */

// Example of practical usage
function findAndUpdateFruit(fruits, oldFruit, newFruit) {
    const index = fruits.indexOf(oldFruit);
    if (index !== -1) {
        fruits[index] = newFruit;
        return true;
    }
    return false;
}

// Test the function
console.log('\nTesting practical usage:');
console.log('Original array:', fruits);
const updated = findAndUpdateFruit(fruits, 'apple', 'kiwi');
console.log('Update successful?:', updated);
console.log('Updated array:', fruits); 