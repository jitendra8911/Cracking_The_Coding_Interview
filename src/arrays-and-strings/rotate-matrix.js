function swapLayers(i, j, arr) {
    let temp;
    let n = arr.length;

    // swap all corners of the layer
    temp = arr[i][n - 1 - j];
    arr[i][n - 1 - j] = arr[i][j];
    arr[i][j] = arr[n - 1 - i][j];
    arr[n - 1 - i][j] = arr[n - 1 - i][n - 1 - j];
    arr[n - 1 - i][n - 1 - j] = temp;

    // swap other elements in the layer

    // swap top and right
    for (let k = i+1; k < n - 1 - i; k++) {
        temp = arr[k][n - 1 - j];
        arr[k][n - 1 - j] = arr[i][k];
        arr[i][k] = temp;
    }

    // swap top and bottom
    let m = j + 1;
    for (let k = n - 2 - j; k > j; k--) {
        temp = arr[n - 1 - i][k];
        arr[n - 1 - i][k] = arr[i][m];
        arr[i][m] = temp;
        m++
    }

    // swap top left

    m = j + 1;
    for (let k = n - 2 - i; k > i; k--) {
        temp = arr[i][m];
        arr[i][m] = arr[k][j];
        arr[k][j] = temp;
        m++;
    }

    console.log(arr);
}

const arr = [
    [1,2,3,4,5],
    [6,7,8,9,10],
    [11,12,13,14,15],
    [16,17,18,19,20],
    [21,22,23,24,25]
];

function rotateMatrix(arr) {
    let n = arr.length;
    if (n === 1 ) {
        return;
    } else if (n <= 0) {
        console.log('invalid matrix');
    } else {
        let i = 0,j = 0;
        do {
            swapLayers(i,j, arr);
            i++;
            j++;
            
        } while (i < parseInt(n / 2))
    }
}

rotateMatrix(arr);
