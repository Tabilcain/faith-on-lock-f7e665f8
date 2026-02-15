import { hadiths as fallbackHadiths, type Hadith } from "@/data/hadiths";

interface RawHadith {
  id: number;
  text: string;
  source: string;
  book: number;
  bookName: string;
}

const bookNameMap: Record<string, string> = {
  "Revelation": "Vahyin Başlangıcı",
  "Belief": "Îmân",
  "Knowledge": "İlim",
  "Ablutions (Wudu')": "Abdest",
  "Bathing (Ghusl)": "Gusül",
  "Menstrual Periods": "Hayız",
  "Rubbing hands and feet with dust (Tayammum)": "Teyemmüm",
  "Prayers (Salat)": "Namaz",
  "Times of the Prayers": "Namaz Vakitleri",
  "Call to Prayers (Adhaan)": "Ezan",
  "Characteristics of Prayer": "Namazın Özellikleri",
  "Friday Prayer": "Cuma Namazı",
  "Fear Prayer": "Korku Namazı",
  "The Two Festivals (Eids)": "Bayram Namazları",
  "Witr Prayer": "Vitir Namazı",
  "Invoking Allah for Rain (Istisqaa)": "Yağmur Duası",
  "Eclipses": "Küsûf (Güneş Tutulması)",
  "Prostration During Recital of Quran": "Tilâvet Secdesi",
  "Shortening the Prayers (At-Taqseer)": "Namazın Kısaltılması",
  "Prayer at Night (Tahajjud)": "Teheccüd Namazı",
  "Actions while Praying": "Namazda Yapılan İşler",
  "Funerals (Al-Janaa'iz)": "Cenâzeler",
  "Obligatory Charity Tax (Zakat)": "Zekât",
  "Charity Tax After Ramadaan (Sadaqat-ul Fitr)": "Sadaka-i Fıtır",
  "Hajj (Pilgrimage)": "Hac",
  "`Umrah (Minor pilgrimage)": "Umre",
  "Pilgrims Prevented from Completing the Pilgrimage": "İhsâr",
  "Penalty of Hunting while on Pilgrimage": "Avlanma Cezası",
  "Virtues of Madinah": "Medine'nin Fazîletleri",
  "Fasting": "Oruç",
  "Praying at Night in Ramadaan (Taraweeh)": "Terâvih Namazı",
  "Virtues of the Night of Qadr": "Kadir Gecesi",
  "Retiring to a Mosque for Remembrance of Allah (I'tikaf)": "İ'tikâf",
  "Sales and Trade": "Alış-Veriş",
  "Sales in which a Price is paid for Goods to be Delivered Later (As-Salam)": "Selem",
  "Hiring": "Kirâlama",
  "Transferance of a Debt from One Person to Another (Al-Hawaala)": "Havâle",
  "Representation, Authorization, Business by Proxy": "Vekâlet",
  "Agriculture": "Ziraat",
  "Distribution of Water": "Su Dağıtımı",
  "Loans, Payment of Loans, Freezing of Property, Bankruptcy": "Borçlar",
  "Khums": "Humus",
  "Jizyah and Mawaada'ah": "Cizye",
  "Beginning of Creation": "Yaratılışın Başlangıcı",
  "Prophets": "Peygamberler",
  "Virtues and Merits of the Prophet (PBUH) and his Companions": "Hz. Peygamber'in Fazîletleri",
  "Companions of the Prophet": "Ashâb-ı Kirâm",
  "Merits of the Helpers in Madinah (Ansaar)": "Ensâr'ın Fazîletleri",
  "Military Expeditions led by the Prophet (PBUH) (Al-Maghaazi)": "Meğâzî (Gazâlar)",
  "Prophetic Commentary on the Qur'an (Tafseer of the Prophet (PBUH))": "Tefsir",
  "Virtues of the Qur'an": "Kur'ân'ın Fazîletleri",
  "Wedlock, Marriage (Nikaah)": "Nikâh",
  "Divorce": "Talâk (Boşanma)",
  "Supporting the Family": "Nafaka",
  "Food, Meals": "Yiyecekler",
  "Sacrifice on Occasion of Birth (`Aqiqa)": "Akîka",
  "Hunting, Slaughtering": "Av ve Kesim",
  "Al-Adha Festival Sacrifice (Adaahi)": "Kurban",
  "Drinks": "İçecekler",
  "Patients": "Hastalar",
  "Medicine": "Tıp",
  "Dress": "Giyim",
  "Good Manners and Form (Al-Adab)": "Edeb (Görgü)",
  "Asking Permission": "İzin İsteme",
  "Invocations": "Duâlar",
  "To make the Heart Tender (Ar-Riqaq)": "Rikâk (Kalp İnceltme)",
  "Divine Will (Al-Qadar)": "Kader",
  "Oaths and Vows": "Yeminler ve Adaklar",
  "Expiation for Unfulfilled Oaths": "Keffâret",
  "Laws of Inheritance (Al-Faraa'id)": "Ferâiz (Mîras)",
  "Limits and Punishments set by Allah (Hudood)": "Hudûd (Cezâlar)",
  "Punishment of Disbelievers at War with Allah and His Apostle": "Muhârebîn Cezâsı",
  "Blood Money (Ad-Diyat)": "Diyât (Kan Bedeli)",
  "Dealing with Apostates": "Mürtedler",
  "Saying Something under Compulsion (Ikraah)": "İkrâh (Zorlama)",
  "Tricks": "Hîleler",
  "Interpretation of Dreams": "Rüyâ Tâbiri",
  "Afflictions and the End of the World": "Fitneler ve Kıyâmet",
  "Judgments (Ahkaam)": "Ahkâm (Hükümler)",
  "Wishes": "Temennîler",
  "Accepting Information Given by a Truthful Person": "Haberlerin Kabulü",
  "Holding Fast to the Qur'an and Sunnah": "Kitâb ve Sünnete Sarılmak",
  "Oneness, Uniqueness of Allah (Tawheed)": "Tevhîd",
  "Virtues of Prayer at Masjid Makkah and Madinah": "Mescid-i Haram ve Mescid-i Nebevî",
  // Müslim kitap isimleri
  "The Book of Faith": "Îmân",
  "The Book of Purification": "Tahâret",
  "The Book of Menstruation": "Hayız",
  "The Book of Prayers": "Namaz",
  "The Book of Mosques and Places of Prayer": "Mescidler",
  "The Book of Prayer - Travellers": "Yolcu Namazı",
  "The Book of the prayer of the two 'Eids": "Bayram Namazları",
  "The Book of Prayer (Rainfall)": "Yağmur Duası",
  "The Book of Prayer - Eclipse": "Küsûf Namazı",
  "The Book of Prayer - Funerals": "Cenâze Namazı",
  "The Book of Zakat": "Zekât",
  "The Book of Fasting": "Oruç",
  "The Book of I'tikaf": "İ'tikâf",
  "The Book of Pilgrimage": "Hac",
  "The Book of Marriage": "Nikâh",
  "The Book of Suckling": "Süt Emzirme",
  "The Book of Divorce": "Talâk (Boşanma)",
  "The Book of Oaths": "Yeminler",
  "The Book of Judicial Decisions": "Kazâ (Yargı)",
  "The Book of Jihad and Expeditions": "Cihâd",
  "The Book on Government": "İmâret (Yönetim)",
  "The Book of the Merits of the Companions": "Ashâb'ın Fazîletleri",
  "The Book of Virtue, Enjoining Good Manners, and Joining of the Ties of Kinship": "Birr ve Sıla",
  "The Book of Destiny": "Kader",
  "The Book of Knowledge": "İlim",
  "The Book Pertaining to the Remembrance of Allah, Supplication, Repentance and Seeking Forgiveness": "Zikir ve Duâ",
  "The Book of Heart-Melting Traditions": "Zühd ve Rikâk",
  "The Book Pertaining to the Turmoil and Portents of the Last Hour": "Fitneler ve Kıyâmet Alâmetleri",
  "The Book Pertaining to the Rules of Inheritance": "Ferâiz",
  "The Book of Drinks": "İçecekler",
  "The Book of Clothes and Adornment": "Giyim ve Süslenme",
  "The Book of Greetings": "Selâm",
  "The Book on Salutations and Greetings": "Selâm",
  "The Book Pertaining to Piety and Softening of Hearts": "Zühd",
  "The Book of Hunting, Slaughter, and what may be Eaten": "Av ve Kesim",
  "The Book of Sacrifices": "Kurban",
  "The Book of Emancipating Slaves": "Köle Âzâd Etme",
  "The Book of Transactions": "Alış-Veriş",
  "The Book of Musaqah": "Müsâkât (Ziraat Ortaklığı)",
  "The Book of Vows": "Adaklar",
  "The Book of Miscellaneous ahadith of Significant Values": "Muhtelif Hadisler",
};

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
        // Client-side quality filtering
        const filtered = data.filter((h) => {
          const t = h.text;
          if (!t || t.length < 40 || t.length > 450) return false;
          // Yarım kalan madde numaralarını filtrele (ör: "3." ile biten)
          if (/\d\.\s*$/.test(t)) return false;
          // Anlamsız kalıntıları filtrele
          if (/BÖLÜM[ÜU]\s+B[İI]TT[İI]/i.test(t)) return false;
          if (/باب:/i.test(t)) return false;
          // Tam cümle kontrolü
          if (!/[.!?"\u201D]$/.test(t)) return false;
          return true;
        });
        cachedHadiths = filtered.map((h) => ({
          arabic: "",
          turkish: h.text,
          source: h.source,
          book: bookNameMap[h.bookName] || h.bookName,
        }));
        console.log(`Loaded ${cachedHadiths.length} hadiths from hadiths.json (filtered from ${data.length})`);
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
