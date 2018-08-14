// This is to MxN rotate the metrics 90 degree clockwise

let turn90right = (metrics) => {
    console.log("******** Rotated Metrics ********** ")
    rotatedMetrics = new Array()
    for (let i = 0; i < metrics.length; i++) {
        rotatedMetrics.push(new Array())
        for (let j = metrics[i].length - 1; j >= 0; j--) {
            // process.stdout.write(`\t    ${metrics[j][i]}`)
            // if (rotatedMetrics.length === 0)
            rotatedMetrics[i].push(metrics[j][i])
            // else
            //     rotatedMetrics[

        }
    }
    printMetrics(rotatedMetrics)

}



let printMetrics = (metrics) => {
    for (let i = 0; i < metrics.length; i++) {
        for (let j = 0; j < metrics[i].length; j++) {
            process.stdout.write("\t " + metrics[i][j])
        }
        console.log()
    }
}

metricsOne = [
    [1, 1, 1, 1],
    [2, 2, 2, 2],
    [3, 3, 3, 3],
    [4, 4, 4, 4],
]

metricsOne = [
    [1, 1, 1, 1],
    [2, 2, 2, 2],
    [3, 3, 3, 3],
    [4, 4, 4, 4],
]

module.exports = () => {
    printMetrics(metricsOne)
    turn90right(metricsOne)
}