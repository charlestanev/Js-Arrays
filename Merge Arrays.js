// Write a function which receives two string arrays and merges them into a third array.  
// •	If the index of the element is even, add into the third array the sum of both elements at that index
// •	If the index of the element is odd, add the concatenation of both elements at that index
// Input
// As input you will receive two string arrays.
// Output
// As output you should print the resulting third array, each element separated by " - ".

function solve(array1, array2) {
    let thirdArr = [];

    for (let index = 0; index < array1.length; index++) {
        if (index % 2 === 0) {
            thirdArr.push((Number(array1[index]) + Number(array2[index])).toString());
        } else {
            thirdArr.push((' - ' + array1[index] + array2[index] + ' - '));
        }

    }
    console.log(thirdArr.join(''));
}

solve(['5', '15', '23', '56', '35'], ['17', '22', '87', '36', '11']);