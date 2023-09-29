/* the output of this function (given the inputs below) should be:
Found the t at 0
---No match found at 1
---No match found at 2
Found the t at 3
*/
function letterFinder(word, match) {
    for (var i = 0; i < word.length; i++) {
        if (word[ i ] === match) {
            console.log("Found the", match, "at", i);
        } else {
            console.log("---No match found at", i);
        }
    }
};

letterFinder("test", "t");