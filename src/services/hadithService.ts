import { hadiths, type Hadith } from "@/data/hadiths";

export type { Hadith };

export async function loadAllHadiths(): Promise<Hadith[]> {
  return hadiths;
}

export function getLoadedHadiths(): Hadith[] {
  return hadiths;
}
