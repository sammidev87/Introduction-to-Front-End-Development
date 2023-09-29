/* showing how to create an empty array
then how to push to the array
then how to remove the last object from the array
then how to push another object to the array
then how to log a specific object from the array
*/
var clothes = [];
clothes.push("shirt");
clothes.push("shorts");
clothes.push("beanie");
clothes.push("hoodies");
clothes.push("sweatpants");
clothes.pop();
clothes.push("tanktop");
console.log(clothes[ 2 ]);

/* showing how to create an empty object
then how to use dot notation to create items
then how to log the object
*/
var favCar = {};
favCar.color = "pink";
favCar.convertible = true;
console.log(favCar);