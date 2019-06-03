
export function quickSort(arr, low = 0, high = arr.length - 1) {
    if (low >= high) {
        return;
    }
    let pivot = partition(arr,  low, high);
    quickSort(arr, low, pivot - 1);
    quickSort(arr, pivot + 1, high);

    return arr;
}

function partition(arr, low, high) {
    let pivot = arr[high];
    let i = low;
    for (let j = low; j <= high - 1; j++) {
        if (arr[j] <= pivot) {
            let temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp;
            i++;
        }
    }
    arr[high] = arr[i];
    arr[i] = pivot;

    return i;

}


export function mergeSort(arr, start = 0, end = arr.length - 1) {
    let mid = Math.floor((end + start)/2);
    if (start < end) {
        mergeSort(arr, start, mid);
        mergeSort(arr, mid + 1, end);
        merge(arr, start, mid, end);
    }
}

function merge(arr, start, mid, end) {
    let i = start;
    let j = mid+1;

    while (i < end && j <= end) {
        if (arr[i] < arr[j]) {
            i++;
        }
        else {
            let temp = arr[j];
            for (let k = j; k > i; k--) {
                arr[k] = arr[k-1];
            }
            arr[i] = temp;
            // let temp1 = arr[j];
            // let temp2 = arr[i];
            // arr[j] = arr[j-1];
            // arr[i] = temp1;
            // arr[i+1] = temp2;
            i++;
            j++;
        }
    }

}

let arr = [1000, 300, 7000,300,7000,1000,10,3,2,7,5,90,871,256,752,752,3,2];
mergeSort(arr);
console.log(arr);



