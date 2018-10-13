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