import { describe, it, expect } from "vitest";
import { formatTime } from "@/entities/mp3-player/lib/formatTime";

describe("formatTime", () => {
  it("Должен правильно переформатировать чистые секунды в формат mm:ss", () => {
    expect(formatTime(450)).toBe("7:30");
    expect(formatTime(600)).toBe("10:00");
  });

});
