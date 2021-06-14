// Write a function, which prints common elements in two string arrays. Print all matches on separate lines. Compare the first array with the second array.

function solve(array1, array2) {
    for (let index = 0; index < array1.length; index++) {
        let test = array1[index];
        for (let i = 0; i < array2.length; i++) {
            if (array1[index] === array2[i]) {
                console.log(test);
            }
        }
    }
}

solve(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '], ['s', 'o', 'c', 'i', 'a', 'l']);