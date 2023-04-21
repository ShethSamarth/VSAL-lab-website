import urlFor from "@/lib/urlFor"
import Image from "next/image"
import Link from "next/link"

interface Props {
  member: Team
}

function TeamCard({member}: Props) {
  return (
    <Link
      href={`/team/${member.slug.current}`}
      className="relative mx-auto rounded-xl bg-[#353535] hover:scale-110 transition-all duration-200 ease-out"
    >
      <Image
        src={urlFor(member.image.asset).url()}
        width={500}
        height={500}
        alt=""
        className="rounded-t-xl w-full h-80 object-cover"
      />
      <div className="p-5">
        <h3 className="text-lg font-bold">{member.name}</h3>
        <h6 className="pt-1 text-[#F7AB0A]/50">{member.qualification}</h6>
        <p className="text-white/60 py-3 italic font-medium pb-7">
          {member.shortDesc}
        </p>
      </div>
      <p className="absolute bottom-0 font-semibold p-5 text-[#F7AB0A] rounded-b-xl">
        Read More
      </p>
    </Link>
  )
}

export default TeamCard
