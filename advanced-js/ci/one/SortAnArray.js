
function test() {
    let oneArray = [4, 7, 1, 11, 6, 5, 2]
    for (let k = 0; k < oneArray.length; k++)
        process.stdout.write(`${oneArray[k]} `)
    console.log(`\n`)
    for (let i = 0; i < oneArray.length; i++) {
        console.log(`Outer Array ${oneArray[i]}`)
        for (let j = i + 1; j < oneArray.length; j++) {
            if (oneArray[i] < oneArray[j]) {
                let temp = oneArray[j]
                oneArray[j] = oneArray[i]
                oneArray[i] = temp
                console.log(`\t ${oneArray[i]} ${oneArray[j]}`)
            }
            for (let k = 0; k < oneArray.length; k++)
                process.stdout.write(`\t${oneArray[k]} `)
            console.log(`\n`)
        }
        for (let k = 0; k < oneArray.length; k++)
            process.stdout.write(`\t\t${oneArray[k]} `)
        console.log(`\n`)

    }
}

module.exports = test