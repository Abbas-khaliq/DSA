/**
 * Common Array Algorithms in JavaScript
 * 
 * This file demonstrates essential array algorithms that are frequently
 * asked in technical interviews and used in real-world applications.
 */

// 1. Array Rotation
console.log('\n1. Array Rotation:');

// Rotate array right by k positions
function rotateRight(arr, k) {
    k = k % arr.length; // Handle cases where k > arr.length
    return [...arr.slice(-k), ...arr.slice(0, -k)];// explanation: arr.slice(-k) takes the last k elements of the array and arr.slice(0, -k) takes the rest of the array. Then it concatenates them.
}

// Rotate array left by k positions
function rotateLeft(arr, k) {
    k = k % arr.length; // Handle cases where k > arr.length
    return [...arr.slice(k), ...arr.slice(0, k)];// explanation: arr.slice(k) takes the first k elements of the array and arr.slice(0, k) takes the rest of the array. Then it concatenates them.
}

// Rotate using reverse
function rotateRightUsingReverse(arr, k) {
    k = k % arr.length; // Handle cases where k > arr.length
    reverse(arr, 0, arr.length - 1);
    reverse(arr, 0, k - 1);
    reverse(arr, k, arr.length - 1);
}

function reverse(arr, start, end) {
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];// explanation: this swaps the elements at the start and end indices.
        start++;
        end--;
    }
}

const arr = [1, 2, 3, 4, 5];
console.log('Original array:', arr);
console.log('Rotated right by 2:', rotateRight(arr, 2));
console.log('Rotated left by 2:', rotateLeft(arr, 2));
console.log('Rotated right by 2 using reverse:', rotateRightUsingReverse(arr, 2));

// 2. Finding Maximum and Minimum
console.log('\n2. Finding Maximum and Minimum:');

// Find maximum and minimum in single pass
function findMinMax(arr) {
    if (arr.length === 0) return { min: null, max: null };

    let min = arr[0];
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) min = arr[i];
        if (arr[i] > max) max = arr[i];
    }

    return { min, max };
}

console.log('Min and Max:', findMinMax([3, 1, 4, 1, 5, 9, 2, 6, 5]));

// 3. Finding Duplicates
console.log('\n3. Finding Duplicates:');

// Find all duplicates in array
function findAllDuplicates(arr) {
    const seen = new Set();
    const duplicates = new Set();

    for (const num of arr) {
        if (seen.has(num)) {
            duplicates.add(num);
        } else {
            seen.add(num);
        }
    }

    return Array.from(duplicates);
}

console.log('All duplicates:', findAllDuplicates([1, 2, 3, 2, 4, 3, 5]));

// 4. Array Intersection and Union
console.log('\n4. Array Intersection and Union:');

// Find intersection of two arrays
function intersection(arr1, arr2) {
    const set1 = new Set(arr1);
    return arr2.filter(x => set1.has(x));
}

// Find union of two arrays
function union(arr1, arr2) {
    return [...new Set([...arr1, ...arr2])];
}

const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];
console.log('Intersection:', intersection(arr1, arr2));
console.log('Union:', union(arr1, arr2));

// 5. Subarray Problems
console.log('\n5. Subarray Problems:');

// Find maximum sum of subarray (Kadane's Algorithm)
// explanation: Kadane's Algorithm is a dynamic programming algorithm that 
// finds the maximum sum of a contiguous subarray in an array.
function maxSubarraySum(arr) {
    let maxSoFar = arr[0];// explanation: this is the maximum sum of the subarray so far.
    let maxEndingHere = arr[0];// explanation: this is the maximum sum of the subarray ending at the current index.

    for (let i = 1; i < arr.length; i++) {
        // explanation: this is the maximum of the current element or the sum of the current element 
        // and the maximum sum of the subarray ending at the previous index.
        maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);
        // explanation: this is the maximum of the maximum sum of the subarray so far 
        // or the maximum sum of the subarray ending at the current index.
        maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }

    return maxSoFar;
}

