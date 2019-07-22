/**
 * Given a matrix M*N find all zeros in it and mark corresponding row and column of zero element accordinngly
 * @param arr
 */
function preProcessMatrix(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            // if an element in the matrix is 0
            if (arr[i][j] === 0) {
                // if element is (2,3), then mark (2,0) as row and (0,3) as col, meaning in next run mark entire 2nd row as zeros and
                // entire 3rd column as zeros
                if (!(i === 0 && j === 0)) {
                    arr[i][0] = typeOfCell.ROW;
                    arr[0][j] = typeOfCell.COL;
                }
                // if element (0,0) = 0, mark it as row_col, meaning to mark entire 0th row and 0th column zero
                else {
                    arr[i][j] = typeOfCell.ROW_COL;
                }
            }
        }
    }
}

function zeroMatrix(arr) {
    preProcessMatrix(arr);
    console.log('matrix after pre processing is ', arr);
    markMatrixZero(arr);
    console.log('final matrix after zeroing is ', arr);
}

function markMatrixZero(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] === 'row') {
                markRowZero(arr, i);
                break;
            } else if (arr[i][j] === 'col') {
                markColumnZero(arr, j);
            } else {
                markRowColumnZero(arr);
            }
        }
    }
}

function markRowZero(arr, i) {
    for (let j = 0; j < arr[i].length; j++) {
        // mark every element in row 0 except the ones which are marked as row, col or row_col
        const ele = arr[i][j];
        if (notASpecialTypeOfCell(ele))
        arr[i][j] = 0;
    }
    arr[i][0] = 0;
}

function markColumnZero(arr, j) {
    for (let i = 0; i < arr.length; i++) {
        const ele = arr[i][j];
        if (notASpecialTypeOfCell(ele))
        arr[i][j] = 0;
    }
    arr[0][j] = 0;
}

function markRowColumnZero(arr) {
    for (let i = 0; i < arr.length; i++) {
        const ele = arr[i][0];
        if (notASpecialTypeOfCell(ele))
        arr[i][0] = 0;
    }
    for (let j = 0; j < arr[0].length; j++) {
        const ele = arr[0][j];
        if (notASpecialTypeOfCell(ele))
        arr[0][j] = 0;
    }
    arr[0][0] = 0;
}

function notASpecialTypeOfCell(ele) {
    return ele !== typeOfCell.ROW && ele !== typeOfCell.COL && ele !== typeOfCell.ROW_COL;
}

const arr = [
    [0,2,3],
    [0,5,6],
    [7,8,9],
    [10,11,12]
];

const typeOfCell = {
    ROW: 'row',
    COL: 'col',
    ROW_COL: 'row_col'
};

zeroMatrix(arr);
//console.log(arr[0].length);