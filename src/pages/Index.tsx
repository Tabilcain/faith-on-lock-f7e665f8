import { useHourlyContent } from "@/hooks/useHourlyContent";
import { useFavorites } from "@/hooks/useFavorites";
import { usePullToRefresh } from "@/hooks/usePullToRefresh";
import { RefreshCw, Share2, Moon, Sun, Smartphone, Heart, BookmarkCheck, Clock3 } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import logo from "@/assets/logo.png";

const THEME_STORAGE_KEY = "ayet-hadis-theme";

function hashString(value: string) {
  let hash = 0;
  for (let i = 0; i < value.length; i += 1) {
    hash = (hash << 5) - hash + value.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash).toString(36);
}

function getInitialThemePreference() {
  if (typeof window === "undefined") return false;
  const saved = localStorage.getItem(THEME_STORAGE_KEY);
  if (saved === "dark") return true;
  if (saved === "light") return false;
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

const Index = () => {
  const { verse, hadith, refresh } = useHourlyContent();
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();
  const [isDark, setIsDark] = useState(getInitialThemePreference);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [contentKey, setContentKey] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, isDark ? "dark" : "light");
    } catch {
      // Ignore storage failures in private mode or restricted environments.
    }
  }, [isDark]);

  const handleRefresh = useCallback(() => {
    setIsRefreshing(true);
    refresh();
    setContentKey((k) => k + 1);
    setTimeout(() => setIsRefreshing(false), 600);
  }, [refresh]);

  const { containerRef, pullDistance } = usePullToRefresh({
    onRefresh: handleRefresh,
  });

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
      if (err && typeof err === "object" && "name" in err && (err as { name: string }).name === "AbortError") return;
      if (navigator.clipboard?.writeText) {
        try {
          await navigator.clipboard.writeText(text);
          toast({ title: "Metin panoya kopyalandı." });
          return;
        } catch { /* fall through */ }
      }
      toast({ title: "Paylaşım başarısız", description: "Metni manuel kopyalayın.", variant: "destructive" });
    }
  };

  const verseId = `verse-${verse.surahNumber}-${verse.ayahNumber}`;
  const legacyHadithId = `hadith-${hadith.turkish?.slice(0, 30)}`;
  const hadithId = `hadith-${hashString(`${hadith.source}|${hadith.book ?? ""}|${hadith.turkish ?? ""}`)}`;
  const verseFav = isFavorite(verseId);
  const hadithFav = isFavorite(hadithId) || isFavorite(legacyHadithId);

  const toggleVerseFav = () => {
    if (verseFav) {
      removeFavorite(verseId);
      toast({ title: "Ayet kaydedilenlerden çıkarıldı." });
    } else {
      addFavorite({
        id: verseId,
        type: "verse",
        text: verse.turkish,
        source: `${verse.surah} Suresi, ${verse.surahNumber}:${verse.ayahNumber}`,
        arabic: verse.arabic,
      });
      toast({ title: "Ayet kaydedildi ❤️" });
    }
  };

  const toggleHadithFav = () => {
    if (hadithFav) {
      removeFavorite(hadithId);
      removeFavorite(legacyHadithId);
      toast({ title: "Hadis kaydedilenlerden çıkarıldı." });
    } else {
      addFavorite({
        id: hadithId,
        type: "hadith",
        text: hadith.turkish,
        source: `${hadith.source}${hadith.book ? ", " + hadith.book : ""}`,
        arabic: hadith.arabic,
      });
      toast({ title: "Hadis kaydedildi ❤️" });
    }
  };

  const currentHourLabel = new Date().toLocaleTimeString("tr-TR", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div
      ref={containerRef}
      className="app-surface min-h-screen flex flex-col text-foreground relative overflow-y-auto overflow-x-hidden"
    >
      <div className="app-orb h-56 w-56 top-[-2.5rem] right-[-3rem] bg-primary/70" />
      <div className="app-orb h-48 w-48 bottom-20 left-[-3rem] bg-accent/70" />

      {/* Pull-to-refresh indicator */}
      {pullDistance > 0 && (
        <div
          className="absolute top-0 left-0 right-0 flex justify-center z-30 pointer-events-none"
          style={{ transform: `translateY(${pullDistance - 40}px)`, opacity: Math.min(pullDistance / 80, 1) }}
        >
          <div className="toolbar-shell rounded-full p-2">
            <RefreshCw
              className="h-5 w-5 text-primary transition-transform"
              style={{ transform: `rotate(${pullDistance * 3}deg)` }}
            />
          </div>
        </div>
      )}

      {/* Header */}
      <header className="sticky top-0 z-20 backdrop-blur-sm bg-background/35 border-b border-border/40">
        <div className="max-w-3xl mx-auto px-4 py-4 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-2xl bg-primary/15 border border-primary/25 flex items-center justify-center">
              <img src={logo} alt="Logo" className="h-6 w-auto" />
            </div>
            <div>
              <p className="kicker text-primary/80">Saatlik İlham</p>
              <h1 className="text-lg font-bold tracking-wide leading-none">Ayet & Hadis</h1>
            </div>
          </div>
          <div className="toolbar-shell rounded-2xl p-1.5 flex gap-1">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsDark((prev) => !prev)}
              aria-label={isDark ? "Aydınlık temaya geç" : "Koyu temaya geç"}
              className="h-8 w-8 text-muted-foreground hover:text-foreground"
            >
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleRefresh}
              aria-label="İçeriği yenile"
              className="h-8 w-8 text-muted-foreground hover:text-foreground"
            >
              <RefreshCw className={`h-4 w-4 transition-transform duration-500 ${isRefreshing ? "animate-spin" : ""}`} />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleShare}
              aria-label="İçeriği paylaş"
              className="h-8 w-8 text-muted-foreground hover:text-foreground"
            >
              <Share2 className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate("/favorites")}
              aria-label="Kaydedilenlere git"
              className="h-8 w-8 text-muted-foreground hover:text-foreground"
            >
              <BookmarkCheck className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Content */}
      <main
        key={contentKey}
        className="flex-1 w-full max-w-3xl mx-auto px-4 py-6 relative z-10 animate-fade-in"
      >
        <section className="glass-panel rounded-3xl p-5 mb-5">
          <div className="flex flex-wrap items-center gap-3 justify-between">
            <div>
              <p className="kicker text-primary/80 mb-1">Günün Saati</p>
              <p className="text-sm text-muted-foreground">
                Her saat başı yeni ayet ve hadis seçilir.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/70 px-3 py-1.5 text-xs text-muted-foreground">
              <Clock3 className="h-3.5 w-3.5 text-primary" />
              {currentHourLabel}
            </div>
          </div>
        </section>

        {/* Verse Card */}
        <section className="glass-panel rounded-3xl p-6 md:p-7 relative group">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2">
              <span className="kicker text-primary">Ayet</span>
              <span className="text-xs text-muted-foreground">
                {verse.surah} · {verse.ayahNumber}
              </span>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleVerseFav}
              aria-label={verseFav ? "Ayeti kayıttan çıkar" : "Ayeti kaydet"}
              className="h-8 w-8"
            >
              <Heart
                className={`h-4 w-4 transition-colors ${verseFav ? "text-red-500 fill-red-500" : "text-muted-foreground"}`}
              />
            </Button>
          </div>

          <p className="font-arabic text-2xl leading-[2.2] text-right mb-5" dir="rtl" lang="ar">
            {verse.arabic}
          </p>

          <div className="muted-rule mb-4" />

          <p className="text-[1.02rem] leading-relaxed text-foreground/90">{verse.turkish}</p>

          <p className="mt-3 text-xs text-muted-foreground">
            {verse.surah} Suresi, {verse.surahNumber}:{verse.ayahNumber}
          </p>
        </section>

        {/* Hadith Card */}
        <section className="glass-panel rounded-3xl p-6 md:p-7 relative group mt-6">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2">
              <span className="kicker text-primary">Hadis</span>
              <span className="inline-flex items-center rounded-full bg-secondary px-2 py-0.5 text-[10px] font-medium text-secondary-foreground">
                {hadith.source}
              </span>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleHadithFav}
              aria-label={hadithFav ? "Hadisi kayıttan çıkar" : "Hadisi kaydet"}
              className="h-8 w-8"
            >
              <Heart
                className={`h-4 w-4 transition-colors ${hadithFav ? "text-red-500 fill-red-500" : "text-muted-foreground"}`}
              />
            </Button>
          </div>

          {hadith.arabic && (
            <>
              <p className="font-arabic text-xl leading-[2.2] text-right mb-5" dir="rtl" lang="ar">
                {hadith.arabic}
              </p>
              <div className="muted-rule mb-4" />
            </>
          )}

          <p className="text-[1.02rem] leading-relaxed text-foreground/90">{hadith.turkish}</p>

          {hadith.book && (
            <p className="mt-3 text-xs text-muted-foreground">
              {hadith.source}, {hadith.book}
            </p>
          )}
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center py-5 relative z-10">
        <Button
          variant="outline"
          size="sm"
          onClick={() => navigate("/install")}
          className="text-xs gap-1.5"
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
