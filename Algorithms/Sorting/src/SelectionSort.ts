// Time complexity: O(n^2)
// Space complexity: O(1)
export default function SelectionSort(input: Array<number>): Array<number> {
  let smallest: number = Number.MIN_VALUE
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input.length; j++) {
      if (input[j] < smallest) smallest = input[j]
      if (j === input.length - 1) input[0] = smallest
    }
  }

  return input
}
