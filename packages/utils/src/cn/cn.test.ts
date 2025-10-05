import { describe, expect, it } from "vitest";

import { cn } from "./index";

describe("cn", () => {
  it("merges class names", () => {
    expect(cn("a", "b")).toBe("a b");
  });

  it("filters falsy values", () => {
    expect(cn("a", false, null, undefined, "", "b")).toBe("a b");
  });

  it("merges tailwind classes", () => {
    expect(cn("p-2", "p-4")).toBe("p-4"); // tailwind-merge: p-4 overrides p-2
  });
});
