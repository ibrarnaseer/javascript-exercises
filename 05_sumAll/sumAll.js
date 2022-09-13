const sumAll = function(num, num2) {
    if (num < 0 || num2 < 0) return "ERROR";
    if (!Number.isInteger(num) || !Number.isInteger(num2)) return "ERROR";

    if (num < num2) {
        let sum = 0;
        for (let i = num; i < num2 + 1; i++) {
            sum += i;
        }
        return sum;
    }
    if (num > num2) {
        let sum = 0;
        for (let i = num2; i < num + 1; i++) {
            sum += i;
        }
        return sum;
    }
};

sumAll(10, [90, 1]);

// Do not edit below this line
module.exports = sumAll;
