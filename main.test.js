//👉 Write your tests below here:


import { isOddOrEvenMultipleWinner } from "./main.js";

test('Test if odd wins', () => {
    const actual = isOddOrEvenMultipleWinner([1, 2, 3]);
    const expected = `Odd wins. 3 is greater than 2`
    expect(actual).toBe(expected);
})

test('Test if odd wins', () => {
    const actual = isOddOrEvenMultipleWinner([11,22,33,9,10]);
    const expected = `Odd wins. ${11*33*9} is greater than ${22*10}`;
    expect(actual).toBe(expected);
})

test('Test if even wins', () => {
    const actual = isOddOrEvenMultipleWinner([2,22,30,13,1]);
    const expected = `Even wins. ${2*22*30} is greater than ${13}`;
    expect(actual).toBe(expected);
})

test('Test if even wins', () => {
    const actual = isOddOrEvenMultipleWinner([100,9]);
    const expected = `Even wins. ${100} is greater than ${9}`;
    expect(actual).toBe(expected);
})

test('Test if only 1 even number wins', () => {
    const actual = isOddOrEvenMultipleWinner([40]);
    const expected = `Even wins. ${40} is even`;
    expect(actual).toBe(expected);
})

test('Test if only 1 odd number wins', () => {
    const actual = isOddOrEvenMultipleWinner([13]);
    const expected = `Odd wins. ${13} is odd`;
    expect(actual).toBe(expected);
})
