export function HeroSection() {
  return (
    <section
      id="about"
      className="flex min-h-screen flex-col items-center justify-center px-6 pt-20"
    >
      <div className="mx-auto max-w-3xl text-center">
        <p className="animate-fade-in-up mb-4 font-mono text-sm text-accent opacity-0">
          Developer Experience Engineer
        </p>
        <h1 className="animate-fade-in-up animate-delay-100 mb-2 text-5xl font-bold tracking-tight opacity-0 md:text-7xl">
          井上 雄斗
        </h1>
        <p className="animate-fade-in-up animate-delay-200 mb-8 font-mono text-lg text-muted opacity-0 md:text-xl">
          Yuto Inoue
        </p>
        <p className="animate-fade-in-up animate-delay-300 mx-auto mb-10 max-w-xl text-base leading-relaxed text-muted opacity-0 md:text-lg">
          「エンジニアが楽になるエンジニアリング」をテーマに、
          CI/CD パイプラインの整備や開発基盤の改善に取り組んできました。
          開発者がコードに集中できる環境をつくることが、いちばん好きな仕事です。
        </p>
        <div className="animate-fade-in-up animate-delay-400 flex justify-center gap-4 opacity-0">
          <a
            href="https://github.com/yuto-inoue"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-card-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-muted"
          >
            GitHub
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 flex flex-col items-center gap-2">
        <span className="text-xs text-muted">Scroll</span>
        <div className="h-8 w-px animate-pulse bg-muted" />
      </div>
    </section>
  );
}
