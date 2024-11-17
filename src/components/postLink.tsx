import React from "react"
import { Link } from "gatsby"
import { Post } from "../types/post"

const PostLink = ({ post }: {post: Post})  => (
  <div>
    <Link to={`/blog${post.frontmatter.slug}`}>
      {post.frontmatter.title} ({post.frontmatter.date})
    </Link>
  </div>
)

export default PostLink