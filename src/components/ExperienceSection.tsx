const experiences = [
  {
    period: "2024 - 現在",
    company: "W2株式会社",
    role: "ソフトウェアエンジニア",
    description:
      "EC プラットフォームの開発に従事。",
  },
  {
    period: "2023 - 2024",
    company: "ミイダス株式会社",
    role: "バックエンドエンジニア",
    description:
      "HR Tech サービスのバックエンド開発を担当。",
  },
  {
    period: "2019 - 2023",
    company: "W2株式会社",
    role: "ソフトウェアエンジニア",
    description:
      "EC プラットフォームの設計・開発に携わる。",
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-4 font-mono text-sm text-accent">Experience</h2>
        <p className="mb-12 text-3xl font-bold tracking-tight md:text-4xl">
          経歴
        </p>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[7px] top-2 hidden h-full w-px bg-card-border md:block" />

          <div className="flex flex-col gap-10">
            {experiences.map((exp, i) => (
              <div key={i} className="group relative flex gap-6">
                {/* Timeline dot */}
                <div className="relative hidden flex-shrink-0 md:block">
                  <div className="mt-2 h-[15px] w-[15px] rounded-full border-2 border-accent bg-background transition-colors group-hover:bg-accent" />
                </div>

                <div className="flex-1 rounded-xl border border-card-border bg-card p-6 transition-colors group-hover:border-accent/50">
                  <div className="mb-2 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="text-lg font-semibold">{exp.company}</h3>
                    <span className="font-mono text-xs text-muted">
                      {exp.period}
                    </span>
                  </div>
                  <p className="mb-2 text-sm font-medium text-accent">
                    {exp.role}
                  </p>
                  <p className="text-sm leading-relaxed text-muted">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
