export function swap(array, targetIndex, destinationIndex) {
    const temp = array[targetIndex];
    array[targetIndex] = array[destinationIndex];
    array[destinationIndex] = temp;
}
