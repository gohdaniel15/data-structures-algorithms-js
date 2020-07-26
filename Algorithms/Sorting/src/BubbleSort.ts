// O (n^2)
export default function BubbleSort(input: Array<number>): Array<number> {
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input.length; j++) {
      if (input[j] > input[j + 1]) {
        swap(input, j, j + 1)
      }
    }
  }

  return input
}

function swap(
  array: Array<number>,
  targetIndex: number,
  destinationIndex: number
) {
  const temp = array[targetIndex]
  array[targetIndex] = array[destinationIndex]
  array[destinationIndex] = temp
}