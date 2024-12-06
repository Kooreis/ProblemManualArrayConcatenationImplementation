```javascript
function concatenateArrays(arr1, arr2) {
    let result = [];
    for(let i = 0; i < arr1.length; i++) {
        result.push(arr1[i]);
    }
    for(let i = 0; i < arr2.length; i++) {
        result.push(arr2[i]);
    }
    return result;
}

console.log(concatenateArrays([1, 2, 3], [4, 5, 6]));
```