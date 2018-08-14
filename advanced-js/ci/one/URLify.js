// Replace all empty space with %20
let URLify = (sentense) => {
    return sentense.replace(/ /g, '%20')
}

let URLifyDS = (sentense) => {
    return sentense.split(' ').join('%20')
}

let URLifyDSPure = (sentense) => {
    let URL;
    sentense
        .split(' ')
        .forEach((ele, index) => {
            URL = index === 0 ? ele : URL + '%20' + ele
        })
    return URL
}


module.exports = () => {
    let sentense = 'Hello my dear world';
    console.log(`\n\n***************** URLify  *****************`)

    console.log(`\tURLify for [${sentense}] => ${URLify(sentense)}`)
    console.log(`\tURLifyDS for [${sentense}] => ${URLifyDS(sentense)}`)
    console.log(`\tURLifyDSPure for [${sentense}] => ${URLifyDSPure(sentense)}`)

}