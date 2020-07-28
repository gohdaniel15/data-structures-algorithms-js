export default function MergeSort(input: Array<number>): Array<number> {
  if (input.length === 1) return input

  const midIndex = Math.floor(input.length / 2)

  const leftArray = input.slice(0, midIndex)
  const rightArray = input.slice(midIndex)

  return merge(
    MergeSort(leftArray),
    MergeSort(rightArray)
  )
}

function merge(input1: Array<number>, input2: Array<number>): Array<number> {
  const result: Array<number> = []
  while (input1[0] || input2[0]) {
    if (input1[0] === undefined) {
      // @ts-ignore
      result.push(input2.shift())
    } else if (input2[0] === undefined) {
      // @ts-ignore
      result.push(input1.shift())
    } else {
      // @ts-ignore
      input1[0] < input2[0] ? result.push(input1.shift()) : result.push(input2.shift())
    }
  }

  return result
}
