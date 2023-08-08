
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (Boolean(matrix) === false)  {return []}
  
  matrix.map((el, i) => {
  if (i % 2 !== 0) {matrix[i].reverse()}
  if (i )
  return matrix[i]
})

return matrix.flat()
}
