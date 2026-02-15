import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

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

// ============ QURAN EXPORT ============

async function exportQuran() {
  const [arabicRes, turkishRes] = await Promise.all([
    fetch("https://api.alquran.cloud/v1/quran/quran-uthmani"),
    fetch("https://api.alquran.cloud/v1/quran/tr.diyanet"),
  ]);

  if (!arabicRes.ok || !turkishRes.ok) {
    throw new Error(`API fetch failed: ar=${arabicRes.status} tr=${turkishRes.status}`);
  }

  const arabicData = await arabicRes.json();
  const turkishData = await turkishRes.json();

  const verses: Array<{ s: string; sn: number; an: number; a: string; t: string }> = [];

  for (let si = 0; si < arabicData.data.surahs.length; si++) {
    const arSurah = arabicData.data.surahs[si];
    const trSurah = turkishData.data.surahs[si];
    for (let ai = 0; ai < arSurah.ayahs.length; ai++) {
      verses.push({
        s: surahNamesTr[arSurah.number] || arSurah.englishName,
        sn: arSurah.number,
        an: arSurah.ayahs[ai].numberInSurah,
        a: arSurah.ayahs[ai].text,
        t: trSurah.ayahs[ai].text,
      });
    }
  }

  console.log(`Exported ${verses.length} Quran verses`);
  return verses;
}

// ============ HADITH EXPORT ============

interface RawHadith {
  hadithnumber: number;
  arabicnumber: number;
  text: string;
  grades: Array<{ name: string; grade: string }>;
  reference: { book: number; hadith: number };
}

interface RawEdition {
  metadata: { name: string; sections: Record<string, string> };
  hadiths: RawHadith[];
}

async function fetchEdition(edition: string): Promise<RawEdition> {
  const urls = [
    `https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions/${edition}.json`,
    `https://raw.githubusercontent.com/fawazahmed0/hadith-api/1/editions/${edition}.json`,
  ];
  
  for (const url of urls) {
    try {
      const res = await fetch(url);
      if (res.ok) return await res.json();
    } catch { /* try next */ }
  }
  throw new Error(`Failed to fetch ${edition}`);
}

function selectHadiths(edition: RawEdition, source: string, targetCount: number) {
  const hadiths = edition.hadiths.filter(h => h.text && h.text.trim().length > 30 && !h.text.startsWith("AÇIKLAMALAR"));
  const sections = edition.metadata.sections;
  const sectionKeys = Object.keys(sections).filter(k => k !== "0");
  const perSection = Math.max(1, Math.ceil(targetCount / sectionKeys.length));

  const bySection: Record<number, RawHadith[]> = {};
  for (const h of hadiths) {
    const book = h.reference?.book || 0;
    if (!bySection[book]) bySection[book] = [];
    bySection[book].push(h);
  }

  const selected: Array<{ id: number; text: string; source: string; book: number; bookName: string }> = [];

  for (const sectionKey of sectionKeys) {
    const bookNum = parseInt(sectionKey);
    const sectionHadiths = bySection[bookNum] || [];
    if (sectionHadiths.length === 0) continue;

    const step = Math.max(1, Math.floor(sectionHadiths.length / perSection));
    let count = 0;
    for (let i = 0; i < sectionHadiths.length && count < perSection; i += step) {
      const h = sectionHadiths[i];
      if (h.text.length < 30) continue;
      selected.push({
        id: h.hadithnumber,
        text: h.text,
        source,
        book: bookNum,
        bookName: sections[sectionKey] || "",
      });
      count++;
    }
    if (selected.length >= targetCount) break;
  }

  return selected.slice(0, targetCount);
}

async function exportHadiths(targetCount: number) {
  const [bukhari, muslim] = await Promise.all([
    fetchEdition("tur-bukhari"),
    fetchEdition("tur-muslim"),
  ]);

  console.log(`Bukhari: ${bukhari.hadiths.length}, Muslim: ${muslim.hadiths.length}`);

  const bukhariSelected = selectHadiths(bukhari, "Sahih Buhari", targetCount);
  const muslimSelected = selectHadiths(muslim, "Sahih Müslim", targetCount);
  const result = [...bukhariSelected, ...muslimSelected];
  console.log(`Selected ${result.length} hadiths (B:${bukhariSelected.length} M:${muslimSelected.length})`);
  return result;
}

// ============ SERVE ============

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const url = new URL(req.url);
    const mode = url.searchParams.get("mode") || "quran";

    let data;
    if (mode === "hadiths") {
      const count = Math.min(parseInt(url.searchParams.get("count") || "500") || 500, 2000);
      data = await exportHadiths(count);
    } else {
      data = await exportQuran();
    }

    return new Response(JSON.stringify(data), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("export error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
