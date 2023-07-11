function getLeapYears(n, m) {
    const leapYears = [];

    const min = Math.min(n, m);
    const max = Math.max(n, m);

    for (let year = min; year <= max; year++) {
        if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
            leapYears.push(year);
        }
    }

    return leapYears;
}
const n = 2000; // Пример: начальный год
const m = 2020; // Пример: конечный год

const leapYears = getLeapYears(n, m);
console.log(leapYears);
