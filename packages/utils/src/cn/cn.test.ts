import { describe, expect, it } from "vitest";

import { index } from "./index";

describe("cn", () => {
  it("merges class names", () => {
    expect(index("a", "b")).toBe("a b");
  });

  it("filters falsy values", () => {
    expect(index("a", false, null, undefined, "", "b")).toBe("a b");
  });

  it("merges tailwind classes", () => {
    expect(index("p-2", "p-4")).toBe("p-4"); // tailwind-merge: p-4 overrides p-2
  });
});
