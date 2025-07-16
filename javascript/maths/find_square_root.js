// given a number n, find the square root of the number
// Time Complexity: O(sqrt(n))
// Space Complexity: O(1)
function findSquareRoot(n) {
    for (let i = 1; i * i <= n; i++) {
        if (i * i === n) {
            return i;
        }
    }
    return -1;
}

// Time Complexity: O(log n)
// Space Complexity: O(1)
function findSquareRootBinarySearch(n) {
    let low = 1;
    let high = n;
    let ans = -1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let midSquare = mid * mid;
        if (midSquare === n) {
            return mid;
        } else if (midSquare < n) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return ans;
}

console.log(findSquareRoot(16));
console.log(findSquareRootBinarySearch(16));