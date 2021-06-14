// Write a function that finds the longest sequence of equal elements in an array of numbers. 
// If several longest sequences exist, print the leftmost one.

function solve(array) {
    let sequence = [];
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        let currSequence = [element];
        for (let j = index + 1; j < array.length; j++) {
            if (element == array[j]) {
                currSequence.push(element);
            } else {
                break;
            }
        }
        if (sequence.length < currSequence.length) {
            sequence = currSequence;
        }
    }
    console.log(sequence.join(' '));
}

solve([0, 1, 1, 5, 2, 2, 6, 3, 3]);