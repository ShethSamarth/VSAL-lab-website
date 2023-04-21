"use client"

import { useState } from "react"

function ContactForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")

  const contactEmail = "akswamy@diat.ac.in"

  const submitForm = () => {
    window.open(
      `mailto:${contactEmail}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(name)} (${encodeURIComponent(
        email
      )}): ${encodeURIComponent(message)}`
    )
  }
  return (
    <div className="p-5 w-full md:w-1/2">
      <form onSubmit={submitForm}>
        <div className="mb-6">
          <input
            type="text"
            className="w-full h-14 px-3 py-1.5 outline-none bg-slate-400/10 rounded-sm border-b border-[#242424] text-gray-500 placeholder-gray-500 transition-all focus:border-[#F7AB0A]/40 focus:text-[#F7AB0A]/40 hover:border-[#F7AB0A]/40"
            placeholder="Name"
            value={name}
            size={35}
            id="contactName"
            name="contactName"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <input
            type="email"
            className="w-full h-14 px-3 py-1.5 outline-none bg-slate-400/10 rounded-sm border-b border-[#242424] text-gray-500 placeholder-gray-500 transition-all focus:border-[#F7AB0A]/40 focus:text-[#F7AB0A]/40 hover:border-[#F7AB0A]/40"
            placeholder="Email address"
            value={email}
            size={35}
            id="contactEmail"
            name="contactEmail"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <input
            type="text"
            className="w-full h-14 px-3 py-1.5 outline-none bg-slate-400/10 rounded-sm border-b border-[#242424] text-gray-500 placeholder-gray-500 transition-all focus:border-[#F7AB0A]/40 focus:text-[#F7AB0A]/40 hover:border-[#F7AB0A]/40"
            placeholder="Subject"
            value={subject}
            size={35}
            id="contactSubject"
            name="contactSubject"
            onChange={(e) => setSubject(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <textarea
            className="w-full px-3 py-1.5 outline-none bg-slate-400/10 rounded-sm border-b border-[#242424] text-gray-500 placeholder-gray-500 transition-all focus:border-[#F7AB0A]/40 focus:text-[#F7AB0A]/40 hover:border-[#F7AB0A]/40"
            rows={5}
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            id="contactMessage"
            name="contactMessage"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full h-14 px-6 py-2.5 bg-[#F7AB0A] text-black font-semibold leading-tight uppercase rounded shadow-md hover:bg-[#F7AB0A]/80 hover:shadow-lg focus:bg-[#F7AB0A] focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default ContactForm
