# 🔍 Binary Search Algorithm

Binary Search is an efficient search algorithm for **sorted arrays**. It reduces the search space by half each time, offering **O(log n)** time complexity.

---

## 📚 Table of Contents

- [How It Works](#how-it-works)
- [Features](#features)
- [Code](#code)
  - [Iterative Version](#iterative-version)
  - [Recursive Version](#recursive-version)
- [Example Usage](#example-usage)
- [Requirements](#requirements)
- [When to Use](#when-to-use)
- [Time Complexity](#time-complexity)

---

## 🔧 How It Works

1. Start with the entire array.
2. Find the middle element.
3. Compare it to the target:
   - If equal → return index.
   - If less → search the right half.
   - If greater → search the left half.
4. Repeat until the element is found or the range is empty.

---

## 🚀 Features

- Fast and efficient on large **sorted** arrays.
- Two implementations: Iterative & Recursive.
- Clean and simple JavaScript code.

---

## 💻 Code

### Iterative Version

```javascript
function binarySearchIterative(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }

  return -1;
}
```
### Recursive Version


````javascript
function binarySearchRecursive(arr, target, left = 0, right = arr.length-1 ){
    if (left > right) {
        return "Element is not Present in this array"
    }
    const mid = Math.floor((left+right)/2);

    if (arr[mid] == target) {
        return `Element Found at ${mid} `
    } else if(arr[mid] < target) {
        return binarySearchRecursive(arr, target, left=mid+1, right)
    } else if(arr[mid] > target){
        return binarySearchRecursive(arr, target, left, right = mid-1)
    }

}
````

### 📊 Example Usage

```javascript   
const arr = [1,2,3,5,7,9,10,13,16,19]
const target = 160;
console.log(`${target} is present at ${binarySearchIterative(arr,target)}`);
console.log(binarySearchRecursive(arr,target));
```

### 🛠️ Requirements

- Input array must be sorted in ascending or descending order.

### When to Use
 - When working with large, sorted datasets
- When performance matters (O(log n) vs. O(n) for linear search)

### Time Complexity
- Best Case: O(1) (target is the middle element)
- Average Case: O(log n)
- Worst Case: O(log n)