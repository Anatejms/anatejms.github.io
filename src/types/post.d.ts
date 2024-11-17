export type Post = {
  id: string
  frontmatter: {
    title: string
    date: string
    slug: string
  }
  html: string
}