const bubbleSortAlgo = (arrTest) => {
    var len = arrTest.length, i, j
    for (i = 0; i < len; i++) {
        for (j = 0; j < len - i; j++) {
            if (arrTest[j] < arrTest[j + 1]) {
                var temp = arrTest[j]
                arrTest[j]=arrTest[j+1]
                arrTest[j+1]=temp
            }
        }
    }
    return arrTest
}

console.log(bubbleSortAlgo([4, 8, 1, -100, 4, 9, 2, 5]));