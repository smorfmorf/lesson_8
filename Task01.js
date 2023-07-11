function generateRandomArray(count) {
    const randomArray = [];

    for (let i = 0; i < count; i++) {
        const randomNumber = Math.floor(Math.random() * 100) + 1;
        randomArray.push(randomNumber);
    }

    return randomArray;
}
const array = 10;
const randomArray = generateRandomArray(array);
console.log(randomArray);
