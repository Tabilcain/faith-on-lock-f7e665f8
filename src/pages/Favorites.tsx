import { ArrowLeft, Heart, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useFavorites } from "@/hooks/useFavorites";

const Favorites = () => {
  const navigate = useNavigate();
  const { favorites, removeFavorite } = useFavorites();

  const verses = favorites.filter((f) => f.type === "verse");
  const hadiths = favorites.filter((f) => f.type === "hadith");

  return (
    <div className="app-surface min-h-screen text-foreground relative overflow-x-hidden">
      <div className="app-orb h-44 w-44 top-[-1rem] right-[-2rem] bg-primary/65" />
      <div className="app-orb h-36 w-36 bottom-16 left-[-2rem] bg-accent/60" />

      <header className="sticky top-0 z-20 backdrop-blur-sm bg-background/35 border-b border-border/40">
        <div className="max-w-3xl mx-auto px-4 py-4 flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate("/")}
            aria-label="Ana sayfaya dön"
            className="h-9 w-9"
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div className="flex items-center gap-2">
            <Heart className="h-4 w-4 text-primary fill-primary" />
            <h1 className="text-lg font-bold text-primary">Kaydedilenler</h1>
          </div>
        </div>
      </header>

      <main className="px-4 py-6 max-w-3xl mx-auto space-y-6 relative z-10">
        {favorites.length === 0 ? (
          <div className="glass-panel rounded-3xl text-center py-16 px-6 space-y-3">
            <Heart className="h-12 w-12 mx-auto text-primary/35" />
            <p className="text-muted-foreground">Henüz kaydettiğiniz bir şey yok.</p>
            <p className="text-sm text-muted-foreground/70">
              Ayet veya hadis kartlarındaki kalp ikonuna basarak kaydedin.
            </p>
            <Button variant="outline" size="sm" onClick={() => navigate("/")} className="mt-2">
              Ana sayfaya dön
            </Button>
          </div>
        ) : (
          <>
            {verses.length > 0 && (
              <section>
                <h2 className="kicker text-primary mb-3">
                  Ayetler ({verses.length})
                </h2>
                <div className="space-y-3">
                  {verses.map((item) => (
                    <FavoriteCard key={item.id} item={item} onRemove={removeFavorite} />
                  ))}
                </div>
              </section>
            )}

            {hadiths.length > 0 && (
              <section>
                <h2 className="kicker text-primary mb-3">
                  Hadisler ({hadiths.length})
                </h2>
                <div className="space-y-3">
                  {hadiths.map((item) => (
                    <FavoriteCard key={item.id} item={item} onRemove={removeFavorite} />
                  ))}
                </div>
              </section>
            )}
          </>
        )}
      </main>
    </div>
  );
};

const FavoriteCard = ({
  item,
  onRemove,
}: {
  item: { id: string; text: string; source: string; arabic?: string };
  onRemove: (id: string) => void;
}) => (
  <div className="glass-panel rounded-2xl p-5 relative group">
    {item.arabic && (
      <p className="font-arabic text-xl leading-[2] text-right mb-3" dir="rtl" lang="ar">
        {item.arabic}
      </p>
    )}
    <p className="text-[1.02rem] leading-relaxed text-foreground/90">{item.text}</p>
    <div className="flex items-center justify-between mt-2">
      <p className="text-xs text-muted-foreground">{item.source}</p>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => onRemove(item.id)}
        aria-label="Kaydı sil"
        className="h-8 px-2 text-muted-foreground hover:text-destructive opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity"
      >
        <Trash2 className="h-3.5 w-3.5 mr-1" />
        <span className="text-xs">Sil</span>
      </Button>
    </div>
  </div>
);

export default Favorites;
