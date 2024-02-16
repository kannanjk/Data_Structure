const merg = (arr1, arr2) => {
    var i = 0
    var j = 0
    var result = []
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i])
            i++
        } else {
            result.push(arr2[j])
            j++
        }
    }
    while (i < arr1.length) {
        result.push(arr1[i])
        i++
    }
    while (j < arr2.length) {
        result.push(arr2[j])
        j++
    }
    return result
}

const mergSort = (arr) => {
    if (arr.length <= 1) return arr
    let mid = Math.floor(arr.length / 2)
    let left = mergSort(arr.slice(0, mid))
    let right = mergSort(arr.slice(mid))
    return merg(left, right)
}

console.log(mergSort([1, 44, 6, 84, 7, 5]));
