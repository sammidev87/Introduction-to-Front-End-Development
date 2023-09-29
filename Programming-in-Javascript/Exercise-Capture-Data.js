let h1 = document.querySelector('h1'); // stores the h1 element in the variable
let arr = [
    'Example Domain',
    'First Click',
    'Second Click',
    'Third Click'
]; // create an array

// handles what happens when the user clicks on h1
function handleClicks() {
    switch (h1.innerText) {
        case arr[0]:
            h1.innerText = arr[1];
            break;
        case arr[1]:
            h1.inertText = arr[2];
            break;
        case arr[2]:
            h1.inertText = arr[3];
            break;
        default:
            h1.innerText = arr[0];
    }
}
// adds an event listener for clicks on the h1 element
h1.addEventListener('click', handleClicks)