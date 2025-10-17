import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Hi, I'm Zachary Harel
      </h1>
      <p className="mb-4 text-neutral-700 dark:text-neutral-300">
        I'm a Computer Science and Biology student at Northeastern University with experience in machine learning research and robotics/control systems. I'm especially interested in bioinformatics, computational biology, and general software engineering internships.
      </p>
      <p className="mb-6 text-neutral-700 dark:text-neutral-300">
        I maintain <a className="underline" href="https://nextftc.dev/" target="_blank" rel="noreferrer noopener">NextFTC</a> and contribute to <a className="underline" href="https://rr.brott.dev/" target="_blank" rel="noreferrer noopener">RoadRunner</a>. Previously, I was an ML intern at EduBeyond. You can find more on my <a className="underline" href="https://github.com/zachwaffle4" target="_blank" rel="noreferrer noopener">GitHub</a> or view my <a className="underline" href="/resume">resume</a>.
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
