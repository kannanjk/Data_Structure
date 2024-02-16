// const QuickSort = (origArr) => {
//     if (origArr.length <= 1) {
//         return origArr
//     } else {
//         var left = []
//         var right = []
//         var newArr = []
//         var pivot = origArr.pop()
//         var length = origArr.length
//         for (let i = 0; i < length; i++) {
//             if (origArr[i] <= pivot) {
//                 left.push(origArr[i])
//             } else {
//                 right.push(origArr[i])
//             }
//         }
//         return newArr.concat(QuickSort(left),pivot,QuickSort(right))
//     }
// }

// var myArray = [13, 50, 2, 45, -1, 74, 11]
// var arraySorted= QuickSort(myArray)
// console.log(arraySorted);


const pivot = (arr, start, end = arr.length - 1) => {
    const swap = (array, i, j) => {
        let temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }
    let pivot = arr[start]
    let swapIndex = start

    for (let i = start + 1; i <= end; i++) {
        if (pivot > arr[i]) {
            swapIndex++
            swap(arr, swapIndex, i)
        }
    }
    swap(arr, start, swapIndex)
    return swapIndex
}

const sort = (arr, left = 0, right = arr.length - 1) => {
    if (left < right) {
        let pivotIndex = pivot(arr, left, right)
        sort(arr, left, pivotIndex - 1)
        sort(arr, pivotIndex + 1, right)
    }
    return arr
}


console.log(sort([1, 5, 6, 3, 76, 34, -3]));