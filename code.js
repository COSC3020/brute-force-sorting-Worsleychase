function permutationSort(a) {
    let permCount = 0;
    let perms = genPermutations(a);

    for (let i = 0; i < perms.length; i++) {
        let currentPerm = perms[i];
        let isSorted = true;

        // check if currentPerm is sorted
        for (let j = 0; j < currentPerm.length - 1; j++) {
            if (currentPerm[j] > currentPerm[j + 1]) {
                isSorted = false;
                break;
            }
        }

        permCount++;

        if (isSorted) {
            // copy sorted array into original array
            for (let k = 0; k < currentPerm.length; k++) {
                a[k] = currentPerm[k];
            }
            break;
        }
    }
    return permCount;
}

function genPermutations(arr) {
    let perms = [];

    function permute(start) {
        if (start === arr.length - 1) {
            perms.push(arr.slice()); // add a copy of the current permutation
            return;
        }

        for (let i = start; i < arr.length; i++) {
            [arr[start], arr[i]] = [arr[i], arr[start]]; // swap
            permute(start + 1); // recurse with the next position
            [arr[start], arr[i]] = [arr[i], arr[start]]; // revert swap
        }
    }

    permute(0); // start the permutation
    return perms;
}

//let arr = [3, 1, 2];
//let count = permutationSort(arr);
//console.log("Sorted array:", arr);
//console.log("Permutations tried:", count);
