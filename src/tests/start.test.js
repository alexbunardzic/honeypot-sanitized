const sanitizeFormData = require("../form-sanitiser");

it("should not accept an empty string", () => {
  const result = sanitizeFormData("");

  expect(result).toBe("I do not accept an empty string");
});

it("should not accept a string with full empty spaces", () => {
    const result = sanitizeFormData("               ");

    expect(result).toEqual("I do not accept an empty string");
});

it("should not accept a string longer than 15 characters", () => {
  const result = sanitizeFormData("12334567890123456");

  expect(result).toBe("I do not accept a string longer than 15 characters");
});

it("should accept a string of 15 characters or less", () => {
  const result = sanitizeFormData("123456789012345");

  expect(result).toEqual("ok");
});

it("should not accept a URL in a comment", () => {
  const result = sanitizeFormData("http://evil.com");

  expect(result).toBe("I do not accept a URL");
});

it("reject scripts in the form data", () => {
  const result = sanitizeFormData("<script>");

  expect(result).toBe("I do not accept scripts in the form data");
});

it("rejects image tags", () => {
  const result = sanitizeFormData("<img src=");

  expect(result).toBe("I do not accept image tags");
});
