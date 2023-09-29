/* for loop that should have an output:
1
2
3
4
5
Counting Completed!
*/
for (var count = 1; count < 6; count++) {
    console.log(count);
}
console.log("Counting Completed!");

/* for loop that should have an output:
5
4
3
2
1
Countdown Finished!
*/
for (var count = 5; count >= 1; count--) {
    console.log(count);
}
console.log("Countdown Finished!");

/* while loop that should have an output:
1
2
3
4
5
Counting Completed!
*/
var count = 1;
while (count < 6) {
    console.log(count++);
}
console.log("Counting Completed!");

/* while loop that should have an output:
5
4
3
2
1
Countdown Finished!
*/
var count = 5;
while (count >= 1) {
    console.log(count--);
}
console.log("Countdown Finished!");

/* while loop that should have an output:
2018
2019
2020
2021
2022
*/
var year = 2018;
while (year < 2023) {
    console.log(year++);
}