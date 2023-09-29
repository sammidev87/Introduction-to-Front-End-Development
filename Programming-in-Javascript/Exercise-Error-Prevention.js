function addTwoNums(a, b) {
    try {
        if (typeof a !== 'number') {
            console.log("The first argument is not a number!")
        } else if (typeof b !== 'number') {
            console.log("The second argument is not a number!")
        } else {
            console.log(a + b);
        }
    } catch (error) {
        console.log("Error", error);
    }
};

addTwoNums(5, "5");
console.log("It still works");