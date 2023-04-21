import ContactForm from "@/components/ContactForm"
import Navbar from "@/components/Navbar"
import { RichTextComponents } from "@/components/RichTextComponents"
import { client } from "@/lib/sanity.client"
import { groq } from "next-sanity"
import { PortableText } from "@portabletext/react"
import Image from "next/image"
import Link from "next/link"
import Footer from "@/components/Footer"

export const revalidate = 60
const query = groq`*[_type=='contact'][0]`

async function ContactPage() {
  const contact: Contact = await client.fetch(query)
  return (
    <div>
      <Navbar />
      <main className="flex bg-[#242424] text-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row py-10 md:py-20">
          <div className="p-5 w-full md:w-1/2">
            <h1 className="text-5xl font-semibold md:font-bold">
              {contact.title}
            </h1>
            <div className="py-3 text-lg">
              <PortableText
                value={contact.address}
                components={RichTextComponents}
              />
            </div>
            <p className="py-3 text-lg">{contact.email}</p>
            <p className="py-3 text-lg">{contact.number}</p>
            <Link href={contact.linkedIn} target="_blank" className="pt-10">
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </Link>
          </div>
          <ContactForm />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default ContactPage
