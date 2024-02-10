const ReverseString = (str) => {
    return str.split("").reverse().join("")
}

const reversedStrInSentence = (str) => {
    let strArr = str.split(" ")
    let reversedStrInSentenceOutput = []
    for (let i = 0; i < strArr.length; i++) {
        reversedStrInSentenceOutput = [
            ...reversedStrInSentenceOutput,
            ' ',
            strArr[i].split('').reverse().join('')
        ]
    }
    return reversedStrInSentenceOutput.join('')
}


const palindrom = (str) => {
    const val = str.split('').reverse().join('')
    return val === str ? true : false
}


const anagram = (str1, str2) => {
    return str1.split('').sort().join('') === str2.split('').sort().join('')
        ? "Is Anagram"
        : "Not Anagram"
}