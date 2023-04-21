import Navbar from "@/components/Navbar"
import { client } from "@/lib/sanity.client"
import { groq } from "next-sanity"
import { RichTextComponents } from "@/components/RichTextComponents"
import { PortableText } from "@portabletext/react"
import Footer from "@/components/Footer"

export const revalidate = 60
const query = groq`*[_type=='publication'][0]`

async function PublicationsPage() {
  const publication: Publication = await client.fetch(query)
  return (
    <div>
      <Navbar />
      <main className="py-10 bg-[#242424] text-white">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-semibold md:font-bold p-5">
            {publication.title}
          </h1>
          <div className="py-3">
            <PortableText
              value={publication.publication}
              components={RichTextComponents}
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default PublicationsPage
