import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import { client } from "@/lib/sanity.client"
import urlFor from "@/lib/urlFor"
import { groq } from "next-sanity"
import Image from "next/image"

export const revalidate = 60
const query = groq`*[_type=='about'][0]`

async function ABoutPage() {
  const about: About = await client.fetch(query)
  return (
    <div>
      <Navbar />
      <main className="py-10 items-center bg-[#242424] text-white">
        <div className="flex flex-col md:flex-row px-10">
          <article className="w-full md:w-1/2 pb-5 md:pb-0">
            <h1 className="text-5xl font-semibold md:font-bold py-5">
              {about.title}
            </h1>
            <p className="text-base md:text-lg text-justify">{about.about}</p>
          </article>
          <div className="w-full md:w-1/2">
            <Image
              src={urlFor(about.aboutImage.asset).url()}
              width={700}
              height={700}
              alt=""
              className="rounded-lg w-[300px] sm:w-[350px] lg:w-[500px] h-[300px] sm:h-[350px] lg:h-[500px] object-cover mx-auto z-0"
            />
          </div>
        </div>
        <div className="bg-[#F7AB0A]/10 flex flex-col md:flex-row my-10 py-5 px-10 md:px-20 lg:px-24 space-x-0 md:space-x-10">
          <div className="w-full md:w-1/2">
            <h3 className="text-4xl md:text-5xl font-semibold md:font-bold py-7">
              Education
            </h3>
            <ul className="list-disc pl-3 text-md md:text-lg text-justify space-y-4">
              {about.education.map((edu) => (
                <li key={edu}>{edu}</li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="text-4xl md:text-5xl font-semibold md:font-bold py-7">
              Research domain
            </h3>
            <ul className="list-disc pl-3 text-md md:text-lg text-justify space-y-2">
              {about.researchDomain.map((rs) => (
                <li key={rs}>{rs}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="px-10 md:px-20 w-full md:w-3/5 lg:w-1/2 mx-auto">
          <h3 className="text-4xl md:text-5xl font-semibold md:font-bold py-7">
            Professional Experience:
          </h3>
          <ul className="list-disc pl-3 text-md md:text-lg text-justify space-y-2">
            {about.professionalExperience.map((pe) => (
              <li key={pe}>{pe}</li>
            ))}
          </ul>
        </div>
        <div className="px-10 md:px-20 w-full md:w-4/5 lg:w-3/5 mx-auto py-5">
          <h3 className="text-4xl md:text-5xl font-semibold md:font-bold py-7">
            Research Collaborations:
          </h3>
          <ul className="list-disc pl-3 text-md md:text-lg text-justify space-y-2">
            {about.researchCollaborations.map((rc) => (
              <li key={rc}>{rc}</li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default ABoutPage
