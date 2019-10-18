export function mergeSort(arr: number[], start: number = 0, end: number = arr.length - 1, helperArr: number[] = []) {
    if (start == end) return;
    let mid = Math.floor((end + start)/2);

    mergeSort(arr, start, mid);
    mergeSort(arr, mid + 1, end);
    merge(arr, helperArr, start, mid, end);
}

export function merge(arr: number[], helperArr: number[], start: number, mid: number, end: number) {
    for (let i: number = start; i <= end; i++) {
        helperArr[i] = arr[i];
    }

    let curr: number = start;
    let helperLeft: number = start;
    let helperRight: number = mid + 1;
    while (helperLeft <= mid && helperRight <= end) {
        if (helperArr[helperLeft] <= helperArr[helperRight]) {
            arr[curr] = helperArr[helperLeft];
            helperLeft++;
        } else {
            arr[curr] = helperArr[helperRight];
            helperRight++;
        }
        curr++;
    }

    // copy remaining left elements of helper array into the target array

    for (let i: number = helperLeft; i <= mid; i++) {
        arr[curr] = helperArr[i];
        curr++
    }
}

export function quickSort(arr: number[], start: number = 0, end: number = arr.length - 1) {
    if (start > end) return;
    let pivot: number = findPivot(arr, start, end);
    quickSort(arr, start, pivot-1);
    quickSort(arr, pivot+1, end);
}

function findPivot(arr: number[], start: number, end: number) {
    let leftArrayLastIndex: number = start-1;

    for (let k:number = start; k < end; k++) {
        if (arr[k] < arr[end]) {
            leftArrayLastIndex++;
            if (leftArrayLastIndex !== k) {
                swap(arr, leftArrayLastIndex + 1, k);
            }
        }
    }
    if (leftArrayLastIndex+1 !== end) {
        swap(arr, leftArrayLastIndex + 1, end);
    }

    leftArrayLastIndex++;
    return leftArrayLastIndex;
}

function swap(arr: number[], i: number, j: number) {
    let temp: number = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

let arr = [4,2,7,9,10,1,39,25,16];
quickSort(arr);
console.log(arr);
