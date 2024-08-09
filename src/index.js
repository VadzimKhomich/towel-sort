
// You should implement your task here.

module.exports = function towelSort (matrix = []) {
	let resultArray = []

for (let i = 0; i < matrix.length; i++) {
    if( i === 0 || i % 2 === 0) {
       resultArray.push(...matrix[i])
    } else {
        resultArray.push(...matrix[i].reverse())
    }
}
return resultArray
}
