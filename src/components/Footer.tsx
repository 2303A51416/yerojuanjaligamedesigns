export function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-display text-sm font-bold text-gradient">HABEEBA</span>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Habeeba Khanam. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
