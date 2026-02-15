import { useState, useEffect, useCallback } from "react";
import { verses as fallbackVerses, type Verse } from "@/data/verses";
import { hadiths, type Hadith } from "@/data/hadiths";
import { loadAllVerses, getLoadedVerses } from "@/services/quranService";

function getHourlySeed(): number {
  const now = new Date();
  return now.getFullYear() * 1000000 + (now.getMonth() + 1) * 10000 + now.getDate() * 100 + now.getHours();
}

function seededRandom(seed: number): number {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

function getContentForSeed(seed: number, verseList: Verse[]) {
  const verseIndex = Math.floor(seededRandom(seed) * verseList.length);
  const hadithIndex = Math.floor(seededRandom(seed + 1) * hadiths.length);
  return {
    verse: verseList[verseIndex],
    hadith: hadiths[hadithIndex],
  };
}

export function useHourlyContent() {
  const [seed, setSeed] = useState(getHourlySeed);
  const [allVerses, setAllVerses] = useState<Verse[]>(() => getLoadedVerses() || fallbackVerses);
  const [content, setContent] = useState(() => {
    const verses = getLoadedVerses() || fallbackVerses;
    return getContentForSeed(getHourlySeed(), verses);
  });

  // Load full Quran data
  useEffect(() => {
    loadAllVerses().then((verses) => {
      setAllVerses(verses);
      setContent(getContentForSeed(seed, verses));
    });
  }, []);

  // Check every minute if the hour changed
  useEffect(() => {
    const interval = setInterval(() => {
      const newSeed = getHourlySeed();
      if (newSeed !== seed) {
        setSeed(newSeed);
        setContent(getContentForSeed(newSeed, allVerses));
      }
    }, 60_000);
    return () => clearInterval(interval);
  }, [seed, allVerses]);

  const refresh = useCallback(() => {
    const randomSeed = Math.floor(Math.random() * 999999);
    setSeed(randomSeed);
    setContent(getContentForSeed(randomSeed, allVerses));
  }, [allVerses]);

  return { verse: content.verse, hadith: content.hadith, refresh };
}
