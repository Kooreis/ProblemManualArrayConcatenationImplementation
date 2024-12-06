Here is a TypeScript console application that manually implements array concatenation without using built-in methods:

```typescript
class ArrayConcatenation {
    constructor() {}

    concatenateArrays(array1: any[], array2: any[]): any[] {
        let result: any[] = new Array(array1.length + array2.length);
        let index = 0;

        for(let i = 0; i < array1.length; i++) {
            result[index] = array1[i];
            index++;
        }

        for(let i = 0; i < array2.length; i++) {
            result[index] = array2[i];
            index++;
        }

        return result;
    }
}

let arrayConcatenation = new ArrayConcatenation();
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let result = arrayConcatenation.concatenateArrays(array1, array2);
console.log(result);
```

This program defines a class `ArrayConcatenation` with a method `concatenateArrays` that takes two arrays as input and returns a new array that is the concatenation of the two input arrays. The `concatenateArrays` method first creates a new array `result` with a length equal to the sum of the lengths of the input arrays. It then iterates over each element in the first input array and the second input array, adding each element to the `result` array. Finally, it returns the `result` array.

The program then creates an instance of the `ArrayConcatenation` class, defines two arrays `array1` and `array2`, and calls the `concatenateArrays` method with `array1` and `array2` as input. It prints the result to the console.