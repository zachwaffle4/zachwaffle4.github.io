export const metadata = {
  title: 'Resume',
  description: "Zachary Harel's resume",
}

export default function ResumePage() {
  return (
    <section>
      <h1 className="mb-2 text-2xl font-semibold tracking-tighter">ZACHARY HAREL</h1>
      <p className="mb-6 text-neutral-700 dark:text-neutral-300">
        Computer Science and Biology student at Northeastern University with experience in machine learning research and robotics/control theory. Looking for internships in the bioinformatics, computational biology, or general software roles.
      </p>

      <div className="space-y-8">
        <section>
          <h2 className="text-xl font-semibold tracking-tight mb-2">Contact</h2>
          <ul className="list-disc ml-5 space-y-1">
            <li>
              <strong>Email:</strong> <a className="underline" href="mailto:zach@zharel.me">zach@zharel.me</a>
            </li>
            <li>
              <strong>Website:</strong> <a className="underline" href="https://zharel.me/" target="_blank" rel="noreferrer noopener">https://zharel.me/</a>
            </li>
            <li>
              <strong>GitHub:</strong> <a className="underline" href="https://github.com/zachwaffle4" target="_blank" rel="noreferrer noopener">https://github.com/zachwaffle4</a>
            </li>
            <li>
              <strong>Phone:</strong> (516) 460-2295
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold tracking-tight mb-2">Education</h2>
          <div className="space-y-4">
            <div>
              <div className="font-semibold">Northeastern University <span className="text-neutral-500">| Boston, MA</span></div>
              <div className="italic">BS, Computer Science and Biology</div>
              <div>John Martison Honors Program</div>
              <div className="text-sm text-neutral-600 dark:text-neutral-400">Sept. 2025 - May 2029 (Expected)</div>
            </div>
            <div>
              <div className="font-semibold">Half Hollow Hills High School West <span className="text-neutral-500">| Dix Hills, NY</span></div>
              <div className="italic">High School Diploma</div>
              <div>Academic Research Program Participant</div>
              <div className="text-sm text-neutral-600 dark:text-neutral-400">Sept. 2021 - June 2025</div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold tracking-tight mb-2">Experience</h2>
          <div className="space-y-4">
            <div>
              <div className="font-semibold">Machine Learning Intern <span className="text-neutral-500">| EduBeyond</span></div>
              <div className="italic text-sm text-neutral-600 dark:text-neutral-400">December 2023 - February 2024</div>
              <ul className="list-disc ml-5 mt-1 space-y-1">
                <li>Created and deployed large language model-backed systems to demonstrate to clients including the use of the ChatGPT API and Flowchat libraries</li>
                <li>Developed company website features using React</li>
              </ul>
            </div>
            <div>
              <div className="font-semibold">Student Event Team Volunteer <span className="text-neutral-500">| FIRST Long Island</span></div>
              <div className="italic text-sm text-neutral-600 dark:text-neutral-400">December 2023 - Present</div>
              <ul className="list-disc ml-5 mt-1 space-y-1">
                <li>Set up and managed FIRST Tech Challenge and FIRST Lego League events and ensured successful events, including the use of proprietary scoring software</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold tracking-tight mb-2">Open-Source</h2>
          <div className="space-y-4">
            <div>
              <div className="font-semibold">NextFTC <span className="text-neutral-500">| Maintainer</span></div>
              <div className="text-sm text-neutral-600 dark:text-neutral-400">2025 - Present | <a className="underline" href="https://nextftc.dev/" target="_blank" rel="noreferrer noopener">https://nextftc.dev/</a></div>
              <ul className="list-disc ml-5 mt-1 space-y-1">
                <li>Developed libraries used in the FIRST Tech Challenge, including for the creation of command-based robot code and control system code</li>
              </ul>
            </div>
            <div>
              <div className="font-semibold">RoadRunner <span className="text-neutral-500">| Contributor</span></div>
              <div className="text-sm text-neutral-600 dark:text-neutral-400">2024 - Present | <a className="underline" href="https://rr.brott.dev/" target="_blank" rel="noreferrer noopener">https://rr.brott.dev/</a></div>
              <ul className="list-disc ml-5 mt-1 space-y-1">
                <li>Developed localization code for FIRST Tech Challenge motion planning library, and integrated new sensors into library and quickstart code</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold tracking-tight mb-2">Skills</h2>
          <ul className="list-disc ml-5 space-y-1">
            <li><strong>Programming Languages:</strong> Python (PyTorch, NumPy), Java, Kotlin, JavaScript/TypeScript (React)</li>
            <li><strong>Technical Skills:</strong> Data Analysis, Controls, Git</li>
            <li><strong>Productivity Tools:</strong> Microsoft 365, Google Workspace</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold tracking-tight mb-2">Awards</h2>
          <ul className="list-disc ml-5 space-y-1">
            <li><strong>National Merit Scholar</strong> (2025)</li>
            <li><strong>Rensselaer Medal</strong> (2024)</li>
            <li><strong>FIRST Tech Challenge: Dean's List Semifinalist</strong> (2024)</li>
          </ul>
        </section>
      </div>
    </section>
  )
}
