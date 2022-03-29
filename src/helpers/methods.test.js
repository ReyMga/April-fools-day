import { createRandomNumber, colorPreset } from "./methods";

//Testeo colores acordes a los clicks generados
describe("colorPreset", () => {
  it("should return blue color", () => {
    expect(colorPreset(50)).toBe("blue");
  });
  it("should return green color", () => {
    expect(colorPreset(40)).toBe("green");
  });
  it("should return yellow color", () => {
    expect(colorPreset(30)).toBe("yellow");
  });
  it("should return orange color", () => {
    expect(colorPreset(20)).toBe("orange");
  });
  it("should return red color", () => {
    expect(colorPreset(10)).toBe("red");
  });
  it("should return grey color", () => {
    expect(colorPreset(-10)).toBe("grey");
  });
});

//Testeo número random acordes a los clicks generados
describe("createRandomNumber", () => {
  it("should be between 500 and 1000", () => {
    const randomNumber = createRandomNumber(500, 1000);
    expect(randomNumber).toBeGreaterThanOrEqual(500);
    expect(randomNumber).toBeLessThan(1001);
  });
});
