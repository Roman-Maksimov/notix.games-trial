import { describe, expect, it } from "vitest";

import { pluralize } from "./index";

describe("pluralize", () => {
  const testCases = [
    // Единственное число (1, 21, 31, 101, etc.)
    { count: 1, expected: "игра", description: "1 игра" },
    { count: 21, expected: "игра", description: "21 игра" },
    { count: 31, expected: "игра", description: "31 игра" },
    { count: 101, expected: "игра", description: "101 игра" },
    { count: 1001, expected: "игра", description: "1001 игра" },

    // Форма для 2-4 (2, 3, 4, 22, 23, 24, etc.)
    { count: 2, expected: "игры", description: "2 игры" },
    { count: 3, expected: "игры", description: "3 игры" },
    { count: 4, expected: "игры", description: "4 игры" },
    { count: 22, expected: "игры", description: "22 игры" },
    { count: 23, expected: "игры", description: "23 игры" },
    { count: 24, expected: "игры", description: "24 игры" },
    { count: 102, expected: "игры", description: "102 игры" },
    { count: 103, expected: "игры", description: "103 игры" },
    { count: 104, expected: "игры", description: "104 игры" },

    // Множественное число (0, 5-9, 10-20, 25-30, etc.)
    { count: 0, expected: "игр", description: "0 игр" },
    { count: 5, expected: "игр", description: "5 игр" },
    { count: 6, expected: "игр", description: "6 игр" },
    { count: 7, expected: "игр", description: "7 игр" },
    { count: 8, expected: "игр", description: "8 игр" },
    { count: 9, expected: "игр", description: "9 игр" },
    { count: 10, expected: "игр", description: "10 игр" },
    { count: 11, expected: "игр", description: "11 игр" },
    { count: 12, expected: "игр", description: "12 игр" },
    { count: 13, expected: "игр", description: "13 игр" },
    { count: 14, expected: "игр", description: "14 игр" },
    { count: 15, expected: "игр", description: "15 игр" },
    { count: 16, expected: "игр", description: "16 игр" },
    { count: 17, expected: "игр", description: "17 игр" },
    { count: 18, expected: "игр", description: "18 игр" },
    { count: 19, expected: "игр", description: "19 игр" },
    { count: 20, expected: "игр", description: "20 игр" },
    { count: 25, expected: "игр", description: "25 игр" },
    { count: 30, expected: "игр", description: "30 игр" },
    { count: 100, expected: "игр", description: "100 игр" },
    { count: 1000, expected: "игр", description: "1000 игр" },
  ];

  testCases.forEach(({ count, expected, description }) => {
    it(`should return "${expected}" for ${description}`, () => {
      const result = pluralize(count, "игр", "игра", "игры");
      expect(result).toBe(expected);
    });
  });

  // Дополнительные тесты с другими словами
  describe("with different words", () => {
    it('should work with "пользователь"', () => {
      expect(
        pluralize(1, "пользователей", "пользователь", "пользователя"),
      ).toBe("пользователь");
      expect(
        pluralize(2, "пользователей", "пользователь", "пользователя"),
      ).toBe("пользователя");
      expect(
        pluralize(5, "пользователей", "пользователь", "пользователя"),
      ).toBe("пользователей");
    });

    it('should work with "сообщение"', () => {
      expect(pluralize(1, "сообщений", "сообщение", "сообщения")).toBe(
        "сообщение",
      );
      expect(pluralize(3, "сообщений", "сообщение", "сообщения")).toBe(
        "сообщения",
      );
      expect(pluralize(11, "сообщений", "сообщение", "сообщения")).toBe(
        "сообщений",
      );
    });

    it('should work with "комментарий"', () => {
      expect(pluralize(1, "комментариев", "комментарий", "комментария")).toBe(
        "комментарий",
      );
      expect(pluralize(2, "комментариев", "комментарий", "комментария")).toBe(
        "комментария",
      );
      expect(pluralize(5, "комментариев", "комментарий", "комментария")).toBe(
        "комментариев",
      );
    });
  });

  // Тесты граничных случаев
  describe("edge cases", () => {
    it("should handle negative numbers", () => {
      expect(pluralize(-1, "игр", "игра", "игры")).toBe("игр");
      expect(pluralize(-5, "игр", "игра", "игры")).toBe("игр");
    });

    it("should handle very large numbers", () => {
      expect(pluralize(1000001, "игр", "игра", "игры")).toBe("игра");
      expect(pluralize(1000002, "игр", "игра", "игры")).toBe("игры");
      expect(pluralize(1000005, "игр", "игра", "игры")).toBe("игр");
    });
  });
});
