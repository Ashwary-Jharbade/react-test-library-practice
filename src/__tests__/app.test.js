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

test("Calling a function with not null argument", () => {
  const mock = jest.fn();
  [1].map((x) => mock(x));
  expect(mock).toBeCalledWith(expect.anything());
});

function randocall(fn) {
  return fn(Math.floor(Math.random() * 6 + 1));
}
test("randocall calls its callback with a number", () => {
  const mock = jest.fn();
  randocall(mock);
  expect(mock).toBeCalledWith(expect.any(Number));
});

describe("arrayContaining", () => {
  const expected = ["Alice", "Bob"];
  it("matches even if received contains additional elements", () => {
    expect(["Alice", "Bob", "Eve"]).toEqual(expect.arrayContaining(expected));
  });
  it("does not match if received does not contain expected elements", () => {
    expect(["Bob", "Eve"]).not.toEqual(expect.arrayContaining(expected));
  });
});

describe("Beware of a misunderstanding! A sequence of dice rolls", () => {
  const expected = [1, 2, 3, 4, 5, 6];
  it("matches even with an unexpected number 7", () => {
    expect([4, 1, 6, 7, 3, 5, 2, 5, 4, 6]).toEqual(
      expect.arrayContaining(expected)
    );
  });
  it("does not match without an expected number 2", () => {
    expect([4, 1, 6, 7, 3, 5, 7, 5, 4, 6]).not.toEqual(
      expect.arrayContaining(expected)
    );
  });
});

test("doAsync calls both callbacks", () => {
  expect.assertions(2);
  function callback1(data) {
    expect(data).toBeTruthy();
  }
  function callback2(data) {
    expect(data).toBeTruthy();
  }
  const doAsync = (callback1, callback2) => {
    callback1(1);
    callback2(1);
  };
  doAsync(callback1, callback2);
});

describe("not.arrayContaining", () => {
  const expected = ["Samantha"];

  it("matches if the actual array does not contain the expected elements", () => {
    expect(["Alice", "Bob", "Eve"]).toEqual(
      expect.not.arrayContaining(expected)
    );
  });
});

describe("not.objectContaining", () => {
  const expected = { foo: "bar" };

  it("matches if the actual object does not contain expected key: value pairs", () => {
    expect({ bar: "baz" }).toEqual(expect.not.objectContaining(expected));
  });
});

describe("not.stringContaining", () => {
  const expected = "Hello world!";

  it("matches if the received value does not contain the expected substring", () => {
    expect("How are you?").toEqual(expect.not.stringContaining(expected));
  });
});

describe("not.stringMatching", () => {
  const expected = /Hello world!/;

  it("matches if the received value does not match the expected regex", () => {
    expect("How are you?").toEqual(expect.not.stringMatching(expected));
  });
});

// To be asked
// test("onPress gets called with the right thing", () => {
//   const onPress = jest.fn();
//   simulatePresses(onPress);
//   expect(onPress).toBeCalledWith(
//     expect.objectContaining({
//       x: expect.any(Number),
//       y: expect.any(Number),
//     })
//   );
// });

describe("stringMatching in arrayContaining", () => {
  const expected = [
    expect.stringMatching(/^Alic/),
    expect.stringMatching(/^[BR]ob/),
  ];
  it("matches even if received contains additional elements", () => {
    expect(["Alicia", "Roberto", "Evelina"]).toEqual(
      expect.arrayContaining(expected)
    );
  });
  it("does not match if received does not contain expected elements", () => {
    expect(["Roberto", "Evelina"]).not.toEqual(
      expect.arrayContaining(expected)
    );
  });
});

// To be asked
// import serializer from 'my-serializer-module';
// expect.addSnapshotSerializer(serializer);
// affects expect(value).toMatchSnapshot() assertions in the test file

describe("Testing reslove and reject", () => {
  const ckfFun = (para) => {
    return new Promise((resolve, reject) => {
      if (para !== "lemon") {
        reject(new Error("Not a lemon"));
      }
      resolve("lemon");
    });
  };

  test("Testing reslove is a lemon", async () => {
    await expect(ckfFun("lemon")).resolves.toBe("lemon");
  });

  test("Testing reslove is not a lemon", async () => {
    await expect(ckfFun("lemon")).resolves.not.toBe("lemono");
  });

  test("Testing reject is Not a lemon", async () => {
    await expect(ckfFun("apple")).rejects.toThrow("Not a lemon");
  });
});

