export function firstUpperCase(str: string, lowerRest = false) {
    const [first, ...rest] = str;
    return first.toUpperCase() + (lowerRest ? rest.join('').toLowerCase() : rest.join(''));

}
