# Brute-Force Sorting

We talked about the complexity of the sorting problem, and used an argument over
all permutations of a list to be sorted to determine its complexity. Implement
a function to sort a list by systematically trying all permutations of the input
list, using the template in `code.js`. Test your new function; I've provided
some basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

The return value should be the number of permutations that were tried until the
sorted list was "discovered". The unsorted list passed as an argument should be
sorted, i.e. do not copy the list and sort the copy.

## Runtime Analysis

What is the runtime complexity of the algorithm that you implemented? What does
a best case input for your implementation look like, what does a worst case
input look like? How would this complexity change if you generated permutations
randomly without memory instead of systematically trying them?

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

# Solution

Best case scenario is an already sorted array. This means that the first array in the permutations is the sorted array. However, generating the permutations takes O(n!) because there are n! permutations for an array of length n. This means that no matter the input, there is always a base complexitiy of O(n!). I now realize I could easily improve this by just checking if the permutation is sorted inside of my genPermutations function, so if you'd like me to do that let me know. We also need to linearly search through each permutation, taking O(n!) because there are n! elements. For each permutation, we need to check if it is sorted, this is done by linearly checking each element one by one which means, parsing through the permutations takes $O(n!\text{(from permutation array)}\cdot n \text{(from each element in permutation)})\rightarrow O(n! \cdot n) \rightarrow O(n!)$, which is the same as the genPermutations function complexity O(n!). Therefore, regardless of the input, my current program has a time complexity of $O(n!)$.

If we changed the permuting to random instead of systematic, it would be hard to determine the complexity. Best case, it could be O(1) because it instantly chooses the sorted permuation. But worst case would be infinite time $(O(\infty))$, there is technically a chance that the sorted permutation is never found.

# Disclaimer

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.
