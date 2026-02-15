import { hadiths as fallbackHadiths, type Hadith } from "@/data/hadiths";

interface RawHadith {
  id: number;
  text: string;
  source: string;
  book: number;
  bookName: string;
}

let cachedHadiths: Hadith[] | null = null;
let loadingPromise: Promise<Hadith[]> | null = null;

export async function loadAllHadiths(): Promise<Hadith[]> {
  if (cachedHadiths) return cachedHadiths;

  if (!loadingPromise) {
    loadingPromise = fetch("/hadiths.json")
      .then((res) => {
        if (!res.ok) throw new Error(`Failed to load hadiths.json: ${res.status}`);
        return res.json();
      })
      .then((data: RawHadith[]) => {
        cachedHadiths = data.map((h) => ({
          arabic: "",
          turkish: h.text,
          source: h.source,
          book: h.bookName,
        }));
        console.log(`Loaded ${cachedHadiths.length} hadiths from hadiths.json`);
        loadingPromise = null;
        return cachedHadiths;
      })
      .catch((err) => {
        console.warn("Failed to load hadiths.json, using fallback:", err.message);
        loadingPromise = null;
        cachedHadiths = fallbackHadiths;
        return fallbackHadiths;
      });
  }

  return loadingPromise;
}

export function getLoadedHadiths(): Hadith[] | null {
  return cachedHadiths;
}
