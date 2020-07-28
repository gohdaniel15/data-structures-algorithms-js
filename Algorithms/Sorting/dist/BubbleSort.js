import { swap } from './lib/utils.js';
// Time complexity: O(n^2)
// Space complexity: O(1)
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
