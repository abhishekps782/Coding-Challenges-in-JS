function removeDuplicateCharacters(string){
    return string
       .split('')
       .filter(function(item, pos, self) {
           console.log(item + '-' + pos +'-'+ self);
       return self.indexOf(item) == pos; // indexOf will give first match.
       })
       .join('');
     
}
console.log(removeDuplicateCharacters('bara'));


function removeDuplicates(str){
    var uniqueObj = {};
    var uniqueArr = []
    for (const i of str) {
        if(!uniqueObj[str[i]]){
            uniqueArr.push(str[i]);
        }
    }
    console.log(uniqueArr.join(''));
}


console.log(removeDuplicateCharacters('baranan'));

