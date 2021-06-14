// Write a function, which changes the value of odd and even numbers in an array of numbers. 
// •	If the number is even - add to its value its index position
// •	If the number is odd - subtract to its value its index position
// Output
// On the first line print the newly modified array, on the second line print the sum of numbers from the original array, on the third line print the sum of numbers from the modified array.

function addAndSubtract(numbersArray) {
    let newArray = [];
    let sumOrigin = 0;
    let sumModified = 0;

    for (let index = 0; index < numbersArray.length; index++) {
        let currentNum = numbersArray[index];

        if (currentNum % 2 === 0) {
            currentNum = numbersArray[index] + index;
            newArray.push(currentNum);
        } else {
            currentNum = numbersArray[index] - index;
            newArray.push(currentNum);
        }
    }

    for (let current of numbersArray) {
        sumOrigin += current;
    }

    for (let current of newArray) {
        sumModified += current
    }

    console.log(newArray);
    console.log(sumOrigin);
    console.log(sumModified);

}

//addAndSubtract([5, 15, 23, 56, 35]);
addAndSubtract([-5, 11, 3, 0, 2]);