// remove duplicate characters in an array of characters
// Do not use extra array
const assert = require('assert')

let RemoveDup = (word) => {
    return word.split('')
        .filter((ele, index, fullArray) => {
            return fullArray.indexOf(ele) === index
        })
        .join('')
}

let RemoveDupDS = (word) => {
    let wordArray = [...word.split('')]

    for (let i = 0; i < wordArray.length - 1; i++) {
        for (let j = i + 1; j < wordArray.length; j++) {
            if (wordArray[i] === wordArray[j]) {
                wordArray[j] = ''
            }
        }
    }
    return wordArray.join('')
}

module.exports = () => {
    let words = ['bad work', 'good work', 'sdfghjj'];
    console.log(`\n\n***************** RemoveDuplicate characters from String *****************`)
    words.forEach((word) => {
        console.log(`\tRemoveDup for [${word}] => ${RemoveDup(word)}`)
        console.log(`\tRemoveDupDS for [${word}] => ${RemoveDupDS(word)}`)
    })
}