function drinkAll(callback, flavour) {
  if (flavour !== "octopus") {
    callback(flavour);
  }
}
describe("drinkAll", () => {
  test("drinks something lemon-flavoured", () => {
    const drink = jest.fn();
    drinkAll(drink, "lemon");
    expect(drink).toHaveBeenCalled();
  });

  test("does not drink something octopus-flavoured", () => {
    const drink = jest.fn();
    drinkAll(drink, "octopus");
    expect(drink).not.toHaveBeenCalled();
  });
});

test("drinkEach drinks each drink", () => {
  const drink = jest.fn();
  const drinkEach = (fun, arr) => {
    arr.forEach((element) => {
      fun(element);
    });
  };
  drinkEach(drink, ["lemon", "octopus"]);
  expect(drink).toHaveBeenCalledTimes(2);
});

test("To have been called with argument", () => {
  const para = "Paris";
  const fun = jest.fn();
  fun("Paris");
  expect(fun).toBeCalledWith(para);
});

test("applying to all flavors does mango last", () => {
  const drink = jest.fn();
  const applyToAllFlavors = (fun, arr) => {
    arr.forEach((element) => {
      fun(element);
    });
  };
  applyToAllFlavors(drink, ["apple", "lemon", "mango"]);
  expect(drink).toHaveBeenLastCalledWith("mango");
});

test("drink Each drinks each drink", () => {
  const drink = jest.fn();
  const drinkEach = (fun, arr) => {
    arr.forEach((element) => {
      fun(element);
    });
  };
  drinkEach(drink, ["apple", "lemon", "mango"]);
  expect(drink).toHaveBeenNthCalledWith(1, "apple");
  expect(drink).toHaveBeenNthCalledWith(2, "lemon");
  expect(drink).toHaveBeenNthCalledWith(3, "mango");
});

test("drinks returns", () => {
  const drink = jest.fn(() => true);
  drink();
  expect(drink).toHaveReturned();
});

test("drink returns twice", () => {
  const drink = jest.fn(() => true);
  drink();
  drink();
  expect(drink).toHaveReturnedTimes(2);
});

test("drink returns La Croix", () => {
  const beverage = { name: "La Croix" };
  const drink = jest.fn((beverage) => beverage.name);
  drink(beverage);
  expect(drink).toHaveReturnedWith("La Croix");
});

test("drink returns La Croix (Orange) last", () => {
  const beverage1 = { name: "La Croix (Lemon)" };
  const beverage2 = { name: "La Croix (Orange)" };
  const drink = jest.fn((beverage) => beverage.name);
  drink(beverage1);
  drink(beverage2);
  expect(drink).toHaveLastReturnedWith("La Croix (Orange)");
});

test("drink returns expected nth calls", () => {
  const beverage1 = { name: "La Croix (Lemon)" };
  const beverage2 = { name: "La Croix (Orange)" };
  const drink = jest.fn((beverage) => beverage.name);
  drink(beverage1);
  drink(beverage2);
  expect(drink).toHaveNthReturnedWith(1, "La Croix (Lemon)");
  expect(drink).toHaveNthReturnedWith(2, "La Croix (Orange)");
});

const obj = {
  name: "Ash",
  profession: "Pokemon Trainer",
  pokemons: {
    pikachu: {
      attacks: ["thunderbolt", "quick punch"],
    },
    charizard: {
      attacks: ["flame thrower"],
    },
  },
};

describe("obj container ash details", () => {
  test("To have name property", () => {
    expect(obj).toHaveProperty("name");
  });
  test("To have name property with ash value", () => {
    expect(obj).toHaveProperty("name", "Ash");
  });
  test("To have these property", () => {
    expect(obj).toHaveProperty("pokemons.pikachu");
  });
  test("To have value of these property", () => {
    expect(obj).toHaveProperty(
      ["pokemons", "pikachu", "attacks"],
      ["thunderbolt", "quick punch"]
    );
  });
});
