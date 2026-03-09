import { resume } from "@/data/resume";

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto p-10">

      <h1 className="text-4xl font-bold">
        {resume.name}
      </h1>

      <p className="text-xl text-gray-500">
        {resume.title}
      </p>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold">Summary</h2>
        <p className="mt-2">{resume.summary}</p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold">Core Expertise</h2>

        <div className="flex flex-wrap gap-2 mt-3">
          {resume.expertise.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 bg-gray-200 rounded"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold">Experience</h2>

        {resume.companies.map((job) => (
          <div key={job.company} className="mt-4">
            <h3 className="font-bold">
              {job.role} — {job.company}
            </h3>
            <p className="text-gray-500">{job.period}</p>
          </div>
        ))}
      </section>

    </main>
  );
}