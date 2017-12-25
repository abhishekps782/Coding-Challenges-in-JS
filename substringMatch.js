// use regular expressions regex.test(str) or substr.indexOf(str)

function substrExactExits(str, substr) {
    
    var regex = new RegExp(substr,'gi'); // dynamic regex - 1st argument is our string variable passed
    console.log(regex);
    console.log(regex.test(str));
    if(regex.test(str)  && str.toLowerCase().indexOf(substr.toLowerCase())!== -1){
        console.log('it exists');
    }
    else{
        console.log('not found');
    }

}

substrExactExits('name is naggaro Naggaro bajja','NaGgaro');






/* 1. indexOf

var string = "foo",
    substring = "oo";
string.indexOf(substring) !== -1;
String.prototype.indexOf returns the position of the string in the other string. If not found, it will return -1.

2. (ES6) includes—go to answer, or this answer

var string = "foo",
    substring = "oo";
string.includes(substring);
3. search—go to answer

var string = "foo",
    expr = /oo/;
string.search(expr);
4. lodash includes—go to answer

var string = "foo",
    substring = "oo";
_.includes(string, substring);
5. RegExp—go to answer

var string = "foo",
    expr = /oo/;  // no quotes here
expr.test(string);
6. Match—go to answer

var string = "foo",
    expr = /oo/;
string.match(expr);
 */