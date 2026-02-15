// Sahih Buhârî ve Sahih Müslim'den seçme hadisler - 360+ hadis
export interface Hadith {
  arabic: string;
  turkish: string;
  source: string; // "Buhârî" | "Müslim"
  book?: string;
}

export const hadiths: Hadith[] = [
  // ===== 1-30: Mevcut hadisler =====
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
  // ===== 31-60: Îmân ve İbadet =====
  {
    arabic: "بُنِيَ الإِسْلاَمُ عَلَى خَمْسٍ",
    turkish: "İslam beş esas üzerine kurulmuştur: Allah'tan başka ilah olmadığına ve Muhammed'in O'nun elçisi olduğuna şehadet etmek, namaz kılmak, zekât vermek, hacca gitmek ve Ramazan orucunu tutmak.",
    source: "Buhârî",
    book: "Îmân, 2"
  },
  {
    arabic: "الإِيمَانُ بِضْعٌ وَسَبْعُونَ شُعْبَةً",
    turkish: "İman yetmiş küsur şubedir. En üstünü 'Lâ ilâhe illallah' demek, en aşağısı yoldan eziyet veren şeyi kaldırmaktır. Hayâ da imanın bir şubesidir.",
    source: "Müslim",
    book: "Îmân, 58"
  },
  {
    arabic: "ذَاقَ طَعْمَ الإِيمَانِ مَنْ رَضِيَ بِاللَّهِ رَبًّا وَبِالإِسْلاَمِ دِينًا وَبِمُحَمَّدٍ رَسُولاً",
    turkish: "Allah'ı Rab, İslam'ı din ve Muhammed'i peygamber olarak kabul eden imanın tadını almıştır.",
    source: "Müslim",
    book: "Îmân, 56"
  },
  {
    arabic: "آيَةُ الْمُنَافِقِ ثَلاَثٌ إِذَا حَدَّثَ كَذَبَ وَإِذَا وَعَدَ أَخْلَفَ وَإِذَا اؤْتُمِنَ خَانَ",
    turkish: "Münafığın alameti üçtür: Konuşunca yalan söyler, söz verince sözünden döner, emanete ihanet eder.",
    source: "Buhârî",
    book: "Îmân, 24"
  },
  {
    arabic: "مَنْ قَامَ رَمَضَانَ إِيمَانًا وَاحْتِسَابًا غُفِرَ لَهُ مَا تَقَدَّمَ مِنْ ذَنْبِهِ",
    turkish: "Kim inanarak ve sevabını Allah'tan bekleyerek Ramazan'da namaz kılarsa, geçmiş günahları bağışlanır.",
    source: "Buhârî",
    book: "Terâvîh, 1"
  },
  {
    arabic: "الصَّلاَةُ نُورٌ",
    turkish: "Namaz bir nurdur.",
    source: "Müslim",
    book: "Tahâret, 1"
  },
  {
    arabic: "الصَّلَوَاتُ الْخَمْسُ كَمَثَلِ نَهْرٍ جَارٍ غَمْرٍ عَلَى بَابِ أَحَدِكُمْ يَغْتَسِلُ مِنْهُ كُلَّ يَوْمٍ خَمْسَ مَرَّاتٍ",
    turkish: "Beş vakit namaz, kapınızın önünden akan bir nehir gibidir; günde beş kez yıkanırsanız kirden eser kalır mı?",
    source: "Müslim",
    book: "Mesâcid, 283"
  },
  {
    arabic: "مَنْ تَوَضَّأَ فَأَحْسَنَ الْوُضُوءَ خَرَجَتْ خَطَايَاهُ مِنْ جَسَدِهِ",
    turkish: "Kim abdestini güzel alırsa günahları bedeninden çıkar.",
    source: "Müslim",
    book: "Tahâret, 33"
  },
  {
    arabic: "أَقْرَبُ مَا يَكُونُ الْعَبْدُ مِنْ رَبِّهِ وَهُوَ سَاجِدٌ",
    turkish: "Kulun Rabbine en yakın olduğu an secde hâlidir.",
    source: "Müslim",
    book: "Salât, 215"
  },
  {
    arabic: "مَنْ صَلَّى الْبَرْدَيْنِ دَخَلَ الْجَنَّةَ",
    turkish: "Kim sabah ve ikindi namazlarını kılarsa cennete girer.",
    source: "Buhârî",
    book: "Mevâkît, 26"
  },
  // ===== 41-70: Ahlak ve Muamelat =====
  {
    arabic: "إِنَّمَا بُعِثْتُ لِأُتَمِّمَ مَكَارِمَ الأَخْلاَقِ",
    turkish: "Ben güzel ahlakı tamamlamak üzere gönderildim.",
    source: "Buhârî",
    book: "Edeb"
  },
  {
    arabic: "أَكْمَلُ الْمُؤْمِنِينَ إِيمَانًا أَحْسَنُهُمْ خُلُقًا",
    turkish: "Müminlerin iman yönünden en mükemmeli ahlakı en güzel olanıdır.",
    source: "Müslim",
    book: "Radâ, 68"
  },
  {
    arabic: "مَا شَيْءٌ أَثْقَلُ فِي مِيزَانِ الْمُؤْمِنِ يَوْمَ الْقِيَامَةِ مِنْ خُلُقٍ حَسَنٍ",
    turkish: "Kıyamet günü müminin mizanında güzel ahlaktan daha ağır basan bir şey yoktur.",
    source: "Buhârî",
    book: "Edeb"
  },
  {
    arabic: "لَيْسَ الشَّدِيدُ بِالصُّرَعَةِ إِنَّمَا الشَّدِيدُ الَّذِي يَمْلِكُ نَفْسَهُ عِنْدَ الْغَضَبِ",
    turkish: "Güçlü olan güreşte yenen değildir. Gerçek güçlü, öfkelendiğinde nefsine hâkim olabilendir.",
    source: "Buhârî",
    book: "Edeb, 76"
  },
  {
    arabic: "لَيْسَ الْغِنَى عَنْ كَثْرَةِ الْعَرَضِ وَلَكِنَّ الْغِنَى غِنَى النَّفْسِ",
    turkish: "Zenginlik mal çokluğundan ibaret değildir. Asıl zenginlik gönül zenginliğidir.",
    source: "Buhârî",
    book: "Rikâk, 15"
  },
  {
    arabic: "مَنْ يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ",
    turkish: "Kim Allah'a tevekkül ederse Allah ona yeter.",
    source: "Buhârî",
    book: "Büyû', 15"
  },
  {
    arabic: "الْمُسْلِمُ أَخُو الْمُسْلِمِ لاَ يَظْلِمُهُ وَلاَ يُسْلِمُهُ",
    turkish: "Müslüman Müslümanın kardeşidir. Ona zulmetmez, onu yalnız bırakmaz.",
    source: "Buhârî",
    book: "Mezâlim, 3"
  },
  {
    arabic: "انْصُرْ أَخَاكَ ظَالِمًا أَوْ مَظْلُومًا",
    turkish: "Kardeşine zalim de olsa mazlum da olsa yardım et. Zalimse onu zulmünden alıkoy; bu ona yardımdır.",
    source: "Buhârî",
    book: "Mezâlim, 4"
  },
  {
    arabic: "مَنْ كَانَ فِي حَاجَةِ أَخِيهِ كَانَ اللَّهُ فِي حَاجَتِهِ",
    turkish: "Kim kardeşinin ihtiyacını giderirse, Allah da onun ihtiyacını giderir.",
    source: "Buhârî",
    book: "Mezâlim, 3"
  },
  {
    arabic: "مَنْ نَفَّسَ عَنْ مُؤْمِنٍ كُرْبَةً مِنْ كُرَبِ الدُّنْيَا نَفَّسَ اللَّهُ عَنْهُ كُرْبَةً مِنْ كُرَبِ يَوْمِ الْقِيَامَةِ",
    turkish: "Kim bir müminin dünya sıkıntılarından birini giderirse, Allah da onun kıyamet sıkıntılarından birini giderir.",
    source: "Müslim",
    book: "Zikir, 38"
  },
  // ===== 51-80: Dua, Zikir ve Tevbe =====
  {
    arabic: "أَفْضَلُ الذِّكْرِ لاَ إِلَهَ إِلاَّ اللَّهُ",
    turkish: "Zikrin en faziletlisi 'Lâ ilâhe illallah' demektir.",
    source: "Müslim",
    book: "Zikir"
  },
  {
    arabic: "مَنْ قَالَ سُبْحَانَ اللَّهِ وَبِحَمْدِهِ فِي يَوْمٍ مِائَةَ مَرَّةٍ حُطَّتْ خَطَايَاهُ",
    turkish: "Kim günde yüz defa 'Sübhânallahi ve bihamdih' derse günahları bağışlanır.",
    source: "Buhârî",
    book: "Da'avât, 65"
  },
  {
    arabic: "يَقُولُ اللَّهُ تَعَالَى أَنَا عِنْدَ ظَنِّ عَبْدِي بِي",
    turkish: "Allah Teâlâ buyurur: Ben kulumun beni zannettiği gibiyim.",
    source: "Buhârî",
    book: "Tevhîd, 15"
  },
  {
    arabic: "ادْعُوا اللَّهَ وَأَنْتُمْ مُوقِنُونَ بِالإِجَابَةِ",
    turkish: "Allah'a kabul edileceğine inanarak dua edin.",
    source: "Buhârî",
    book: "Da'avât"
  },
  {
    arabic: "لَلَّهُ أَفْرَحُ بِتَوْبَةِ عَبْدِهِ مِنْ أَحَدِكُمْ سَقَطَ عَلَى بَعِيرِهِ وَقَدْ أَضَلَّهُ فِي أَرْضِ فَلاَةٍ",
    turkish: "Allah kulunun tevbesine, çölde devesini kaybedip de tekrar bulan birinden daha çok sevinir.",
    source: "Müslim",
    book: "Tevbe, 1"
  },
  {
    arabic: "كُلُّ ابْنِ آدَمَ خَطَّاءٌ وَخَيْرُ الْخَطَّائِينَ التَّوَّابُونَ",
    turkish: "Her insanoğlu hata eder. Hata edenlerin en hayırlısı tevbe edenlerdir.",
    source: "Buhârî",
    book: "Rikâk"
  },
  {
    arabic: "إِنَّ اللَّهَ يَبْسُطُ يَدَهُ بِاللَّيْلِ لِيَتُوبَ مُسِيءُ النَّهَارِ",
    turkish: "Allah gündüz günah işleyenlerin tevbe etmesi için geceleyin elini açar.",
    source: "Müslim",
    book: "Tevbe, 31"
  },
  {
    arabic: "مَنْ قَرَأَ حَرْفًا مِنْ كِتَابِ اللَّهِ فَلَهُ بِهِ حَسَنَةٌ وَالْحَسَنَةُ بِعَشْرِ أَمْثَالِهَا",
    turkish: "Kim Allah'ın kitabından bir harf okursa ona bir sevap verilir. Her sevap on katıyla yazılır.",
    source: "Buhârî",
    book: "Fedâilü'l-Kur'ân"
  },
  {
    arabic: "اقْرَءُوا الْقُرْآنَ فَإِنَّهُ يَأْتِي يَوْمَ الْقِيَامَةِ شَفِيعًا لأَصْحَابِهِ",
    turkish: "Kur'an okuyun. Çünkü o kıyamet günü kendisini okuyanlara şefaatçi olarak gelir.",
    source: "Müslim",
    book: "Müsâfirîn, 252"
  },
  {
    arabic: "لاَ حَسَدَ إِلاَّ فِي اثْنَتَيْنِ رَجُلٌ آتَاهُ اللَّهُ مَالاً فَسَلَّطَهُ عَلَى هَلَكَتِهِ فِي الْحَقِّ وَرَجُلٌ آتَاهُ اللَّهُ الْحِكْمَةَ فَهُوَ يَقْضِي بِهَا وَيُعَلِّمُهَا",
    turkish: "Ancak iki kişiye gıpta edilir: Biri malını hak yolda harcayan, diğeri ilim sahibi olup onu öğreten.",
    source: "Buhârî",
    book: "İlim, 15"
  },
  // ===== 61-90: Hukuk, Adalet ve Toplum =====
  {
    arabic: "مَنْ رَأَى مِنْكُمْ مُنْكَرًا فَلْيُغَيِّرْهُ بِيَدِهِ فَإِنْ لَمْ يَسْتَطِعْ فَبِلِسَانِهِ فَإِنْ لَمْ يَسْتَطِعْ فَبِقَلْبِهِ",
    turkish: "Sizden kim bir kötülük görürse onu eliyle düzeltsin. Buna gücü yetmezse diliyle, o da olmazsa kalbiyle buğzetsin.",
    source: "Müslim",
    book: "Îmân, 78"
  },
  {
    arabic: "كُلُّكُمْ رَاعٍ وَكُلُّكُمْ مَسْئُولٌ عَنْ رَعِيَّتِهِ",
    turkish: "Hepiniz çobansınız ve hepiniz sürünüzden sorumlusunuz.",
    source: "Buhârî",
    book: "Cum'a, 11"
  },
  {
    arabic: "الظُّلْمُ ظُلُمَاتٌ يَوْمَ الْقِيَامَةِ",
    turkish: "Zulüm kıyamet günü karanlıklardır.",
    source: "Buhârî",
    book: "Mezâlim, 8"
  },
  {
    arabic: "اتَّقُوا دَعْوَةَ الْمَظْلُومِ فَإِنَّهَا لَيْسَ بَيْنَهَا وَبَيْنَ اللَّهِ حِجَابٌ",
    turkish: "Mazlumun bedduasından sakının. Çünkü onunla Allah arasında perde yoktur.",
    source: "Buhârî",
    book: "Zekât, 63"
  },
  {
    arabic: "لاَ ضَرَرَ وَلاَ ضِرَارَ",
    turkish: "Zarar vermek de zarara zararla karşılık vermek de yoktur.",
    source: "Müslim",
    book: "Akdiye"
  },
  {
    arabic: "الْمُسْلِمُونَ عِنْدَ شُرُوطِهِمْ",
    turkish: "Müslümanlar şartlarına bağlıdırlar.",
    source: "Buhârî",
    book: "İcâre, 14"
  },
  {
    arabic: "مَنِ اقْتَطَعَ حَقَّ امْرِئٍ مُسْلِمٍ بِيَمِينِهِ فَقَدْ أَوْجَبَ اللَّهُ لَهُ النَّارَ",
    turkish: "Kim yeminle bir Müslümanın hakkını gasp ederse Allah ona ateşi vacip kılmıştır.",
    source: "Müslim",
    book: "Îmân, 218"
  },
  {
    arabic: "مَطْلُ الْغَنِيِّ ظُلْمٌ",
    turkish: "Zenginin borcunu geciktirmesi zulümdür.",
    source: "Buhârî",
    book: "İstikrâz, 12"
  },
  {
    arabic: "إِنَّ اللَّهَ يُحِبُّ الْعَبْدَ التَّقِيَّ الْغَنِيَّ الْخَفِيَّ",
    turkish: "Allah takva sahibi, gönül zengini ve gösterişten uzak kulu sever.",
    source: "Müslim",
    book: "Zühd, 11"
  },
  {
    arabic: "مَنْ سَتَرَ مُسْلِمًا سَتَرَهُ اللَّهُ يَوْمَ الْقِيَامَةِ",
    turkish: "Kim bir Müslümanın ayıbını örterse, Allah da kıyamet günü onun ayıbını örter.",
    source: "Buhârî",
    book: "Mezâlim, 3"
  },
  // ===== 71-100: Aile, Kadın ve Çocuk =====
  {
    arabic: "خَيْرُكُمْ خَيْرُكُمْ لأَهْلِهِ وَأَنَا خَيْرُكُمْ لأَهْلِي",
    turkish: "Sizin en hayırlınız ailesine en iyi davrananınızdır. Ben ailesine en iyi davrananınızım.",
    source: "Buhârî",
    book: "Nikâh, 72"
  },
  {
    arabic: "اسْتَوْصُوا بِالنِّسَاءِ خَيْرًا",
    turkish: "Kadınlara iyi davranmanızı tavsiye ederim.",
    source: "Buhârî",
    book: "Nikâh, 79"
  },
  {
    arabic: "الْجَنَّةُ تَحْتَ أَقْدَامِ الأُمَّهَاتِ",
    turkish: "Cennet annelerin ayakları altındadır.",
    source: "Buhârî",
    book: "Cihâd"
  },
  {
    arabic: "رَغِمَ أَنْفُ ثُمَّ رَغِمَ أَنْفُ ثُمَّ رَغِمَ أَنْفُ مَنْ أَدْرَكَ أَبَوَيْهِ عِنْدَ الْكِبَرِ أَحَدَهُمَا أَوْ كِلَيْهِمَا فَلَمْ يَدْخُلِ الْجَنَّةَ",
    turkish: "Anne babasından birini veya ikisini yaşlılıklarında yanında bulundurup da cennete giremeyen kimseye yazıklar olsun.",
    source: "Müslim",
    book: "Birr, 9"
  },
  {
    arabic: "مَنْ عَالَ جَارِيَتَيْنِ حَتَّى تَبْلُغَا جَاءَ يَوْمَ الْقِيَامَةِ أَنَا وَهُوَ",
    turkish: "Kim iki kız çocuğunu yetişkinlik çağına kadar güzelce yetiştirirse, kıyamet günü benimle yan yana olur.",
    source: "Müslim",
    book: "Birr, 149"
  },
  {
    arabic: "مَنْ كَانَ لَهُ ثَلاَثُ بَنَاتٍ فَصَبَرَ عَلَيْهِنَّ وَأَطْعَمَهُنَّ وَسَقَاهُنَّ وَكَسَاهُنَّ مِنْ جِدَتِهِ كُنَّ لَهُ حِجَابًا مِنَ النَّارِ",
    turkish: "Kimin üç kızı olur da onlara sabreder, yedirip içirir ve giydirirse, onlar kıyamette ateşe karşı perde olur.",
    source: "Buhârî",
    book: "Edeb"
  },
  {
    arabic: "لَيْسَ مِنَّا مَنْ لَمْ يَرْحَمْ صَغِيرَنَا وَيُوَقِّرْ كَبِيرَنَا",
    turkish: "Küçüklerimize merhamet etmeyen ve büyüklerimize saygı göstermeyen bizden değildir.",
    source: "Buhârî",
    book: "Edeb"
  },
  {
    arabic: "مَنْ كَفَلَ يَتِيمًا لَهُ أَوْ لِغَيْرِهِ أَنَا وَهُوَ كَهَاتَيْنِ فِي الْجَنَّةِ",
    turkish: "Yetimi himaye eden kimse ile ben cennette şu ikisi gibiyiz (iki parmağını birleştirerek).",
    source: "Buhârî",
    book: "Edeb, 24"
  },
  {
    arabic: "أَطْعِمُوا الْجَائِعَ وَعُودُوا الْمَرِيضَ وَفُكُّوا الْعَانِيَ",
    turkish: "Aç olanı doyurun, hastayı ziyaret edin, esiri serbest bırakın.",
    source: "Buhârî",
    book: "Et'ime, 1"
  },
  {
    arabic: "مَنْ عَادَ مَرِيضًا لَمْ يَزَلْ فِي خُرْفَةِ الْجَنَّةِ حَتَّى يَرْجِعَ",
    turkish: "Bir hastayı ziyaret eden, dönünceye kadar cennet bahçesindedir.",
    source: "Müslim",
    book: "Birr, 40"
  },
  // ===== 81-110: İlim, Hikmet ve Tefekkür =====
  {
    arabic: "طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَى كُلِّ مُسْلِمٍ",
    turkish: "İlim öğrenmek her Müslümana farzdır.",
    source: "Buhârî",
    book: "İlim"
  },
  {
    arabic: "مَنْ يُرِدِ اللَّهُ بِهِ خَيْرًا يُفَقِّهْهُ فِي الدِّينِ",
    turkish: "Allah kimin hayrını dilerse onu dinde derin anlayış sahibi kılar.",
    source: "Buhârî",
    book: "İlim, 10"
  },
  {
    arabic: "بَلِّغُوا عَنِّي وَلَوْ آيَةً",
    turkish: "Benden bir ayet bile olsa tebliğ edin.",
    source: "Buhârî",
    book: "Enbiyâ, 50"
  },
  {
    arabic: "الْحِكْمَةُ ضَالَّةُ الْمُؤْمِنِ فَحَيْثُ وَجَدَهَا فَهُوَ أَحَقُّ بِهَا",
    turkish: "Hikmet müminin yitiğidir; nerede bulursa onu alır.",
    source: "Buhârî",
    book: "İlim"
  },
  {
    arabic: "تَفَكُّرُ سَاعَةٍ خَيْرٌ مِنْ عِبَادَةِ سَنَةٍ",
    turkish: "Bir saat tefekkür, bir yıllık nafile ibadetten hayırlıdır.",
    source: "Buhârî",
    book: "Rikâk"
  },
  {
    arabic: "الدِّينُ النَّصِيحَةُ",
    turkish: "Din nasihattir.",
    source: "Müslim",
    book: "Îmân, 95"
  },
  {
    arabic: "مَنْ دَلَّ عَلَى خَيْرٍ فَلَهُ مِثْلُ أَجْرِ فَاعِلِهِ",
    turkish: "Kim bir hayra yol gösterirse ona o hayrı yapanın ecri gibi sevap vardır.",
    source: "Müslim",
    book: "İmâre, 133"
  },
  {
    arabic: "مَنْ سَنَّ فِي الإِسْلاَمِ سُنَّةً حَسَنَةً فَلَهُ أَجْرُهَا وَأَجْرُ مَنْ عَمِلَ بِهَا",
    turkish: "Kim İslam'da güzel bir çığır açarsa, onun sevabı ve onunla amel edenlerin sevabı kendisine yazılır.",
    source: "Müslim",
    book: "Zekât, 69"
  },
  {
    arabic: "إِنَّمَا الْعِلْمُ بِالتَّعَلُّمِ",
    turkish: "İlim ancak öğrenmekle elde edilir.",
    source: "Buhârî",
    book: "İlim"
  },
  {
    arabic: "لاَ تَزُولُ قَدَمَا عَبْدٍ يَوْمَ الْقِيَامَةِ حَتَّى يُسْأَلَ عَنْ عُمُرِهِ فِيمَا أَفْنَاهُ وَعَنْ عِلْمِهِ فِيمَ فَعَلَ وَعَنْ مَالِهِ مِنْ أَيْنَ اكْتَسَبَهُ وَفِيمَ أَنْفَقَهُ",
    turkish: "Kıyamette kulun ayakları, ömrünü nerede tükettiğinden, ilmiyle ne yaptığından, malını nereden kazanıp nereye harcadığından sorulmadıkça yerinden ayrılmaz.",
    source: "Buhârî",
    book: "İlim"
  },
  // ===== 91-120: Rızık, Ticaret ve Çalışma =====
  {
    arabic: "التَّاجِرُ الصَّدُوقُ الأَمِينُ مَعَ النَّبِيِّينَ وَالصِّدِّيقِينَ",
    turkish: "Doğru sözlü ve güvenilir tüccar, peygamberler ve sıddıklarla beraberdir.",
    source: "Buhârî",
    book: "Büyû', 4"
  },
  {
    arabic: "مَا أَكَلَ أَحَدٌ طَعَامًا قَطُّ خَيْرًا مِنْ أَنْ يَأْكُلَ مِنْ عَمَلِ يَدِهِ",
    turkish: "Kişi kendi el emeğinden daha hayırlı bir lokma yememiştir.",
    source: "Buhârî",
    book: "Büyû', 15"
  },
  {
    arabic: "مَنِ احْتَكَرَ فَهُوَ خَاطِئٌ",
    turkish: "Kim karaborsacılık yaparsa günahkârdır.",
    source: "Müslim",
    book: "Müsâkât, 129"
  },
  {
    arabic: "رَحِمَ اللَّهُ رَجُلاً سَمْحًا إِذَا بَاعَ وَإِذَا اشْتَرَى",
    turkish: "Allah alırken de satarken de kolaylık gösteren kişiye rahmet etsin.",
    source: "Buhârî",
    book: "Büyû', 16"
  },
  {
    arabic: "مَنْ أَنْظَرَ مُعْسِرًا أَوْ وَضَعَ عَنْهُ أَظَلَّهُ اللَّهُ فِي ظِلِّهِ",
    turkish: "Kim darlık içindeki borçluya süre tanır veya borcunu affederse, Allah onu arşının gölgesinde gölgelendirir.",
    source: "Müslim",
    book: "Zühd, 74"
  },
  {
    arabic: "الْبَيِّعَانِ بِالْخِيَارِ مَا لَمْ يَتَفَرَّقَا",
    turkish: "Alıcı ile satıcı birbirlerinden ayrılmadıkça muhayyerdirler.",
    source: "Buhârî",
    book: "Büyû', 19"
  },
  {
    arabic: "مَنْ أَخَذَ أَمْوَالَ النَّاسِ يُرِيدُ أَدَاءَهَا أَدَّى اللَّهُ عَنْهُ",
    turkish: "Kim insanların malını ödeme niyetiyle alırsa, Allah onun borcunu öder.",
    source: "Buhârî",
    book: "İstikrâz, 2"
  },
  {
    arabic: "لَوْ أَنَّكُمْ تَتَوَكَّلُونَ عَلَى اللَّهِ حَقَّ تَوَكُّلِهِ لَرَزَقَكُمْ كَمَا يَرْزُقُ الطَّيْرَ تَغْدُو خِمَاصًا وَتَرُوحُ بِطَانًا",
    turkish: "Allah'a hakkıyla tevekkül etseniz, kuşları rızıklandırdığı gibi sizi de rızıklandırır. Kuşlar sabah aç gider akşam tok döner.",
    source: "Buhârî",
    book: "Rikâk"
  },
  {
    arabic: "مَا مِنْ مُسْلِمٍ يَغْرِسُ غَرْسًا أَوْ يَزْرَعُ زَرْعًا فَيَأْكُلُ مِنْهُ طَيْرٌ أَوْ إِنْسَانٌ أَوْ بَهِيمَةٌ إِلَّا كَانَ لَهُ بِهِ صَدَقَةٌ",
    turkish: "Bir Müslümanın diktiği ağaçtan veya ektiği ekinden bir kuş, insan ya da hayvan yerse bu onun için sadaka olur.",
    source: "Buhârî",
    book: "Hars, 1"
  },
  {
    arabic: "مَا بَعَثَ اللَّهُ نَبِيًّا إِلاَّ رَعَى الْغَنَمَ",
    turkish: "Allah hiçbir peygamber göndermemiştir ki o koyun gütmemiş olsun.",
    source: "Buhârî",
    book: "İcâre, 2"
  },
  // ===== 101-130: Sabır, Şükür ve Tevekkül =====
  {
    arabic: "عَجَبًا لأَمْرِ الْمُؤْمِنِ إِنَّ أَمْرَهُ كُلَّهُ خَيْرٌ",
    turkish: "Müminin hâli ne hoştur! Her hâli hayırdır. Başına güzel bir şey gelse şükreder hayır olur; bir sıkıntı gelse sabreder yine hayır olur.",
    source: "Müslim",
    book: "Zühd, 64"
  },
  {
    arabic: "مَا يُصِيبُ الْمُسْلِمَ مِنْ نَصَبٍ وَلاَ وَصَبٍ وَلاَ هَمٍّ وَلاَ حُزْنٍ وَلاَ أَذًى وَلاَ غَمٍّ حَتَّى الشَّوْكَةِ يُشَاكُهَا إِلاَّ كَفَّرَ اللَّهُ بِهَا مِنْ خَطَايَاهُ",
    turkish: "Müslümanın başına gelen yorgunluk, hastalık, üzüntü, keder, sıkıntı, hatta batan diken bile günahlarına kefaret olur.",
    source: "Buhârî",
    book: "Merdâ, 1"
  },
  {
    arabic: "إِنَّ عِظَمَ الْجَزَاءِ مَعَ عِظَمِ الْبَلاَءِ",
    turkish: "Büyük mükâfat büyük imtihanla birliktedir.",
    source: "Buhârî",
    book: "Rikâk"
  },
  {
    arabic: "احْفَظِ اللَّهَ يَحْفَظْكَ احْفَظِ اللَّهَ تَجِدْهُ تُجَاهَكَ",
    turkish: "Allah'ı koru ki Allah da seni korusun. Allah'ı koru ki O'nu karşında bulasın.",
    source: "Buhârî",
    book: "Rikâk"
  },
  {
    arabic: "وَاعْلَمْ أَنَّ مَا أَصَابَكَ لَمْ يَكُنْ لِيُخْطِئَكَ وَمَا أَخْطَأَكَ لَمْ يَكُنْ لِيُصِيبَكَ",
    turkish: "Bil ki sana isabet eden şey seni asla şaşırtmazdı; seni şaşırtan şey de sana asla isabet etmezdi.",
    source: "Müslim",
    book: "Kader"
  },
  {
    arabic: "انْظُرُوا إِلَى مَنْ أَسْفَلَ مِنْكُمْ وَلاَ تَنْظُرُوا إِلَى مَنْ هُوَ فَوْقَكُمْ",
    turkish: "Kendinizden aşağıdakilere bakın, yukarıdakilere bakmayın. Böylesi Allah'ın nimetini küçümsememenize daha uygundur.",
    source: "Müslim",
    book: "Zühd, 9"
  },
  {
    arabic: "ازْهَدْ فِي الدُّنْيَا يُحِبَّكَ اللَّهُ وَازْهَدْ فِيمَا عِنْدَ النَّاسِ يُحِبَّكَ النَّاسُ",
    turkish: "Dünyaya rağbet etme Allah seni sevsin; insanların elindekine tamah etme insanlar seni sevsin.",
    source: "Buhârî",
    book: "Rikâk"
  },
  {
    arabic: "كُنْ فِي الدُّنْيَا كَأَنَّكَ غَرِيبٌ أَوْ عَابِرُ سَبِيلٍ",
    turkish: "Dünyada bir garip veya yolcu gibi ol.",
    source: "Buhârî",
    book: "Rikâk, 3"
  },
  {
    arabic: "أَلاَ أُخْبِرُكُمْ بِأَهْلِ الْجَنَّةِ كُلُّ ضَعِيفٍ مُتَضَعِّفٍ لَوْ أَقْسَمَ عَلَى اللَّهِ لَأَبَرَّهُ",
    turkish: "Cennet ehlini haber vereyim mi? Her zayıf ve mütevazı kişidir ki Allah'a yemin etse Allah yeminini yerine getirir.",
    source: "Buhârî",
    book: "Rikâk"
  },
  {
    arabic: "إِنَّ مَعَ الْعُسْرِ يُسْرًا إِنَّ مَعَ الْعُسْرِ يُسْرًا",
    turkish: "Zorlukla beraber kolaylık vardır. Muhakkak zorlukla beraber bir kolaylık daha vardır.",
    source: "Buhârî",
    book: "Tefsîr"
  },
  // ===== 111-140: Komşuluk, Misafirperverlik =====
  {
    arabic: "مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الآخِرِ فَلْيُكْرِمْ جَارَهُ",
    turkish: "Allah'a ve ahiret gününe iman eden komşusuna ikram etsin.",
    source: "Buhârî",
    book: "Edeb, 31"
  },
  {
    arabic: "مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الآخِرِ فَلْيُكْرِمْ ضَيْفَهُ",
    turkish: "Allah'a ve ahiret gününe iman eden misafirine ikram etsin.",
    source: "Buhârî",
    book: "Edeb, 31"
  },
  {
    arabic: "وَاللَّهِ لاَ يُؤْمِنُ وَاللَّهِ لاَ يُؤْمِنُ وَاللَّهِ لاَ يُؤْمِنُ قِيلَ مَنْ يَا رَسُولَ اللَّهِ قَالَ الَّذِي لاَ يَأْمَنُ جَارُهُ بَوَائِقَهُ",
    turkish: "Vallahi iman etmiş olmaz! (Üç kez). Dediler ki: Kim ya Resulullah? Buyurdu ki: Komşusu kötülüğünden emin olmayan kimse.",
    source: "Buhârî",
    book: "Edeb, 29"
  },
  {
    arabic: "مَا زَالَ جِبْرِيلُ يُوصِينِي بِالْجَارِ حَتَّى ظَنَنْتُ أَنَّهُ سَيُوَرِّثُهُ",
    turkish: "Cebrail bana komşu hakkında o kadar tavsiyede bulundu ki komşuyu mirasçı yapacak sandım.",
    source: "Buhârî",
    book: "Edeb, 28"
  },
  {
    arabic: "مَنْ كَانَ عِنْدَهُ فَضْلُ ظَهْرٍ فَلْيَعُدْ بِهِ عَلَى مَنْ لاَ ظَهْرَ لَهُ",
    turkish: "Kimin fazla bineği varsa bineksiz olana versin; kimin fazla yiyeceği varsa yiyeceği olmayana versin.",
    source: "Müslim",
    book: "Lukata, 14"
  },
  {
    arabic: "الطَّعَامُ لاِثْنَيْنِ يَكْفِي ثَلاَثَةً وَطَعَامُ ثَلاَثَةٍ يَكْفِي أَرْبَعَةً",
    turkish: "İki kişinin yemeği üç kişiye yeter, üç kişinin yemeği dört kişiye yeter.",
    source: "Buhârî",
    book: "Et'ime, 11"
  },
  {
    arabic: "لاَ يَدْخُلُ الْجَنَّةَ مَنْ لاَ يَأْمَنُ جَارُهُ بَوَائِقَهُ",
    turkish: "Komşusu zararından emin olmayan kimse cennete giremez.",
    source: "Müslim",
    book: "Îmân, 73"
  },
  {
    arabic: "مَنْ أَكَلَ طَعَامًا فَقَالَ الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنِي هَذَا وَرَزَقَنِيهِ مِنْ غَيْرِ حَوْلٍ مِنِّي وَلاَ قُوَّةٍ غُفِرَ لَهُ",
    turkish: "Kim yemek yedikten sonra 'Bana bu yemeği yedirip rızık olarak veren Allah'a hamd olsun' derse günahları bağışlanır.",
    source: "Buhârî",
    book: "Da'avât"
  },
  {
    arabic: "إِذَا أَوَى أَحَدُكُمْ إِلَى فِرَاشِهِ فَلْيَنْفُضْ فِرَاشَهُ",
    turkish: "Biriniz yatağına girdiğinde yatağını silkelesin.",
    source: "Buhârî",
    book: "Da'avât"
  },
  {
    arabic: "مَا عَابَ النَّبِيُّ طَعَامًا قَطُّ إِنِ اشْتَهَاهُ أَكَلَهُ وَإِلاَّ تَرَكَهُ",
    turkish: "Peygamber hiçbir yemeği ayıplamadı. Canı çekerse yer, çekmezse bırakırdı.",
    source: "Buhârî",
    book: "Et'ime, 21"
  },
  // ===== 121-150: Cennet, Ahiret ve Ölüm =====
  {
    arabic: "أَكْثِرُوا ذِكْرَ هَاذِمِ اللَّذَّاتِ يَعْنِي الْمَوْتَ",
    turkish: "Lezzetleri kesen ölümü çokça hatırlayın.",
    source: "Buhârî",
    book: "Rikâk"
  },
  {
    arabic: "الْقَبْرُ أَوَّلُ مَنَازِلِ الآخِرَةِ",
    turkish: "Kabir ahiret konaklarının ilkidir.",
    source: "Buhârî",
    book: "Cenâiz"
  },
  {
    arabic: "إِنَّ أَحَدَكُمْ لَيَعْمَلُ بِعَمَلِ أَهْلِ الْجَنَّةِ حَتَّى مَا يَكُونُ بَيْنَهُ وَبَيْنَهَا إِلاَّ ذِرَاعٌ",
    turkish: "Kişi cennet ehlinin ameliyle amel eder, cennetle arasında bir arşın kalır...",
    source: "Buhârî",
    book: "Kader, 1"
  },
  {
    arabic: "فِي الْجَنَّةِ مَا لاَ عَيْنٌ رَأَتْ وَلاَ أُذُنٌ سَمِعَتْ وَلاَ خَطَرَ عَلَى قَلْبِ بَشَرٍ",
    turkish: "Cennette hiçbir gözün görmediği, hiçbir kulağın duymadığı ve hiçbir insanın aklına gelmeyen nimetler vardır.",
    source: "Buhârî",
    book: "Bed'ü'l-Halk, 8"
  },
  {
    arabic: "مَنْ خَافَ أَدْلَجَ وَمَنْ أَدْلَجَ بَلَغَ الْمَنْزِلَ",
    turkish: "Kim korkarsa gece yola koyulur; kim gece yola koyulursa konağına varır.",
    source: "Buhârî",
    book: "Rikâk"
  },
  {
    arabic: "لاَ يَتَمَنَّيَنَّ أَحَدُكُمُ الْمَوْتَ لِضُرٍّ نَزَلَ بِهِ",
    turkish: "Hiçbiriniz başına gelen bir beladan dolayı ölümü temenni etmesin.",
    source: "Buhârî",
    book: "Merdâ, 19"
  },
  {
    arabic: "مَنْ أَحَبَّ لِقَاءَ اللَّهِ أَحَبَّ اللَّهُ لِقَاءَهُ",
    turkish: "Kim Allah'a kavuşmayı severse Allah da ona kavuşmayı sever.",
    source: "Buhârî",
    book: "Rikâk, 41"
  },
  {
    arabic: "إِذَا مَاتَ ابْنُ آدَمَ انْقَطَعَ عَمَلُهُ إِلاَّ مِنْ ثَلاَثٍ",
    turkish: "Âdemoğlu ölünce ameli üç şey dışında kesilir: Sadaka-i cariye, faydalı ilim, hayırlı evlat.",
    source: "Müslim",
    book: "Vasiyyet, 14"
  },
  {
    arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْجَنَّةَ وَأَعُوذُ بِكَ مِنَ النَّارِ",
    turkish: "Allah'ım! Senden cenneti ister, cehennemden sana sığınırım.",
    source: "Buhârî",
    book: "Da'avât"
  },
  {
    arabic: "حُفَّتِ الْجَنَّةُ بِالْمَكَارِهِ وَحُفَّتِ النَّارُ بِالشَّهَوَاتِ",
    turkish: "Cennet zorluklarla, cehennem ise şehvetlerle kuşatılmıştır.",
    source: "Müslim",
    book: "Cennet, 1"
  },
  // ===== 131-160: Peygamber Ahlakı ve Sünnet =====
  {
    arabic: "قَالَتْ عَائِشَةُ كَانَ خُلُقُهُ الْقُرْآنَ",
    turkish: "Hz. Aişe dedi ki: Onun ahlakı Kur'an idi.",
    source: "Müslim",
    book: "Müsâfirîn, 139"
  },
  {
    arabic: "مَا خُيِّرَ رَسُولُ اللَّهِ بَيْنَ أَمْرَيْنِ إِلاَّ أَخَذَ أَيْسَرَهُمَا مَا لَمْ يَكُنْ إِثْمًا",
    turkish: "Resulullah iki şey arasında seçme hakkı verildiğinde günah olmadıkça kolayını tercih ederdi.",
    source: "Buhârî",
    book: "Edeb, 80"
  },
  {
    arabic: "مَا ضَرَبَ رَسُولُ اللَّهِ شَيْئًا قَطُّ بِيَدِهِ وَلاَ امْرَأَةً وَلاَ خَادِمًا",
    turkish: "Resulullah eliyle hiçbir şeye vurmadı; ne bir kadına ne de bir hizmetçiye.",
    source: "Müslim",
    book: "Fedâil, 79"
  },
  {
    arabic: "كَانَ رَسُولُ اللَّهِ أَحْسَنَ النَّاسِ خُلُقًا",
    turkish: "Resulullah insanların ahlaken en güzeli idi.",
    source: "Müslim",
    book: "Fedâil, 82"
  },
  {
    arabic: "مَنْ صَلَّى عَلَيَّ صَلاَةً صَلَّى اللَّهُ عَلَيْهِ بِهَا عَشْرًا",
    turkish: "Kim bana bir salât ederse Allah ona on salât eder.",
    source: "Müslim",
    book: "Salât, 70"
  },
  {
    arabic: "تَرَكْتُ فِيكُمْ أَمْرَيْنِ لَنْ تَضِلُّوا مَا تَمَسَّكْتُمْ بِهِمَا كِتَابَ اللَّهِ وَسُنَّةَ نَبِيِّهِ",
    turkish: "Size iki şey bıraktım; bunlara sımsıkı sarıldığınız müddetçe asla sapmazsınız: Allah'ın kitabı ve peygamberinin sünneti.",
    source: "Müslim",
    book: "Hac, 147"
  },
  {
    arabic: "عَلَيْكُمْ بِسُنَّتِي وَسُنَّةِ الْخُلَفَاءِ الرَّاشِدِينَ الْمَهْدِيِّينَ",
    turkish: "Size sünnetime ve doğru yolda olan hulefâ-i râşidînin sünnetine sarılmanızı tavsiye ederim.",
    source: "Buhârî",
    book: "İ'tisâm"
  },
  {
    arabic: "إِنِّي لَأَمْزَحُ وَلاَ أَقُولُ إِلاَّ حَقًّا",
    turkish: "Ben de şaka yaparım ama sadece doğru olanı söylerim.",
    source: "Buhârî",
    book: "Edeb"
  },
  {
    arabic: "يَسِّرُوا وَلاَ تُعَسِّرُوا وَبَشِّرُوا وَلاَ تُنَفِّرُوا",
    turkish: "Kolaylaştırın zorlaştırmayın; müjdeleyin nefret ettirmeyin.",
    source: "Buhârî",
    book: "İlim, 11"
  },
  {
    arabic: "إِنَّ اللَّهَ رَفِيقٌ يُحِبُّ الرِّفْقَ فِي الأَمْرِ كُلِّهِ",
    turkish: "Allah Refik'tir (yumuşak huyludur), her işte yumuşaklığı sever.",
    source: "Buhârî",
    book: "Edeb, 35"
  },
  // ===== 141-170: Zikir ve Dua =====
  {
    arabic: "أَفْضَلُ الدُّعَاءِ دُعَاءُ يَوْمِ عَرَفَةَ",
    turkish: "Duaların en faziletlisi Arefe günü yapılan duadır.",
    source: "Buhârî",
    book: "Da'avât"
  },
  {
    arabic: "سَيِّدُ الاِسْتِغْفَارِ اللَّهُمَّ أَنْتَ رَبِّي لاَ إِلَهَ إِلاَّ أَنْتَ",
    turkish: "İstiğfarın efendisi: Allah'ım! Sen Rabbimsin, senden başka ilah yoktur...",
    source: "Buhârî",
    book: "Da'avât, 2"
  },
  {
    arabic: "مَا مِنْ يَوْمٍ أَكْثَرَ مِنْ أَنْ يُعْتِقَ اللَّهُ فِيهِ عَبْدًا مِنَ النَّارِ مِنْ يَوْمِ عَرَفَةَ",
    turkish: "Allah'ın en çok kul azat ettiği gün Arefe günüdür.",
    source: "Müslim",
    book: "Hac, 436"
  },
  {
    arabic: "يَنْزِلُ رَبُّنَا تَبَارَكَ وَتَعَالَى كُلَّ لَيْلَةٍ إِلَى السَّمَاءِ الدُّنْيَا حِينَ يَبْقَى ثُلُثُ اللَّيْلِ الآخِرُ",
    turkish: "Rabbimiz her gece, gecenin son üçte birinde dünya semasına iner ve 'Kim bana dua ediyor, kabul edeyim' buyurur.",
    source: "Buhârî",
    book: "Teheccüd, 14"
  },
  {
    arabic: "مَنْ قَالَ لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ فِي يَوْمٍ مِائَةَ مَرَّةٍ",
    turkish: "Kim günde yüz kere 'Lâ ilâhe illallah' kelimesini söylerse on köle azat etmiş gibi sevap kazanır.",
    source: "Buhârî",
    book: "Da'avât, 64"
  },
  {
    arabic: "مَنْ قَالَ سُبْحَانَ اللَّهِ الْعَظِيمِ وَبِحَمْدِهِ غُرِسَتْ لَهُ نَخْلَةٌ فِي الْجَنَّةِ",
    turkish: "Kim 'Sübhânallahi'l-azîm ve bihamdih' derse cennette ona bir hurma ağacı dikilir.",
    source: "Buhârî",
    book: "Da'avât"
  },
  {
    arabic: "كَلِمَتَانِ خَفِيفَتَانِ عَلَى اللِّسَانِ ثَقِيلَتَانِ فِي الْمِيزَانِ حَبِيبَتَانِ إِلَى الرَّحْمَنِ سُبْحَانَ اللَّهِ وَبِحَمْدِهِ سُبْحَانَ اللَّهِ الْعَظِيمِ",
    turkish: "Dile hafif, mizanda ağır ve Rahmân'a sevimli iki söz: 'Sübhânallahi ve bihamdih, Sübhânallahi'l-azîm.'",
    source: "Buhârî",
    book: "Da'avât, 65"
  },
  {
    arabic: "الدُّعَاءُ بَيْنَ الأَذَانِ وَالإِقَامَةِ لاَ يُرَدُّ",
    turkish: "Ezan ile ikamet arasında yapılan dua reddedilmez.",
    source: "Buhârî",
    book: "Da'avât"
  },
  {
    arabic: "أَقْرَبُ مَا يَكُونُ الرَّبُّ مِنَ الْعَبْدِ فِي جَوْفِ اللَّيْلِ الآخِرِ",
    turkish: "Rabbin kuluna en yakın olduğu vakit gecenin son kısmıdır.",
    source: "Müslim",
    book: "Zikir"
  },
  {
    arabic: "لاَ حَوْلَ وَلاَ قُوَّةَ إِلاَّ بِاللَّهِ كَنْزٌ مِنْ كُنُوزِ الْجَنَّةِ",
    turkish: "'Lâ havle ve lâ kuvvete illâ billah' cennet hazinelerinden bir hazinedir.",
    source: "Buhârî",
    book: "Da'avât, 50"
  },
  // ===== 151-180: Oruç, Zekât ve İbadet =====
  {
    arabic: "الصِّيَامُ جُنَّةٌ",
    turkish: "Oruç bir kalkandır.",
    source: "Buhârî",
    book: "Savm, 2"
  },
  {
    arabic: "مَنْ صَامَ يَوْمًا فِي سَبِيلِ اللَّهِ بَعَّدَ اللَّهُ وَجْهَهُ عَنِ النَّارِ سَبْعِينَ خَرِيفًا",
    turkish: "Kim Allah yolunda bir gün oruç tutarsa, Allah onun yüzünü cehennemden yetmiş yıl uzaklaştırır.",
    source: "Buhârî",
    book: "Cihâd, 36"
  },
  {
    arabic: "لِلصَّائِمِ فَرْحَتَانِ فَرْحَةٌ عِنْدَ فِطْرِهِ وَفَرْحَةٌ عِنْدَ لِقَاءِ رَبِّهِ",
    turkish: "Oruçlu için iki sevinç vardır: İftar ettiğinde ve Rabbine kavuştuğunda.",
    source: "Buhârî",
    book: "Savm, 9"
  },
  {
    arabic: "مَنْ لَمْ يَدَعْ قَوْلَ الزُّورِ وَالْعَمَلَ بِهِ فَلَيْسَ لِلَّهِ حَاجَةٌ فِي أَنْ يَدَعَ طَعَامَهُ وَشَرَابَهُ",
    turkish: "Kim yalan sözü ve yalanla ameli bırakmazsa, Allah'ın onun yemesini içmesini bırakmasına ihtiyacı yoktur.",
    source: "Buhârî",
    book: "Savm, 8"
  },
  {
    arabic: "تَسَحَّرُوا فَإِنَّ فِي السَّحُورِ بَرَكَةً",
    turkish: "Sahur yapın çünkü sahurda bereket vardır.",
    source: "Buhârî",
    book: "Savm, 20"
  },
  {
    arabic: "مَنْ أَعْطَى زَكَاةَ مَالِهِ مُؤْتَجِرًا فَلَهُ أَجْرُهَا",
    turkish: "Kim malının zekâtını sevabını umarak verirse, ecri ona aittir.",
    source: "Buhârî",
    book: "Zekât"
  },
  {
    arabic: "مَا مِنْ يَوْمٍ يُصْبِحُ الْعِبَادُ فِيهِ إِلاَّ مَلَكَانِ يَنْزِلاَنِ فَيَقُولُ أَحَدُهُمَا اللَّهُمَّ أَعْطِ مُنْفِقًا خَلَفًا",
    turkish: "Her gün iki melek iner; biri 'Allah'ım, infak edene karşılığını ver' der, diğeri 'Cimrilik edene telef ver' der.",
    source: "Buhârî",
    book: "Zekât, 27"
  },
  {
    arabic: "اتَّقُوا النَّارَ وَلَوْ بِشِقِّ تَمْرَةٍ",
    turkish: "Yarım hurma ile de olsa ateşten korunun.",
    source: "Buhârî",
    book: "Zekât, 10"
  },
  {
    arabic: "سَبْعَةٌ يُظِلُّهُمُ اللَّهُ فِي ظِلِّهِ يَوْمَ لاَ ظِلَّ إِلاَّ ظِلُّهُ",
    turkish: "Yedi sınıf insan, Allah'ın arşının gölgesinden başka gölge olmayan günde O'nun gölgesinde gölgelenir.",
    source: "Buhârî",
    book: "Ezân, 36"
  },
  {
    arabic: "مَنْ بَنَى مَسْجِدًا لِلَّهِ بَنَى اللَّهُ لَهُ مِثْلَهُ فِي الْجَنَّةِ",
    turkish: "Kim Allah için bir mescit yaparsa, Allah da ona cennette bir ev yapar.",
    source: "Buhârî",
    book: "Salât, 65"
  },
  // ===== 161-190: Tövbe, Bağışlama ve Merhamet =====
  {
    arabic: "إِنَّ اللَّهَ يَغْفِرُ الذُّنُوبَ جَمِيعًا",
    turkish: "Allah bütün günahları bağışlar.",
    source: "Müslim",
    book: "Tevbe"
  },
  {
    arabic: "التَّائِبُ مِنَ الذَّنْبِ كَمَنْ لاَ ذَنْبَ لَهُ",
    turkish: "Günahtan tevbe eden hiç günah işlememiş gibidir.",
    source: "Buhârî",
    book: "Rikâk"
  },
  {
    arabic: "الرَّاحِمُونَ يَرْحَمُهُمُ الرَّحْمَنُ ارْحَمُوا مَنْ فِي الأَرْضِ يَرْحَمْكُمْ مَنْ فِي السَّمَاءِ",
    turkish: "Merhametli olanlara Rahmân merhamet eder. Yeryüzündekilere merhamet edin ki göktekiler de size merhamet etsin.",
    source: "Buhârî",
    book: "Edeb"
  },
  {
    arabic: "مَنْ لاَ يَرْحَمِ النَّاسَ لاَ يَرْحَمْهُ اللَّهُ",
    turkish: "İnsanlara merhamet etmeyene Allah merhamet etmez.",
    source: "Müslim",
    book: "Fedâil, 66"
  },
  {
    arabic: "ارْحَمُوا تُرْحَمُوا وَاغْفِرُوا يُغْفَرْ لَكُمْ",
    turkish: "Merhamet edin ki merhamet olunasınız; bağışlayın ki bağışlanasınız.",
    source: "Buhârî",
    book: "Edeb"
  },
  {
    arabic: "إِنَّ لِلَّهِ مِائَةَ رَحْمَةٍ أَنْزَلَ مِنْهَا رَحْمَةً وَاحِدَةً بَيْنَ الْجِنِّ وَالإِنْسِ",
    turkish: "Allah'ın yüz rahmeti vardır. Bir tanesini yeryüzüne indirdi; bütün canlılar birbirlerine bu rahmetle merhamet eder.",
    source: "Müslim",
    book: "Tevbe, 21"
  },
  {
    arabic: "مَنْ تَابَ قَبْلَ أَنْ تَطْلُعَ الشَّمْسُ مِنْ مَغْرِبِهَا تَابَ اللَّهُ عَلَيْهِ",
    turkish: "Güneş batıdan doğmadan önce tevbe eden kişinin tevbesini Allah kabul eder.",
    source: "Müslim",
    book: "Zikir, 43"
  },
  {
    arabic: "إِنَّ اللَّهَ يَقْبَلُ تَوْبَةَ الْعَبْدِ مَا لَمْ يُغَرْغِرْ",
    turkish: "Allah kulun tevbesini can boğaza gelmediği sürece kabul eder.",
    source: "Buhârî",
    book: "Rikâk"
  },
  {
    arabic: "مَا مِنْ عَبْدٍ يَسْتَغْفِرُ اللَّهَ إِلاَّ غَفَرَ اللَّهُ لَهُ",
    turkish: "Hiçbir kul yoktur ki Allah'tan bağışlanma dilesin de Allah onu bağışlamasın.",
    source: "Buhârî",
    book: "Da'avât"
  },
  {
    arabic: "قَالَ اللَّهُ تَعَالَى يَا ابْنَ آدَمَ إِنَّكَ مَا دَعَوْتَنِي وَرَجَوْتَنِي غَفَرْتُ لَكَ عَلَى مَا كَانَ فِيكَ وَلاَ أُبَالِي",
    turkish: "Allah buyurdu: Ey Âdemoğlu! Sen bana dua ettiğin ve benden umduğun sürece seni bağışlarım, aldırmam.",
    source: "Müslim",
    book: "Zikir"
  },
  // ===== 171-200: Kalp, Niyet ve İhlas =====
  {
    arabic: "أَلاَ وَإِنَّ فِي الْجَسَدِ مُضْغَةً إِذَا صَلَحَتْ صَلَحَ الْجَسَدُ كُلُّهُ وَإِذَا فَسَدَتْ فَسَدَ الْجَسَدُ كُلُّهُ أَلاَ وَهِيَ الْقَلْبُ",
    turkish: "Dikkat edin! Bedende bir et parçası vardır; o düzgün olursa bütün beden düzgün olur, bozulursa bütün beden bozulur. Dikkat edin, o kalptir.",
    source: "Buhârî",
    book: "Îmân, 39"
  },
  {
    arabic: "إِنَّ اللَّهَ لاَ يَنْظُرُ إِلَى أَجْسَادِكُمْ وَلاَ إِلَى صُوَرِكُمْ وَلَكِنْ يَنْظُرُ إِلَى قُلُوبِكُمْ",
    turkish: "Allah sizin bedenlerinize ve şekillerinize bakmaz, fakat kalplerinize bakar.",
    source: "Müslim",
    book: "Birr, 33"
  },
  {
    arabic: "إِنَّ الرِّيَاءَ الشِّرْكُ الأَصْغَرُ",
    turkish: "Riya küçük şirktir.",
    source: "Müslim",
    book: "Zühd"
  },
  {
    arabic: "مَنْ أَحْدَثَ فِي أَمْرِنَا هَذَا مَا لَيْسَ مِنْهُ فَهُوَ رَدٌّ",
    turkish: "Kim dinimizde olmayan bir şey ortaya koyarsa o reddedilir.",
    source: "Buhârî",
    book: "Sulh, 5"
  },
  {
    arabic: "كُلُّ بِدْعَةٍ ضَلاَلَةٌ",
    turkish: "Her bid'at dalâlettir.",
    source: "Müslim",
    book: "Cum'a, 43"
  },
  {
    arabic: "أَخْلِصُوا أَعْمَالَكُمْ لِلَّهِ فَإِنَّ اللَّهَ لاَ يَقْبَلُ مِنَ الْعَمَلِ إِلاَّ مَا كَانَ لَهُ خَالِصًا",
    turkish: "Amellerinizi Allah için ihlasla yapın. Çünkü Allah ancak ihlaslı ameli kabul eder.",
    source: "Buhârî",
    book: "İ'tisâm"
  },
  {
    arabic: "إِنَّمَا يُبْعَثُ النَّاسُ عَلَى نِيَّاتِهِمْ",
    turkish: "İnsanlar niyetlerine göre diriltilirler.",
    source: "Müslim",
    book: "Cenâiz"
  },
  {
    arabic: "مَنْ سَمَّعَ سَمَّعَ اللَّهُ بِهِ وَمَنْ يُرَائِي يُرَائِي اللَّهُ بِهِ",
    turkish: "Kim gösteriş yaparsa Allah onu rezil eder; kim riyakârlık yaparsa Allah onu teşhir eder.",
    source: "Buhârî",
    book: "Rikâk, 36"
  },
  {
    arabic: "إِنَّ أَوَّلَ النَّاسِ يُقْضَى يَوْمَ الْقِيَامَةِ عَلَيْهِ رَجُلٌ اسْتُشْهِدَ",
    turkish: "Kıyamette ilk hesaba çekilecek kişi, ihlassız şehit olan, ihlassız âlim olan ve ihlassız cömert olandır.",
    source: "Müslim",
    book: "İmâre, 152"
  },
  {
    arabic: "رُبَّ أَشْعَثَ مَدْفُوعٍ بِالأَبْوَابِ لَوْ أَقْسَمَ عَلَى اللَّهِ لَأَبَرَّهُ",
    turkish: "Nice saçı başı dağınık, kapılardan kovulan kişi vardır ki Allah'a yemin etse Allah yeminini yerine getirir.",
    source: "Müslim",
    book: "Birr, 138"
  },
  // ===== 181-210: Güzel Ahlak Devamı =====
  {
    arabic: "لاَ يَحِلُّ لِمُسْلِمٍ أَنْ يَهْجُرَ أَخَاهُ فَوْقَ ثَلاَثِ لَيَالٍ",
    turkish: "Bir Müslümanın din kardeşiyle üç günden fazla küs durması helal değildir.",
    source: "Buhârî",
    book: "Edeb, 62"
  },
  {
    arabic: "لاَ يَحِلُّ لِمُؤْمِنٍ أَنْ يُرَوِّعَ مُسْلِمًا",
    turkish: "Bir müminin başka bir Müslümanı korkutması helal değildir.",
    source: "Müslim",
    book: "Birr"
  },
  {
    arabic: "الْمُؤْمِنُ لِلْمُؤْمِنِ كَالْبُنْيَانِ يَشُدُّ بَعْضُهُ بَعْضًا",
    turkish: "Mümin mümin için parçaları birbirini destekleyen bina gibidir.",
    source: "Buhârî",
    book: "Edeb, 36"
  },
  {
    arabic: "مَثَلُ الْمُؤْمِنِينَ فِي تَوَادِّهِمْ وَتَرَاحُمِهِمْ وَتَعَاطُفِهِمْ مَثَلُ الْجَسَدِ",
    turkish: "Müminler birbirlerini sevmede, merhamette ve şefkatte tek bir beden gibidir. Bir organı ağrısa bütün beden uykusuzluk ve ateşle ona katılır.",
    source: "Müslim",
    book: "Birr, 66"
  },
  {
    arabic: "مَنْ كَظَمَ غَيْظًا وَهُوَ قَادِرٌ عَلَى أَنْ يُنْفِذَهُ دَعَاهُ اللَّهُ عَلَى رُءُوسِ الْخَلاَئِقِ",
    turkish: "Kim öfkesini yenmeye gücü yettiği halde yutarsa, Allah onu kıyamette tüm insanların önünde çağırır.",
    source: "Buhârî",
    book: "Edeb"
  },
  {
    arabic: "إِيَّاكُمْ وَالْحَسَدَ فَإِنَّ الْحَسَدَ يَأْكُلُ الْحَسَنَاتِ كَمَا تَأْكُلُ النَّارُ الْحَطَبَ",
    turkish: "Hasetten sakının! Çünkü haset, ateşin odunu yediği gibi sevapları yer.",
    source: "Buhârî",
    book: "Edeb"
  },
  {
    arabic: "إِيَّاكُمْ وَالظَّنَّ فَإِنَّ الظَّنَّ أَكْذَبُ الْحَدِيثِ",
    turkish: "Zandan sakının! Çünkü zan sözlerin en yalanıdır.",
    source: "Buhârî",
    book: "Edeb, 58"
  },
  {
    arabic: "لاَ تَجَسَّسُوا وَلاَ تَحَسَّسُوا وَلاَ تَنَافَسُوا وَلاَ تَحَاسَدُوا",
    turkish: "Birbirinizin gizli hâllerini araştırmayın, kusurlarını aramayın, birbirinize haset etmeyin.",
    source: "Müslim",
    book: "Birr, 28"
  },
  {
    arabic: "الْكِبْرُ بَطَرُ الْحَقِّ وَغَمْطُ النَّاسِ",
    turkish: "Kibir, hakkı kabul etmemek ve insanları küçük görmektir.",
    source: "Müslim",
    book: "Îmân, 147"
  },
  {
    arabic: "لاَ يَدْخُلُ الْجَنَّةَ مَنْ كَانَ فِي قَلْبِهِ مِثْقَالُ ذَرَّةٍ مِنْ كِبْرٍ",
    turkish: "Kalbinde zerre kadar kibir olan cennete giremez.",
    source: "Müslim",
    book: "Îmân, 148"
  },
  // ===== 191-220: Dil ve Söz =====
  {
    arabic: "مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الآخِرِ فَلاَ يُؤْذِ جَارَهُ",
    turkish: "Allah'a ve ahiret gününe iman eden komşusuna eziyet etmesin.",
    source: "Buhârî",
    book: "Edeb, 31"
  },
  {
    arabic: "إِنَّ الْعَبْدَ لَيَتَكَلَّمُ بِالْكَلِمَةِ مِنْ رِضْوَانِ اللَّهِ لاَ يُلْقِي لَهَا بَالاً يَرْفَعُهُ اللَّهُ بِهَا دَرَجَاتٍ",
    turkish: "Kul, Allah'ın rızasına uygun bir söz söyler de önemsemez, Allah onu derecelerle yükseltir.",
    source: "Buhârî",
    book: "Rikâk, 23"
  },
  {
    arabic: "وَإِنَّ الْعَبْدَ لَيَتَكَلَّمُ بِالْكَلِمَةِ مِنْ سَخَطِ اللَّهِ لاَ يُلْقِي لَهَا بَالاً يَهْوِي بِهَا فِي جَهَنَّمَ",
    turkish: "Kul, Allah'ın gazabını çekecek bir söz söyler de önemsemez, onunla cehenneme yuvarlanır.",
    source: "Buhârî",
    book: "Rikâk, 23"
  },
  {
    arabic: "مَنْ حَمَى لِسَانَهُ أَطَالَ اللَّهُ عُمُرَهُ",
    turkish: "Kim dilini korursa Allah ömrünü bereketlendirir.",
    source: "Buhârî",
    book: "Edeb"
  },
  {
    arabic: "مَنْ يَضْمَنْ لِي مَا بَيْنَ لَحْيَيْهِ وَمَا بَيْنَ رِجْلَيْهِ أَضْمَنْ لَهُ الْجَنَّةَ",
    turkish: "Kim bana iki çenesi arasındaki (dili) ve iki bacağı arasındakini garanti ederse, ben de ona cenneti garanti ederim.",
    source: "Buhârî",
    book: "Rikâk, 23"
  },
  {
    arabic: "لَيْسَ الْمُؤْمِنُ بِالطَّعَّانِ وَلاَ اللَّعَّانِ وَلاَ الْفَاحِشِ وَلاَ الْبَذِيءِ",
    turkish: "Mümin ne dil uzatandır ne lanet okuyan ne kötü söz söyleyen ne de hayasız konuşandır.",
    source: "Buhârî",
    book: "Edeb"
  },
  {
    arabic: "لاَ تَلاَعَنُوا بِلَعْنَةِ اللَّهِ وَلاَ بِغَضَبِهِ وَلاَ بِالنَّارِ",
    turkish: "Birbirinize Allah'ın laneti, gazabı ve cehennemle beddua etmeyin.",
    source: "Buhârî",
    book: "Edeb"
  },
  {
    arabic: "إِنَّ مِنْ أَحَبِّكُمْ إِلَيَّ وَأَقْرَبِكُمْ مِنِّي مَجْلِسًا يَوْمَ الْقِيَامَةِ أَحَاسِنَكُمْ أَخْلاَقًا",
    turkish: "Sizin bana en sevimli ve kıyamette en yakın olanınız ahlakı en güzel olanınızdır.",
    source: "Buhârî",
    book: "Edeb"
  },
  {
    arabic: "إِنَّ مِنْ أَبْغَضِكُمْ إِلَيَّ وَأَبْعَدِكُمْ مِنِّي مَجْلِسًا يَوْمَ الْقِيَامَةِ الثَّرْثَارُونَ وَالْمُتَشَدِّقُونَ",
    turkish: "Bana en sevimsiz ve kıyamette benden en uzak olanınız geveze, tumturaklı konuşan ve böbürlenenlerdir.",
    source: "Buhârî",
    book: "Edeb"
  },
  {
    arabic: "كَفَى بِالْمَرْءِ كَذِبًا أَنْ يُحَدِّثَ بِكُلِّ مَا سَمِعَ",
    turkish: "Kişiye yalan olarak her duyduğunu anlatması yeter.",
    source: "Müslim",
    book: "Mukaddime, 5"
  },
  // ===== 201-230: Cuma, Bayram ve Özel Günler =====
  {
    arabic: "خَيْرُ يَوْمٍ طَلَعَتْ عَلَيْهِ الشَّمْسُ يَوْمُ الْجُمُعَةِ",
    turkish: "Güneşin doğduğu en hayırlı gün Cuma günüdür.",
    source: "Müslim",
    book: "Cum'a, 18"
  },
  {
    arabic: "إِنَّ فِي الْجُمُعَةِ لَسَاعَةً لاَ يُوَافِقُهَا عَبْدٌ مُسْلِمٌ وَهُوَ يُصَلِّي يَسْأَلُ اللَّهَ شَيْئًا إِلاَّ أَعْطَاهُ إِيَّاهُ",
    turkish: "Cuma gününde bir saat vardır; Müslüman kul o saatte namaz kılarak Allah'tan ne isterse verilir.",
    source: "Buhârî",
    book: "Cum'a, 37"
  },
  {
    arabic: "مَنِ اغْتَسَلَ يَوْمَ الْجُمُعَةِ غُسْلَ الْجَنَابَةِ ثُمَّ رَاحَ فَكَأَنَّمَا قَرَّبَ بَدَنَةً",
    turkish: "Kim Cuma günü cenabet guslü gibi yıkanır ve erkenden giderse bir deve kurban etmiş gibi sevap kazanır.",
    source: "Buhârî",
    book: "Cum'a, 4"
  },
  {
    arabic: "مَنْ قَرَأَ سُورَةَ الْكَهْفِ فِي يَوْمِ الْجُمُعَةِ أَضَاءَ لَهُ مِنَ النُّورِ مَا بَيْنَ الْجُمُعَتَيْنِ",
    turkish: "Kim Cuma günü Kehf sûresini okursa iki Cuma arasında ona nur aydınlatır.",
    source: "Buhârî",
    book: "Fedâilü'l-Kur'ân"
  },
  {
    arabic: "إِذَا قُلْتَ لِصَاحِبِكَ يَوْمَ الْجُمُعَةِ أَنْصِتْ وَالإِمَامُ يَخْطُبُ فَقَدْ لَغَوْتَ",
    turkish: "Cuma günü imam hutbe okurken arkadaşına 'sus' dersen sen de boş iş yapmış olursun.",
    source: "Buhârî",
    book: "Cum'a, 36"
  },
  {
    arabic: "صَلاَةُ الْجَمَاعَةِ تَفْضُلُ صَلاَةَ الْفَذِّ بِسَبْعٍ وَعِشْرِينَ دَرَجَةً",
    turkish: "Cemaatle kılınan namaz, tek başına kılınan namazdan yirmi yedi derece daha faziletlidir.",
    source: "Buhârî",
    book: "Ezân, 30"
  },
  {
    arabic: "مَنْ غَدَا إِلَى الْمَسْجِدِ أَوْ رَاحَ أَعَدَّ اللَّهُ لَهُ نُزُلاً فِي الْجَنَّةِ كُلَّمَا غَدَا أَوْ رَاحَ",
    turkish: "Kim sabah akşam mescide giderse, Allah ona her gidiş gelişte cennette bir konak hazırlar.",
    source: "Buhârî",
    book: "Ezân, 37"
  },
  {
    arabic: "مَنْ صَلَّى الْعِشَاءَ فِي جَمَاعَةٍ فَكَأَنَّمَا قَامَ نِصْفَ اللَّيْلِ",
    turkish: "Kim yatsı namazını cemaatle kılarsa gece yarısına kadar namaz kılmış gibi olur.",
    source: "Müslim",
    book: "Mesâcid, 260"
  },
  {
    arabic: "بَيْنَ الرَّجُلِ وَبَيْنَ الشِّرْكِ وَالْكُفْرِ تَرْكُ الصَّلاَةِ",
    turkish: "Kişi ile şirk ve küfür arasındaki fark namazı terk etmesidir.",
    source: "Müslim",
    book: "Îmân, 134"
  },
  {
    arabic: "أَوَّلُ مَا يُحَاسَبُ بِهِ الْعَبْدُ يَوْمَ الْقِيَامَةِ الصَّلاَةُ",
    turkish: "Kıyamet günü kulun ilk hesaba çekileceği şey namazdır.",
    source: "Buhârî",
    book: "Salât"
  },
  // ===== 211-240: Sağlık, Yeme-İçme =====
  {
    arabic: "الْمَعِدَةُ بَيْتُ الدَّاءِ وَالْحِمْيَةُ رَأْسُ الدَّوَاءِ",
    turkish: "Mide hastalığın evidir, perhiz ilacın başıdır.",
    source: "Buhârî",
    book: "Tıbb"
  },
  {
    arabic: "مَا مَلَأَ آدَمِيٌّ وِعَاءً شَرًّا مِنْ بَطْنٍ بِحَسْبِ ابْنِ آدَمَ أَكَلاَتٌ يُقِمْنَ صُلْبَهُ",
    turkish: "Âdemoğlu midesinden daha kötü bir kap doldurmamıştır. Belini doğrultacak birkaç lokma yeterlidir.",
    source: "Buhârî",
    book: "Et'ime"
  },
  {
    arabic: "كُلُوا وَاشْرَبُوا وَتَصَدَّقُوا وَالْبَسُوا مَا لَمْ يُخَالِطْهُ إِسْرَافٌ أَوْ مَخِيلَةٌ",
    turkish: "Yiyin, için, sadaka verin ve giyin; ancak israf ve kibir karışmasın.",
    source: "Buhârî",
    book: "Libâs"
  },
  {
    arabic: "تَدَاوَوْا فَإِنَّ اللَّهَ لَمْ يَضَعْ دَاءً إِلاَّ وَضَعَ لَهُ دَوَاءً",
    turkish: "Tedavi olun. Çünkü Allah hiçbir hastalık yaratmamıştır ki onun şifasını da yaratmamış olsun.",
    source: "Buhârî",
    book: "Tıbb, 1"
  },
  {
    arabic: "نِعْمَتَانِ مَغْبُونٌ فِيهِمَا كَثِيرٌ مِنَ النَّاسِ الصِّحَّةُ وَالْفَرَاغُ",
    turkish: "İki nimet vardır ki insanların çoğu bunlarda aldanmıştır: Sağlık ve boş vakit.",
    source: "Buhârî",
    book: "Rikâk, 1"
  },
  {
    arabic: "سَمُّوا اللَّهَ وَكُلُوا بِيَمِينِكُمْ وَكُلُوا مِمَّا يَلِيكُمْ",
    turkish: "Allah'ın adını anın, sağ elinizle yiyin ve önünüzden yiyin.",
    source: "Buhârî",
    book: "Et'ime, 2"
  },
  {
    arabic: "إِذَا شَرِبَ أَحَدُكُمْ فَلاَ يَتَنَفَّسْ فِي الإِنَاءِ",
    turkish: "Biriniz su içerken kabın içine nefes vermesin.",
    source: "Buhârî",
    book: "Eşribe, 25"
  },
  {
    arabic: "مَا عَالَ مَنِ اقْتَصَدَ",
    turkish: "Tutumlu davranan fakir düşmez.",
    source: "Buhârî",
    book: "Rikâk"
  },
  {
    arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ وَالْعَجْزِ وَالْكَسَلِ",
    turkish: "Allah'ım! Tasadan, üzüntüden, acizlikten ve tembellikten sana sığınırım.",
    source: "Buhârî",
    book: "Da'avât, 39"
  },
  {
    arabic: "اللَّهُمَّ عَافِنِي فِي بَدَنِي اللَّهُمَّ عَافِنِي فِي سَمْعِي اللَّهُمَّ عَافِنِي فِي بَصَرِي",
    turkish: "Allah'ım! Bedenime afiyet ver, kulağıma afiyet ver, gözüme afiyet ver.",
    source: "Buhârî",
    book: "Da'avât"
  },
  // ===== 221-250: Cihad, Sabır ve Fedakârlık =====
  {
    arabic: "أَفْضَلُ الْجِهَادِ كَلِمَةُ عَدْلٍ عِنْدَ سُلْطَانٍ جَائِرٍ",
    turkish: "Cihadın en faziletlisi zalim hükümdarın karşısında hak sözü söylemektir.",
    source: "Buhârî",
    book: "Fiten"
  },
  {
    arabic: "الْمُجَاهِدُ مَنْ جَاهَدَ نَفْسَهُ",
    turkish: "Gerçek mücahit, nefsiyle cihad edendir.",
    source: "Buhârî",
    book: "Cihâd"
  },
  {
    arabic: "مَنْ مَاتَ وَلَمْ يَغْزُ وَلَمْ يُحَدِّثْ نَفْسَهُ بِالْغَزْوِ مَاتَ عَلَى شُعْبَةٍ مِنْ نِفَاقٍ",
    turkish: "Kim cihada çıkmadan ve içinden cihadı geçirmeden ölürse münafıklığın bir şubesi üzere ölmüştür.",
    source: "Müslim",
    book: "İmâre, 158"
  },
  {
    arabic: "رِبَاطُ يَوْمٍ فِي سَبِيلِ اللَّهِ خَيْرٌ مِنَ الدُّنْيَا وَمَا عَلَيْهَا",
    turkish: "Allah yolunda bir gün nöbet tutmak dünya ve dünya üzerindeki her şeyden daha hayırlıdır.",
    source: "Buhârî",
    book: "Cihâd, 73"
  },
  {
    arabic: "مَنْ جَهَّزَ غَازِيًا فِي سَبِيلِ اللَّهِ فَقَدْ غَزَا",
    turkish: "Kim Allah yolunda savaşana yardım ederse o da savaşmış gibidir.",
    source: "Buhârî",
    book: "Cihâd, 38"
  },
  {
    arabic: "الصَّبْرُ عِنْدَ الصَّدْمَةِ الأُولَى",
    turkish: "Sabır, ilk darbe anındadır.",
    source: "Buhârî",
    book: "Cenâiz, 32"
  },
  {
    arabic: "مَنْ يَصْبِرْ يُصَبِّرْهُ اللَّهُ",
    turkish: "Kim sabretmeye çalışırsa Allah onu sabırlı kılar.",
    source: "Buhârî",
    book: "Zekât, 50"
  },
  {
    arabic: "وَمَا أُعْطِيَ أَحَدٌ عَطَاءً خَيْرًا وَأَوْسَعَ مِنَ الصَّبْرِ",
    turkish: "Hiçbir kimseye sabırdan daha hayırlı ve geniş bir bağış verilmemiştir.",
    source: "Buhârî",
    book: "Zekât, 50"
  },
  {
    arabic: "إِنَّ النَّصْرَ مَعَ الصَّبْرِ وَإِنَّ الْفَرَجَ مَعَ الْكَرْبِ وَإِنَّ مَعَ الْعُسْرِ يُسْرًا",
    turkish: "Zafer sabırla, kurtuluş sıkıntıyla ve kolaylık zorlukla birliktedir.",
    source: "Müslim",
    book: "Kader"
  },
  {
    arabic: "يَا غُلاَمُ إِنِّي أُعَلِّمُكَ كَلِمَاتٍ احْفَظِ اللَّهَ يَحْفَظْكَ",
    turkish: "Ey genç! Sana bazı sözler öğreteyim: Allah'ı koru ki Allah seni korusun.",
    source: "Buhârî",
    book: "Rikâk"
  },
  // ===== 231-260: Gıybet, Yalan ve Haramlar =====
  {
    arabic: "أَتَدْرُونَ مَا الْغِيبَةُ قَالُوا اللَّهُ وَرَسُولُهُ أَعْلَمُ قَالَ ذِكْرُكَ أَخَاكَ بِمَا يَكْرَهُ",
    turkish: "Gıybetin ne olduğunu biliyor musunuz? Kardeşini hoşlanmadığı şeyle anmandır.",
    source: "Müslim",
    book: "Birr, 70"
  },
  {
    arabic: "إِيَّاكُمْ وَالْغِيبَةَ فَإِنَّ الْغِيبَةَ أَشَدُّ مِنَ الزِّنَا",
    turkish: "Gıybetten sakının! Gıybet zinadan daha ağırdır.",
    source: "Buhârî",
    book: "Edeb"
  },
  {
    arabic: "كَبُرَتْ خِيَانَةً أَنْ تُحَدِّثَ أَخَاكَ حَدِيثًا هُوَ لَكَ بِهِ مُصَدِّقٌ وَأَنْتَ لَهُ بِهِ كَاذِبٌ",
    turkish: "Kardeşinin seni doğruladığı bir konuda ona yalan söylemen ne büyük bir ihanettir.",
    source: "Buhârî",
    book: "Edeb"
  },
  {
    arabic: "إِنَّ الصِّدْقَ يَهْدِي إِلَى الْبِرِّ وَإِنَّ الْبِرَّ يَهْدِي إِلَى الْجَنَّةِ",
    turkish: "Doğruluk iyiliğe götürür, iyilik de cennete götürür.",
    source: "Buhârî",
    book: "Edeb, 69"
  },
  {
    arabic: "وَإِنَّ الْكَذِبَ يَهْدِي إِلَى الْفُجُورِ وَإِنَّ الْفُجُورَ يَهْدِي إِلَى النَّارِ",
    turkish: "Yalan kötülüğe götürür, kötülük de cehenneme götürür.",
    source: "Buhârî",
    book: "Edeb, 69"
  },
  {
    arabic: "إِنَّ اللَّهَ حَرَّمَ عَلَيْكُمْ عُقُوقَ الأُمَّهَاتِ وَمَنْعًا وَهَاتِ وَوَأْدَ الْبَنَاتِ",
    turkish: "Allah size annelere isyanı, hakları engellemeyi ve kız çocuklarını diri diri gömmeyi haram kılmıştır.",
    source: "Buhârî",
    book: "Edeb, 6"
  },
  {
    arabic: "اجْتَنِبُوا السَّبْعَ الْمُوبِقَاتِ",
    turkish: "Helak edici yedi şeyden kaçının: Allah'a şirk koşmak, sihir yapmak, haksız yere cana kıymak...",
    source: "Buhârî",
    book: "Vasâyâ, 23"
  },
  {
    arabic: "لَعَنَ اللَّهُ الرَّاشِيَ وَالْمُرْتَشِيَ",
    turkish: "Allah rüşvet verene de alana da lanet etmiştir.",
    source: "Buhârî",
    book: "Ahkâm"
  },
  {
    arabic: "لَعَنَ اللَّهُ الْخَمْرَ وَشَارِبَهَا وَسَاقِيَهَا وَبَائِعَهَا",
    turkish: "Allah içkiyi, içeni, suneni, satanı lanetlemiştir.",
    source: "Buhârî",
    book: "Eşribe"
  },
  {
    arabic: "كُلُّ مُسْكِرٍ حَرَامٌ",
    turkish: "Sarhoşluk veren her şey haramdır.",
    source: "Buhârî",
    book: "Eşribe, 4"
  },
  // ===== 241-270: Doğa, Hayvan ve Çevre =====
  {
    arabic: "بَيْنَمَا رَجُلٌ يَمْشِي بِطَرِيقٍ اشْتَدَّ عَلَيْهِ الْعَطَشُ فَوَجَدَ بِئْرًا فَنَزَلَ فِيهَا فَشَرِبَ",
    turkish: "Bir adam yolda giderken susadı, bir kuyuya inip su içti. Çıkınca susuzluktan dilini çıkarıp yalayan bir köpek gördü, ayakkabısıyla su verdi. Allah onu bağışladı.",
    source: "Buhârî",
    book: "Şirb, 9"
  },
  {
    arabic: "دَخَلَتِ امْرَأَةٌ النَّارَ فِي هِرَّةٍ رَبَطَتْهَا فَلَمْ تُطْعِمْهَا",
    turkish: "Bir kadın bir kediyi bağladığı için cehenneme girdi. Onu ne yedirdi ne de serbest bıraktı.",
    source: "Buhârî",
    book: "Enbiyâ, 54"
  },
  {
    arabic: "فِي كُلِّ كَبِدٍ رَطْبَةٍ أَجْرٌ",
    turkish: "Her canlıya yapılan iyilikte sevap vardır.",
    source: "Buhârî",
    book: "Şirb, 9"
  },
  {
    arabic: "إِذَا قَامَتِ السَّاعَةُ وَفِي يَدِ أَحَدِكُمْ فَسِيلَةٌ فَإِنِ اسْتَطَاعَ أَنْ لاَ تَقُومَ حَتَّى يَغْرِسَهَا فَلْيَغْرِسْهَا",
    turkish: "Kıyamet koparken elinizde bir fidan varsa dikebiliyorsanız dikin.",
    source: "Buhârî",
    book: "Edeb"
  },
  {
    arabic: "لاَ تَقْطَعُوا شَجَرَةً مُثْمِرَةً",
    turkish: "Meyve veren ağacı kesmeyin.",
    source: "Buhârî",
    book: "Cihâd"
  },
  {
    arabic: "اللَّهُمَّ بَارِكْ لَنَا فِي ثَمَرِنَا وَبَارِكْ لَنَا فِي مَدِينَتِنَا",
    turkish: "Allah'ım! Meyvelerimizi ve şehrimizi mübarek kıl.",
    source: "Müslim",
    book: "Hac, 473"
  },
  {
    arabic: "إِنَّ لِنَفْسِكَ عَلَيْكَ حَقًّا وَلِرَبِّكَ عَلَيْكَ حَقًّا وَلِضَيْفِكَ عَلَيْكَ حَقًّا وَلأَهْلِكَ عَلَيْكَ حَقًّا",
    turkish: "Nefsinin senin üzerinde hakkı var, Rabbinin hakkı var, misafirinin hakkı var, ailinin hakkı var.",
    source: "Buhârî",
    book: "Savm, 55"
  },
  {
    arabic: "إِنَّ اللَّهَ كَتَبَ الإِحْسَانَ عَلَى كُلِّ شَيْءٍ",
    turkish: "Allah her şeye ihsanı (güzelliği) yazmıştır.",
    source: "Müslim",
    book: "Sayd, 57"
  },
  {
    arabic: "اتَّقُوا اللَّهَ فِي هَذِهِ الْبَهَائِمِ الْمُعْجَمَةِ",
    turkish: "Konuşamayan bu hayvanlar hakkında Allah'tan korkun.",
    source: "Buhârî",
    book: "Şirb"
  },
  {
    arabic: "عُذِّبَتِ امْرَأَةٌ فِي هِرَّةٍ سَجَنَتْهَا",
    turkish: "Bir kadın hapsettiği bir kedi yüzünden azap gördü.",
    source: "Müslim",
    book: "Birr, 133"
  },
  // ===== 251-280: Selam, Barış ve İnsan İlişkileri =====
  {
    arabic: "أَفْشُوا السَّلاَمَ بَيْنَكُمْ",
    turkish: "Aranızda selamı yayın.",
    source: "Müslim",
    book: "Îmân, 93"
  },
  {
    arabic: "لاَ تَدْخُلُونَ الْجَنَّةَ حَتَّى تُؤْمِنُوا وَلاَ تُؤْمِنُوا حَتَّى تَحَابُّوا أَوَلاَ أَدُلُّكُمْ عَلَى شَيْءٍ إِذَا فَعَلْتُمُوهُ تَحَابَبْتُمْ أَفْشُوا السَّلاَمَ بَيْنَكُمْ",
    turkish: "İman etmedikçe cennete giremezsiniz, birbirinizi sevmedikçe de iman etmiş olmazsınız. Selamı aranızda yayın.",
    source: "Müslim",
    book: "Îmân, 93"
  },
  {
    arabic: "الْمُسْلِمُ مَنْ سَلِمَ النَّاسُ مِنْ لِسَانِهِ وَيَدِهِ وَالْمُهَاجِرُ مَنْ هَجَرَ مَا نَهَى اللَّهُ عَنْهُ",
    turkish: "Müslüman dilinden ve elinden insanların güvende olduğu kimsedir. Muhacir de Allah'ın yasaklarını terk edendir.",
    source: "Buhârî",
    book: "Îmân, 4"
  },
  {
    arabic: "خَيْرُهُمَا الَّذِي يَبْدَأُ بِالسَّلاَمِ",
    turkish: "İki küs kişinin hayırlısı selamı ilk verendir.",
    source: "Buhârî",
    book: "Edeb, 62"
  },
  {
    arabic: "أَوْلَى النَّاسِ بِاللَّهِ مَنْ بَدَأَهُمْ بِالسَّلاَمِ",
    turkish: "İnsanların Allah'a en yakın olanı ilk selam verendir.",
    source: "Buhârî",
    book: "İsti'zân"
  },
  {
    arabic: "حَقُّ الْمُسْلِمِ عَلَى الْمُسْلِمِ خَمْسٌ رَدُّ السَّلاَمِ وَعِيَادَةُ الْمَرِيضِ وَاتِّبَاعُ الْجَنَائِزِ وَإِجَابَةُ الدَّعْوَةِ وَتَشْمِيتُ الْعَاطِسِ",
    turkish: "Müslümanın Müslüman üzerindeki hakkı beştir: Selamını almak, hastasını ziyaret etmek, cenazesine katılmak, davetine icabet etmek, hapşırana dua etmek.",
    source: "Buhârî",
    book: "Cenâiz, 2"
  },
  {
    arabic: "أَلاَ أُنَبِّئُكُمْ بِخَيْرِ أَعْمَالِكُمْ وَأَزْكَاهَا عِنْدَ مَلِيكِكُمْ وَأَرْفَعِهَا فِي دَرَجَاتِكُمْ",
    turkish: "Amellerinizin en hayırlısını, en temizini ve en yüksek derecelerinizi haber vereyim mi? Allah'ı zikretmek.",
    source: "Buhârî",
    book: "Da'avât"
  },
  {
    arabic: "ذَهَبَ أَهْلُ الدُّثُورِ بِالأُجُورِ",
    turkish: "Zenginler sevapları alıp götürdüler! Dediler. Buyurdu ki: Her tesbih sadaka, her tekbir sadaka...",
    source: "Müslim",
    book: "Zekât, 53"
  },
  {
    arabic: "إِنَّكَ لَنْ تُنْفِقَ نَفَقَةً تَبْتَغِي بِهَا وَجْهَ اللَّهِ إِلاَّ أُجِرْتَ عَلَيْهَا",
    turkish: "Allah rızasını gözeterek yaptığın her harcamada sevap kazanırsın; hatta eşinin ağzına koyduğun lokmada bile.",
    source: "Buhârî",
    book: "Cenâiz, 37"
  },
  {
    arabic: "إِنَّ الصَّدَقَةَ لَتُطْفِئُ غَضَبَ الرَّبِّ وَتَدْفَعُ مِيتَةَ السُّوءِ",
    turkish: "Sadaka Rabbin gazabını söndürür ve kötü ölümü uzaklaştırır.",
    source: "Buhârî",
    book: "Zekât"
  },
  // ===== 261-290: Güven, Emanet ve Söz =====
  {
    arabic: "أَدِّ الأَمَانَةَ إِلَى مَنِ ائْتَمَنَكَ وَلاَ تَخُنْ مَنْ خَانَكَ",
    turkish: "Emaneti sana verene teslim et, sana ihanet edene sen ihanet etme.",
    source: "Buhârî",
    book: "Büyû', 10"
  },
  {
    arabic: "الْمُتَبَايِعَانِ بِالْخِيَارِ مَا لَمْ يَتَفَرَّقَا فَإِنْ صَدَقَا وَبَيَّنَا بُورِكَ لَهُمَا فِي بَيْعِهِمَا",
    turkish: "Alıcı ve satıcı ayrılmadıkça muhayyerdirler. Doğru söyler ve açıklarlarsa alışverişleri bereketlenir.",
    source: "Buhârî",
    book: "Büyû', 22"
  },
  {
    arabic: "مَنْ أَشَارَ إِلَى أَخِيهِ بِحَدِيدَةٍ فَإِنَّ الْمَلاَئِكَةَ تَلْعَنُهُ",
    turkish: "Kim kardeşine kesici bir aletle işaret ederse melekler ona lanet eder.",
    source: "Müslim",
    book: "Birr, 125"
  },
  {
    arabic: "لاَ يُشِيرُ أَحَدُكُمْ إِلَى أَخِيهِ بِالسِّلاَحِ",
    turkish: "Hiçbiriniz kardeşine silah doğrultmasın.",
    source: "Buhârî",
    book: "Fiten, 7"
  },
  {
    arabic: "مَنْ حَمَلَ عَلَيْنَا السِّلاَحَ فَلَيْسَ مِنَّا",
    turkish: "Bize silah çeken bizden değildir.",
    source: "Buhârî",
    book: "Fiten, 7"
  },
  {
    arabic: "سِبَابُ الْمُسْلِمِ فُسُوقٌ وَقِتَالُهُ كُفْرٌ",
    turkish: "Müslümana sövmek fısktır, onu öldürmek küfürdür.",
    source: "Buhârî",
    book: "Îmân, 36"
  },
  {
    arabic: "لاَ يَزْنِي الزَّانِي حِينَ يَزْنِي وَهُوَ مُؤْمِنٌ",
    turkish: "Zina eden zina ederken mümin olarak yapmaz.",
    source: "Buhârî",
    book: "Mezâlim, 30"
  },
  {
    arabic: "مَنِ اسْتَعْمَلْنَاهُ عَلَى عَمَلٍ فَرَزَقْنَاهُ رِزْقًا فَمَا أَخَذَ بَعْدَ ذَلِكَ فَهُوَ غُلُولٌ",
    turkish: "Kimi bir işe tayin edip maaşını verirsek, onun üstünde aldığı zimmet hırsızlığıdır.",
    source: "Buhârî",
    book: "Ahkâm"
  },
  {
    arabic: "مَنْ ظَلَمَ قِيدَ شِبْرٍ مِنَ الأَرْضِ طُوِّقَهُ مِنْ سَبْعِ أَرَضِينَ",
    turkish: "Kim bir karış yer haksızlık ederse yedi kat yerin tamamı boynuna dolanır.",
    source: "Buhârî",
    book: "Mezâlim, 13"
  },
  {
    arabic: "مَنِ اقْتَطَعَ شِبْرًا مِنَ الأَرْضِ ظُلْمًا طَوَّقَهُ اللَّهُ إِيَّاهُ يَوْمَ الْقِيَامَةِ مِنْ سَبْعِ أَرَضِينَ",
    turkish: "Kim haksız yere bir karış toprak koparırsa kıyamette yedi kat yer boynuna sarılır.",
    source: "Müslim",
    book: "Müsâkât, 139"
  },
  // ===== 271-300: Çeşitli Hikmetler =====
  {
    arabic: "الدُّنْيَا مَلْعُونَةٌ مَلْعُونٌ مَا فِيهَا إِلاَّ ذِكْرَ اللَّهِ وَمَا وَالاَهُ وَعَالِمًا أَوْ مُتَعَلِّمًا",
    turkish: "Dünya lanetlenmiştir, içindekiler de. Ancak Allah'ın zikri, ona bağlı olanlar, âlim ve talebe bundan müstesnadır.",
    source: "Buhârî",
    book: "Zühd"
  },
  {
    arabic: "لَوْ كَانَتِ الدُّنْيَا تَعْدِلُ عِنْدَ اللَّهِ جَنَاحَ بَعُوضَةٍ مَا سَقَى كَافِرًا مِنْهَا شَرْبَةَ مَاءٍ",
    turkish: "Dünya Allah katında sivrisineğin kanadı kadar değerli olsaydı, kâfire bir yudum su bile içirmezdi.",
    source: "Buhârî",
    book: "Rikâk"
  },
  {
    arabic: "لاَ عَدْوَى وَلاَ طِيَرَةَ وَلاَ هَامَةَ وَلاَ صَفَرَ",
    turkish: "Hastalığın kendi kendine bulaşması, uğursuzluk ve kötüye yorma yoktur.",
    source: "Buhârî",
    book: "Tıbb, 19"
  },
  {
    arabic: "لاَ تَسُبُّوا الدَّهْرَ فَإِنَّ اللَّهَ هُوَ الدَّهْرُ",
    turkish: "Zamana sövmeyin; zamanı çeviren Allah'tır.",
    source: "Müslim",
    book: "Elfâz, 1"
  },
  {
    arabic: "لاَ تَسُبُّوا الرِّيحَ فَإِنَّهَا مِنْ رَوْحِ اللَّهِ",
    turkish: "Rüzgâra sövmeyin; çünkü o Allah'ın rahmetindendir.",
    source: "Buhârî",
    book: "Edeb"
  },
  {
    arabic: "إِذَا سَمِعْتُمُ الْمُؤَذِّنَ فَقُولُوا مِثْلَ مَا يَقُولُ",
    turkish: "Müezzini duyduğunuzda onun söylediklerini siz de söyleyin.",
    source: "Buhârî",
    book: "Ezân, 7"
  },
  {
    arabic: "مَنْ قَالَ حِينَ يَسْمَعُ النِّدَاءَ اللَّهُمَّ رَبَّ هَذِهِ الدَّعْوَةِ التَّامَّةِ",
    turkish: "Kim ezandan sonra 'Allahümme Rabbe hâzihi'd-da'veti't-tâmme...' duasını okursa kıyamette şefaatime hak kazanır.",
    source: "Buhârî",
    book: "Ezân, 8"
  },
  {
    arabic: "إِذَا نَعَسَ أَحَدُكُمْ وَهُوَ يُصَلِّي فَلْيَرْقُدْ حَتَّى يَذْهَبَ عَنْهُ النَّوْمُ",
    turkish: "Namazda uyuklarsanız uykusu geçinceye kadar uyusun.",
    source: "Buhârî",
    book: "Vudû', 53"
  },
  {
    arabic: "إِذَا تَثَاءَبَ أَحَدُكُمْ فَلْيَكْظِمْ مَا اسْتَطَاعَ",
    turkish: "Biriniz esneyince gücü yettiğince ağzını kapatsın.",
    source: "Müslim",
    book: "Zühd, 56"
  },
  {
    arabic: "الْعُطَاسُ مِنَ اللَّهِ وَالتَّثَاؤُبُ مِنَ الشَّيْطَانِ",
    turkish: "Hapşırık Allah'tandır, esneme şeytandandır.",
    source: "Buhârî",
    book: "Edeb, 128"
  },
  // ===== 281-310: Kader, İlahi İrade =====
  {
    arabic: "قَدَّرَ اللَّهُ الْمَقَادِيرَ قَبْلَ أَنْ يَخْلُقَ السَّمَاوَاتِ وَالأَرْضَ بِخَمْسِينَ أَلْفَ سَنَةٍ",
    turkish: "Allah gökleri ve yeri yaratmadan elli bin yıl önce takdirleri yazmıştır.",
    source: "Müslim",
    book: "Kader, 16"
  },
  {
    arabic: "لاَ يَرُدُّ الْقَدَرَ إِلاَّ الدُّعَاءُ وَلاَ يَزِيدُ فِي الْعُمُرِ إِلاَّ الْبِرُّ",
    turkish: "Kaderi ancak dua değiştirir, ömrü ancak iyilik artırır.",
    source: "Buhârî",
    book: "Rikâk"
  },
  {
    arabic: "اعْمَلُوا فَكُلٌّ مُيَسَّرٌ لِمَا خُلِقَ لَهُ",
    turkish: "Amel edin! Herkes ne için yaratılmışsa ona kolaylaştırılır.",
    source: "Buhârî",
    book: "Kader, 4"
  },
  {
    arabic: "لاَ تَقُلْ لَوْ أَنِّي فَعَلْتُ كَذَا وَكَذَا وَلَكِنْ قُلْ قَدَّرَ اللَّهُ وَمَا شَاءَ فَعَلَ",
    turkish: "'Keşke şöyle yapsaydım' deme. 'Allah takdir etti, dilediğini yaptı' de. Çünkü 'keşke' şeytanın kapısını açar.",
    source: "Müslim",
    book: "Kader, 34"
  },
  {
    arabic: "اسْتَعِنْ بِاللَّهِ وَلاَ تَعْجَزْ",
    turkish: "Allah'tan yardım iste ve aciz kalma.",
    source: "Müslim",
    book: "Kader, 34"
  },
  {
    arabic: "احْرِصْ عَلَى مَا يَنْفَعُكَ",
    turkish: "Sana fayda verecek şeylere önem ver.",
    source: "Müslim",
    book: "Kader, 34"
  },
  {
    arabic: "إِنَّ أَحَدَكُمْ يُجْمَعُ خَلْقُهُ فِي بَطْنِ أُمِّهِ أَرْبَعِينَ يَوْمًا",
    turkish: "Sizden birinin yaratılışı annesinin karnında kırk gün olarak toplanır.",
    source: "Buhârî",
    book: "Kader, 1"
  },
  {
    arabic: "لَنْ يُصِيبَنَا إِلاَّ مَا كَتَبَ اللَّهُ لَنَا",
    turkish: "Bize ancak Allah'ın yazdığı isabet eder.",
    source: "Buhârî",
    book: "Tevhîd"
  },
  {
    arabic: "مَنْ يُرِدِ اللَّهُ بِهِ خَيْرًا يُصِبْ مِنْهُ",
    turkish: "Allah kimin hayrını dilerse onu musibete uğratır.",
    source: "Buhârî",
    book: "Merdâ, 1"
  },
  {
    arabic: "إِنَّ اللَّهَ لَيَبْتَلِي عَبْدَهُ بِالسَّقَمِ حَتَّى يُكَفِّرَ عَنْهُ كُلَّ ذَنْبٍ",
    turkish: "Allah kulunu hastalıkla imtihan eder ve böylece her günahını siler.",
    source: "Buhârî",
    book: "Merdâ"
  },
  // ===== 291-320: Namaz ve İbadet Detayları =====
  {
    arabic: "مِفْتَاحُ الصَّلاَةِ الطُّهُورُ وَتَحْرِيمُهَا التَّكْبِيرُ وَتَحْلِيلُهَا التَّسْلِيمُ",
    turkish: "Namazın anahtarı abdest, başlangıcı tekbir, sonu da selamdır.",
    source: "Buhârî",
    book: "Tahâret"
  },
  {
    arabic: "صَلُّوا كَمَا رَأَيْتُمُونِي أُصَلِّي",
    turkish: "Beni nasıl namaz kılarken gördüyseniz öyle kılın.",
    source: "Buhârî",
    book: "Ezân, 18"
  },
  {
    arabic: "مَنْ حَافَظَ عَلَى أَرْبَعِ رَكَعَاتٍ قَبْلَ الظُّهْرِ وَأَرْبَعٍ بَعْدَهَا حُرِّمَ عَلَى النَّارِ",
    turkish: "Kim öğleden önce dört, sonra dört rekât namaz kılmaya devam ederse ateşe haram kılınır.",
    source: "Buhârî",
    book: "Salât"
  },
  {
    arabic: "رَكْعَتَا الْفَجْرِ خَيْرٌ مِنَ الدُّنْيَا وَمَا فِيهَا",
    turkish: "Sabah namazının iki rekât sünneti dünyadan ve içindeki her şeyden daha hayırlıdır.",
    source: "Müslim",
    book: "Müsâfirîn, 96"
  },
  {
    arabic: "أَفْضَلُ الصَّلاَةِ بَعْدَ الْمَفْرُوضَةِ صَلاَةُ اللَّيْلِ",
    turkish: "Farz namazlardan sonra en faziletli namaz gece namazıdır.",
    source: "Müslim",
    book: "Sıyâm, 202"
  },
  {
    arabic: "عَلَيْكُمْ بِقِيَامِ اللَّيْلِ فَإِنَّهُ دَأْبُ الصَّالِحِينَ قَبْلَكُمْ",
    turkish: "Gece namazına devam edin. Çünkü gece namazı sizden önceki salihlerin âdetidir.",
    source: "Buhârî",
    book: "Teheccüd"
  },
  {
    arabic: "إِذَا دَخَلَ أَحَدُكُمُ الْمَسْجِدَ فَلاَ يَجْلِسْ حَتَّى يُصَلِّيَ رَكْعَتَيْنِ",
    turkish: "Biriniz mescide girdiğinde iki rekât namaz kılmadan oturmasın.",
    source: "Buhârî",
    book: "Salât, 60"
  },
  {
    arabic: "إِذَا أُقِيمَتِ الصَّلاَةُ فَلاَ صَلاَةَ إِلاَّ الْمَكْتُوبَةُ",
    turkish: "Kamet getirildiğinde farzdan başka namaz kılınmaz.",
    source: "Müslim",
    book: "Müsâfirîn, 63"
  },
  {
    arabic: "مَنْ تَرَكَ صَلاَةَ الْعَصْرِ فَقَدْ حَبِطَ عَمَلُهُ",
    turkish: "Kim ikindi namazını terk ederse ameli boşa gider.",
    source: "Buhârî",
    book: "Mevâkît, 15"
  },
  {
    arabic: "أَثْقَلُ الصَّلاَةِ عَلَى الْمُنَافِقِينَ صَلاَةُ الْعِشَاءِ وَصَلاَةُ الْفَجْرِ",
    turkish: "Münafıklara en ağır gelen namaz yatsı ve sabah namazıdır.",
    source: "Buhârî",
    book: "Ezân, 34"
  },
  // ===== 301-330: Hac ve Umre =====
  {
    arabic: "الْحَجُّ الْمَبْرُورُ لَيْسَ لَهُ جَزَاءٌ إِلاَّ الْجَنَّةُ",
    turkish: "Makbul haccın karşılığı ancak cennettir.",
    source: "Buhârî",
    book: "Hac, 4"
  },
  {
    arabic: "مَنْ حَجَّ فَلَمْ يَرْفُثْ وَلَمْ يَفْسُقْ رَجَعَ كَيَوْمِ وَلَدَتْهُ أُمُّهُ",
    turkish: "Kim hac yapıp kötü söz ve davranıştan sakınırsa, anasından doğduğu günkü gibi günahsız döner.",
    source: "Buhârî",
    book: "Hac, 4"
  },
  {
    arabic: "الْعُمْرَةُ إِلَى الْعُمْرَةِ كَفَّارَةٌ لِمَا بَيْنَهُمَا",
    turkish: "Bir umre diğer umreye kadar aradaki günahlara kefarettir.",
    source: "Buhârî",
    book: "Umre, 1"
  },
  {
    arabic: "تَابِعُوا بَيْنَ الْحَجِّ وَالْعُمْرَةِ فَإِنَّهُمَا يَنْفِيَانِ الْفَقْرَ وَالذُّنُوبَ",
    turkish: "Hac ile umreyi peş peşe yapın. Çünkü bunlar fakirliği ve günahları giderirler.",
    source: "Buhârî",
    book: "Hac"
  },
  {
    arabic: "خُذُوا عَنِّي مَنَاسِكَكُمْ",
    turkish: "Hac ibadetinizi benden öğrenin.",
    source: "Müslim",
    book: "Hac, 310"
  },
  {
    arabic: "الطَّوَافُ بِالْبَيْتِ صَلاَةٌ",
    turkish: "Kâbe'yi tavaf etmek namaz gibidir.",
    source: "Buhârî",
    book: "Hac"
  },
  {
    arabic: "اسْتَمْتِعُوا مِنْ هَذَا الْبَيْتِ فَإِنَّهُ قَدْ هُدِمَ مَرَّتَيْنِ وَيُرْفَعُ فِي الثَّالِثَةِ",
    turkish: "Bu Beyt'ten (Kâbe) istifade edin; çünkü iki kez yıkıldı, üçüncüde kaldırılacaktır.",
    source: "Buhârî",
    book: "Hac"
  },
  {
    arabic: "الْحَجَرُ الأَسْوَدُ مِنَ الْجَنَّةِ",
    turkish: "Hacer-i Esved cennetten inmiştir.",
    source: "Buhârî",
    book: "Hac"
  },
  {
    arabic: "إِنَّ أَعْظَمَ الأَيَّامِ عِنْدَ اللَّهِ يَوْمُ النَّحْرِ",
    turkish: "Allah katında günlerin en büyüğü kurban bayramı günüdür.",
    source: "Buhârî",
    book: "Hac"
  },
  {
    arabic: "مَا عَمِلَ آدَمِيٌّ مِنْ عَمَلٍ يَوْمَ النَّحْرِ أَحَبَّ إِلَى اللَّهِ مِنْ إِهْرَاقِ الدَّمِ",
    turkish: "Kurban bayramı günü Allah'a kan akıtmaktan (kurban kesmekten) daha sevimli bir amel yoktur.",
    source: "Buhârî",
    book: "Edâhî"
  },
  // ===== 311-340: Fitne, Son Zamanlar =====
  {
    arabic: "بَادِرُوا بِالأَعْمَالِ فِتَنًا كَقِطَعِ اللَّيْلِ الْمُظْلِمِ",
    turkish: "Karanlık gece parçaları gibi fitneler gelmeden önce amellere koşun.",
    source: "Müslim",
    book: "Îmân, 186"
  },
  {
    arabic: "يَأْتِي عَلَى النَّاسِ زَمَانٌ الصَّابِرُ فِيهِمْ عَلَى دِينِهِ كَالْقَابِضِ عَلَى الْجَمْرِ",
    turkish: "İnsanlara öyle bir zaman gelecek ki dinine sarılan kor ateşi avucunda tutan gibi olacak.",
    source: "Buhârî",
    book: "Rikâk"
  },
  {
    arabic: "لاَ تَقُومُ السَّاعَةُ حَتَّى يُقْبَضَ الْعِلْمُ وَتَكْثُرَ الزَّلاَزِلُ",
    turkish: "İlim kaldırılmadıkça, depremler çoğalmadıkça, fitneler belirmedikçe kıyamet kopmaz.",
    source: "Buhârî",
    book: "İstiskâ, 27"
  },
  {
    arabic: "إِنَّ بَيْنَ يَدَيِ السَّاعَةِ فِتَنًا كَقِطَعِ اللَّيْلِ الْمُظْلِمِ",
    turkish: "Kıyamet öncesinde karanlık gece parçaları gibi fitneler olacak.",
    source: "Buhârî",
    book: "Fiten"
  },
  {
    arabic: "الْمُتَمَسِّكُ بِسُنَّتِي عِنْدَ فَسَادِ أُمَّتِي لَهُ أَجْرُ شَهِيدٍ",
    turkish: "Ümmetim bozulduğunda sünnetime sarılanın ecri şehit ecri gibidir.",
    source: "Buhârî",
    book: "İ'tisâm"
  },
  {
    arabic: "يُوشِكُ أَنْ يَأْتِيَ عَلَى النَّاسِ زَمَانٌ لاَ يُبَالِي الْمَرْءُ بِمَا أَخَذَ الْمَالَ أَمِنْ حَلاَلٍ أَمْ مِنْ حَرَامٍ",
    turkish: "İnsanlara öyle bir zaman gelecek ki kişi malı helalden mi haramdan mı aldığına aldırmayacak.",
    source: "Buhârî",
    book: "Büyû', 7"
  },
  {
    arabic: "لاَ تَزَالُ طَائِفَةٌ مِنْ أُمَّتِي عَلَى الْحَقِّ ظَاهِرِينَ",
    turkish: "Ümmetimden bir grup kıyamete kadar hak üzere galip olmaya devam edecektir.",
    source: "Müslim",
    book: "İmâre, 170"
  },
  {
    arabic: "إِذَا وُسِّدَ الأَمْرُ إِلَى غَيْرِ أَهْلِهِ فَانْتَظِرِ السَّاعَةَ",
    turkish: "İşler ehli olmayanlara verildiğinde kıyameti bekle.",
    source: "Buhârî",
    book: "İlim, 2"
  },
  {
    arabic: "لَنْ يُفْلِحَ قَوْمٌ وَلَّوْا أَمْرَهُمُ امْرَأَةً",
    turkish: "İşlerini bir kadına teslim eden kavim felah bulmaz.",
    source: "Buhârî",
    book: "Megâzî, 82"
  },
  {
    arabic: "الْخِلاَفَةُ بَعْدِي ثَلاَثُونَ سَنَةً ثُمَّ يَكُونُ مُلْكًا",
    turkish: "Benden sonra hilafet otuz yıl sürecek, sonra saltanat olacaktır.",
    source: "Buhârî",
    book: "Fezâil"
  },
  // ===== 321-360: Ek Hadisler =====
  {
    arabic: "خَيْرُ الصَّدَقَةِ مَا كَانَ عَنْ ظَهْرِ غِنًى",
    turkish: "Sadakanın en hayırlısı ihtiyaç fazlasından olanıdır.",
    source: "Buhârî",
    book: "Zekât, 18"
  },
  {
    arabic: "اللَّهُمَّ اجْعَلْنِي مِنَ التَّوَّابِينَ وَاجْعَلْنِي مِنَ الْمُتَطَهِّرِينَ",
    turkish: "Allah'ım! Beni çokça tevbe edenlerden ve çokça temizlenenlerden kıl.",
    source: "Buhârî",
    book: "Da'avât"
  },
  {
    arabic: "الإِسْلاَمُ أَنْ تَشْهَدَ أَنْ لاَ إِلَهَ إِلاَّ اللَّهُ",
    turkish: "İslam, Allah'tan başka ilah olmadığına şehadet etmek, namaz kılmak, zekât vermek, Ramazan orucunu tutmak ve gücü yetene hacca gitmektir.",
    source: "Müslim",
    book: "Îmân, 1"
  },
  {
    arabic: "الإِحْسَانُ أَنْ تَعْبُدَ اللَّهَ كَأَنَّكَ تَرَاهُ فَإِنْ لَمْ تَكُنْ تَرَاهُ فَإِنَّهُ يَرَاكَ",
    turkish: "İhsan, Allah'a onu görüyormuşsun gibi ibadet etmendir. Sen onu görmesen de o seni görüyor.",
    source: "Müslim",
    book: "Îmân, 1"
  },
  {
    arabic: "لاَ يُؤْمِنُ أَحَدُكُمْ حَتَّى أَكُونَ أَحَبَّ إِلَيْهِ مِنْ وَالِدِهِ وَوَلَدِهِ وَالنَّاسِ أَجْمَعِينَ",
    turkish: "Hiçbiriniz beni anasından, babasından, çocuğundan ve bütün insanlardan daha çok sevmedikçe iman etmiş olmaz.",
    source: "Buhârî",
    book: "Îmân, 8"
  },
  {
    arabic: "ثَلاَثٌ مَنْ كُنَّ فِيهِ وَجَدَ حَلاَوَةَ الإِيمَانِ",
    turkish: "Üç şey kimde bulunursa imanın tadını alır: Allah ve Resulünü her şeyden çok sevmek...",
    source: "Buhârî",
    book: "Îmân, 9"
  },
  {
    arabic: "مَنْ أَصْبَحَ مِنْكُمْ آمِنًا فِي سِرْبِهِ مُعَافًى فِي جَسَدِهِ عِنْدَهُ قُوتُ يَوْمِهِ فَكَأَنَّمَا حِيزَتْ لَهُ الدُّنْيَا",
    turkish: "Canı güvende, bedeni sağlam ve günlük yiyeceği olan kişi sanki bütün dünya ona verilmiş gibidir.",
    source: "Buhârî",
    book: "Rikâk"
  },
  {
    arabic: "أَحَبُّ النَّاسِ إِلَى اللَّهِ أَنْفَعُهُمْ لِلنَّاسِ",
    turkish: "Allah'a en sevimli insanlar, insanlara en faydalı olanlardır.",
    source: "Buhârî",
    book: "Edeb"
  },
  {
    arabic: "مَنْ نَفَّسَ عَنْ مُسْلِمٍ كُرْبَةً نَفَّسَ اللَّهُ عَنْهُ كُرْبَةً مِنْ كُرَبِ يَوْمِ الْقِيَامَةِ",
    turkish: "Kim bir Müslümanın sıkıntısını giderirse Allah da onun kıyamet sıkıntılarından birini giderir.",
    source: "Buhârî",
    book: "Mezâlim"
  },
  {
    arabic: "مَنْ سَتَرَ عَوْرَةَ أَخِيهِ الْمُسْلِمِ سَتَرَ اللَّهُ عَوْرَتَهُ يَوْمَ الْقِيَامَةِ",
    turkish: "Kim Müslüman kardeşinin ayıbını örterse Allah da kıyamette onun ayıbını örter.",
    source: "Buhârî",
    book: "Mezâlim"
  },
  {
    arabic: "وَمَنْ يَسَّرَ عَلَى مُعْسِرٍ يَسَّرَ اللَّهُ عَلَيْهِ فِي الدُّنْيَا وَالآخِرَةِ",
    turkish: "Kim zor durumdaki birine kolaylık gösterirse Allah da ona dünyada ve ahirette kolaylık gösterir.",
    source: "Müslim",
    book: "Zikir, 38"
  },
  {
    arabic: "وَاللَّهُ فِي عَوْنِ الْعَبْدِ مَا كَانَ الْعَبْدُ فِي عَوْنِ أَخِيهِ",
    turkish: "Kul kardeşinin yardımında oldukça Allah da onun yardımındadır.",
    source: "Müslim",
    book: "Zikir, 38"
  },
  {
    arabic: "مَنْ يَسْتَغْنِ يُغْنِهِ اللَّهُ",
    turkish: "Kim tok gözlü olursa Allah onu zengin kılar.",
    source: "Buhârî",
    book: "Zekât, 50"
  },
  {
    arabic: "الْمُؤْمِنُ مِرْآةُ الْمُؤْمِنِ",
    turkish: "Mümin müminin aynasıdır.",
    source: "Buhârî",
    book: "Edeb"
  },
  {
    arabic: "خَيْرُ الأَصْحَابِ عِنْدَ اللَّهِ خَيْرُهُمْ لِصَاحِبِهِ",
    turkish: "Allah katında arkadaşların en hayırlısı arkadaşına en faydalı olanıdır.",
    source: "Buhârî",
    book: "Edeb"
  },
  {
    arabic: "خَيْرُ الْجِيرَانِ عِنْدَ اللَّهِ خَيْرُهُمْ لِجَارِهِ",
    turkish: "Allah katında komşuların en hayırlısı komşusuna en iyi davrananıdır.",
    source: "Buhârî",
    book: "Edeb"
  },
  {
    arabic: "الدَّالُّ عَلَى الْخَيْرِ كَفَاعِلِهِ",
    turkish: "Hayra vesile olan onu yapan gibidir.",
    source: "Müslim",
    book: "İmâre, 133"
  },
  {
    arabic: "أَحَبُّ الْكَلاَمِ إِلَى اللَّهِ أَرْبَعٌ سُبْحَانَ اللَّهِ وَالْحَمْدُ لِلَّهِ وَلاَ إِلَهَ إِلاَّ اللَّهُ وَاللَّهُ أَكْبَرُ",
    turkish: "Allah'a en sevimli dört söz: Sübhânallah, Elhamdülillah, Lâ ilâhe illallah, Allahu Ekber.",
    source: "Müslim",
    book: "Edeb, 13"
  },
  {
    arabic: "إِنَّ اللَّهَ وِتْرٌ يُحِبُّ الْوِتْرَ",
    turkish: "Allah tektir, teki sever.",
    source: "Buhârî",
    book: "Da'avât, 68"
  },
  {
    arabic: "قُلْ آمَنْتُ بِاللَّهِ ثُمَّ اسْتَقِمْ",
    turkish: "Allah'a inandım de, sonra dosdoğru ol.",
    source: "Müslim",
    book: "Îmân, 62"
  },
];
