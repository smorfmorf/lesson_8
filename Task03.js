function generateRandomArray(count, n, m, option = "") {
    const randomArray = [];
    const min = Math.min(n, m);
    const max = Math.max(n, m);
    let countEven = 0;
    let countOdd = 0;

    while (randomArray.length < count) {
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

        if (option === "even" && randomNumber % 2 === 0 && countEven < count) {
            randomArray.push(randomNumber);
            countEven++;
        } else if (
            option === "odd" &&
            randomNumber % 2 !== 0 &&
            countOdd < count
        ) {
            randomArray.push(randomNumber);
            countOdd++;
        } else if (option === "") {
            randomArray.push(randomNumber);
        }
    }

    return randomArray;
}

const arrayLength = 10; // генерировать массив из 10 элементов
const n = -50; // Нижняя граница диапазона
const m = 50; // Верхняя граница диапазона
const option = ""; // 'even' для генерации 10 четных чисел, 'odd' для генерации 10 нечетных чисел
const randomArray = generateRandomArray(arrayLength, n, m, option);
console.log(randomArray);
