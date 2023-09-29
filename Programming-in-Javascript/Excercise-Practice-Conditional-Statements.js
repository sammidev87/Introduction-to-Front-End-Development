// Are you old enough
// if, else if, else conditional statement
var age = 10;
if (age >= 65) {
    console.log("You get your income from your pension");
} else if (age < 65 && age >= 18) {
    console.log("Each month you get a salary");
} else if (age < 18) {
    console.log("You get an allowance");
} else {
    console.log("The value of the age variable is not numerical");
}

// days of the week
// switch conditional statement
var day = "Sunday";
switch (day) {
    case "Sunday":
        console.log("It is Sunday!");
        break;
    case "Monday":
        console.log("It is Monday!");
        break;
    case "Tuesday":
        console.log("It is Tuesday!");
        break;
    case "Wednesday":
        console.log("It is Wednesday!");
        break;
    case "Thursday":
        console.log("It is Thursday!");
        break;
    case "Friday":
        console.log("It is Friday!");
        break;
    case "Saturday":
        console.log("It is Saturday!");
        break;
    default:
        console.log("There is no such day...");
        break;
}