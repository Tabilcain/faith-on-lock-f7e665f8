

# Hadis Kalite ve Icerik Iyilestirmesi

## Sorunlar

1. **Yazim/kodlama hatalari**: "cahil/ik" gibi bozuk karakterler mevcut -- bunlar kaynak verideki OCR/kodlama artifaktlari
2. **Baglamsiz hadisler**: "Onu yikarin, kefenleyin, basini ortmeyin" gibi fikih hukmu iceren, tek basina okundiginda anlam ifade etmeyen hadisler gosteriliyor
3. **Icerik secimi**: Tum kitaplardan esit dagilim yerine, rekaik (kalp inceligi), ahlak, zuhd, iman, dua gibi manevi/ahlaki kategorilere oncelik verilmeli

## Cozum

### 1. Kitap kategorisi filtreleme -- sadece uygun kategorilerden al

Fikih, ceza hukuku, ticaret, miras gibi baglamsiz kalan kategorileri disla. Asagidaki kategorilere oncelik ver:

**Alinacak kategoriler (beyaz liste):**
- Belief / The Book of Faith (Iman)
- Knowledge / The Book of Knowledge (Ilim)
- Good Manners and Form (Edeb)
- Invocations / Remembrance of Allah (Dua, Zikir)
- To make the Heart Tender (Rikak / Kalp Inceligi)
- The Book of Heart-Melting Traditions (Zuhd ve Rikak)
- Virtues of the Quran (Kuran'in Faziletleri)
- The Book of Virtue, Enjoining Good Manners (Birr ve Sila)
- The Book of Destiny (Kader)
- Fasting (Oruc -- manevi yonu agir)
- Prophets (Peygamberler)
- Virtues of the Prophet (Hz. Peygamber'in Faziletleri)
- Oneness of Allah (Tevhid)
- Interpretation of Dreams (Ruya Tabiri)
- The Book of Piety and Softening of Hearts (Zuhd)

**Dislanacak kategoriler (kara liste):**
- Hudood, Blood Money, Apostates, Jizyah, Khums
- Hunting/Slaughtering, Sacrifice, Menstrual Periods
- Hiring, Bankruptcy, Loans, Agriculture, Water Distribution
- Penalty of Hunting while on Pilgrimage
- Laws of Inheritance, Tricks, Compulsion
- Judicial Decisions, Government, Emancipating Slaves
- Pilgrims Prevented, Fear Prayer, Eclipses
- Suckling, Military Expeditions

### 2. Metin kalitesi filtreleri

Edge function'daki `cleanHadithText` fonksiyonuna ek filtreler:

- **Kodlama artifaktlari**: `/` karakteri icerenler (orn: "cahil/ik"), bozuk Unicode
- **Emir listesi formati**: Virgullerle ayrilmis kisa emirler (orn: "yikayin, kefenleyin, ortmeyin") -- bunlar genelde fikih hukmu
- **Baglamsiz komutlar**: Tek basina emir kipi ile baslayip biten kisa metinler
- **Minimum anlam kontrolu**: En az 2 cumle icermeli (tek cumlelik komutlar baglamsiz kalir)

### 3. Client-side guvenlik filtresi

`hadithService.ts`'deki client-side filtreye de ayni kontroller eklenir -- mevcut `hadiths.json` icindeki sorunlu hadisler aninda filtrelenir.

### 4. hadiths.json yeniden olusturma

Guncellenmis edge function deploy edilip `hadiths.json` yeniden cagrilarak olusturulacak.

## Teknik Detaylar

### Dosya degisiklikleri

**`supabase/functions/export-quran/index.ts`**:
- `selectHadiths` fonksiyonuna `preferredBooks` beyaz listesi ve `excludedBooks` kara listesi eklenir
- Oncelikle beyaz listedeki kitaplardan hadis secilir, hedef sayiya ulasilamazsa diger kitaplardan tamamlanir (kara listedekileri haric)
- `cleanHadithText` fonksiyonuna:
  - `/` iceren kelimeleri reddet (kodlama hatasi)
  - Minimum 2 cumle sarti (tek cumlelik komutlar dislanir)
  - Kisa emir listesi formati tespiti

**`src/services/hadithService.ts`**:
- Client-side filtreye ayni metin kalitesi kontrolleri eklenir:
  - `/` iceren kelimeler (OCR hatasi)
  - Tek cumlelik metinler
  - Emir listesi formati

**`public/hadiths.json`**:
- Guncellenmis edge function ile yeniden olusturulacak

