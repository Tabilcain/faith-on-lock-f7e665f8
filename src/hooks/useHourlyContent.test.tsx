import { describe, it, expect, vi, afterEach } from "vitest";
import { render, waitFor } from "@testing-library/react";
import { useHourlyContent } from "@/hooks/useHourlyContent";
import { useEffect } from "react";

const mockVerses = [
  { surah: "A", surahNumber: 1, ayahNumber: 1, arabic: "a1", turkish: "t1" },
  { surah: "B", surahNumber: 2, ayahNumber: 2, arabic: "a2", turkish: "t2" },
];

const mockHadiths = [
  { arabic: "h1", turkish: "ht1", source: "Buhârî" },
  { arabic: "h2", turkish: "ht2", source: "Müslim" },
];

vi.mock("@/services/quranService", () => ({
  loadAllVerses: vi.fn(async () => mockVerses),
  getLoadedVerses: vi.fn(() => null),
}));

vi.mock("@/services/hadithService", () => ({
  loadAllHadiths: vi.fn(async () => mockHadiths),
  getLoadedHadiths: vi.fn(() => null),
}));

function getHourlySeed(now: Date): number {
  return (
    now.getFullYear() * 1000000 +
    (now.getMonth() + 1) * 10000 +
    now.getDate() * 100 +
    now.getHours()
  );
}

function seededRandom(seed: number): number {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

function getContentForSeed(seed: number) {
  const verseIndex = Math.floor(seededRandom(seed) * mockVerses.length);
  const hadithIndex = Math.floor(seededRandom(seed * 7 + 13) * mockHadiths.length);
  return {
    verse: mockVerses[verseIndex],
    hadith: mockHadiths[hadithIndex],
  };
}

function HookProbe({ onChange }: { onChange: (data: { verse: unknown; hadith: unknown }) => void }) {
  const { verse, hadith } = useHourlyContent();
  useEffect(() => {
    onChange({ verse, hadith });
  }, [verse, hadith, onChange]);
  return null;
}

describe("useHourlyContent", () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  it("uses current hour seed after async load", async () => {
    vi.useFakeTimers({ toFake: ["Date"] });
    const now = new Date("2025-01-01T10:05:00");
    vi.setSystemTime(now);

    const updates: Array<{ verse: unknown; hadith: unknown }> = [];
    render(<HookProbe onChange={(data) => updates.push(data)} />);

    await waitFor(() => {
      expect(updates.length).toBeGreaterThan(0);
    });

    const expected = getContentForSeed(getHourlySeed(now));
    const latest = updates[updates.length - 1];

    expect(latest.verse).toEqual(expected.verse);
    expect(latest.hadith).toEqual(expected.hadith);
  });
});
