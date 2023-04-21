import { defineField, defineType } from "sanity"

export default defineType({
  name: "contact",
  title: "Contact",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "address",
      title: "Address",
      type: "array",
      of: [
        {
          title: "Block",
          type: "block",
          styles: [{ title: "Normal", value: "normal" }],
          lists: [],
        }
      ],
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),
    defineField({
      name: "number",
      title: "Number",
      type: "string",
    }),
    defineField({
      name: "linkedIn",
      title: "LinkedIn",
      type: "url",
    }),
  ],
})
