import urlFor from "@/lib/urlFor"
import { PortableText } from "@portabletext/react"
import Image from "next/image"
import { RichTextComponents } from "./RichTextComponents"

interface Props {
  facility: Facility
}

function FacilityCard({ facility }: Props) {
  return (
    <article className="mx-auto rounded-xl bg-[#353535]">
      <Image
        src={urlFor(facility.image.asset).url()}
        width={500}
        height={500}
        alt={facility.title}
        className="rounded-t-xl w-full h-72 object-cover"
      />
      <div className="p-5">
        <h3 className="underline text-lg font-bold">{facility.title}</h3>
        <div className="text-white/60 py-3">
          <PortableText value={facility.desc} components={RichTextComponents} />
        </div>
      </div>
    </article>
  )
}

export default FacilityCard
