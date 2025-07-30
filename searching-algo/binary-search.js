function binarySearchIterative(arr,target){
    let left = 0;
    let right = arr.length -1;

    while(left <= right){
        const mid = Math.floor((left+right)/2);

        if (arr[mid] == target) {
            return mid;
        } else if(arr[mid] > target) {
            right = mid-1;
        }
        else if(arr[mid] < target){
            left = mid+1;
        }
    }
    return -1;
}

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

const arr = [1,2,3,5,7,9,10,13,16,19]
const target = 160;
console.log(`${target} is present at ${binarySearchIterative(arr,target)}`);
console.log(binarySearchRecursive(arr,target));

