import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="app-surface min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      <div className="app-orb h-48 w-48 top-[-2rem] right-[-2rem] bg-primary/60" />
      <div className="app-orb h-44 w-44 bottom-[-1rem] left-[-2rem] bg-accent/60" />

      <div className="glass-panel rounded-3xl w-full max-w-lg text-center px-8 py-10 relative z-10">
        <p className="kicker text-primary/80 mb-2">Hata</p>
        <h1 className="mb-2 text-5xl font-bold leading-none">404</h1>
        <p className="mb-2 text-xl text-muted-foreground">Sayfa bulunamadı</p>
        <p className="mb-6 text-sm text-muted-foreground/80">Aradığınız sayfa mevcut değil veya taşınmış olabilir.</p>
        <Link
          to="/"
          className="inline-flex items-center justify-center rounded-full border border-border bg-background/80 px-5 py-2.5 text-sm font-semibold text-primary hover:text-primary/90"
        >
          Ana sayfaya dön
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
