import React from "react"
import { Link } from "gatsby"
import { Post } from "../types/post"
import { Authors } from "../services/authors";

const PostCardComponent = ({ post }: {post: Post})  => {
  const author = Authors(post.frontmatter.author);

  return (
    <div className="col-md-4">
      <div className="blog-entry">
        <Link to={`${post.frontmatter.slug}`} className="img img-2" style={{backgroundImage: 'url(/images/image_2.jpg)'}}></Link>
        <div className="text text-2 pt-2 mt-3">
          <span className="category mb-3 d-block"><a href={`/categories/${post.frontmatter.category}`}>{post.frontmatter.category}</a></span>
          <h3 className="mb-4"><Link to={`${post.frontmatter.slug}`}>{post.frontmatter.title}</Link></h3>
          <p className="mb-4">{post.frontmatter.shortDescription}</p>
          <div className="author mb-4 d-flex align-items-center">
            {author.image && <a href="#" className="img" style={{backgroundImage: `url(${author.image})`}}></a>}
            <div className="ml-3 info">
              <span>Written by</span>
              <h3><a href="#">{author.name}</a>, <span>{new Date(post.frontmatter.date).toLocaleDateString()}</span></h3>
            </div>
          </div>
          <div className="meta-wrap align-items-center">
            <div className="half">
              <p><Link to={`${post.frontmatter.slug}`} className="btn py-2">Continue Reading <span className="ion-ios-arrow-forward"></span></Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default PostCardComponent