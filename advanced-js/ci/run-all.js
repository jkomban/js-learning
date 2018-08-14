const fs = require('fs')
const path = require('path')

// const chapterOne = [];
// chapterOne.push(require('./one/IsUnique'))  //1.1
// chapterOne.push(require('./one/StringReverse')) //1.2
// chapterOne.push(require('./one/removeDup')) //1.3
// chapterOne.push(require('./one/Palindrome')) //1.4
// chapterOne.push(require('./one/URLify')) //1.5
// chapterOne.push(require('./one/MetricsRotate')) //1.6
// chapterOne.push(require('./one/MetricZeroElement')) //1.7
// chapterOne.push(require('./one/IsReverseString')) //1.8
// chapterOne.push(require('./one/IsSubString')) //1.8
// chapterOne.push(require('./one/StringCount')) //from other
// chapterOne.forEach(q => q.call())

const chapterTwo = [];
// chapterTwo.push(require('./LinkedList/RemoveDuplicates')) // 2.1
// chapterTwo.push(require('./LinkedList/NthLargest')) // 2.2
// chapterTwo.push(require('./LinkedList/RemoveXthElement'))
// chapterTwo.push(require('./LinkedList/addNumbers'))
chapterTwo.push(require('./LinkedList/CircularElement'))
chapterTwo.forEach(q => q.call())




// let cwd = __dirname
// let filesList = []

// fs.readdir(cwd, (err, files) => {
//     console.log("Inside ", files)

//     // fs.lstat(file, (err, stat) => {
//     //     console.log(stat, stat.isFile())
//     // })

//     files.every((file) => {
//         let fullFile = cwd + '\\' + file

//         fs.lstat(fullFile, (err, stat) => {
//             if (err)
//                 console.log(err)

//             if (stat.isDirectory() === true) {
//                 // Get all files inside that and require dynamically and execute
//                 console.log("Is a directory ", fullFile)
//                 fs.readdir(fullFile, (err, files) => {
//                     files.every((file) => {
//                         let childFullFile = fullFile + '\\' + file
//                         console.log(childFullFile)
//                         let funct = require(childFullFile)
//                         funct.call()
//                         return true
//                     })
//                 })
//             }
//         })

//         return true
//     })
// })