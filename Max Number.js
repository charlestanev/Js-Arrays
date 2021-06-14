// Write a function to find all the top integers in an array. A top integer is an integer which is bigger than all the elements to its right. 
// Output
// Print all top integers on the console, separated by single space.

function solve(array) {
    let topIntegers = [];
    for (let index = 0; index < array.length; index++) {
        let isTop = true;
        for (let j = index + 1; j < array.length; j++) {
            if (array[index] <= array[j]) {
                isTop = false;
                break;
            }
        }
        if (isTop) {
            topIntegers.push(array[index])
        }
    }
    console.log(topIntegers.join(' '));
}

solve([41, 41, 34, 20]);