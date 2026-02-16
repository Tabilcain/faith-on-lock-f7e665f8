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
    <div className="min-h-screen bg-background text-foreground">
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
        <div className="flex items-center gap-2">
          <Heart className="h-4 w-4 text-primary fill-primary" />
          <h1 className="text-lg font-bold text-primary">Kaydedilenler</h1>
        </div>
      </header>

      <main className="px-5 py-6 max-w-lg mx-auto space-y-6">
        {favorites.length === 0 ? (
          <div className="text-center py-16 space-y-3">
            <Heart className="h-12 w-12 mx-auto text-muted-foreground/30" />
            <p className="text-muted-foreground">Henüz kaydettiğiniz bir şey yok.</p>
            <p className="text-sm text-muted-foreground/70">
              Ayet veya hadis kartlarındaki kalp ikonuna basarak kaydedin.
            </p>
          </div>
        ) : (
          <>
            {verses.length > 0 && (
              <section>
                <h2 className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
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
                <h2 className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
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
  <div className="rounded-xl bg-card p-4 border border-border relative group">
    {item.arabic && (
      <p className="font-arabic text-lg leading-[2] text-right mb-3" dir="rtl" lang="ar">
        {item.arabic}
      </p>
    )}
    <p className="text-sm leading-relaxed text-foreground/90">{item.text}</p>
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
