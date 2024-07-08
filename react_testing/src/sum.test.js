import sum from "./sum";

test("Sum of two numbers", () => {
  expect(sum(1, 2)).toBe(3);
  expect(sum(1, 2)).not.toBe(4);
  expect(sum(1, 2)).toBeGreaterThan(2);
  expect(sum(1, 2)).toBeLessThan(4);
  expect(sum(1, 2)).toBeLessThanOrEqual(3);
  expect(sum(1, 2)).toBeGreaterThanOrEqual(3);
});
