export function swap(
  array: Array<number>,
  targetIndex: number,
  destinationIndex: number
) {
  const temp = array[targetIndex]
  array[targetIndex] = array[destinationIndex]
  array[destinationIndex] = temp
}