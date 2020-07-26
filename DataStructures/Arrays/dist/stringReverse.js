export function reverse(string) {
    if (typeof string !== 'string')
        return 'unhandled input type';
    const originalMap = string.split('');
    const resultMap = [];
    for (let i = originalMap.length - 1; i >= 0; i--) {
        resultMap.push(originalMap[i]);
    }
    return resultMap.join('');
}
