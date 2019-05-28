let arr = [1,3,9,10,7,11,13];
let start = 0;
let end = arr.length-1;
let mid = Math.floor((arr.length - start)/2);


// let left = arr.slice(start, mid);
// let right = arr.slice(mid, end);


let i = start;
let j = mid+1;

while (i <= mid && j <= end) {
    if (arr[i] < arr[j]) {
        i++;
    }
    else {
        let temp1 = arr[j];
        let temp2 = arr[i];
        arr[j] = arr[j-1];
        arr[i] = temp1;
        arr[i+1] = temp2;
        i++;
        j++;
    }
}

console.log(arr);