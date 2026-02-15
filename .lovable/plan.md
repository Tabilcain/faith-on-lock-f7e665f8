

# Ayet ve Hadis Veritabanini Genisletme Plani

## Mevcut Durum
- **Ayetler:** 50 adet secme ayet (Kuran toplam 6236 ayet)
- **Hadisler:** 30 adet (hedef: en az 360)

## Yapilacaklar

### 1. Kuran Ayetleri - Tam Kuran Verisi
GitHub reposundaki (yazinsai/quran-validator) Kuran verisini kullanarak **tum 6236 ayeti** uygulamaya ekleyecegiz.

- `src/data/verses.ts` dosyasi cok buyuyecegi icin, veriyi **JSON dosyasi** olarak `public/quran.json` seklinde tutacagiz
- Her ayet icin: sure adi, sure numarasi, ayet numarasi, Arapca metin, Turkce meal
- Turkce meal icin Diyanet meali kullanilacak
- Uygulama acildiginda bu JSON'dan veri okunacak

### 2. Hadisler - En Az 360 Hadis
- `src/data/hadiths.ts` dosyasini genisletip **en az 360 hadis** ekleyecegiz
- Buhari ve Muslim'den karisik, sahih hadisler
- Her hadis icin: Arapca metin, Turkce ceviri, kaynak (Buhari/Muslim), kitap bilgisi

### 3. Teknik Degisiklikler
- **Veri yukleme:** Buyuk Kuran verisi icin `public/quran.json` dosyasi olusturulacak ve `useHourlyContent` hook'u bu JSON'dan veri cekecek sekilde guncellenecek
- **Hadis verisi:** Hadis dosyasi buyuyecek ama yine statik TypeScript dosyasinda kalabilir (360 hadis makul boyut)
- **PWA cache:** Offline calisma icin JSON dosyasi da cache'lenecek

### 4. Veri Kaynaklari
- Kuran ayetleri: yazinsai/quran-validator reposu + Diyanet meali
- Hadisler: Sahih Buhari ve Sahih Muslim'den secme hadisler (guvenilir kaynaklardan derleme)

## Dosya Degisiklikleri
1. **Yeni:** `public/quran.json` - Tum Kuran ayetleri (Arapca + Turkce meal)
2. **Guncelleme:** `src/data/hadiths.ts` - 30'dan 360+ hadise genisletme
3. **Guncelleme:** `src/hooks/useHourlyContent.ts` - JSON'dan ayet yuklemek icin guncelleme
4. **Guncelleme:** `src/data/verses.ts` - Kaldirilacak veya JSON'a yonlendirilecek
5. **Guncelleme:** `vite.config.ts` - PWA cache'ine quran.json ekleme

