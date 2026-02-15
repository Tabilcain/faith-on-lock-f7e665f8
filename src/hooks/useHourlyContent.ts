import { useState, useEffect, useCallback } from "react";
import { verses, type Verse } from "@/data/verses";
import { hadiths, type Hadith } from "@/data/hadiths";

function getHourlySeed(): number {
  const now = new Date();
  return now.getFullYear() * 1000000 + (now.getMonth() + 1) * 10000 + now.getDate() * 100 + now.getHours();
}

function seededRandom(seed: number): number {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

function getContentForSeed(seed: number) {
  const verseIndex = Math.floor(seededRandom(seed) * verses.length);
  const hadithIndex = Math.floor(seededRandom(seed + 1) * hadiths.length);
  return {
    verse: verses[verseIndex],
    hadith: hadiths[hadithIndex],
  };
}

export function useHourlyContent() {
  const [seed, setSeed] = useState(getHourlySeed);
  const [content, setContent] = useState(() => getContentForSeed(getHourlySeed()));

  // Check every minute if the hour changed
  useEffect(() => {
    const interval = setInterval(() => {
      const newSeed = getHourlySeed();
      if (newSeed !== seed) {
        setSeed(newSeed);
        setContent(getContentForSeed(newSeed));
      }
    }, 60_000);
    return () => clearInterval(interval);
  }, [seed]);

  const refresh = useCallback(() => {
    const randomSeed = Math.floor(Math.random() * 999999);
    setSeed(randomSeed);
    setContent(getContentForSeed(randomSeed));
  }, []);

  return { verse: content.verse, hadith: content.hadith, refresh };
}
