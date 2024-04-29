const divide = (arr, n) => {
    const result = [];
    let currentSubarray = [];
    let currentSum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (currentSum + arr[i] <= n) {
            currentSubarray.push(arr[i]);
            currentSum += arr[i];
        } else {
            result.push(currentSubarray);
            currentSubarray = [arr[i]];
            currentSum = arr[i];
        }
    }

    // Add the last subarray to the result
    if (currentSubarray.length > 0) {
        result.push(currentSubarray);
    }

    return result;
};

const arr = [1, 2, 3, 4, 1, 0, 2, 2];
const n = Number(prompt("Enter n: "));
alert(JSON.stringify(divide(arr, n)));
