import Navbar from "@/components/Navbar"
import { client } from "@/lib/sanity.client"
import { groq } from "next-sanity"
import { RichTextComponents } from "@/components/RichTextComponents"
import { PortableText } from "@portabletext/react"
import Footer from "@/components/Footer"

export const revalidate = 60
const query = groq`*[_type=='project'] | order(_createdAt asc)`

async function ProjectsPage() {
  const projects: Project[] = await client.fetch(query)
  return (
    <div>
      <Navbar />
      <main className="py-10 bg-[#242424] text-white">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-semibold md:font-bold px-5 py-10">
            Our Work
          </h1>
          <section className="grid grid-cols-1 md:grid-cols-2 gap-10 px-10 md:px-0">
            {projects.map((project, i) => (
              <article
                key={project._id}
                className="mx-auto rounded-xl bg-[#353535]"
              >
                <div className="p-5">
                  <h3 className="text-3xl font-semibold">0{i + 1}</h3>
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <div className="text-white/60 text-lg py-3">
                    <PortableText
                      value={project.projectInfo}
                      components={RichTextComponents}
                    />
                  </div>
                </div>
              </article>
            ))}
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default ProjectsPage
