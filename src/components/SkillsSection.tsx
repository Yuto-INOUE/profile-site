const skillCategories = [
  {
    title: "Backend",
    skills: ["C#", ".NET", "ASP.NET Core", "Go", "SQL Server", "MySQL"],
  },
  {
    title: "Frontend",
    skills: ["Vue.js", "TypeScript", "JavaScript", "HTML/CSS"],
  },
  {
    title: "CI/CD & DevOps",
    skills: ["GitHub Actions", "Azure Pipelines", "Docker", "Git"],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-4 font-mono text-sm text-accent">Skills</h2>
        <p className="mb-12 text-3xl font-bold tracking-tight md:text-4xl">
          技術スタック
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="rounded-xl border border-card-border bg-card p-6 transition-colors hover:border-accent/50"
            >
              <h3 className="mb-4 font-mono text-sm font-semibold text-accent">
                {category.title}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-card-border px-3 py-1 text-sm text-muted"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
