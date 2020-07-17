export function firstRecurringCharacter(array) {
    if (!array.length && array.length <= 1)
        return undefined;
    const hashMap = new Map;
    for (let i = 0; i < array.length; i++) {
        const item = array[i];
        if (hashMap.get(item))
            return item;
        hashMap.set(item, item);
    }
    return undefined;
}
