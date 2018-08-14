let IsPalindrome = (word) => {
    return word === word.split('').reverse().join('')
}

let IsPalindromeDS = word => {
    return word.split('').every((ele, index, fullArray) => fullArray[index] === fullArray[fullArray.length - index - 1])
}


module.exports = () => {
    let words = ['malayalam', 'abadsed', 'abcdedcba'];
    console.log(`\n\n***************** Palindrome  *****************`)
    words.forEach((word) => {
        console.log(`\tIsPalindrome for [${word}] => ${IsPalindrome(word)}`)
        console.log(`\tIsPalindromeDS for [${word}] => ${IsPalindromeDS(word)}`)
    })
}