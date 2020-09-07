import '../scss/index.scss';

/**
   * Returns the sum of 2 or more numbers
   *
   * @param a - Array of numbers
   * @returns - The summ of all numbers
   */
export function sum(...a: number[]): number {
    return a.reduce((acc, val) => acc + val, 0);
};

// export { sum }