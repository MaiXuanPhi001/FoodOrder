// 100000000 -> 100,000,000
export const numberCommas = (number: number): string => {
    return number.toLocaleString('en')
}