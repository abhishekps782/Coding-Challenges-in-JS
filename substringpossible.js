function getAllSubstrings(str) {
    var i, j, result = [];
  
    for (i = 0; i < str.length; i++) {
        for (j = i + 1; j < str.length + 1; j++) {
            result.push(str.slice(i, j));
        }
    }
    return result;
  }
  
  var theString = 'somerandomword';
  console.log(getAllSubstrings(theString));

// APPROACH - optimized solution
  function substrings(str1)
  {
  var array1 = [];
    for (var x = 0, y=1; x < str1.length; x++,y++) 
    {
     array1[x]=str1.substring(x, y);
      }
  var combi = [];
  var temp= "";
  var slent = Math.pow(2, array1.length);
  
  for (var i = 0; i < slent ; i++)
  {
      temp= "";
      for (var j=0;j<array1.length;j++) {
          if ((i & Math.pow(2,j))){ 
              temp += array1[j];
          }
      }
      if (temp !== "")
      {
          combi.push(temp);
      }
  }
    console.log(combi.join("\n"));
  }
  
  substrings("dog");