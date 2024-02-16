const QuickSort = (origArr) => {
    if (origArr.length <= 1) {
        return origArr
    } else {
        var left = []
        var right = []
        var newArr = []
        var pivot = origArr.pop()
        var length = origArr.length
        for (let i = 0; i < length; i++) {
            if (origArr[i] <= pivot) {
                left.push(origArr[i])
            } else {
                right.push(origArr[i])
            }
        }
        return newArr.concat(QuickSort(left),pivot,QuickSort(right))
    }
}

var myArray = [13, 50, 2, 45, -1, 74, 11]
var arraySorted= QuickSort(myArray)
console.log(arraySorted);