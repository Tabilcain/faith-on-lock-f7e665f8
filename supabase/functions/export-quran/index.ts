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

function cleanHadithText(text: string): string | null {
  // 0. Kodlama/OCR artifaktları — kelime içinde "/" varsa reddet
  if (/\w\/\w/.test(text)) return null;

  // 1. Sened kesme - Rasulullah/Nebi kalıplarını bul, sonrasını al
  const senedPatterns = [
    /(?:Res[uû]l[uü]llah|Ras[uû]l[uü]llah|Res[uû]l-i Ekrem|Nebî|Nebi|Hz\.\s*Peygamber|Peygamber(?:imiz)?)\s*\(?\s*(?:s\.?a\.?v\.?|sallallah[uü]\s*aleyhi\s*ve\s*sellem)?\s*\)?\s*(?:şöyle\s+)?(?:buyurdu|dedi|söyledi|emretti|buyurmuştur|demiştir|söylemiştir)(?:\s*ki)?[:\s]+/i,
    /(?:Res[uû]l[uü]llah|Ras[uû]l[uü]llah|Nebî|Nebi)\s*\(?\s*(?:s\.?a\.?v\.?)?\s*\)?\s*[:]\s*/i,
  ];

  let cleaned = text;
  let found = false;

  for (const pattern of senedPatterns) {
    const match = cleaned.match(pattern);
    if (match && match.index !== undefined) {
      cleaned = cleaned.substring(match.index + match[0].length);
      found = true;
      break;
    }
  }

  if (!found) return null;

  // 2. Gereksiz ekleri temizle
  cleaned = cleaned.replace(/Tekrar[ıi]?\s*:.*$/s, "");
  cleaned = cleaned.replace(/Di[gğ]er\s+[Tt]ahric.*$/s, "");
  cleaned = cleaned.replace(/[İI]ZAH[İI]\s+[İI]Ç[İI]N.*$/s, "");
  cleaned = cleaned.replace(/AÇIKLAMA.*$/s, "");
  cleaned = cleaned.replace(/Not\s*:.*$/s, "");
  cleaned = cleaned.replace(/BÖLÜM[ÜU]\s+B[İI]TT[İI].*$/s, "");
  cleaned = cleaned.replace(/\[-?\d+-?\]/g, "");
  cleaned = cleaned.replace(/باب:.*$/s, "");
  cleaned = cleaned.replace(/\(Yani\s+.*?\)/g, "");
  cleaned = cleaned.replace(/\[\d+\]/g, "");
  cleaned = cleaned.replace(/\s+/g, " ").trim();

  // 3. Baş harfi büyük yap
  if (cleaned.length > 0) {
    cleaned = cleaned.charAt(0).toUpperCase() + cleaned.slice(1);
  }

  // 4. Tırnak/parantez düzeltme
  cleaned = cleaned.replace(/^["'"]+/, "").replace(/["'"]+$/, "").trim();

  // 5. Uzunluk kontrolü
  if (cleaned.length < 40 || cleaned.length > 450) return null;

  // 6. Kodlama artifaktı — temizlenmiş metinde de kontrol
  if (/\w\/\w/.test(cleaned)) return null;

  // 7. Madde listesi formatındaki hadisleri ele
  if (/\d\.\s*$/.test(cleaned)) return null;

  // 8. Tam cümle kontrolü
  if (!/[.!?"]$/.test(cleaned)) {
    const lastPeriod = cleaned.lastIndexOf(".");
    if (lastPeriod > 40) {
      cleaned = cleaned.substring(0, lastPeriod + 1);
    } else {
      return null;
    }
  }

  // 9. Başında parantez varsa temizle
  if (/^\)/.test(cleaned)) {
    cleaned = cleaned.replace(/^\)\s*/, "");
  }

  // 10. Yarım kalan diyalog/soru kalıpları
  const incompletePatterns = /(?:diye sordular|diye sordu|diye sorduk|diye sordum|ne emredersiniz|ne dersiniz|ne buyurursunuz|ne yapayım|ne yapalım|Su görünce)[.?!]?\s*$/i;
  if (incompletePatterns.test(cleaned)) return null;

  // 11. Minimum 2 cümle — tek cümlelik komutlar bağlamsız kalır
  const sentences = cleaned.split(/[.!?]+/).filter(s => s.trim().length > 0);
  if (sentences.length < 2) return null;

  // 12. Son cümle soru ile bitiyorsa ve toplam 2'den az cümle varsa atla
  if (/\?\s*$/.test(cleaned) && sentences.length < 2) return null;

  return cleaned;
}

