//calculator test
const add = require("./calculator");

it("should return zero on an empty string", () => {
    expect(add("")).toBe(0);
});

it("should return number when there is only one number", () => {
    expect(add("5")).toBe(5);
});

it("should return the sum of two given numbers", () => {
    expect(add("1,2")).toBe(3);
});

it("should return the sum of multiple numbers", () => {
    expect(add("1,2,3")).toBe(6);
});

it("should return the sum of all numbers", () => {
    expect(add("1\n2,3\n4")).toBe(10);
});

it("should throw exeption negatives not allowed", () => {
    function negativeTest1 () {
        add("1\n-2,3,-4");
    }
    expect(negativeTest1).toThrowError("Negatives not allowed -2,-4");
    function negativeTest2 () {
        add("-1");
    }
    expect(negativeTest2).toThrowError("Negatives not allowed -1");
});

it("should return the sum of all numbers ignoring numbers higher than 1000", () => {
    expect(add("1\n2,3\n4,1001")).toBe(10);
});

it("should accept new delimiter", () => {
    expect(add("//:\n1:2,4")).toBe(7);
    function negativeTestDelimiter () {
        add("//:\n-1:-2,4");
    }
    expect(negativeTestDelimiter).toThrowError("Negatives not allowed -1,-2");
});