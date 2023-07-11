function generateRandomArray(count, n, m) {
    const randomArray = [];

    const min = Math.min(n, m);
    const max = Math.max(n, m);

    for (let i = 0; i < count; i++) {
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        randomArray.push(randomNumber);
    }

    return randomArray;
}
const arrayLength = 10;
const n = -20;
const m = 20;
const randomArray = generateRandomArray(arrayLength, n, m);
console.log(randomArray);
