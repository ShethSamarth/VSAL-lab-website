import Navbar from "@/components/Navbar"
import { RichTextComponents } from "@/components/RichTextComponents"
import { client } from "@/lib/sanity.client"
import { groq } from "next-sanity"
import { PortableText } from "@portabletext/react"
import urlFor from "@/lib/urlFor"
import Image from "next/image"
import Footer from "@/components/Footer"

type Props = {
  params: {
    slug: string
  }
}

export const revalidate = 60

export async function generateStaticParams() {
  const query = groq`
    *[_type == "team"]
    {
      slug
    }
  `
  const slugs: Team[] = await client.fetch(query)
  const slugRoutes = slugs.map((slug) => slug.slug.current)

  return slugRoutes.map((slug) => ({
    slug,
  }))
}

async function TeamMember({ params: { slug } }: Props) {
  const query = groq`*[_type == "team" && slug.current == $slug][0]`

  const member: Team = await client.fetch(query, { slug })
  return (
    <div className="bg-[#242424]">
      <Navbar />
      <main className="flex flex-col md:flex-row px-10 py-20 text-white max-w-6xl mx-auto">
        <div className="w-full md:w-1/2 order-2 md:order-1">
          <h1 className="text-4xl font-semibold md:font-bold pt-8 md:pt-3">
            {member.name}
          </h1>
          <h4 className="text-2xl text-[#F7AB0A] font-semibold md:font-bold">
            {member.qualification}
          </h4>
          <div className="pt-10 text-lg">
            <PortableText value={member.desc} components={RichTextComponents} />
          </div>
        </div>
        <div className="w-full md:w-1/2 order-1 md:order-2">
          <Image
            src={urlFor(member.image).url()}
            alt={member.name}
            width={700}
            height={700}
            className="rounded-xl w-[300px] sm:w-[350px] lg:w-[500px] h-[300px] sm:h-[350px] lg:h-[500px] object-cover mx-auto"
          />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default TeamMember
