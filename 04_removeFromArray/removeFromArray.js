const removeFromArray = function(array, num, num2, num3, num4) {
    for (let i = array.length - 1; i >= 0; i--) {
        if (array[i] === num || array[i] === num2 || array[i] === num3 || array[i] === num4) {
            array.splice(i, 1);
        }
    }
    return array;
};

removeFromArray([1, 2, 3], "1", 3);

// Do not edit below this line
module.exports = removeFromArray;
