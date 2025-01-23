export type Post = {
  id: string
  frontmatter: {
    title: string
    date: string
    slug: string
    tags: string[]
  }
  html: string
}