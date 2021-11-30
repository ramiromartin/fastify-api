const { isGreaterThan } = require("../utils/helpers");

test("check if temperature is greater than 15", () => {
  expect(isGreaterThan(295)).toBeTruthy();
});

test("check if temperature is lesser than 15", () => {
  expect(isGreaterThan(273)).toBeFalsy();
});
