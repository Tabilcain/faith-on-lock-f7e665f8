import { verses as fallbackVerses, type Verse } from "@/data/verses";

let cachedVerses: Verse[] | null = null;
let loadingPromise: Promise<Verse[]> | null = null;

export async function loadAllVerses(): Promise<Verse[]> {
  if (cachedVerses) return cachedVerses;

  if (!loadingPromise) {
    const quranUrl = `${import.meta.env.BASE_URL}quran.json`;
    loadingPromise = fetch(quranUrl)
      .then((res) => {
        if (!res.ok) throw new Error(`Failed to load quran.json: ${res.status}`);
        return res.json();
      })
      .then((data: Array<{ s: string; sn: number; an: number; a: string; t: string }>) => {
        cachedVerses = data.map((v) => ({
          surah: v.s,
          surahNumber: v.sn,
          ayahNumber: v.an,
          arabic: v.a,
          turkish: v.t,
        }));
        console.log(`Loaded ${cachedVerses.length} verses from quran.json`);
        loadingPromise = null;
        return cachedVerses;
      })
      .catch((err) => {
        console.warn("Failed to load quran.json, using fallback:", err.message);
        loadingPromise = null;
        cachedVerses = fallbackVerses;
        return fallbackVerses;
      });
  }

  return loadingPromise;
}

export function getFallbackVerses(): Verse[] {
  return fallbackVerses;
}

export function getLoadedVerses(): Verse[] | null {
  return cachedVerses;
}
