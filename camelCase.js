

module.exports = function toCamelCase(string){
    var result = "";
    var emptyArr = [];
    // capture string and turn into array
    var splitStr = string.split(" ");
    // console.log(splitStr);

    for(let i=0; i<splitStr.length; i++){
        var currentWord = splitStr[i].toLowerCase();
        // make sure the first word is all lowercase
        if(i===0){
            emptyArr.push(currentWord);
        } else {
            // convert all other words to lowercase with uppercase first letter
            currentWord = currentWord.substr(0,1).toUpperCase() + currentWord.substr(1);
            emptyArr.push(currentWord);
        }
    }
    console.log(emptyArr)

    // rejoin the array into a string
    result = emptyArr.join('');

    return result;


}


// console.log(toCamelCase("this is a test string"));
