// 100000000 -> 100,000,000
export const numberCommas = (number: number): string => {
    return number.toLocaleString('en')
}

export const foodAmount = (number: number): string => {
    return number < 10 ? ('0' + number) : number.toString()
}