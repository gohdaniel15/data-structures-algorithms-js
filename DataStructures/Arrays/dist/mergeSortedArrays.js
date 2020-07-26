export function mergeSortedArrays(array1, array2) {
    if (typeof array1.length !== 'number' || typeof array2.length !== 'number')
        return [];
    if (array1.length === 0 || array2.length === 0)
        return [];
    const resultArray = [];
    while (array1.length > 0 || array2.length > 0) {
        const item1 = array1[0];
        const item2 = array2[0];
        if (item1 === undefined) {
            resultArray.push(array2.shift());
            break;
        }
        else if (item2 === undefined) {
            resultArray.push(array1.shift());
            break;
        }
        const shiftedItem = item1 <= item2 ? array1.shift() : array2.shift();
        resultArray.push(shiftedItem);
    }
    return resultArray;
}
