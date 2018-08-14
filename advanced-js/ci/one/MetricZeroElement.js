// MxN metrics 
// if an element is zero , then make that row/column to zero
let rowsIdentified = []
let columnsIdentified = []

let ZeroMetrics = (metrics) => {
    for (let i = 0; i < metrics.length; i++) {
        for (let j = 0; j < metrics[i].length; j++) {
            if (metrics[i][j] === 0) {
                console.log(`Identified 0 at position [${i},${j}]`)

                // Another method
                rowsIdentified.push(i)
                columnsIdentified.push(j)
                // DUMMY_VAL = -222
                // set entire row to DUMMY_VAL
                for (let k = 0; k < metrics[i].length; k++) {
                    metrics[i][k] = -222
                }
                // set entire row to DUMMY_VAL
                for (let k = 0; k < metrics.length; k++) {
                    metrics[k][j] = -222
                }
            }
        }
        console.log()
    }
}

let printMetrics = (metrics) => {
    for (let i = 0; i < metrics.length; i++) {
        for (let j = 0; j < metrics[i].length; j++) {
            // console.log(metrics[i][j])
            if (metrics[i][j] === -222)
                process.stdout.write("\t " + 0)
            else
                process.stdout.write("\t " + metrics[i][j])
        }
        console.log()
    }
}

metricOne = [
    [1, 2, 3, 4],
    [6, 34, -12, 3],
    [6, 0, -12, 3]
]
metricsTwo = [[1, 1, 1, 1],
[1, 1, 1, 1],
[1, 0, 1, 1],
[1, 1, 1, 1],
[1, 1, 1, 1],
[1, 1, 1, 1]
]

module.exports = () => {
    printMetrics(metricOne)
    ZeroMetrics(metricOne)
    printMetrics(metricOne)

    console.log("MetricsTwo")

    printMetrics(metricsTwo)
    ZeroMetrics(metricsTwo)
    printMetrics(metricsTwo)

}
