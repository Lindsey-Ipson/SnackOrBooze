function unroll(squareArray) {

  if (squareArray.length === 0) return [];

  let result = [];
  let startRow = 0;
  let endRow = squareArray.length - 1;
  let startCol = 0;
  let endCol = squareArray[0].length - 1;

  while (startRow <= endRow && startCol <= endCol) {
    
    // top row
    for (let i = startCol; i <= endCol; i++) {
      result.push(squareArray[startRow][i]);
    }
    startRow++;

    // right column
    for (let i = startRow; i <= endRow; i++) {
      result.push(squareArray[i][endCol]);
    }
    endCol--;

    // bottom row
    if (startRow <= endRow) {
      for (let i = endCol; i >= startCol; i--) {
        result.push(squareArray[endRow][i]);
      }
      endRow--;
    }

    // left column
    if (startCol <= endCol) {
      for (let i = endRow; i >= startRow; i--) {
        result.push(squareArray[i][startCol]);
      }
      startCol++;
    }
  }
  return result
}


module.exports = unroll;


const square = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
];

const smallerSquare = [
  ["a", "b", "c"],
  ["d", "e", "f"],
  ["g", "h", "i"]
];

// console.log(unroll(square)); // [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]
// console.log(unroll(smallerSquare)); // ["a", "b", "c", "f", "i", "h", "g", "d", "e"]