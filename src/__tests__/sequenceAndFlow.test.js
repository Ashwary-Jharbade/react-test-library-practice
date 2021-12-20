beforeAll(() => {
  console.log("Before all outside 1");
});

beforeEach(() => {
  console.log("Before each outside 1");
});

afterAll(() => {
  console.log("After all outside 1");
});

afterEach(() => {
  console.log("After each outside 1");
});

describe("Sum to two number", () => {
  beforeAll(() => {
    console.log("Before all inside 2");
  });

  beforeEach(() => {
    console.log("Before each inside 2");
  });

  afterAll(() => {
    console.log("After all inside 2");
  });

  afterEach(() => {
    console.log("After each inside 2");
  });
  function sum(a, b) {
    return a + b;
  }
  test("Sum of two positive number", () => {
    expect(sum(1, 2)).toBe(3);
  });

  test("Sum of two positive number is positive", () => {
    expect(sum(1, 2)).toBeGreaterThan(0);
  });
});

// test("sum of 2+2 is 4", () => {
//   expect(2 + 2).toBe(4);
// });
