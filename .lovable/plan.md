

# Hadis Metinlerini Temizleme ve Kuran Meali Guncelleme

## Sorun

Mevcut hadis metinleri iki buyuk sorun iceriyor:
1. **Sened (rivayet zinciri)** - "Bize Amru'n-Nakid rivayet etti. (Dediki): Bize Ebu Ahmed Ez-Zubeyri rivayet etti..." gibi uzun isnad zincirleri hadis metninin anlamini gizliyor
2. **Gereksiz ekler** - "Tekrar: 54, 2529...", "Diger Tahric:", "IZAHI ICIN BURAYA TIKLA" gibi referans notlari metin icinde kaliyor
3. **Uzun ve kesik metinler** - Widget'a sigmayacak kadar uzun hadisler seciliyor, yarim kaliyor

## Diyanet GitHub Reposu

Diyanet-bid/Kuran reposu bir Next.js web uygulamasi - veri kaynagi degil. Ayni `acikkaynakkuran-dev.diyanet.gov.tr` API'sini kullaniyor. Mevcut `quran.json` zaten `tr.diyanet` mealini iceriyor, yani guncel Diyanet meali zaten uygulamada mevcut.

## Cozum Plani

### Adim 1: Edge Function'da Hadis Metin Temizleme
`supabase/functions/export-quran/index.ts` dosyasindaki `selectHadiths` fonksiyonuna metin temizleme mantigi eklenecek:

- **Sened kaldirilacak:** "Resulullah (s.a.v.) soyle buyurdu:", "Nebi (s.a.v.) buyurdu ki:" gibi kaliplar bulunacak ve metnin sadece bu noktadan sonrasi alinacak
- **Gereksiz ekler temizlenecek:** "Tekrar:", "Diger Tahric:", "IZAHI ICIN BURAYA TIKLA", "Tekrari:" gibi referans notlari kesilecek
- **Uzunluk siniri:** Widget'a sigmasi icin maksimum 500 karakter siniri konulacak - daha uzun hadisler secilmeyecek
- **Kalite filtresi:** Sadece anlamli, tam cumlelerle biten hadisler secilecek (nokta veya tirnak isaretiyle biten)

### Adim 2: Hadis Secim Kriterleri Guncelleme
- Icinde "buyurdu", "dedi", "soyledi", "emretti" gibi anahtar kelimeler gecen hadisler oncelikli secilecek
- Cok kisa (50 karakterden az) veya cok uzun (500 karakterden fazla) hadisler elenecek
- Her kitaptan dengeli dagilim korunacak

### Adim 3: hadiths.json Yeniden Olusturma
- Edge function deploy edilecek ve `?mode=hadiths` ile cagrilacak
- Temizlenmis hadisler `public/hadiths.json` dosyasina yazilacak
- Buhari'den ~500, Muslim'den ~500 olmak uzere toplam ~1000 temiz hadis

### Adim 4: Frontend Gosterimi Iyilestirme
- `src/pages/Index.tsx` hadis karti: Sened bilgisi yerine dogrudan Hz. Peygamber'in sozu gorunecek
- Kaynak bilgisi (Sahih Buhari, Kitap adi) alt kisimda kalacak

## Teknik Detaylar

### Metin Temizleme Regex Kaliplari
```text
Sened kesme:
- /(Resulullah|Nebi|Hz\. Peygamber|Rasulullah).*?(soyle )?(buyurdu|dedi|soyledi)(\s*ki)?[:\s]*/
- Eger bu kalip bulunamazsa, hadis secilmeyecek

Gereksiz ek temizleme:
- /Tekrar[ıi]?:\s*.*/  -> kesilecek
- /Diğer [Tt]ahric.*/  -> kesilecek  
- /İZAHI İÇİN.*/       -> kesilecek
- /\(Yani .*?\)/        -> kaldirilacak (parantez icindeki aciklamalar)
```

### Dosya Degisiklikleri
1. **Guncelleme:** `supabase/functions/export-quran/index.ts` - Hadis temizleme mantigi
2. **Yeniden olusturma:** `public/hadiths.json` - Temiz hadis verisi
3. **Degisiklik yok:** `src/services/hadithService.ts` - Mevcut yapi yeterli
4. **Degisiklik yok:** `src/pages/Index.tsx` - Mevcut kart yapisi zaten uygun (sened gidince duzgun gorunecek)

