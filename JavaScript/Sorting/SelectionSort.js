const selectionSort = (arr, compareFun) => {
    for (let i = 0; i < arr.length; i ++) {
        var index = i
        var min = arr[i]
        for (let j = i + 1; j < arr.length; j ++) {
            if (compareFun(min, arr[j]) > 0) {
                min = arr[j]
                index = j
            }
        }
        var temp = arr[i]
        arr[i] = min
        arr[index] = temp
    }
    return arr
}

console.log(selectionSort([9, 15, 2, 44, -1, 36, 1], (a, b) => { return a - b }));
