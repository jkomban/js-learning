let StringCount = (word) => {
    let letterW = {}
    console.log(word)
    for (let i = 0; i < word.length; i++) {

        if (letterW[word[i]] === undefined) {
            letterW[word[i]] = 1
        } else {
            letterW[word[i]] += letterW[word[i]]
        }
    }
    return letterW
}

module.exports = () => {
    console.log(StringCount("aaaaabcdasdsdewrewsdfgdgd"))
}


