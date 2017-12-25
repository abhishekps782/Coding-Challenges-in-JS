// check if every letter in the given matrix is a vowel
function allVowels(matrix) {
    return matrix.every(row => row.every(letter => 'aeiou'.indexOf(letter) !== -1));
}

function VowelSquare(strArr) { 
    var matrix = strArr.map(row => row.split(''));
    console.log(strArr + '--->'+ matrix)
    for (var row = 0; row < matrix.length - 1; row++) {
        for (var column = 0; column < matrix[0].length - 1; column++) {
            // test with sliding windows of 2x2 sub-matrix
            var subMatrix = matrix.slice(row, row + 2).map(rowArr => rowArr.slice(column, column + 2));
            if (allVowels(subMatrix)) {
                return row + '-' + column;
            }
        }
    }
    
    return 'not found';
}
   
// keep this function call here 
VowelSquare(["aque","qrst","uvwx"]);