/**
 * Advanced Array Methods in JavaScript
 * 
 * This file demonstrates commonly used array methods that are essential for
 * both everyday programming and technical interviews.
 */

// Sample data for demonstration
const numbers = [1, 2, 3, 4, 5];
const users = [
    { id: 1, name: 'John', age: 25 },
    { id: 2, name: 'Jane', age: 30 },
    { id: 3, name: 'Bob', age: 20 },
    { id: 4, name: 'Alice', age: 35 }
];

// 1. map() - Transform each element of an array
console.log('\n1. map() - Transform array elements:');
const doubledNumbers = numbers.map(num => num * 2);
console.log('Doubled numbers:', doubledNumbers);

// Practical example: Extract names from users
const userNames = users.map(user => user.name);
console.log('User names:', userNames);

// 2. filter() - Create a new array with elements that pass a test
console.log('\n2. filter() - Filter array elements:');
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log('Even numbers:', evenNumbers);

// Practical example: Find users above certain age
const adults = users.filter(user => user.age >= 25);
console.log('Adult users:', adults);

// 3. reduce() - Reduce array to a single value
console.log('\n3. reduce() - Reduce array to single value:');
const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log('Sum of numbers:', sum);

// Practical example: Calculate average age
const averageAge = users.reduce((acc, user) => acc + user.age, 0) / users.length;
console.log('Average age:', averageAge);

// 4. sort() - Sort array elements
console.log('\n4. sort() - Sort array elements:');
const unsortedNumbers = [3, 1, 4, 1, 5, 9, 2, 6, 5];
const sortedNumbers = [...unsortedNumbers].sort((a, b) => a - b);
console.log('Sorted numbers:', sortedNumbers);

// Practical example: Sort users by age
const sortedUsers = [...users].sort((a, b) => a.age - b.age);
console.log('Users sorted by age:', sortedUsers);

// 5. slice() - Extract portion of array
console.log('\n5. slice() - Extract portion of array:');
const firstThree = numbers.slice(0, 3);
console.log('First three numbers:', firstThree);

// 6. splice() - Add/remove elements at specific position
console.log('\n6. splice() - Modify array at specific position:');
const fruits = ['apple', 'banana', 'orange'];
fruits.splice(1, 1, 'grape', 'kiwi'); // Remove 1 element at index 1, add 'grape' and 'kiwi'
console.log('Modified fruits:', fruits);

// 7. find() - Find first element that matches condition
console.log('\n7. find() - Find first matching element:');
const firstAdult = users.find(user => user.age >= 25);
console.log('First adult user:', firstAdult);

// 8. some() - Check if any element passes test
console.log('\n8. some() - Check if any element passes test:');
const hasAdult = users.some(user => user.age >= 25);
console.log('Has adult users?:', hasAdult);

// 9. every() - Check if all elements pass test
console.log('\n9. every() - Check if all elements pass test:');
const allAdults = users.every(user => user.age >= 25);
console.log('All users are adults?:', allAdults);

// 10. flat() - Flatten nested arrays
console.log('\n10. flat() - Flatten nested arrays:');
const nestedArray = [1, [2, 3], [4, [5, 6]]];
const flattenedArray = nestedArray.flat(2); // 2 is the depth level
console.log('Flattened array:', flattenedArray);

// 11. flatMap() - Map and flatten arrays
console.log('\n11. flatMap() - Map and flatten arrays:');
const phrases = ['hello world', 'good morning'];
const words = phrases.flatMap(phrase => phrase.split(' '));
console.log('Words:', words);

// Interview-Relevant Examples

// 1. Find duplicates in array
function findDuplicates(arr) {
    return arr.filter((item, index) => arr.indexOf(item) !== index);
}
console.log('\nInterview Example 1 - Find duplicates:');
console.log('Duplicates:', findDuplicates([1, 2, 3, 2, 4, 3, 5]));

// 2. Group objects by property
function groupBy(arr, key) {
    return arr.reduce((acc, obj) => {
        const value = obj[key];
        if (!acc[value]) {
            acc[value] = [];
        }
        acc[value].push(obj);
        return acc;
    }, {});
}
console.log('\nInterview Example 2 - Group by age:');
console.log('Users grouped by age:', groupBy(users, 'age'));

// 3. Find intersection of two arrays
function findIntersection(arr1, arr2) {
    return arr1.filter(item => arr2.includes(item));
}
console.log('\nInterview Example 3 - Find intersection:');
console.log('Intersection:', findIntersection([1, 2, 3, 4], [3, 4, 5, 6]));

// 4. Remove falsy values from array
function removeFalsy(arr) {
    return arr.filter(Boolean);
}
console.log('\nInterview Example 4 - Remove falsy values:');
console.log('Without falsy:', removeFalsy([0, 1, false, 2, '', 3, null, undefined, 4]));

/**
 * Time Complexity Analysis:
 * 
 * 1. map() - O(n)
 * 2. filter() - O(n)
 * 3. reduce() - O(n)
 * 4. sort() - O(n log n)
 * 5. slice() - O(n)
 * 6. splice() - O(n)
 * 7. find() - O(n)
 * 8. some() - O(n)
 * 9. every() - O(n)
 * 10. flat() - O(n)
 * 11. flatMap() - O(n)
 * 
 * Space Complexity:
 * - All methods except sort() and splice() create new arrays: O(n)
 * - sort() and splice() modify in place: O(1)
 */ 