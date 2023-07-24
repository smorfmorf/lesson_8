function generateRandomArray(count, n, m, option = "") {
    const randomArray = [];

    const min = Math.min(n, m);
    const max = Math.max(n, m);
    while (randomArray.length < count) {
        for (let i = 0; i < count; i++) {
            const randomNumber =
                Math.floor(Math.random() * (max - min + 1)) + min;

            if (option === "even" && randomNumber % 2 === 0) {
                randomArray.push(randomNumber);
            } else if (option === "odd" && randomNumber % 2 !== 0) {
                randomArray.push(randomNumber);
            } else if (option === "") {
                randomArray.push(randomNumber);
            }
        }
    }
    return randomArray;
}

const arrayLength = 10; //  генерировать массив из 10 элементов
const n = -50; // Нижняя граница диапазона
const m = 50; // Верхняя граница диапазона
const option = "odd"; // 'even' для четных чисел, 'odd' для нечетных чисел
const randomArray = generateRandomArray(arrayLength, n, m, option);
console.log(randomArray);
