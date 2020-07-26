export default function BubbleSort(input) {
    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input.length; j++) {
            if (input[j] > input[j + 1]) {
                swap(input, j, j + 1);
            }
        }
    }
    return input;
}
function swap(array, targetIndex, destinationIndex) {
    const temp = array[targetIndex];
    array[targetIndex] = array[destinationIndex];
    array[destinationIndex] = temp;
}
