export type Post = {
  id: string
  frontmatter: {
    title: string
    date: string
    slug: string
    tags: string[]
    shortDescription: string
    author: string
    category: string
  }
  html?: string
}