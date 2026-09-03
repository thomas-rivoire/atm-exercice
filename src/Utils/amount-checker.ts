export function isEndingByZero(value: number): boolean {
    return value % 10 === 0;
}

export function isPositive(value: number): boolean {
    return value >= 0; 
}

export function isUnderMaxAmount(value: number): boolean {
    return value <= 1000;
}

export function isStartingByZero(value: string): boolean {
    return value[0] === '0';
}