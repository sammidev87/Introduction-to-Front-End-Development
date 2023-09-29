/* the outputs should be as follows:
'Rex'
'Pepper'
"My pet dog's name is Rex"
"My pet cat's name is Pepper"
*/
var petDog = 'Rex';
var petCat = 'Pepper';
console.log(petDog);
console.log(petCat);
console.log("My pet dog's name is " + petDog);
console.log("My pet cat's name is " + petCat);

/* the outputs should be as follows:
'Rex says woof'
'Pepper says purr'
'Pepper now says meow'
*/
var catSound = "purr";
var dogSound = "woof";
console.log(petDog, "says " + dogSound);
console.log(petCat, "says " + catSound);
catSound = "meow";
console.log(petCat, "now says " + catSound);