# Question: How do you manually implement array concatenation without using built-in methods? JavaScript Summary

The given JavaScript code defines a function named `concatenateArrays` that takes two arrays as arguments and returns a new array that is a concatenation of the two input arrays. The function first initializes an empty array named `result`. It then uses a for loop to iterate over each element in the first input array (`arr1`), and pushes each element into the `result` array. The function repeats this process for the second input array (`arr2`). By the end of these operations, the `result` array contains all elements from both input arrays in their original order, effectively concatenating the two arrays. The function then returns the `result` array. The `console.log` statement at the end of the code tests the function by concatenating two arrays containing the numbers 1 to 3 and 4 to 6, respectively, and printing the result.

---

# TypeScript Differences

The TypeScript version of the solution is similar to the JavaScript version in terms of logic and flow. Both versions iterate over the elements of the two input arrays and add them to a new array. However, there are a few key differences due to TypeScript's static typing and object-oriented features:

1. TypeScript uses types: In the TypeScript version, the function parameters and return type are explicitly typed as arrays of any type (`any[]`). This provides type safety and can help prevent errors that would not be caught until runtime in JavaScript.

2. TypeScript uses a class: The TypeScript version wraps the function in a class, `ArrayConcatenation`. This is a feature of TypeScript's support for object-oriented programming, and it allows for methods to be grouped together under a class. In this case, the `concatenateArrays` method could be used with different instances of the `ArrayConcatenation` class.

3. TypeScript uses a different approach to add elements to the result array: Instead of using the `push` method to add elements to the `result` array like in the JavaScript version, the TypeScript version directly assigns the elements to the `result` array using an index. This is done to avoid using built-in array methods as per the problem statement.

4. TypeScript initializes the result array with a specific length: The TypeScript version initializes the `result` array with a length equal to the sum of the lengths of the input arrays. This is not done in the JavaScript version, where the `result` array starts with a length of 0 and grows as elements are added.

---

# C++ Differences

Both the JavaScript and C++ versions solve the problem by iterating over the elements of the two input arrays and copying them into a result array. However, there are some differences due to the different features and conventions of the two languages.

1. Array Size: In JavaScript, arrays are dynamic and can grow or shrink as needed. The size of an array can be obtained using the `length` property. In C++, arrays have a fixed size that must be specified when they are declared. The size of an array can be calculated by dividing the total size of the array by the size of one element (`sizeof(arr1) / sizeof(arr1[0])`).

2. Array Concatenation: In JavaScript, the `push` method is used to add elements to the end of an array. In C++, elements are added to the array by directly assigning them to a specific index (`result[i] = arr1[i]`).

3. Function Parameters: In JavaScript, arrays are passed to functions by reference, so changes to the array inside the function will affect the original array. In C++, arrays are also passed by reference by default, but the size of the array must be passed as a separate parameter.

4. Output: In JavaScript, the concatenated array is returned from the function and can be logged to the console using `console.log`. In C++, the concatenated array is not returned from the function, but is instead printed to the console within the `main` function using `std::cout`.

5. Memory Allocation: In JavaScript, memory allocation is handled automatically. In C++, the programmer must manually allocate enough memory for the result array (`int result[size1 + size2]`).

6. Type Safety: JavaScript is dynamically typed, so the arrays could hold any type of values. The C++ version is statically typed and specifically designed for arrays of integers.

---
