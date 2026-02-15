import { useState } from "react";
import { ArrowLeft, Download, Smartphone, Layout, Copy, Check, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const InstallGuide = () => {
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<"pwa" | "widget">("pwa");

  const scriptableCode = `// Ayet & Hadis Widget - Scriptable
// Her saat değişen Kuran ayeti ve hadis

const HADITHS = [
  {t:"Ameller niyetlere göredir.",s:"Buhârî"},
  {t:"Sizin en hayırlınız Kur'an'ı öğrenen ve öğretendir.",s:"Buhârî"},
  {t:"Müslüman, dilinden ve elinden diğer Müslümanların güvende olduğu kimsedir.",s:"Buhârî"},
  {t:"Allah'a ve ahiret gününe iman eden, ya hayır söylesin ya da sussun.",s:"Buhârî"},
  {t:"Sizden biriniz kendisi için istediğini kardeşi için de istemedikçe gerçek iman etmiş olmaz.",s:"Buhârî"},
  {t:"Dünya müminin zindanı, kâfirin cennetidir.",s:"Müslim"},
  {t:"Allah sizin suretlerinize ve mallarınıza bakmaz, fakat kalplerinize ve amellerinize bakar.",s:"Müslim"},
  {t:"Kim ilim öğrenmek için bir yola girerse, Allah ona cennete giden yolu kolaylaştırır.",s:"Müslim"},
  {t:"Kardeşinin yüzüne gülümsemen senin için bir sadakadır.",s:"Buhârî"},
  {t:"Temizlik imanın yarısıdır.",s:"Müslim"},
  {t:"Kuvvetli mümin, zayıf müminden daha hayırlı ve Allah'a daha sevimlidir.",s:"Müslim"},
  {t:"Merhamet etmeyene merhamet olunmaz.",s:"Buhârî"},
  {t:"Dua ibadetin özüdür.",s:"Buhârî"},
  {t:"Allah'a en sevimli amel az da olsa devamlı olanıdır.",s:"Buhârî"},
  {t:"Güzel söz sadakadır.",s:"Buhârî"},
  {t:"İnsan ölünce üç şey dışında ameli kesilir: Sadaka-i cariye, faydalı ilim ve kendisine dua eden salih evlat.",s:"Müslim"},
  {t:"Kızma!",s:"Buhârî"},
  {t:"Veren el alan elden hayırlıdır.",s:"Buhârî"},
  {t:"Bizi aldatan bizden değildir.",s:"Müslim"},
  {t:"Allah güzeldir, güzeli sever.",s:"Müslim"},
  {t:"İnsanların en hayırlısı insanlara en faydalı olanıdır.",s:"Buhârî"},
  {t:"Ben güzel ahlakı tamamlamak üzere gönderildim.",s:"Buhârî"},
  {t:"Müminlerin iman yönünden en mükemmeli ahlakı en güzel olanıdır.",s:"Müslim"},
  {t:"Güçlü olan güreşte yenen değildir. Gerçek güçlü, öfkelendiğinde nefsine hâkim olabilendir.",s:"Buhârî"},
  {t:"Zenginlik mal çokluğundan ibaret değildir. Asıl zenginlik gönül zenginliğidir.",s:"Buhârî"},
  {t:"Hepiniz çobansınız ve hepiniz sürünüzden sorumlusunuz.",s:"Buhârî"},
  {t:"Zulüm kıyamet günü karanlıklardır.",s:"Buhârî"},
  {t:"Kolaylaştırın zorlaştırmayın; müjdeleyin nefret ettirmeyin.",s:"Buhârî"},
  {t:"Sizin en hayırlınız ailesine en iyi davrananınızdır.",s:"Buhârî"},
  {t:"İlim öğrenmek her Müslümana farzdır.",s:"Buhârî"},
  {t:"Benden bir ayet bile olsa tebliğ edin.",s:"Buhârî"},
  {t:"Kulun Rabbine en yakın olduğu an secde hâlidir.",s:"Müslim"},
  {t:"Allah kulunun tevbesine, çölde devesini kaybedip de tekrar bulan birinden daha çok sevinir.",s:"Müslim"},
  {t:"Her insanoğlu hata eder. Hata edenlerin en hayırlısı tevbe edenlerdir.",s:"Buhârî"},
  {t:"Sabır ilk darbe anındadır.",s:"Buhârî"},
  {t:"Müminin hâli ne hoştur! Her hâli hayırdır.",s:"Müslim"},
  {t:"Dünyada bir garip veya yolcu gibi ol.",s:"Buhârî"},
  {t:"Cennet zorluklarla, cehennem ise şehvetlerle kuşatılmıştır.",s:"Müslim"},
  {t:"Kadınlara iyi davranmanızı tavsiye ederim.",s:"Buhârî"},
  {t:"Doğruluk iyiliğe götürür, iyilik de cennete götürür.",s:"Buhârî"},
  {t:"Aranızda selamı yayın.",s:"Müslim"},
  {t:"Oruç bir kalkandır.",s:"Buhârî"},
  {t:"Sahur yapın çünkü sahurda bereket vardır.",s:"Buhârî"},
  {t:"İki nimet vardır ki insanların çoğu bunlarda aldanmıştır: Sağlık ve boş vakit.",s:"Buhârî"},
  {t:"Kıyamet koparken elinizde bir fidan varsa dikebiliyorsanız dikin.",s:"Buhârî"},
  {t:"Mazlumun bedduasından sakının. Çünkü onunla Allah arasında perde yoktur.",s:"Buhârî"},
  {t:"Makbul haccın karşılığı ancak cennettir.",s:"Buhârî"},
  {t:"Allah'a inandım de, sonra dosdoğru ol.",s:"Müslim"},
  {t:"Allah tektir, teki sever.",s:"Buhârî"},
  {t:"Hayra vesile olan onu yapan gibidir.",s:"Müslim"},
  {t:"Kul kardeşinin yardımında oldukça Allah da onun yardımındadır.",s:"Müslim"},
  {t:"Canı güvende, bedeni sağlam ve günlük yiyeceği olan kişi sanki bütün dünya ona verilmiş gibidir.",s:"Buhârî"},
  {t:"Tedavi olun. Çünkü Allah hiçbir hastalık yaratmamıştır ki onun şifasını da yaratmamış olsun.",s:"Buhârî"},
  {t:"Zafer sabırla, kurtuluş sıkıntıyla ve kolaylık zorlukla birliktedir.",s:"Müslim"},
  {t:"Mümin mümin için parçaları birbirini destekleyen bina gibidir.",s:"Buhârî"},
  {t:"Gıybetin ne olduğunu biliyor musunuz? Kardeşini hoşlanmadığı şeyle anmandır.",s:"Müslim"},
  {t:"Kim bir Müslümanın sıkıntısını giderirse Allah da onun kıyamet sıkıntılarından birini giderir.",s:"Buhârî"},
  {t:"Lezzetleri kesen ölümü çokça hatırlayın.",s:"Buhârî"},
  {t:"Yarım hurma ile de olsa ateşten korunun.",s:"Buhârî"},
  {t:"Din nasihattir.",s:"Müslim"},
];

const VERSES = [
  {t:"Rahmân ve Rahîm olan Allah'ın adıyla.",r:"Fâtiha 1:1"},
  {t:"Siz beni anın ki ben de sizi anayım.",r:"Bakara 2:152"},
  {t:"Bana dua edenin duasını kabul ederim.",r:"Bakara 2:186"},
  {t:"Allah hiçbir kimseyi gücünün yetmediği şeyle yükümlü kılmaz.",r:"Bakara 2:286"},
  {t:"Gevşemeyin, üzülmeyin; eğer inanıyorsanız en üstün olan sizlersiniz.",r:"Âl-i İmrân 3:139"},
  {t:"Kararını verdiğinde artık Allah'a tevekkül et.",r:"Âl-i İmrân 3:159"},
  {t:"İyilik ve takva üzerine yardımlaşın.",r:"Mâide 5:2"},
  {t:"Sabredin. Çünkü Allah sabredenlerle beraberdir.",r:"Enfâl 8:46"},
  {t:"Allah'ın bizim için yazdığından başkası asla bize isabet etmez.",r:"Tevbe 9:51"},
  {t:"Allah'ın dostlarına korku yoktur ve onlar üzülmeyeceklerdir.",r:"Yûnus 10:62"},
  {t:"Yeryüzünde yürüyen her canlının rızkı ancak Allah'a aittir.",r:"Hûd 11:6"},
  {t:"Allah'ın rahmetinden ümit kesmeyin.",r:"Yûsuf 12:87"},
  {t:"Kalpler ancak Allah'ı anmakla huzur bulur.",r:"Ra'd 13:28"},
  {t:"Eğer şükrederseniz elbette size nimetimi artırırım.",r:"İbrâhîm 14:7"},
  {t:"Rabbim, ilmimi artır.",r:"Tâ-Hâ 20:114"},
  {t:"Muhakkak ki zorlukla beraber bir kolaylık vardır.",r:"İnşirâh 94:5"},
  {t:"Rabbin sana verecek ve sen razı olacaksın.",r:"Duhâ 93:5"},
  {t:"Kim Allah'a tevekkül ederse O, ona yeter.",r:"Talâk 65:3"},
  {t:"Nerede olursanız olun O sizinle beraberdir.",r:"Hadîd 57:4"},
  {t:"Rabbinizin hangi nimetlerini yalanlayabilirsiniz?",r:"Rahmân 55:13"},
  {t:"Allah'ın rahmetinden umudunuzu kesmeyin. Allah bütün günahları affeder.",r:"Zümer 39:53"},
  {t:"Rabbimiz Allah'tır deyip dosdoğru yaşayanlara melekler iner: Korkmayın, üzülmeyin.",r:"Fussilet 41:30"},
  {t:"De ki: O Allah birdir.",r:"İhlâs 112:1"},
  {t:"Allah, göklerin ve yerin nurudur.",r:"Nûr 24:35"},
  {t:"Mülk elinde bulunan Allah ne yücedir! O her şeye kadirdir.",r:"Mülk 67:1"},
  {t:"Rabbimiz! Bize katından bir rahmet ver.",r:"Kehf 18:10"},
  {t:"Eşlerimizi ve çocuklarımızı bize göz aydınlığı kıl.",r:"Furkân 25:74"},
  {t:"Rabbim! Bana indireceğin her hayra muhtacım.",r:"Kasas 28:24"},
  {t:"Müminler gerçekten kurtuluşa ermiştir.",r:"Mü'minûn 23:1"},
  {t:"Rahîm olan Rabb'den bir söz olarak: Selâm!",r:"Yâsîn 36:58"},
];

function getSeed() {
  let d = new Date();
  return d.getFullYear()*1000000 + (d.getMonth()+1)*10000 + d.getDate()*100 + d.getHours();
}
function sRand(s) {
  let x = Math.sin(s)*10000;
  return x - Math.floor(x);
}
let seed = getSeed();
let v = VERSES[Math.floor(sRand(seed)*VERSES.length)];
let h = HADITHS[Math.floor(sRand(seed+1)*HADITHS.length)];

let w = new ListWidget();
w.backgroundColor = new Color("#1a1a2e");

let hdr = w.addText("📿 Hadis");
hdr.font = Font.boldSystemFont(11);
hdr.textColor = new Color("#c9a96e");
w.addSpacer(4);

let ht = w.addText(h.t);
ht.font = Font.systemFont(13);
ht.textColor = Color.white();
ht.minimumScaleFactor = 0.7;
w.addSpacer(4);

let hs = w.addText("— " + h.s);
hs.font = Font.italicSystemFont(10);
hs.textColor = new Color("#888");
w.addSpacer(8);

let vhdr = w.addText("📖 Ayet");
vhdr.font = Font.boldSystemFont(11);
vhdr.textColor = new Color("#c9a96e");
w.addSpacer(4);

let vt = w.addText(v.t);
vt.font = Font.systemFont(13);
vt.textColor = Color.white();
vt.minimumScaleFactor = 0.7;
w.addSpacer(4);

let vr = w.addText("— " + v.r);
vr.font = Font.italicSystemFont(10);
vr.textColor = new Color("#888");

w.refreshAfterDate = new Date(Date.now() + 3600000);
Script.setWidget(w);
Script.complete();`;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(scriptableCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="flex items-center gap-3 px-5 pt-6 pb-4 border-b border-border">
        <Button variant="ghost" size="icon" onClick={() => navigate("/")} className="h-9 w-9">
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <h1 className="text-lg font-bold text-primary">iPhone Kurulum</h1>
      </header>

      {/* Tab Selector */}
      <div className="flex border-b border-border">
        <button
          onClick={() => setActiveTab("pwa")}
          className={`flex-1 py-3 text-sm font-medium text-center transition-colors ${activeTab === "pwa" ? "text-primary border-b-2 border-primary" : "text-muted-foreground"}`}
        >
          <Smartphone className="h-4 w-4 inline mr-1.5" />
          Uygulamayı Kur
        </button>
        <button
          onClick={() => setActiveTab("widget")}
          className={`flex-1 py-3 text-sm font-medium text-center transition-colors ${activeTab === "widget" ? "text-primary border-b-2 border-primary" : "text-muted-foreground"}`}
        >
          <Layout className="h-4 w-4 inline mr-1.5" />
          Widget Ekle
        </button>
      </div>

      <main className="px-5 py-6 space-y-6 max-w-lg mx-auto">
        {activeTab === "pwa" ? (
          <>
            <div className="text-center space-y-2">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-2">
                <Download className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-xl font-bold">Ana Ekrana Ekle</h2>
              <p className="text-sm text-muted-foreground">
                Bu uygulamayı iPhone'unuza gerçek bir uygulama gibi kurabilirsiniz. Ücretsiz, App Store gerekmez.
              </p>
            </div>

            <div className="space-y-4">
              <StepCard step={1} title="Safari ile Açın" description="Bu sayfayı Safari tarayıcısında açın. Chrome veya diğer tarayıcılar desteklemiyor." />
              <StepCard step={2} title="Paylaş Butonuna Basın" description="Ekranın altındaki paylaş butonuna (kutucuktan çıkan ok) dokunun." />
              <StepCard step={3} title="'Ana Ekrana Ekle' Seçin" description="Açılan menüde aşağı kaydırın ve 'Ana Ekrana Ekle' seçeneğine dokunun." />
              <StepCard step={4} title="'Ekle' Onaylayın" description="Sağ üstteki 'Ekle' butonuna basın. Artık uygulama ana ekranınızda!" />
            </div>

            <div className="rounded-xl bg-muted/50 p-4 text-sm text-muted-foreground">
              <p className="font-medium text-foreground mb-1">✨ Avantajlar</p>
              <ul className="space-y-1 list-disc list-inside">
                <li>Tam ekran açılır (tarayıcı çubuğu yok)</li>
                <li>İnternet olmadan da çalışır</li>
                <li>Her saat yeni ayet ve hadis</li>
              </ul>
            </div>
          </>
        ) : (
          <>
            <div className="text-center space-y-2">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-2">
                <Layout className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-xl font-bold">Widget Kurulumu</h2>
              <p className="text-sm text-muted-foreground">
                iPhone ana ekranınıza ayet ve hadis widget'ı ekleyin. Scriptable uygulaması ile çalışır.
              </p>
            </div>

            <div className="space-y-4">
              <StepCard
                step={1}
                title="Scriptable'ı İndirin"
                description="App Store'dan ücretsiz Scriptable uygulamasını indirin."
                action={
                  <a
                    href="https://apps.apple.com/app/scriptable/id1405459188"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-primary font-medium mt-1"
                  >
                    App Store'da Aç <ExternalLink className="h-3 w-3" />
                  </a>
                }
              />
              <StepCard step={2} title="Scriptable'ı Açın" description="Uygulamayı açın ve sağ üstteki '+' butonuyla yeni bir script oluşturun." />
              <StepCard
                step={3}
                title="Kodu Yapıştırın"
                description="Aşağıdaki kodu kopyalayın ve Scriptable'daki boş alana yapıştırın. 'Done' ile kaydedin."
              />
              <StepCard step={4} title="Widget Ekleyin" description="Ana ekranda boş alana uzun basın → '+' → Scriptable → 'Medium' boyut seçin → Widget'a dokunup scripti seçin." />
            </div>

            {/* Code Block */}
            <div className="rounded-xl border border-border overflow-hidden">
              <div className="flex items-center justify-between bg-muted px-4 py-2">
                <span className="text-xs font-medium text-muted-foreground">Scriptable Kodu</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleCopy}
                  className="h-7 text-xs gap-1"
                >
                  {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                  {copied ? "Kopyalandı!" : "Kopyala"}
                </Button>
              </div>
              <pre className="p-4 text-xs overflow-x-auto bg-card max-h-60 overflow-y-auto">
                <code>{scriptableCode}</code>
              </pre>
            </div>

            <div className="rounded-xl bg-muted/50 p-4 text-sm text-muted-foreground">
              <p className="font-medium text-foreground mb-1">💡 İpuçları</p>
              <ul className="space-y-1 list-disc list-inside">
                <li>Widget her saat otomatik güncellenir</li>
                <li>İnternet gerekmez, veriler scriptin içinde</li>
                <li>Medium boyut en iyi görünümü verir</li>
                <li>Kilit ekranı widget'ı için 'Small' boyut seçin</li>
              </ul>
            </div>
          </>
        )}
      </main>
    </div>
  );
};

const StepCard = ({ step, title, description, action }: { step: number; title: string; description: string; action?: React.ReactNode }) => (
  <div className="flex gap-4">
    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
      {step}
    </div>
    <div className="flex-1">
      <h3 className="text-sm font-semibold">{title}</h3>
      <p className="text-sm text-muted-foreground mt-0.5">{description}</p>
      {action}
    </div>
  </div>
);

export default InstallGuide;
