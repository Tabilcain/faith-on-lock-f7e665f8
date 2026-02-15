// Kuran-ı Kerim'den seçme ayetler - Arapça metin ve Türkçe meal
export interface Verse {
  surah: string;
  surahNumber: number;
  ayahNumber: number;
  arabic: string;
  turkish: string;
}

export const verses: Verse[] = [
  {
    surah: "Fatiha",
    surahNumber: 1,
    ayahNumber: 1,
    arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
    turkish: "Rahmân ve Rahîm olan Allah'ın adıyla."
  },
  {
    surah: "Bakara",
    surahNumber: 2,
    ayahNumber: 152,
    arabic: "فَاذْكُرُونِي أَذْكُرْكُمْ وَاشْكُرُوا لِي وَلَا تَكْفُرُونِ",
    turkish: "Öyleyse siz beni anın ki ben de sizi anayım. Bana şükredin, nankörlük etmeyin."
  },
  {
    surah: "Bakara",
    surahNumber: 2,
    ayahNumber: 186,
    arabic: "وَإِذَا سَأَلَكَ عِبَادِي عَنِّي فَإِنِّي قَرِيبٌ أُجِيبُ دَعْوَةَ الدَّاعِ إِذَا دَعَانِ",
    turkish: "Kullarım sana beni sorduğunda, bilsinler ki ben onlara yakınım. Bana dua edenin duasını kabul ederim."
  },
  {
    surah: "Bakara",
    surahNumber: 2,
    ayahNumber: 255,
    arabic: "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ",
    turkish: "Allah, O'ndan başka ilah yoktur. Diridir, kayyumdur. O'nu ne bir uyuklama tutar ne de uyku."
  },
  {
    surah: "Bakara",
    surahNumber: 2,
    ayahNumber: 286,
    arabic: "لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا",
    turkish: "Allah hiçbir kimseyi gücünün yetmediği şeyle yükümlü kılmaz."
  },
  {
    surah: "Âl-i İmrân",
    surahNumber: 3,
    ayahNumber: 139,
    arabic: "وَلَا تَهِنُوا وَلَا تَحْزَنُوا وَأَنتُمُ الْأَعْلَوْنَ إِن كُنتُم مُّؤْمِنِينَ",
    turkish: "Gevşemeyin, üzülmeyin; eğer inanıyorsanız en üstün olan sizlersiniz."
  },
  {
    surah: "Âl-i İmrân",
    surahNumber: 3,
    ayahNumber: 159,
    arabic: "فَإِذَا عَزَمْتَ فَتَوَكَّلْ عَلَى اللَّهِ إِنَّ اللَّهَ يُحِبُّ الْمُتَوَكِّلِينَ",
    turkish: "Kararını verdiğinde artık Allah'a tevekkül et. Şüphesiz Allah tevekkül edenleri sever."
  },
  {
    surah: "Nisâ",
    surahNumber: 4,
    ayahNumber: 32,
    arabic: "وَلَا تَتَمَنَّوْا مَا فَضَّلَ اللَّهُ بِهِ بَعْضَكُمْ عَلَىٰ بَعْضٍ",
    turkish: "Allah'ın sizi birbirinizden üstün kıldığı şeyleri temenni etmeyin."
  },
  {
    surah: "Mâide",
    surahNumber: 5,
    ayahNumber: 2,
    arabic: "وَتَعَاوَنُوا عَلَى الْبِرِّ وَالتَّقْوَىٰ وَلَا تَعَاوَنُوا عَلَى الْإِثْمِ وَالْعُدْوَانِ",
    turkish: "İyilik ve takva üzerine yardımlaşın, günah ve düşmanlık üzerine yardımlaşmayın."
  },
  {
    surah: "En'âm",
    surahNumber: 6,
    ayahNumber: 59,
    arabic: "وَعِندَهُ مَفَاتِحُ الْغَيْبِ لَا يَعْلَمُهَا إِلَّا هُوَ",
    turkish: "Gaybın anahtarları O'nun katındadır. Onları ancak O bilir."
  },
  {
    surah: "A'râf",
    surahNumber: 7,
    ayahNumber: 56,
    arabic: "وَلَا تُفْسِدُوا فِي الْأَرْضِ بَعْدَ إِصْلَاحِهَا وَادْعُوهُ خَوْفًا وَطَمَعًا إِنَّ رَحْمَتَ اللَّهِ قَرِيبٌ مِّنَ الْمُحْسِنِينَ",
    turkish: "Yeryüzünde düzeltildikten sonra bozgunculuk yapmayın. O'na korku ve umutla dua edin. Muhakkak Allah'ın rahmeti iyilik yapanlara yakındır."
  },
  {
    surah: "Enfâl",
    surahNumber: 8,
    ayahNumber: 46,
    arabic: "وَاصْبِرُوا إِنَّ اللَّهَ مَعَ الصَّابِرِينَ",
    turkish: "Sabredin. Çünkü Allah sabredenlerle beraberdir."
  },
  {
    surah: "Tevbe",
    surahNumber: 9,
    ayahNumber: 51,
    arabic: "قُل لَّن يُصِيبَنَا إِلَّا مَا كَتَبَ اللَّهُ لَنَا هُوَ مَوْلَانَا وَعَلَى اللَّهِ فَلْيَتَوَكَّلِ الْمُؤْمِنُونَ",
    turkish: "De ki: Allah'ın bizim için yazdığından başkası asla bize isabet etmez. O bizim Mevlâmızdır. Mü'minler yalnız Allah'a tevekkül etsinler."
  },
  {
    surah: "Yûnus",
    surahNumber: 10,
    ayahNumber: 62,
    arabic: "أَلَا إِنَّ أَوْلِيَاءَ اللَّهِ لَا خَوْفٌ عَلَيْهِمْ وَلَا هُمْ يَحْزَنُونَ",
    turkish: "Bilesiniz ki Allah'ın dostlarına korku yoktur ve onlar üzülmeyeceklerdir."
  },
  {
    surah: "Hûd",
    surahNumber: 11,
    ayahNumber: 6,
    arabic: "وَمَا مِن دَابَّةٍ فِي الْأَرْضِ إِلَّا عَلَى اللَّهِ رِزْقُهَا",
    turkish: "Yeryüzünde yürüyen her canlının rızkı ancak Allah'a aittir."
  },
  {
    surah: "Yûsuf",
    surahNumber: 12,
    ayahNumber: 87,
    arabic: "وَلَا تَيْأَسُوا مِن رَّوْحِ اللَّهِ إِنَّهُ لَا يَيْأَسُ مِن رَّوْحِ اللَّهِ إِلَّا الْقَوْمُ الْكَافِرُونَ",
    turkish: "Allah'ın rahmetinden ümit kesmeyin. Çünkü kâfirler topluluğundan başkası Allah'ın rahmetinden ümit kesmez."
  },
  {
    surah: "Ra'd",
    surahNumber: 13,
    ayahNumber: 28,
    arabic: "أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ",
    turkish: "Bilesiniz ki kalpler ancak Allah'ı anmakla huzur bulur."
  },
  {
    surah: "İbrâhîm",
    surahNumber: 14,
    ayahNumber: 7,
    arabic: "لَئِن شَكَرْتُمْ لَأَزِيدَنَّكُمْ",
    turkish: "Andolsun, eğer şükrederseniz elbette size nimetimi artırırım."
  },
  {
    surah: "Nahl",
    surahNumber: 16,
    ayahNumber: 97,
    arabic: "مَنْ عَمِلَ صَالِحًا مِّن ذَكَرٍ أَوْ أُنثَىٰ وَهُوَ مُؤْمِنٌ فَلَنُحْيِيَنَّهُ حَيَاةً طَيِّبَةً",
    turkish: "Erkek veya kadın, kim inanmış olarak iyi iş yaparsa, onu mutlaka güzel bir hayatla yaşatırız."
  },
  {
    surah: "İsrâ",
    surahNumber: 17,
    ayahNumber: 23,
    arabic: "وَقَضَىٰ رَبُّكَ أَلَّا تَعْبُدُوا إِلَّا إِيَّاهُ وَبِالْوَالِدَيْنِ إِحْسَانًا",
    turkish: "Rabbin, kendisinden başkasına ibadet etmemenizi ve ana-babaya iyilik etmenizi emretti."
  },
  {
    surah: "Kehf",
    surahNumber: 18,
    ayahNumber: 10,
    arabic: "رَبَّنَا آتِنَا مِن لَّدُنكَ رَحْمَةً وَهَيِّئْ لَنَا مِنْ أَمْرِنَا رَشَدًا",
    turkish: "Rabbimiz! Bize katından bir rahmet ver ve işimizde bize başarı nasip et."
  },
  {
    surah: "Tâ-Hâ",
    surahNumber: 20,
    ayahNumber: 114,
    arabic: "وَقُل رَّبِّ زِدْنِي عِلْمًا",
    turkish: "Ve de ki: Rabbim, ilmimi artır."
  },
  {
    surah: "Enbiyâ",
    surahNumber: 21,
    ayahNumber: 87,
    arabic: "لَّا إِلَٰهَ إِلَّا أَنتَ سُبْحَانَكَ إِنِّي كُنتُ مِنَ الظَّالِمِينَ",
    turkish: "Senden başka ilah yoktur. Seni tenzih ederim. Ben gerçekten zalimlerden oldum."
  },
  {
    surah: "Hac",
    surahNumber: 22,
    ayahNumber: 78,
    arabic: "وَجَاهِدُوا فِي اللَّهِ حَقَّ جِهَادِهِ",
    turkish: "Allah uğrunda hakkıyla cihad edin."
  },
  {
    surah: "Mü'minûn",
    surahNumber: 23,
    ayahNumber: 1,
    arabic: "قَدْ أَفْلَحَ الْمُؤْمِنُونَ",
    turkish: "Müminler gerçekten kurtuluşa ermiştir."
  },
  {
    surah: "Nûr",
    surahNumber: 24,
    ayahNumber: 35,
    arabic: "اللَّهُ نُورُ السَّمَاوَاتِ وَالْأَرْضِ",
    turkish: "Allah, göklerin ve yerin nurudur."
  },
  {
    surah: "Furkân",
    surahNumber: 25,
    ayahNumber: 74,
    arabic: "رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا",
    turkish: "Rabbimiz! Eşlerimizi ve çocuklarımızı bize göz aydınlığı kıl ve bizi takva sahiplerine önder eyle."
  },
  {
    surah: "Kasas",
    surahNumber: 28,
    ayahNumber: 24,
    arabic: "رَبِّ إِنِّي لِمَا أَنزَلْتَ إِلَيَّ مِنْ خَيْرٍ فَقِيرٌ",
    turkish: "Rabbim! Bana indireceğin her hayra muhtacım."
  },
  {
    surah: "Ankebût",
    surahNumber: 29,
    ayahNumber: 69,
    arabic: "وَالَّذِينَ جَاهَدُوا فِينَا لَنَهْدِيَنَّهُمْ سُبُلَنَا",
    turkish: "Bizim uğrumuzda mücadele edenlere elbette yollarımızı gösteririz."
  },
  {
    surah: "Rûm",
    surahNumber: 30,
    ayahNumber: 21,
    arabic: "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً",
    turkish: "O'nun ayetlerinden biri de sizin için nefislerinizden eşler yaratmasıdır ki onlara huzur bulasınız ve aranıza sevgi ve merhamet koymuştur."
  },
  {
    surah: "Ahzâb",
    surahNumber: 33,
    ayahNumber: 56,
    arabic: "إِنَّ اللَّهَ وَمَلَائِكَتَهُ يُصَلُّونَ عَلَى النَّبِيِّ",
    turkish: "Şüphesiz Allah ve melekleri Peygamber'e salat ederler."
  },
  {
    surah: "Fâtır",
    surahNumber: 35,
    ayahNumber: 2,
    arabic: "مَّا يَفْتَحِ اللَّهُ لِلنَّاسِ مِن رَّحْمَةٍ فَلَا مُمْسِكَ لَهَا",
    turkish: "Allah insanlara rahmetinden her neyi açarsa onu tutacak yoktur."
  },
  {
    surah: "Yâsîn",
    surahNumber: 36,
    ayahNumber: 58,
    arabic: "سَلَامٌ قَوْلًا مِّن رَّبٍّ رَّحِيمٍ",
    turkish: "Rahîm olan Rabb'den bir söz olarak: Selâm!"
  },
  {
    surah: "Zümer",
    surahNumber: 39,
    ayahNumber: 53,
    arabic: "قُلْ يَا عِبَادِيَ الَّذِينَ أَسْرَفُوا عَلَىٰ أَنفُسِهِمْ لَا تَقْنَطُوا مِن رَّحْمَةِ اللَّهِ إِنَّ اللَّهَ يَغْفِرُ الذُّنُوبَ جَمِيعًا",
    turkish: "De ki: Ey kendilerine kötülük etmekte aşırı giden kullarım! Allah'ın rahmetinden umudunuzu kesmeyin. Şüphesiz Allah bütün günahları affeder."
  },
  {
    surah: "Fussilet",
    surahNumber: 41,
    ayahNumber: 30,
    arabic: "إِنَّ الَّذِينَ قَالُوا رَبُّنَا اللَّهُ ثُمَّ اسْتَقَامُوا تَتَنَزَّلُ عَلَيْهِمُ الْمَلَائِكَةُ أَلَّا تَخَافُوا وَلَا تَحْزَنُوا",
    turkish: "Rabbimiz Allah'tır deyip sonra da dosdoğru yaşayanlara melekler iner: Korkmayın, üzülmeyin."
  },
  {
    surah: "Şûrâ",
    surahNumber: 42,
    ayahNumber: 19,
    arabic: "اللَّهُ لَطِيفٌ بِعِبَادِهِ يَرْزُقُ مَن يَشَاءُ وَهُوَ الْقَوِيُّ الْعَزِيزُ",
    turkish: "Allah kullarına çok lütufkârdır; dilediğini rızıklandırır. O güçlüdür, azîzdir."
  },
  {
    surah: "Muhammed",
    surahNumber: 47,
    ayahNumber: 7,
    arabic: "يَا أَيُّهَا الَّذِينَ آمَنُوا إِن تَنصُرُوا اللَّهَ يَنصُرْكُمْ وَيُثَبِّتْ أَقْدَامَكُمْ",
    turkish: "Ey iman edenler! Eğer siz Allah'a yardım ederseniz, O da size yardım eder ve ayaklarınızı sağlam bastırır."
  },
  {
    surah: "Hucurât",
    surahNumber: 49,
    ayahNumber: 13,
    arabic: "يَا أَيُّهَا النَّاسُ إِنَّا خَلَقْنَاكُم مِّن ذَكَرٍ وَأُنثَىٰ وَجَعَلْنَاكُمْ شُعُوبًا وَقَبَائِلَ لِتَعَارَفُوا",
    turkish: "Ey insanlar! Sizi bir erkek ve bir dişiden yarattık ve birbirinizi tanımanız için sizi milletlere ve kabilelere ayırdık."
  },
  {
    surah: "Rahmân",
    surahNumber: 55,
    ayahNumber: 13,
    arabic: "فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ",
    turkish: "O hâlde Rabbinizin hangi nimetlerini yalanlayabilirsiniz?"
  },
  {
    surah: "Hadîd",
    surahNumber: 57,
    ayahNumber: 4,
    arabic: "وَهُوَ مَعَكُمْ أَيْنَ مَا كُنتُمْ وَاللَّهُ بِمَا تَعْمَلُونَ بَصِيرٌ",
    turkish: "Nerede olursanız olun O sizinle beraberdir. Allah yaptıklarınızı görendir."
  },
  {
    surah: "Haşr",
    surahNumber: 59,
    ayahNumber: 22,
    arabic: "هُوَ اللَّهُ الَّذِي لَا إِلَٰهَ إِلَّا هُوَ عَالِمُ الْغَيْبِ وَالشَّهَادَةِ هُوَ الرَّحْمَٰنُ الرَّحِيمُ",
    turkish: "O, kendisinden başka hiçbir ilah olmayan Allah'tır. Gaybı da, görüneni de bilendir. O, Rahmân'dır, Rahîm'dir."
  },
  {
    surah: "Talâk",
    surahNumber: 65,
    ayahNumber: 3,
    arabic: "وَمَن يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ",
    turkish: "Kim Allah'a tevekkül ederse O, ona yeter."
  },
  {
    surah: "Mülk",
    surahNumber: 67,
    ayahNumber: 1,
    arabic: "تَبَارَكَ الَّذِي بِيَدِهِ الْمُلْكُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ",
    turkish: "Mülk elinde bulunan Allah ne yücedir! O her şeye kadirdir."
  },
  {
    surah: "İnşirâh",
    surahNumber: 94,
    ayahNumber: 5,
    arabic: "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا",
    turkish: "Muhakkak ki zorlukla beraber bir kolaylık vardır."
  },
  {
    surah: "İnşirâh",
    surahNumber: 94,
    ayahNumber: 6,
    arabic: "إِنَّ مَعَ الْعُسْرِ يُسْرًا",
    turkish: "Gerçekten zorlukla beraber bir kolaylık daha vardır."
  },
  {
    surah: "Duha",
    surahNumber: 93,
    ayahNumber: 5,
    arabic: "وَلَسَوْفَ يُعْطِيكَ رَبُّكَ فَتَرْضَىٰ",
    turkish: "Rabbin sana verecek ve sen razı olacaksın."
  },
  {
    surah: "İhlâs",
    surahNumber: 112,
    ayahNumber: 1,
    arabic: "قُلْ هُوَ اللَّهُ أَحَدٌ",
    turkish: "De ki: O Allah birdir."
  },
  {
    surah: "Felak",
    surahNumber: 113,
    ayahNumber: 1,
    arabic: "قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ",
    turkish: "De ki: Sabahın Rabbine sığınırım."
  },
  {
    surah: "Nâs",
    surahNumber: 114,
    ayahNumber: 1,
    arabic: "قُلْ أَعُوذُ بِرَبِّ النَّاسِ",
    turkish: "De ki: İnsanların Rabbine sığınırım."
  },
];
