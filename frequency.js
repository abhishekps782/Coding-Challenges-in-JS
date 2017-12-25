function frequencyArr(arr){
 let elementCount = {};
 // loop through array and assign 1 on first encounter on subsequnet encounter bump by 1.
 arr.forEach(element => {
    /* APPROACH 1
     if(elementCount.hasOwnProperty(element)){
         elementCount[element]++;
     }
     else{
        elementCount[element] = 1;
     } */

    elementCount[element] = elementCount[element] || 0;
    elementCount[element]++;
 });

 for (const key in elementCount) {
     if (elementCount.hasOwnProperty(key)) {
         console.log(key + ' - ' + elementCount[key])
     }
 }

}



frequencyArr(['1','2','3','1','5','6','3','2']);