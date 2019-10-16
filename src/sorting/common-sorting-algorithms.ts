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

let arr = [4,2,7,9,10,1,39,25,16];
mergeSort(arr);
console.log(arr);
