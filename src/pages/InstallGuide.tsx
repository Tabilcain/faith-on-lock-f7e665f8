import { useState } from "react";
import { ArrowLeft, Download, Smartphone, Layout, Copy, Check, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { widgetHadiths, widgetVerses, type WidgetHadith, type WidgetVerse } from "@/data/widgetContent";
import { toast } from "@/hooks/use-toast";

const scriptableCode = buildScriptableCode(widgetHadiths, widgetVerses);

function buildScriptableCode(hadiths: WidgetHadith[], verses: WidgetVerse[]) {
  const hadithLines = hadiths
    .map((h) => `  {t:${JSON.stringify(h.t)},s:${JSON.stringify(h.s)}},`)
    .join("\n");
  const verseLines = verses
    .map((v) => `  {t:${JSON.stringify(v.t)},r:${JSON.stringify(v.r)}},`)
    .join("\n");

  return `// Ayet & Hadis Widget - Scriptable
// Her saat değişen Kuran ayeti ve hadis

const HADITHS = [
${hadithLines}
];

const VERSES = [
${verseLines}
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
}

const InstallGuide = () => {
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<"pwa" | "widget">("pwa");

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(scriptableCode);
      setCopied(true);
      toast({ title: "Widget kodu panoya kopyalandı." });
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast({
        title: "Kopyalama başarısız",
        description: "Tarayıcı izinlerini kontrol edin veya kodu manuel kopyalayın.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="flex items-center gap-3 px-5 pt-6 pb-4 border-b border-border">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate("/")}
          aria-label="Ana sayfaya dön"
          className="h-9 w-9"
        >
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <h1 className="text-lg font-bold text-primary">iPhone Kurulum</h1>
      </header>

      {/* Tab Selector */}
      <div className="flex border-b border-border">
        <button
          onClick={() => setActiveTab("pwa")}
          aria-label="Uygulamayı kur sekmesi"
          className={`flex-1 py-3 text-sm font-medium text-center transition-colors ${activeTab === "pwa" ? "text-primary border-b-2 border-primary" : "text-muted-foreground"}`}
        >
          <Smartphone className="h-4 w-4 inline mr-1.5" />
          Uygulamayı Kur
        </button>
        <button
          onClick={() => setActiveTab("widget")}
          aria-label="Widget ekle sekmesi"
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
                  aria-label="Widget kodunu kopyala"
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
