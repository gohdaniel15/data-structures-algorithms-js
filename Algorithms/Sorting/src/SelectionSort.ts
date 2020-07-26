// Time complexity: O(n^2)
// Space complexity: O(1)
export default function SelectionSort(input: Array<number>): Array<number> {
  for (let i = 0; i < input.length; i++) {
    let smallest: number = i
    for (let j = i + 1; j < input.length; j++) {
      if (input[j] < input[smallest]) {
        smallest = j
      }
    }
    let tempValue = input[i]
    input[i] = input[smallest]
    input[smallest] = tempValue
  }

  return input
}