// Find maximum sum of subarray with subarray. 
// explanation: this is a modified version of Kadane's Algorithm that 
// finds the maximum sum of a contiguous subarray and the subarray itself.
function modifiedKadaneWithSubarray(arr) {
    let maxSoFar = arr[0];
    let currentMax = arr[0];
    let start = 0, end = 0, tempStart = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > currentMax + arr[i]) {
            currentMax = arr[i];
            tempStart = i;
        } else {
            currentMax += arr[i];
        }

        if (currentMax > maxSoFar) {
            maxSoFar = currentMax;
            start = tempStart;
            end = i;
        }
    }

    return {
        maxSum: maxSoFar,
        subarray: arr.slice(start, end + 1)
    };
}


console.log('Maximum subarray sum:', maxSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

// Find subarray with given sum
function subarrayWithSum(arr, targetSum) {
    let start = 0;
    let currentSum = 0;

    for (let end = 0; end < arr.length; end++) {
        currentSum += arr[end];

        while (currentSum > targetSum && start < end) {
            currentSum -= arr[start];
            start++;
        }

        if (currentSum === targetSum) {
            return arr.slice(start, end + 1);
        }
    }

    return null;
}

console.log('Subarray with sum 6:', subarrayWithSum([1, 4, 20, 3, 10, 5], 33));

// 6. Array Partitioning
console.log('\n6. Array Partitioning:');

// Move all zeros to end
function moveZeros(arr) {
    let nonZeroIndex = 0;

    // Move all non-zero elements to front
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            arr[nonZeroIndex++] = arr[i];
        }
    }

    // Fill remaining positions with zeros
    while (nonZeroIndex < arr.length) {
        arr[nonZeroIndex++] = 0;
    }

    return arr;
}

console.log('Move zeros to end:', moveZeros([0, 1, 0, 3, 12]));

// 7. Array Rearrangement
console.log('\n7. Array Rearrangement:');

// Rearrange array in alternating positive and negative numbers
function rearrangeAlternating(arr) {
    const positives = arr.filter(x => x >= 0);
    const negatives = arr.filter(x => x < 0);
    const result = [];

    let i = 0, j = 0;
    while (i < positives.length || j < negatives.length) {
        if (i < positives.length) result.push(positives[i++]);
        if (j < negatives.length) result.push(negatives[j++]);
    }

    return result;
}

console.log('Alternating positive and negative:', rearrangeAlternating([-1, 2, -3, 4, 5, 6, -7, 8, 9]));

// 8. Count the number of elements in the array which have atleast one element greater than itself
console.log('\n8. Count the number of elements in the array which have atleast one element greater than itself:');

function countElementsWithAtLeastOneGreaterElement(arr) {
    let max = Math.max(...arr);
    return arr.filter(x => x !== max).length;
}

function countElementsWithAtLeastOneGreaterElementInSinglePass(arr) {
    let max = arr[0];
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
            count = 1;
        } else if (arr[i] === max) {
            count++;
        }
    }
    return arr.length - count;
}

console.log('Count of elements with at least one greater element:', countElementsWithAtLeastOneGreaterElement([2, 5, 1, 4, 0, 8, 0, 8, 1, 3, 8, 0, 9]));

/**
 * Time Complexity Analysis:
 * 
 * 1. Array Rotation:
 *    - rotateRight/rotateLeft: O(n)
 * 
 * 2. Finding Maximum and Minimum:
 *    - findMinMax: O(n)
 * 
 * 3. Finding Duplicates:
 *    - findAllDuplicates: O(n)
 * 
 * 4. Array Intersection and Union:
 *    - intersection: O(n + m)
 *    - union: O(n + m)
 * 
 * 5. Subarray Problems:
 *    - maxSubarraySum: O(n)
 *    - subarrayWithSum: O(n)
 * 
 * 6. Array Partitioning:
 *    - moveZeros: O(n)
 * 
 * 7. Array Rearrangement:
 *    - rearrangeAlternating: O(n)
 * 
 * Space Complexity:
 * - Most algorithms: O(1) additional space
 * - Some algorithms (like intersection/union): O(n) additional space
 */ 