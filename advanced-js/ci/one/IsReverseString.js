
let IsReverseString = (word, rWord) => {
    console.log(`IsReverseString word[${word} vs ${rWord}]`)
    if (word.length !== rWord.length) return false

    for (let i = 0; i < word.length; i++) {
        if (word[i] !== rWord[word.length - i - 1]) return false
    }
    return true
}


module.exports = () => {
    console.log(IsReverseString("abcd", "dcba"))
    console.log(IsReverseString("abcde", "dcba"))
}
