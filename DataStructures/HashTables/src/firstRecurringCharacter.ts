export function firstRecurringCharacter(array: Array<number>): number | undefined {
  if (!array.length && array.length <= 1) return undefined

  const hashMap = new Map
  for (let i=0; i < array.length; i++) {
    const item = array[i]
    if (hashMap.get(item) !== undefined) return item

    hashMap.set(item, i)
  }

  return undefined
}