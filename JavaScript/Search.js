// Linear Search....
// const LinearSearch = (arr, val) => {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === val) {
//             console.log(true);
//         } else {
//             console.log(false);
//         }
//     }
// }


// Binary Search...
const BinarySearch = (arr, val) => {
    let start = 0
    let end = arr.length - 1
    let middle = Math.floor((start + end) / 2)
    while (arr[middle] !== val && start <= end) {
        if (arr[middle] < val) {
            start = middle + 1
        } else {
            end = middle - 1
        }
        middle = Math.floor((start + end) / 2)
    }
    return arr[middle] === val ? middle : -1
}

console.log(BinarySearch([1, 5, 2,6,4, 7, 3, 8,, 1, 5, 2, 3], 2));