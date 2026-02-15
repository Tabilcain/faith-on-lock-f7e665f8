import { describe, it, expect, vi, afterEach } from "vitest";
import { verses as fallbackVerses } from "@/data/verses";

describe("quranService", () => {
  afterEach(() => {
    vi.restoreAllMocks();
    vi.resetModules();
  });

  it("maps fetched json to Verse shape", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        json: async () => [{ s: "Fatiha", sn: 1, an: 1, a: "AR", t: "TR" }],
      }) as unknown as typeof fetch
    );

    const { loadAllVerses } = await import("@/services/quranService");
    const verses = await loadAllVerses();

    expect(verses).toEqual([
      { surah: "Fatiha", surahNumber: 1, ayahNumber: 1, arabic: "AR", turkish: "TR" },
    ]);
  });

  it("falls back when fetch fails", async () => {
    vi.stubGlobal("fetch", vi.fn().mockRejectedValue(new Error("fail")) as unknown as typeof fetch);

    const { loadAllVerses } = await import("@/services/quranService");
    const verses = await loadAllVerses();

    expect(verses).toStrictEqual(fallbackVerses);
  });
});
