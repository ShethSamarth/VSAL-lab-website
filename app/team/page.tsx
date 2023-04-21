import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import TeamCard from "@/components/TeamCard"
import { client } from "@/lib/sanity.client"
import { groq } from "next-sanity"

export const revalidate = 60
const query = groq`*[_type=='team']`

async function TeamPage() {
  const team: Team[] = await client.fetch(query)
  return (
    <div>
      <Navbar />
      <main className="py-10 bg-[#242424] text-white">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-semibold md:font-bold p-5">Team</h1>
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10 md:px-0 py-5">
            {team.map((member) => (
              <TeamCard key={member._id} member={member} />
            ))}
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default TeamPage
