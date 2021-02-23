
// You should implement your task here.

module.exports = function towelSort (matrix) {
  
  if(matrix === undefined){
    return []
  } else {
  
  let arr = [];
  matrix.forEach(function(item, index) {
      
  if(index % 2 !== 0) {
     return item.reverse();
  }
     
});
     for(let element of matrix) {
let newMatrix = element;
for(let newElement of newMatrix) {
  arr.push(newElement)
}
}
return arr;
  }
}
