

# Hadis Yarım Kalma Sorununu Duzeltme

## Sorun

Ekran goruntusundeki gibi, bazi hadisler "diye sordular." veya "ne emredersiniz?" gibi soru kaliplariyla bitiyor -- yani sorunun cevabi (Hz. Peygamber'in sozu) eksik. Mevcut filtre bunu sadece 80 karakterden kisa metinlerde yakaliyor, uzun olanlari geciriyor.

Ayrica hadis kartinda bos Arapca metin alani gorunuyor (hadislerde Arapca metin yok).

## Cozum

### 1. Eksik/yarim hadis filtrelerini guclendir

Hem edge function hem client-side'da su kaliplari **uzunluktan bagimsiz** olarak reddet:

- `diye sordular.` ile biten metinler
- `diye sordu.` ile biten metinler  
- `ne emredersiniz?` ile biten metinler
- `ne dersiniz?` ile biten metinler
- `ne buyurursunuz?` ile biten metinler
- Genel olarak: metin icinde soru sorulup cevap verilmemis hadisler

Bunlara ek olarak, tamamlanmamis diyalog isaretleri de filtrelenecek:
- Acilan tirnak kapanmamissa
- Son cumle bir soru ve toplam metin 2 cumleden azsa

### 2. Bos Arapca alani gizle

Hadis kartinda `hadith.arabic` bos string oldugunda Arapca metin blogu ve ayirici cizgi gosterilmeyecek.

### 3. hadiths.json yeniden olustur

Guncellenmis edge function ile `hadiths.json` yeniden olusturulacak.

## Teknik Detaylar

### Dosya degisiklikleri

**`supabase/functions/export-quran/index.ts`** - cleanHadithText fonksiyonu:
- Satir 166'daki `diye sordular` filtresi genisletilecek -- uzunluk siniri kaldirilacak
- Ek yarim-kalmis kaliplari eklenecek: `diye sordu`, `ne emredersiniz`, `ne dersiniz`, `ne buyurursunuz`

**`src/services/hadithService.ts`** - Client-side filtre:
- Ayni kaliplari client tarafinda da ekle (ikinci savunma hatti)

**`src/pages/Index.tsx`** - Hadis karti:
- Arapca metin blogu ve ayirici cizgiyi `hadith.arabic` bos degilse goster seklinde kosullu yap (satir 107-115)

**`public/hadiths.json`** - Yeniden olusturulacak

