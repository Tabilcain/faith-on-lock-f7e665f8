import { useState, useEffect, useCallback } from "react";
import { verses as fallbackVerses, type Verse } from "@/data/verses";
import { hadiths as fallbackHadiths, type Hadith } from "@/data/hadiths";
import { loadAllVerses, getLoadedVerses } from "@/services/quranService";
import { loadAllHadiths, getLoadedHadiths } from "@/services/hadithService";

function getHourlySeed(): number {
  const now = new Date();
  return now.getFullYear() * 1000000 + (now.getMonth() + 1) * 10000 + now.getDate() * 100 + now.getHours();
}

function seededRandom(seed: number): number {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

function getContentForSeed(seed: number, verseList: Verse[], hadithList: Hadith[]) {
  const verseIndex = Math.floor(seededRandom(seed) * verseList.length);
  const hadithIndex = Math.floor(seededRandom(seed + 1) * hadithList.length);
  return {
    verse: verseList[verseIndex],
    hadith: hadithList[hadithIndex],
  };
}

export function useHourlyContent() {
  const [seed, setSeed] = useState(getHourlySeed);
  const [allVerses, setAllVerses] = useState<Verse[]>(() => getLoadedVerses() || fallbackVerses);
  const [allHadiths, setAllHadiths] = useState<Hadith[]>(() => getLoadedHadiths() || fallbackHadiths);
  const [content, setContent] = useState(() => {
    const verses = getLoadedVerses() || fallbackVerses;
    const hadiths = getLoadedHadiths() || fallbackHadiths;
    return getContentForSeed(getHourlySeed(), verses, hadiths);
  });

  // Load full data
  useEffect(() => {
    Promise.all([loadAllVerses(), loadAllHadiths()]).then(([verses, hadiths]) => {
      setAllVerses(verses);
      setAllHadiths(hadiths);
      setContent(getContentForSeed(seed, verses, hadiths));
    });
  }, []);

  // Check every minute if the hour changed
  useEffect(() => {
    const interval = setInterval(() => {
      const newSeed = getHourlySeed();
      if (newSeed !== seed) {
        setSeed(newSeed);
        setContent(getContentForSeed(newSeed, allVerses, allHadiths));
      }
    }, 60_000);
    return () => clearInterval(interval);
  }, [seed, allVerses, allHadiths]);

  const refresh = useCallback(() => {
    const randomSeed = Math.floor(Math.random() * 999999);
    setSeed(randomSeed);
    setContent(getContentForSeed(randomSeed, allVerses, allHadiths));
  }, [allVerses, allHadiths]);

  return { verse: content.verse, hadith: content.hadith, refresh };
}
