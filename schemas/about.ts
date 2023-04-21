import { defineField, defineType } from "sanity"

export default defineType({
  name: "about",
  title: "About",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "about",
      title: "About",
      type: "text",
    }),
    defineField({
      name: "aboutImage",
      title: "About Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "education",
      title: "Education",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "researchDomain",
      title: "Research Domain",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "professionalExperience",
      title: "Professional Experience",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "researchCollaborations",
      title: "Research Collaborations",
      type: "array",
      of: [{ type: "string" }]
    }),
  ],
})
