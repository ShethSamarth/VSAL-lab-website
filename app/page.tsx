import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import { client } from "@/lib/sanity.client"
import urlFor from "@/lib/urlFor"
import { groq } from "next-sanity"
import Image from "next/image"

export const revalidate = 60
const query = groq`*[_type=='home'][0]`

export default async function Home() {
  const home: Home = await client.fetch(query)
  return (
    <div>
      <Navbar />
      <main className="flex flex-col md:flex-row py-20 px-10 items-center bg-[#242424] text-white">
        <div className="w-full md:w-1/2">
          <Image
            src={urlFor(home.image.asset).url()}
            width={700}
            height={700}
            alt="Lab Image"
            className="rounded-full w-[300px] sm:w-[350px] lg:w-[500px] h-[300px] sm:h-[350px] lg:h-[500px] object-cover mx-auto z-0"
          />
        </div>
        <article className="w-full md:w-1/2">
          <h1 className="text-5xl font-semibold md:font-bold py-5">
            {home.title}
          </h1>
          <p className="text-base md:text-lg text-justify">{home.summary}</p>
        </article>
      </main>
      <Footer />
    </div>
  )
}
