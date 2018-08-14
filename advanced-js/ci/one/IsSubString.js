let IsSubString = (word, subString) => {
    console.log('IsSubString(' + word + ',' + subString + ')=>')
    for (let i = 0; i < word.length - subString.length + 1; i++) {
        let pos = i;
        let j = 0;
        while (word[pos] && subString[j] && word[pos] === subString[j]) {
            // console.log(word[pos], subString[j], word[pos] === subString[j])
            pos++;
            j++;
        }
        // console.log(i, pos, j, (pos - i === subString.length))
        if (pos - i === subString.length) return i + 1
    }
    return -1
}


module.exports = () => {
console.log(IsSubString("abcde", "cde"))
console.log(IsSubString("aaabcde", "abcdf"))
}