// Manevi/ahlaki içerik beyaz listesi (kitap adı alt-string eşleşmesi)
const preferredBookKeywords = [
  "faith", "belief", "iman",
  "knowledge",
  "good manners", "adab", "al-adab",
  "invocations", "remembrance",
  "heart tender", "riqaq", "ar-riqaq",
  "heart-melting", "piety", "softening",
  "virtues of the qur", "virtues of the qu",
  "virtue, enjoining", "kinship",
  "destiny", "qadar",
  "fasting",
  "prophets",
  "virtues of the prophet", "merits of the prophet",
  "oneness", "tawheed",
  "interpretation of dreams",
];

// Fıkıh/hukuk kara listesi
const excludedBookKeywords = [
  "hudood", "blood money", "apostates", "jizyah", "khums",
  "hunting", "slaughtering", "sacrifice", "menstrual",
  "hiring", "bankruptcy", "loans", "agriculture", "water distribution",
  "penalty of hunting", "pilgrimage",
  "inheritance", "tricks", "compulsion",
  "judicial", "government", "emancipating",
  "pilgrims prevented", "fear prayer", "eclipses",
  "suckling", "military expeditions", "expeditions led",
  "marriage", "divorce", "wedlock", "nikaah",
];

function isPreferredBook(bookName: string): boolean {
  const lower = bookName.toLowerCase();
  return preferredBookKeywords.some(k => lower.includes(k));
}

function isExcludedBook(bookName: string): boolean {
  const lower = bookName.toLowerCase();
  return excludedBookKeywords.some(k => lower.includes(k));
}

function selectHadiths(edition: RawEdition, source: string, targetCount: number) {
  const sections = edition.metadata.sections;

  // Tüm hadisleri temizle ve filtrele
  const cleanedAll: Array<{ id: number; text: string; source: string; book: number; bookName: string }> = [];

  for (const h of edition.hadiths) {
    if (!h.text || h.text.trim().length < 30) continue;
    if (h.text.startsWith("AÇIKLAMALAR")) continue;

    const bookNum = h.reference?.book || 0;
    const bookKey = String(bookNum);
    const bookName = sections[bookKey] || "";

    // Kara listedeki kitapları atla
    if (isExcludedBook(bookName)) continue;

    const cleaned = cleanHadithText(h.text);
    if (!cleaned) continue;

    cleanedAll.push({
      id: h.hadithnumber,
      text: cleaned,
      source,
      book: bookNum,
      bookName,
    });
  }

  // Öncelikle beyaz listedeki kitaplardan al
  const preferred = cleanedAll.filter(h => isPreferredBook(h.bookName));
  const others = cleanedAll.filter(h => !isPreferredBook(h.bookName));

  // Preferred'dan eşit dağılımla seç
  const selected: typeof cleanedAll = [];

  // Preferred kitapları grupla
  const byBook: Record<string, typeof cleanedAll> = {};
  for (const h of preferred) {
    const key = String(h.book);
    if (!byBook[key]) byBook[key] = [];
    byBook[key].push(h);
  }

  const bookKeys = Object.keys(byBook);
  if (bookKeys.length > 0) {
    const perBook = Math.max(1, Math.ceil(targetCount / bookKeys.length));
    for (const key of bookKeys) {
      const bookHadiths = byBook[key];
      const step = Math.max(1, Math.floor(bookHadiths.length / perBook));
      let count = 0;
      for (let i = 0; i < bookHadiths.length && count < perBook; i += step) {
        selected.push(bookHadiths[i]);
        count++;
      }
      if (selected.length >= targetCount) break;
    }
  }

  // Hedef sayıya ulaşılamazsa diğerlerinden tamamla
  if (selected.length < targetCount) {
    const remaining = targetCount - selected.length;
    const step = Math.max(1, Math.floor(others.length / remaining));
    let count = 0;
    for (let i = 0; i < others.length && count < remaining; i += step) {
      selected.push(others[i]);
      count++;
    }
  }

  console.log(`${source}: preferred=${preferred.length}, others=${others.length}, selected=${selected.length}`);
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
