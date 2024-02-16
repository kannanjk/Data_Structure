const mergSort = (arr1, arr2) => {
    var i = 0
    var j = 0
    var result = []
    while (i < arr1.length || j < arr2.length) {
        if (i === arr1.length) {
            result.push(arr2[j])
            j++
        } else if (j === arr2.length || arr1[i] <= arr2[j]) {
            result.push(arr1[i])
            i++
        } else {
            result.push(arr2[j])
            j++
        }
    }
    return result
}

console.log(mergSort([1, 44, 6], [84, 7, 5]));
