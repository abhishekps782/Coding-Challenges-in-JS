function reverseArr(arr, k) {
    for (let index = 0; index < Math.floor(k/2); index++) {
        swap(index, k-index-1);
    }
    function swap(i,j){
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j]= temp;
        console.log(arr)
    }
    return arr;
}

console.log(reverseArr(['1','2','3','4','5','1','2','3','4','5'],7));