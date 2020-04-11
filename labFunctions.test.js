const { isOdd, numberOfDigits, disemvowel, secondSmallest, getLocations, onlyOddStrings, linkedListToArray, Node } = require('./labFunctions');

describe("Tests isOdd function", () => {
    test("Checks if inputs are odd", () => {
        expect(isOdd(7)).toBe(true);
        expect(isOdd(2)).toBe(false);
        expect(isOdd(-9)).toBe(true);
        expect(isOdd(-20)).toBe(false);
        expect(isOdd(0)).toBe(false);
    })
    test("Checks if inputs are numbers", () => {
        expect(isOdd("hello")).toBe(false);
        expect(isOdd(NaN)).toBe(false);
        expect(isOdd(null)).toBe(false);
        expect(isOdd(undefined)).toBe(false);
        expect(isOdd([1, 2, 3])).toBe(false);
        expect(isOdd("1")).toBe(false);
    })
});

describe("Tests numberOfDigits function", () => {
    test("Checks length of number of digits", () => {
        expect(numberOfDigits(12345)).toBe(5);
        expect(numberOfDigits(-123985473)).toBe(9);
        expect(numberOfDigits("")).toBe(0);
    });
    test("Checks for non-numbers", () => {
        expect(numberOfDigits("hello")).toBeNull();
        expect(numberOfDigits(NaN)).toBeNull();
        expect(numberOfDigits(undefined)).toBeNull();
        expect(numberOfDigits([1, 2, 3])).toBeNull();
        expect(numberOfDigits("12345")).toBeNull();
    })
});

describe("Tests disemvowel function", () => {
    test("Checks if disemvowel works for letter strings", () => {
        expect(disemvowel("Hello")).toBe("Hll");
        expect(disemvowel("APPLES")).toBe("PPLS");
    })
    test("Checks for numbers within the string", () => {
        expect(disemvowel("H3ll0")).toBe("H3ll0");
        expect(disemvowel("123456")).toBe("123456");
    });
    test("Checks for non-strings", () => {
        expect(disemvowel(12345)).toBeUndefined();
        expect(disemvowel(NaN)).toBeUndefined();
        expect(disemvowel(undefined)).toBeUndefined();
        expect(disemvowel([1, 2, 3])).toBeUndefined();
        expect(disemvowel(true)).toBeUndefined();
    });
});

describe("Tests secondSmallest function", () => {
    test("Checks if function works with number array", () => {
        expect(secondSmallest([1, 2, 3, 4, 5])).toBe(2);
        expect(secondSmallest([3, 5, 0, -10, -10000, 4])).toBe(-10);
        expect(secondSmallest([1, 1.5, 2, 3, 4, 5])).toBe(1.5);
    })
    test("Checks if function works with single number in array", () => {
        expect(secondSmallest([1])).toBe(1);
        expect(secondSmallest([-1])).toBe(-1);
        expect(secondSmallest([NaN])).toBeUndefined();
        expect(secondSmallest([undefined])).toBeUndefined();
        expect(secondSmallest([true])).toBeUndefined();
        expect(secondSmallest(["hi"])).toBeUndefined();
        expect(secondSmallest({ 1: "1" })).toBeUndefined();
    })
    test("Checks for non-number elements in array", () => {
        expect(secondSmallest([1, 2, 3, 4, "1.5"])).toBe(2);
        expect(secondSmallest([1, 2, 3, 4, 5, "a"])).toBe(2);
        expect(secondSmallest([1, 2, 3, 4, 5, NaN])).toBe(2);
        expect(secondSmallest([1, 2, 3, 4, 5, undefined])).toBe(2);
        expect(secondSmallest([1, 2, 3, 4, 5, true])).toBe(2);
        expect(secondSmallest([1, 2, 3, 4, 5, false])).toBe(2);
    });
    test("Checks if argument is an array", () => {
        expect(secondSmallest("hello")).toBeUndefined();
        expect(secondSmallest(12345)).toBeUndefined();
        expect(secondSmallest(NaN)).toBeUndefined();
        expect(secondSmallest(undefined)).toBeUndefined();
        expect(secondSmallest(true)).toBeUndefined();
        expect(secondSmallest(false)).toBeUndefined();
        expect(secondSmallest("hello")).toBeUndefined();
        expect(secondSmallest({ 1: "1", 2: "2", 3: "3" })).toBeUndefined();
    })
});