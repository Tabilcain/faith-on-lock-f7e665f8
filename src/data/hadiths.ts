// Sahih Buhari ve Sahih Müslim'den seçme hadisler
export interface Hadith {
  arabic: string;
  turkish: string;
  source: string; // "Buhârî" | "Müslim"
  book?: string;
}

export const hadiths: Hadith[] = [
  {
    arabic: "إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ",
    turkish: "Ameller niyetlere göredir. Herkese niyet ettiği şey vardır.",
    source: "Buhârî",
    book: "Bed'ü'l-Vahy, 1"
  },
  {
    arabic: "خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ",
    turkish: "Sizin en hayırlınız Kur'an'ı öğrenen ve öğretendir.",
    source: "Buhârî",
    book: "Fedâilü'l-Kur'ân, 21"
  },
  {
    arabic: "الْمُسْلِمُ مَنْ سَلِمَ الْمُسْلِمُونَ مِنْ لِسَانِهِ وَيَدِهِ",
    turkish: "Müslüman, dilinden ve elinden diğer Müslümanların güvende olduğu kimsedir.",
    source: "Buhârî",
    book: "Îmân, 4"
  },
  {
    arabic: "مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الآخِرِ فَلْيَقُلْ خَيْرًا أَوْ لِيَصْمُتْ",
    turkish: "Allah'a ve ahiret gününe iman eden, ya hayır söylesin ya da sussun.",
    source: "Buhârî",
    book: "Edeb, 31"
  },
  {
    arabic: "لا يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ",
    turkish: "Sizden biriniz kendisi için istediğini kardeşi için de istemedikçe gerçek iman etmiş olmaz.",
    source: "Buhârî",
    book: "Îmân, 7"
  },
  {
    arabic: "الدُّنْيَا سِجْنُ الْمُؤْمِنِ وَجَنَّةُ الْكَافِرِ",
    turkish: "Dünya müminin zindanı, kâfirin cennetidir.",
    source: "Müslim",
    book: "Zühd, 1"
  },
  {
    arabic: "إِنَّ اللَّهَ لاَ يَنْظُرُ إِلَى صُوَرِكُمْ وَأَمْوَالِكُمْ وَلَكِنْ يَنْظُرُ إِلَى قُلُوبِكُمْ وَأَعْمَالِكُمْ",
    turkish: "Allah sizin suretlerinize ve mallarınıza bakmaz, fakat kalplerinize ve amellerinize bakar.",
    source: "Müslim",
    book: "Birr, 34"
  },
  {
    arabic: "مَنْ سَلَكَ طَرِيقًا يَلْتَمِسُ فِيهِ عِلْمًا سَهَّلَ اللَّهُ لَهُ طَرِيقًا إِلَى الْجَنَّةِ",
    turkish: "Kim ilim öğrenmek için bir yola girerse, Allah ona cennete giden yolu kolaylaştırır.",
    source: "Müslim",
    book: "Zikir, 39"
  },
  {
    arabic: "تَبَسُّمُكَ فِي وَجْهِ أَخِيكَ لَكَ صَدَقَةٌ",
    turkish: "Kardeşinin yüzüne gülümsemen senin için bir sadakadır.",
    source: "Buhârî",
    book: "Edeb"
  },
  {
    arabic: "الطُّهُورُ شَطْرُ الإِيمَانِ",
    turkish: "Temizlik imanın yarısıdır.",
    source: "Müslim",
    book: "Tahâret, 1"
  },
  {
    arabic: "الْمُؤْمِنُ الْقَوِيُّ خَيْرٌ وَأَحَبُّ إِلَى اللَّهِ مِنَ الْمُؤْمِنِ الضَّعِيفِ",
    turkish: "Kuvvetli mümin, zayıf müminden daha hayırlı ve Allah'a daha sevimlidir.",
    source: "Müslim",
    book: "Kader, 34"
  },
  {
    arabic: "مَنْ لاَ يَرْحَمُ لاَ يُرْحَمُ",
    turkish: "Merhamet etmeyene merhamet olunmaz.",
    source: "Buhârî",
    book: "Edeb, 18"
  },
  {
    arabic: "الدُّعَاءُ هُوَ الْعِبَادَةُ",
    turkish: "Dua ibadetin özüdür.",
    source: "Buhârî",
    book: "Dua"
  },
  {
    arabic: "اتَّقِ اللَّهَ حَيْثُمَا كُنْتَ وَأَتْبِعِ السَّيِّئَةَ الْحَسَنَةَ تَمْحُهَا وَخَالِقِ النَّاسَ بِخُلُقٍ حَسَنٍ",
    turkish: "Nerede olursan ol Allah'tan kork, kötülüğün ardından iyilik yap ki onu silsin ve insanlara güzel ahlakla davran.",
    source: "Müslim",
    book: "Birr, 12"
  },
  {
    arabic: "أَحَبُّ الْأَعْمَالِ إِلَى اللَّهِ أَدْوَمُهَا وَإِنْ قَلَّ",
    turkish: "Allah'a en sevimli amel az da olsa devamlı olanıdır.",
    source: "Buhârî",
    book: "Rikâk, 18"
  },
  {
    arabic: "الْكَلِمَةُ الطَّيِّبَةُ صَدَقَةٌ",
    turkish: "Güzel söz sadakadır.",
    source: "Buhârî",
    book: "Edeb, 34"
  },
  {
    arabic: "إِذَا مَاتَ الإِنْسَانُ انْقَطَعَ عَنْهُ عَمَلُهُ إِلاَّ مِنْ ثَلاَثَةٍ إِلاَّ مِنْ صَدَقَةٍ جَارِيَةٍ أَوْ عِلْمٍ يُنْتَفَعُ بِهِ أَوْ وَلَدٍ صَالِحٍ يَدْعُو لَهُ",
    turkish: "İnsan ölünce üç şey dışında ameli kesilir: Sadaka-i cariye, faydalı ilim ve kendisine dua eden salih evlat.",
    source: "Müslim",
    book: "Vasiyyet, 14"
  },
  {
    arabic: "لاَ تَغْضَبْ",
    turkish: "Kızma!",
    source: "Buhârî",
    book: "Edeb, 76"
  },
  {
    arabic: "الْيَدُ الْعُلْيَا خَيْرٌ مِنَ الْيَدِ السُّفْلَى",
    turkish: "Veren el alan elden hayırlıdır.",
    source: "Buhârî",
    book: "Zekât, 18"
  },
  {
    arabic: "مَنْ غَشَّنَا فَلَيْسَ مِنَّا",
    turkish: "Bizi aldatan bizden değildir.",
    source: "Müslim",
    book: "Îmân, 164"
  },
  {
    arabic: "إِنَّ اللَّهَ جَمِيلٌ يُحِبُّ الْجَمَالَ",
    turkish: "Allah güzeldir, güzeli sever.",
    source: "Müslim",
    book: "Îmân, 147"
  },
  {
    arabic: "خَيْرُ النَّاسِ أَنْفَعُهُمْ لِلنَّاسِ",
    turkish: "İnsanların en hayırlısı insanlara en faydalı olanıdır.",
    source: "Buhârî",
    book: "Edeb"
  },
  {
    arabic: "مَا مَلَأَ آدَمِيٌّ وِعَاءً شَرًّا مِنْ بَطْنٍ",
    turkish: "Âdemoğlu midesinden daha kötü bir kap doldurmamıştır.",
    source: "Buhârî",
    book: "Et'ime"
  },
  {
    arabic: "إِنَّ اللَّهَ يُحِبُّ إِذَا عَمِلَ أَحَدُكُمْ عَمَلاً أَنْ يُتْقِنَهُ",
    turkish: "Allah, biriniz bir iş yaptığında onu sağlam ve güzel yapmasını sever.",
    source: "Müslim",
    book: "Îmân"
  },
  {
    arabic: "لاَ تَحَاسَدُوا وَلاَ تَنَاجَشُوا وَلاَ تَبَاغَضُوا وَلاَ تَدَابَرُوا",
    turkish: "Birbirinize haset etmeyin, kin tutmayın, sırt çevirmeyin. Allah'ın kulları, kardeş olun.",
    source: "Müslim",
    book: "Birr, 32"
  },
  {
    arabic: "مَنْ صَامَ رَمَضَانَ إِيمَانًا وَاحْتِسَابًا غُفِرَ لَهُ مَا تَقَدَّمَ مِنْ ذَنْبِهِ",
    turkish: "Kim inanarak ve sevabını Allah'tan bekleyerek Ramazan orucunu tutarsa, geçmiş günahları bağışlanır.",
    source: "Buhârî",
    book: "Savm, 6"
  },
  {
    arabic: "الصَّبْرُ ضِيَاءٌ",
    turkish: "Sabır bir aydınlıktır.",
    source: "Müslim",
    book: "Tahâret, 1"
  },
  {
    arabic: "رُبَّ صَائِمٍ لَيْسَ لَهُ مِنْ صِيَامِهِ إِلَّا الْجُوعُ",
    turkish: "Nice oruç tutan vardır ki orucundan kendisine kalan sadece açlıktır.",
    source: "Buhârî",
    book: "Savm"
  },
  {
    arabic: "مَا نَقَصَتْ صَدَقَةٌ مِنْ مَالٍ",
    turkish: "Sadaka malı eksiltmez.",
    source: "Müslim",
    book: "Birr, 69"
  },
  {
    arabic: "الْحَيَاءُ مِنَ الإِيمَانِ",
    turkish: "Hayâ imandandır.",
    source: "Buhârî",
    book: "Îmân, 16"
  },
];
