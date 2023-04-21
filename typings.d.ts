interface Base {
  _createdAt: string
  _id: string
  _rev: string
  _type: string
  _updatedAt: string
}

interface Reference {
  ref: string
  _type: "reference"
}

interface Image {
  _type: "image"
  asset: Reference
}

interface Span {
  _key: string
  _type: "span"
  marks: string[]
  text: string
}

interface Slug {
  _type: "slug"
  current: string
}

interface Block {
  _key: string
  _type: "block"
  children: Span[]
  markDefs: any[]
  style: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote"
}

interface Home extends Base {
  title: string
  image: Image
  summary: string
}

interface About extends Base {
  title: string
  about: string
  aboutImage: Image
  education: string[]
  researchDomain: string[]
  professionalExperience: string[]
  researchCollaborations: string[]
}

interface Facility extends Base {
  title: string
  image: Image
  desc: Block[]
}

interface Contact extends Base {
  title: string
  address: Block[]
  email: string
  number: string
  linkedIn: string
}

interface Project extends Base {
  title: string
  projectInfo: Block[]
}

interface Team extends Base {
  name: string
  slug: Slug
  image: Image
  qualification: string
  shortDesc: string
  desc: Block[]
}

interface Publication extends Base {
  title: string
  publication: Block[]
}