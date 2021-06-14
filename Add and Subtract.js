// Write a function, which changes the value of odd and even numbers in an array of numbers. 
// •	If the number is even - add to its value its index position
// // •	If the number is odd - subtract to its value its index position
// // Output
// // On the first line print the newly modified array, on the second line print the sum of numbers from the original array, on the third line print the sum of numbers from the modified array.

function addAndSubtract(numbersArray) {
    let sumOne = 0;
    let sumTwo = 0;

    for (let index = 0; index < array.length; index++) {
        sumOne += Number(array[index]);
        if (array[index] % 2 === 0) {
            array[index] = array[index] + index;
        } else {
            array[index] = array[index] - index
        }
        sumTwo += Number(array[index]);
    }

    console.log(array);
    console.log(sumOne);
    console.log(sumTwo);

}

//addAndSubtract([5, 15, 23, 56, 35]);
addAndSubtract([-5, 11, 3, 0, 2]);