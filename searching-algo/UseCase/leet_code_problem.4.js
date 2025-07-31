/**
 * Median of Two Sorted Arrays
Solved
Hard
Topics
premium lock icon
Companies
Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).

 

Example 1:

Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
Example 2:

Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
 

Constraints:

nums1.length == m
nums2.length == n
0 <= m <= 1000
0 <= n <= 1000
1 <= m + n <= 2000
-106 <= nums1[i], nums2[i] <= 106
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const newMerge1 = [...nums1, ...nums2];
    const newMerge = newMerge1.sort((a, b) => a - b);
    let left = 0;
    let right = newMerge.length -1;
    let result = 0;
    if(newMerge.length%2 == 0){
        let mid = Math.floor((left+right)/2);
        return result = (newMerge[mid]+newMerge[mid+1])/2;
    }
    else{
        let mid = Math.floor((left+right)/2);
        return result = newMerge[mid];
    }
};