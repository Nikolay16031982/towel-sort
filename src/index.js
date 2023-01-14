
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(!matrix)
  return []
  if(!matrix.length)
  return []
  return  matrix.map((elem,i)=>{
    if(i%2)
    return elem.reverse()
    return elem
   }).join(",").split(",").map((elem)=>parseInt(elem))
}