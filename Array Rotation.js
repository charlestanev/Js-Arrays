// Write a function that receives an array and number of rotations you have to perform (first element goes at the end). 
// Output
// Print the resulting array elements separated my single space.

function arrayRotation(arrayOfNums, number) {
    let newArr = arrayOfNums;

    while (number > 0) {
        let currentNum = newArr.shift();
        newArr.push(currentNum);
        number--;
    }

    console.log(newArr.join(' '));
}


arrayRotation([2, 4, 15, 31], 5);