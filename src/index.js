module.exports = function towelSort (matrix) {

  if (matrix === undefined) {
    return [];
  }
  let sortArr = [];
    for (let i = 0; i < matrix.length; ++i) {
      for (let j = 0; j < matrix[i].length; ++j) {
        sortArr.push(i % 2 === 0 ? matrix[i][j] : matrix[i][matrix[i].length - j - 1]);
      }
    }
return sortArr;

}
