import { verses as fallbackVerses, type Verse } from "@/data/verses";

const CACHE_KEY = "quran_all_verses";
const CACHE_VERSION_KEY = "quran_cache_v";
const CACHE_VERSION = "2";

interface ApiSurah {
  number: number;
  name: string;
  englishName: string;
  numberOfAyahs: number;
}

interface ApiAyah {
  number: number;
  text: string;
  numberInSurah: number;
  surah: ApiSurah;
}

interface ApiResponse {
  code: number;
  data: {
    surahs: {
      number: number;
      name: string;
      englishName: string;
      ayahs: ApiAyah[];
    }[];
  };
}

// Turkish surah names mapping
const surahNamesTr: Record<number, string> = {
  1: "Fâtiha", 2: "Bakara", 3: "Âl-i İmrân", 4: "Nisâ", 5: "Mâide",
  6: "En'âm", 7: "A'râf", 8: "Enfâl", 9: "Tevbe", 10: "Yûnus",
  11: "Hûd", 12: "Yûsuf", 13: "Ra'd", 14: "İbrâhîm", 15: "Hicr",
  16: "Nahl", 17: "İsrâ", 18: "Kehf", 19: "Meryem", 20: "Tâ-Hâ",
  21: "Enbiyâ", 22: "Hac", 23: "Mü'minûn", 24: "Nûr", 25: "Furkân",
  26: "Şu'arâ", 27: "Neml", 28: "Kasas", 29: "Ankebût", 30: "Rûm",
  31: "Lokmân", 32: "Secde", 33: "Ahzâb", 34: "Sebe'", 35: "Fâtır",
  36: "Yâsîn", 37: "Sâffât", 38: "Sâd", 39: "Zümer", 40: "Mü'min",
  41: "Fussilet", 42: "Şûrâ", 43: "Zuhruf", 44: "Duhân", 45: "Câsiye",
  46: "Ahkâf", 47: "Muhammed", 48: "Fetih", 49: "Hucurât", 50: "Kâf",
  51: "Zâriyât", 52: "Tûr", 53: "Necm", 54: "Kamer", 55: "Rahmân",
  56: "Vâkı'a", 57: "Hadîd", 58: "Mücâdele", 59: "Haşr", 60: "Mümtehine",
  61: "Saff", 62: "Cum'a", 63: "Münâfikûn", 64: "Teğâbün", 65: "Talâk",
  66: "Tahrîm", 67: "Mülk", 68: "Kalem", 69: "Hâkka", 70: "Me'âric",
  71: "Nûh", 72: "Cin", 73: "Müzzemmil", 74: "Müddessir", 75: "Kıyâmet",
  76: "İnsân", 77: "Mürselât", 78: "Nebe'", 79: "Nâzi'ât", 80: "Abese",
  81: "Tekvîr", 82: "İnfitâr", 83: "Mutaffifîn", 84: "İnşikâk", 85: "Bürûc",
  86: "Târık", 87: "A'lâ", 88: "Ğâşiye", 89: "Fecr", 90: "Beled",
  91: "Şems", 92: "Leyl", 93: "Duhâ", 94: "İnşirâh", 95: "Tîn",
  96: "Alak", 97: "Kadir", 98: "Beyyine", 99: "Zilzâl", 100: "Âdiyât",
  101: "Kâri'a", 102: "Tekâsür", 103: "Asr", 104: "Hümeze", 105: "Fîl",
  106: "Kureyş", 107: "Mâ'ûn", 108: "Kevser", 109: "Kâfirûn", 110: "Nasr",
  111: "Tebbet", 112: "İhlâs", 113: "Felak", 114: "Nâs"
};

let cachedVerses: Verse[] | null = null;
let loadingPromise: Promise<Verse[]> | null = null;

function loadFromCache(): Verse[] | null {
  try {
    const version = localStorage.getItem(CACHE_VERSION_KEY);
    if (version !== CACHE_VERSION) return null;
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function saveToCache(verses: Verse[]) {
  try {
    localStorage.setItem(CACHE_VERSION_KEY, CACHE_VERSION);
    localStorage.setItem(CACHE_KEY, JSON.stringify(verses));
  } catch {
    // storage full, ignore
  }
}

async function fetchFromApi(): Promise<Verse[]> {
  const [arabicRes, turkishRes] = await Promise.all([
    fetch("https://api.alquran.cloud/v1/quran/quran-uthmani"),
    fetch("https://api.alquran.cloud/v1/quran/tr.diyanet"),
  ]);

  if (!arabicRes.ok || !turkishRes.ok) {
    throw new Error("API fetch failed");
  }

  const arabicData: ApiResponse = await arabicRes.json();
  const turkishData: ApiResponse = await turkishRes.json();

  const verses: Verse[] = [];

  for (let si = 0; si < arabicData.data.surahs.length; si++) {
    const arSurah = arabicData.data.surahs[si];
    const trSurah = turkishData.data.surahs[si];

    for (let ai = 0; ai < arSurah.ayahs.length; ai++) {
      const arAyah = arSurah.ayahs[ai];
      const trAyah = trSurah.ayahs[ai];

      verses.push({
        surah: surahNamesTr[arSurah.number] || arSurah.englishName,
        surahNumber: arSurah.number,
        ayahNumber: arAyah.numberInSurah,
        arabic: arAyah.text,
        turkish: trAyah.text,
      });
    }
  }

  return verses;
}

export async function loadAllVerses(): Promise<Verse[]> {
  if (cachedVerses) return cachedVerses;

  // Check localStorage cache
  const cached = loadFromCache();
  if (cached && cached.length > 100) {
    cachedVerses = cached;
    return cached;
  }

  // Avoid duplicate fetches
  if (!loadingPromise) {
    loadingPromise = fetchFromApi()
      .then((verses) => {
        cachedVerses = verses;
        saveToCache(verses);
        loadingPromise = null;
        return verses;
      })
      .catch(() => {
        loadingPromise = null;
        return fallbackVerses;
      });
  }

  return loadingPromise;
}

export function getFallbackVerses(): Verse[] {
  return fallbackVerses;
}

export function getLoadedVerses(): Verse[] | null {
  return cachedVerses || loadFromCache();
}
