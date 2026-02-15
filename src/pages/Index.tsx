import { useHourlyContent } from "@/hooks/useHourlyContent";
import { RefreshCw, Share2, Moon, Sun, Smartphone } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import logo from "@/assets/logo.png";

const Index = () => {
  const { verse, hadith, refresh } = useHourlyContent();
  const [isDark, setIsDark] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  const handleShare = async () => {
    const text = `📖 ${verse.surah} Suresi, ${verse.ayahNumber}. Ayet\n${verse.turkish}\n\n📿 Hadis (${hadith.source})\n${hadith.turkish}`;
    try {
      if (navigator.share) {
        await navigator.share({ title: "Ayet & Hadis", text });
        return;
      }

      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
        toast({ title: "Metin panoya kopyalandı." });
        return;
      }

      throw new Error("Clipboard unavailable");
    } catch (err) {
      if (err && typeof err === "object" && "name" in err && (err as { name: string }).name === "AbortError") {
        return;
      }
      if (navigator.clipboard?.writeText) {
        try {
          await navigator.clipboard.writeText(text);
          toast({ title: "Metin panoya kopyalandı." });
          return;
        } catch {
          // fall through
        }
      }
      toast({ title: "Paylaşım başarısız", description: "Metni manuel kopyalayın.", variant: "destructive" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground relative overflow-hidden">
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full border-[40px] border-foreground" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full border-[30px] border-foreground" />
      </div>

      {/* Header */}
      <header className="flex items-center justify-between px-5 pt-6 pb-2 relative z-10">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="h-7 w-auto" />
          <h1 className="text-lg font-bold tracking-wide text-primary">Ayet & Hadis</h1>
        </div>
        <div className="flex gap-1">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsDark(!isDark)}
            className="h-9 w-9 text-muted-foreground hover:text-foreground"
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={refresh}
            className="h-9 w-9 text-muted-foreground hover:text-foreground"
          >
            <RefreshCw className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleShare}
            className="h-9 w-9 text-muted-foreground hover:text-foreground"
          >
            <Share2 className="h-4 w-4" />
          </Button>
        </div>
      </header>

      {/* Content */}
      <main className="flex-1 flex flex-col gap-6 px-5 py-6 relative z-10">
        {/* Verse Card */}
        <section className="rounded-2xl bg-card p-6 shadow-sm border border-border">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">Ayet</span>
            <span className="text-xs text-muted-foreground">
              {verse.surah} · {verse.ayahNumber}
            </span>
          </div>

          <p
            className="font-arabic text-2xl leading-[2.2] text-right mb-5"
            dir="rtl"
            lang="ar"
          >
            {verse.arabic}
          </p>

          <div className="h-px bg-border mb-4" />

          <p className="text-base leading-relaxed text-foreground/90">
            {verse.turkish}
          </p>

          <p className="mt-3 text-xs text-muted-foreground">
            {verse.surah} Suresi, {verse.surahNumber}:{verse.ayahNumber}
          </p>
        </section>

        {/* Hadith Card */}
        <section className="rounded-2xl bg-card p-6 shadow-sm border border-border">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">Hadis</span>
            <span className="inline-flex items-center rounded-full bg-secondary px-2 py-0.5 text-[10px] font-medium text-secondary-foreground">
              {hadith.source}
            </span>
          </div>

          {hadith.arabic && (
            <>
              <p
                className="font-arabic text-xl leading-[2.2] text-right mb-5"
                dir="rtl"
                lang="ar"
              >
                {hadith.arabic}
              </p>
              <div className="h-px bg-border mb-4" />
            </>
          )}

          <p className="text-base leading-relaxed text-foreground/90">
            {hadith.turkish}
          </p>

          {hadith.book && (
            <p className="mt-3 text-xs text-muted-foreground">
              {hadith.source}, {hadith.book}
            </p>
          )}
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center py-4 relative z-10">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => navigate("/install")}
          className="text-xs text-muted-foreground gap-1.5 hover:text-foreground"
        >
          <Smartphone className="h-3.5 w-3.5" />
          iPhone'a Kur
        </Button>
        <p className="text-xs text-muted-foreground mt-1">Her saat başı güncellenir</p>
      </footer>
    </div>
  );
};

export default Index;
