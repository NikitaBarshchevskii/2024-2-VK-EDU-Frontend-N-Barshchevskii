import correctSentence from "./correctSentence";

test("returns correct sentence", () => {
  expect(correctSentence("greetings, friends")).toBe("Greetings, friends.");
  expect(correctSentence("Greetings, friends")).toBe("Greetings, friends.");
  expect(correctSentence("Greetings, friends.")).toBe("Greetings, friends.");
  expect(correctSentence("   greetings, friends   ")).toBe(
    "Greetings, friends."
  );
  expect(correctSentence("   hello.   ")).toBe("Hello.");
  expect(correctSentence("")).toBe("");
});
