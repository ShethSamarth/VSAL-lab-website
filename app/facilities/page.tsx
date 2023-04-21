import FacilityCard from "@/components/FacilityCard"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import { client } from "@/lib/sanity.client"
import { groq } from "next-sanity"

export const revalidate = 60
const query = groq`*[_type=='facility']`

async function FacilityPage() {
  const facilities: Facility[] = await client.fetch(query)
  return (
    <div>
      <Navbar />
      <main className="py-10 bg-[#242424] text-white">
        <div className="max-w-6xl mx-auto">
          <div className="p-5">
            <h1 className="text-5xl font-semibold md:font-bold">Facilities</h1>
            <p className="py-3">
              The lab is having experimental setup capable of catering from
              basic experiments for first year M.Tech students up to advanced
              test setup for research scholars.
            </p>
          </div>
          <section className="grid grid-cols-1 md:grid-cols-2 gap-10 px-10 md:px-0">
            {facilities.map((facility) => (
              <FacilityCard key={facility._id} facility={facility} />
            ))}
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default FacilityPage
