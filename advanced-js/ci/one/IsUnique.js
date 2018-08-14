

let IsUnique = function (word) {
    return word.split('')
        .sort((a, b) => a > b)
        .findIndex((val, index, fullArray) => val === fullArray[index + 1]) < 0
}

let IsUniqueDS = function (word) {
    for (let i = 0; i < word.length - 1; i++) {
        for (let j = i + 1; j < word.length; j++) {
            if (word[i] === word[j])
                return false
        }
    }
    return true
}



let testIt = () => {
    let words = ['bad work', 'good work', 'sdfghjj'];
    console.log(`\n\n***************** Is Unique String *****************`)
    words.forEach((word) => {
        console.log(`\tIsUnique for [${word}] => ${IsUnique(word)}`)
        console.log(`\tIsUniqueDS for [${word}] => ${IsUniqueDS(word)}`)
    })
}


module.exports = testIt
