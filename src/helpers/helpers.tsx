export function transformInputValue (value: string): string {
    if (value.length < 8) {
        return `${value.slice(0,3)} ${value.slice(3)}`
    }
    return `${value.length > 7 ? value.slice(0,-6) : value.slice(0,-7)  } ${value.slice(-6,-3)} ${value.slice(-3)}`
}
// 99 000 000
export function transformInputValueTwo (value: string): string {
    if (value.length === 7) return  `${value[0]} ${value.slice(1,4)} ${value.slice(4)} $`
    if (value.length === 8) return `${value.slice(0,2)} ${value.slice(2,5)} ${value.slice(5)} $`
    return `${value.slice(0,3)} ${value.slice(3)} $`
}
