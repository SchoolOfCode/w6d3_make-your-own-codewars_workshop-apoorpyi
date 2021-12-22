//👉 Write your tests below here:

import { oddsOrEvensWinner } from "./main.js";

describe(`test cases for oddsOrEvensWinner`, () => {
  test("Test if odds wins", () => {
    const actual = oddsOrEvensWinner([1, 2, 3]);
    const expected = `Odds wins. 3 > 2`;
    expect(actual).toBe(expected);
  });

  test("Test if odds wins", () => {
    const actual = oddsOrEvensWinner([11, 22, 33, 9, 10]);
    const expected = `Odds wins. ${11 * 33 * 9} > ${22 * 10}`;
    expect(actual).toBe(expected);
  });

  test("Test if evens wins", () => {
    const actual = oddsOrEvensWinner([2, 22, 30, 13, 1]);
    const expected = `Evens wins. ${2 * 22 * 30} > ${13}`;
    expect(actual).toBe(expected);
  });

  test("Test if evens wins", () => {
    const actual = oddsOrEvensWinner([100, 9]);
    const expected = `Evens wins. ${100} > ${9}`;
    expect(actual).toBe(expected);
  });

  test("Test if only 1 even number wins", () => {
    const actual = oddsOrEvensWinner([40]);
    const expected = `Even wins. ${40} is even`;
    expect(actual).toBe(expected);
  });

  test("Test if only 1 odd number wins", () => {
    const actual = oddsOrEvensWinner([13]);
    const expected = `Odd wins. ${13} is odd`;
    expect(actual).toBe(expected);
  });
});
