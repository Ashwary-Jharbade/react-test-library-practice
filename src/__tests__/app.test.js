test("Two plus two is four", () => {
  expect(2 + 2).toBe(4);
});

test("Two plus two is not four", () => {
  expect(2 + 2).not.toBe(3);
});

test("Adding two positive no is not zero", () => {
  for (let i = 1; i < 5; i++) {
    for (let j = 1; j < 5; j++) {
      expect(i + j).not.toBe(0);
    }
  }
});

test("Adding two number is zero", () => {
  for (let i = -1; i < 5; i++) {
    for (let j = 1; j < 5; j++) {
      expect(i + j).toBe(0);
    }
  }
});

test("Comparing two object", () => {
  const obj = { name: "Jon" };
  obj["city"] = "LA";
  expect(obj).toEqual({ name: "Jon", city: "LA" });
});

test("Comparing two object not to be equal", () => {
  const obj = { name: "Jon" };
  obj["city"] = "LV";
  expect(obj).not.toEqual({ name: "Jon", city: "LA" });
});

test("Variable is null", () => {
  const obj = null;
  expect(obj).toBeNull();
  expect(obj).not.toBeUndefined();
  expect(obj).toBeDefined();
  expect(obj).not.toBeTruthy();
  expect(obj).toBeFalsy();
});

test("Number is zero", () => {
  const num = 0;
  expect(num).toBe(0);
  expect(num).not.toBeNull();
  expect(num).toBeDefined();
  expect(num).not.toBeInstanceOf(Number);
  expect(num).not.toBeUndefined();
  expect(num).not.toBeTruthy();
  expect(num).toBeFalsy();
});

test("Comparasion with a number", () => {
  const value = 10;
  expect(value).toBe(10);
  expect(value).toBeGreaterThan(5);
  expect(value).toBeGreaterThanOrEqual(10);
  expect(value).toBeLessThan(11);
  expect(value).toBeLessThanOrEqual(10);
  expect(value).toEqual(10);
  expect(value).not.toEqual(10.0001);
});

test("Adding two floating point number", () => {
  const sum = 0.1 + 0.2;
  expect(sum).not.toBe(0.3);
  expect(sum).toBeCloseTo(0.3);
});

test("Provided text is a placeholder text", () => {
  const text = "Lorem ipsum is a dummy text";
  const text2 = "All fields are required";
  const reg = /lorem ipsum/i;
  expect(text).toMatch(reg);
  expect(text2).not.toMatch(reg);
});

test("Item is available in list", () => {
  const list = ["Bhopal", "Mumbai", "LA", "Paris", "Bhopal"];
  const listSet = new Set(list);
  expect(list).toContain("Bhopal");
  expect(list).not.toContain("NSW");
  expect(listSet).toContain("LA");
});

function divideByZero(param) {
  if (typeof param !== "number") {
    throw new Error("Not a number exception: Argument type must be a number!");
  }
  if (isNaN(param)) {
    throw new Error("NaN exception: NaN is not acceptable!");
  }
  const result = 10 / param;
  return result;
}

test("divideByZero function to throw an exception", () => {
  expect(() => {
    divideByZero([10, 20]);
  }).toThrow(/Not a number exception/i);
  expect(() => {
    divideByZero(NaN);
  }).toThrow(/NaN exception/i);
  expect(divideByZero(0)).toBe(Infinity);
});

expect.extend({
  toBeSumIsLessThanTen(received) {
    const flag = received < 10;
    if (flag) {
      return {
        message: () => `expected ${received} is less than 10`,
        pass: true,
      };
    }
    return {
      message: () => `expected ${received} is not less than 10`,
      pass: false,
    };
  },
});

test("Number is less than 10", () => {
  expect(9).toBeSumIsLessThanTen();
  expect(11).not.toBeSumIsLessThanTen();
});
