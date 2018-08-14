let stringReverse = function (word) {
    return word.split('').reverse().join('')
}


let stringReverseDS = function (word) {
    reversedWord = []
    word.split('').forEach((el, indx, fullArray) => {
        reversedWord.push(fullArray[fullArray.length - indx - 1])
    });
    return reversedWord.join('')
}

module.exports = () => {
    let words = ['hindi', 'english', 'malayalam'];
    console.log(`\n\n***************** StringReverse *****************`)
    words.forEach(word => {
        console.log(`\t StringReverse for [${word}] => [${stringReverse(word)}]`)
        console.log(`\t StringReverseDS for [${word}] => [${stringReverseDS(word)}]`)
    })
}