

# 300 Hadis: Elle Secim ve Servis Degisikligi

## Ozet

Mevcut `src/data/hadiths.ts` dosyasindaki 360+ hadisten yaklasik 60 tanesini cikararak 300 kaliteli hadis birakacagiz. Ardindan `hadithService.ts` dosyasini sadece bu kuratorlu veriyi kullanacak sekilde basitlestirip, gereksiz `public/hadiths.json` dosyasini silecegiz.

## Cikarilacak Hadisler

### 1. Tekrar eden hadisler (ayni hadis iki kez var)
- "Insan olunce ameli uc sey disinda kesilir..." (iki yerde)
- "Musluman dilinden ve elinden..." (iki yerde)
- "Ademogli midesinden daha kotu bir kap doldurmamistir" (iki yerde)
- "Bir kadin bir kediyi bagladigi icin cehenneme girdi" (iki yerde)
- "Kim bir muminin sikintisini giderirse..." (iki yerde)
- "Kim Musluman kardesinin aybini orterse..." (iki yerde)
- "Hayra yol gosteren / vesile olan" (iki yerde)
- "Insanlarin en hayirlisi insanlara en faydali olanidir" (iki yerde)

### 2. Fikih detaylari ve ticaret hukumleri
- "Alici ile satici birbirlerinden ayrilmadikca muhayyerdirler"
- "Kim karaborsacilik yaparsa gunahkardir"
- "Zenginin borcunu geciktirmesi zulumdir"
- "Muslumanlar sartlarina baglidirlar"
- "Kim yeminle bir Muslumanin hakkini gasp ederse..."
- "Kim insanlarin malini odeme niyetiyle alirsa..."
- "Dogrusozu ve guvenilir tuccar peygamberlerle beraberdir" (ticaret odakli)
- "Allah alirken de satarken de kolaylik gosteren kisiye rahmet etsin" (ticaret odakli)

### 3. Baglamsiz, tartismali veya tek basina anlam ifade etmeyen
- "Kizma!" (tek kelime)
- "Islerin bir kadina teslim eden kavim felah bulmaz" (baglam gerektiriyor)
- "Cihada cikmadan... munafikligin bir subesi" (baglam gerektiriyor)
- "Benden sonra hilafet otuz yil surecek, sonra saltanat olacaktir" (siyasi tarih)
- "Insanlara oyle bir zaman gelecek ki kisi mali helalden mi..." (ticaret odakli)

### 4. Gunluk adab detaylari (manevi mesaj icermeyen)
- "Esneyince agzini kapatsin"
- "Su icerken kabin icine nefes vermesin"
- "Yatagini silkelesin"
- "Hapsirik Allah'tandir, esneme seytandandir"
- "Namazda uyuklarsaniz uyusun"
- "Beni nasil namaz kilarken gorduyseniz oyle kilin" (teknik talimat)
- "Kamet getirildiginde farzdan baska namaz kilinmaz" (teknik fikih)

### 5. Hac/umre teknik detaylari
- "Hac ibadetinizi benden ogrenin" (tek basina mesaj yok)
- "Kabe'yi tavaf etmek namaz gibidir" (teknik)
- "Bu Beyt'ten istifade edin; cunku iki kez yikildi..." (eskatoloji detayi)
- "Hacer-i Esved cennetten inmistir" (bilgi, mesaj degil)
- "Kurban bayrami gunu Allah'a kan akitmaktan daha sevimli amel yoktur" (baglam gerektirir)

### 6. Bazi ek cikarilacaklar
- "Mide hastalik evidir, perhiz ilacin basidir" (hadis degil, sozu tartismali)
- "Bir saat tefekkur bir yillik nafile ibadetten hayirlidir" (zayif hadis)
- "Hikmet muminin yitigidir" (zayif hadis)

## Korunacak Kategoriler (~300 hadis)

- Iman ve tevhid
- Ahlak ve guzel huy
- Merhamet, bagislama ve tevbe
- Dua ve zikir
- Sabir, sukur ve tevekkul
- Kuran ve ilim
- Peygamber ahlaki
- Komsuculuk ve kardeslik
- Aile ve cocuk
- Cennet, ahiret ve olum
- Doga ve hayvan haklari
- Selam ve baris
- Kalp, niyet ve ihlas
- Gibet, yalan ve haramlar
- Kader ve ilahi irade
- Fitne ve son zamanlar (secme olanlar)
- Namaz ve ibadet (manevi mesaji olanlar)
- Oruc (manevi yonu)
- Hac (manevi mesaji olanlar)

## Teknik Degisiklikler

### 1. `src/data/hadiths.ts`
- Yukaridaki ~60 hadis cikarilacak
- Kalan ~300 hadis korunacak
- Bolum basliklarindaki (comment) numaralar guncellenecek

### 2. `src/services/hadithService.ts`
- Tamamen basitlestirilecek
- `hadiths.json` fetch islemi ve tum regex filtreleri kaldirilacak
- Dogrudan `src/data/hadiths.ts` verisini dondurecek

```text
// Yeni hadithService.ts (basitlestirilmis)
import { hadiths, type Hadith } from "@/data/hadiths";
export type { Hadith };

export async function loadAllHadiths(): Promise<Hadith[]> {
  return hadiths;
}

export function getLoadedHadiths(): Hadith[] {
  return hadiths;
}
```

### 3. `public/hadiths.json`
- Silinecek (24MB dosya, artik kullanilmiyor)
- PWA cache boyutunu azaltacak

### 4. Diger dosyalar
- `src/hooks/useHourlyContent.ts`: Degisiklik gerekmez (fallback olarak zaten `hadiths.ts`'yi kullaniyor)
- `src/pages/Index.tsx`: Degisiklik gerekmez (hadith.arabic kontrolu mevcut)

## Sonuc

- 300 elle secilmis, manevi/ahlaki odakli hadis
- Arapca metin destegi (tum hadislerde mevcut)
- Sifir yazim hatasi, sifir baglamsiz icerik
- 24MB daha hafif uygulama
- Regex filtrelerine gerek yok

