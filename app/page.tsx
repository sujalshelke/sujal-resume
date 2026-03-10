import Image from "next/image";
import { resume } from "@/data/resume";

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto p-6 print:p-4 min-h-screen print:min-h-0">
      <article className="space-y-4 print:space-y-3">
        <header className="text-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#ea580c] dark:text-orange-500 font-[family-name:var(--font-space-grotesk)] print:text-slate-900">
            {resume.name}
          </h1>
          <p className="text-sm font-semibold text-stone-800 dark:text-stone-200 mt-1 px-3 py-1 border-2 border-orange-500 dark:border-orange-500 rounded inline-block">
            {resume.title}
          </p>
          <p className="text-xs text-stone-600 dark:text-stone-400 mt-2">
            {resume.location} ·{" "}
            <a href={resume.linkedin} target="_blank" rel="noopener noreferrer" className="text-orange-600 dark:text-orange-400 font-medium hover:underline">
              LinkedIn
            </a>
          </p>
        </header>

        <div className="flex justify-center py-1">
          <div className="w-28 h-28 rounded-full p-1.5 border-[3px] border-orange-500 dark:border-orange-500 bg-white dark:bg-stone-800 shadow-sm">
            <div className="w-full h-full rounded-full overflow-hidden">
              <Image
                src="/profile-photo.png"
                alt={`${resume.name} - ${resume.title}`}
                width={112}
                height={112}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        </div>

        <hr className="border-t-2 border-orange-500/80" />

        <section>
          <h2 className="text-xs font-bold text-orange-600 dark:text-orange-400 uppercase tracking-widest mb-1">
            Summary
          </h2>
          <ul className="space-y-0.5 list-disc list-inside text-xs text-stone-800 dark:text-stone-200 leading-snug">
            {resume.summaryBullets.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </section>

        <hr className="border-t border-orange-500/50" />

        <section>
          <h2 className="text-xs font-bold text-orange-600 dark:text-orange-400 uppercase tracking-widest mb-1">
            Experience
          </h2>
          <div className="space-y-2.5">
            {resume.experienceOnePager.map((job) => (
              <div key={`${job.company}-${job.period}`}>
                <div className="flex flex-wrap items-baseline justify-between gap-1">
                  <h3 className="font-semibold text-sm text-stone-900 dark:text-stone-100">
                    {job.role}, {job.company}
                  </h3>
                  <span className="text-xs text-orange-600 dark:text-orange-400 font-medium">
                    {job.period}
                  </span>
                </div>
                <ul className="mt-0.5 space-y-0.5 list-disc list-inside text-xs text-stone-700 dark:text-stone-300 leading-snug">
                  {job.bullets.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <p className="text-xs text-stone-600 dark:text-stone-400 mt-0.5">
                  <strong>Tech:</strong> {job.tech}
                </p>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-t border-orange-500/50" />

        <section>
          <h2 className="text-xs font-bold text-orange-600 dark:text-orange-400 uppercase tracking-widest mb-1">
            Technical Skills
          </h2>
          <p className="text-xs text-stone-700 dark:text-stone-300 leading-snug">
            {resume.skillsOnePager}
          </p>
        </section>

        <hr className="border-t border-orange-500/50" />

        <section className="flex flex-wrap gap-x-8 gap-y-2">
          <div>
            <h2 className="text-xs font-bold text-orange-600 dark:text-orange-400 uppercase tracking-widest mb-0.5">
              Education
            </h2>
            <p className="text-xs text-stone-700 dark:text-stone-300">
              {resume.education.map((e) => `${e.degree}, ${e.school} (${e.year})`).join(" · ")}
            </p>
          </div>
          <div>
            <h2 className="text-xs font-bold text-orange-600 dark:text-orange-400 uppercase tracking-widest mb-0.5">
              Certifications
            </h2>
            <p className="text-xs text-stone-700 dark:text-stone-300">
              {resume.certifications.join(" · ")}
            </p>
          </div>
        </section>
      </article>
    </main>
  );
}
