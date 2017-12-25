/*Recursive String reversal*/

function reverse (str) {
    if (str === "") {
        return "";
    } else {
        return reverse(str.substr(1)) + str.charAt(0);// recursively put charAt(0) from behind
    }
}
var output = reverse('I amd done here');
console.log(output);

/*Recursive string reversal without special chars*/

function reverseSpecial(str){
  var strRev = str.replace(/[a-z]+/gi,function(s){
      console.log(s.split('').reverse().join(''));
      return s.split('').reverse().join('');
  });
  return strRev;
}

var output1 = reverseSpecial('I am! the man? you thought');
console.log(output1);