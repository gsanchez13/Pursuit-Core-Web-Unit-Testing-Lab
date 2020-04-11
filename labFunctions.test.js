const { isOdd, numberOfDigits, secondSmallest, getLocations, onlyOddStrings, linkedListToArray, Node } = require('./labFunctions');

describe("Checks isOdd function", () => {
    test("Checks if inputs are odd",() => {
        expect(isOdd(7)).toBe(true);
        expect(isOdd(2)).toBe(false);
        expect(isOdd(-9)).toBe(true);
        expect(isOdd(-20)).toBe(false);
        expect(isOdd(0)).toBe(false);
    })
    test("Checks if inputs are numbers", ()=> {
        expect(isOdd("hello")).toBe(false);
        expect(isOdd(NaN)).toBe(false);
        expect(isOdd(null)).toBe(false);
        expect(isOdd(undefined)).toBe(false);
        expect(isOdd([1,2,3])).toBe(false);
        expect(isOdd("1")).toBe(false);
    })
});

describe("Checks numberOfDigits function", () => {
    test("Checks length of number of digits", () => {
        expect(numberOfDigits(12345)).toBe(5);
        expect(numberOfDigits("")).toBe(0);
    });
    test("Checks for non-numbers", () => {
        expect(numberOfDigits("hello")).toBeNull();
        expect(numberOfDigits(NaN)).toBeNull();
        expect(numberOfDigits(undefined)).toBeNull();
        expect(numberOfDigits([1,2,3])).toBeNull();
        expect(numberOfDigits("12345")).toBeNull();
    })
});

