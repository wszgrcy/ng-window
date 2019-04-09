export function coerceToBoolean(value): boolean {
    return !!value
}
export function coerceToNumber(value): number {
    return +value
}
export function coerceToString(value): string {
    return `${value}`
}
export function coerceToRegexp(value): RegExp {
    return new RegExp(coerceToString(value))
}