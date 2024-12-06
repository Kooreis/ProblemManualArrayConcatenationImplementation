```cpp
#include <iostream>

void concatenate(int arr1[], int size1, int arr2[], int size2, int result[]) {
    int i;
    for (i = 0; i < size1; i++)
        result[i] = arr1[i];
    for (int j = 0; j < size2; j++)
        result[i++] = arr2[j];
}

int main() {
    int arr1[] = {1, 2, 3};
    int size1 = sizeof(arr1) / sizeof(arr1[0]);

    int arr2[] = {4, 5, 6};
    int size2 = sizeof(arr2) / sizeof(arr2[0]);

    int result[size1 + size2];

    concatenate(arr1, size1, arr2, size2, result);

    std::cout << "Concatenated array is: ";
    for (int i = 0; i < size1 + size2; i++)
        std::cout << result[i] << " ";

    return 0;
}
```