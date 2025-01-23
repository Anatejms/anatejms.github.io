import React from "react"
import { Link } from "gatsby"
import { Post } from "../types/post"

const PostCardComponent = ({ post }: {post: Post})  => (
  <div className="col-md-4">
    <div className="blog-entry">
      <Link to={`${post.frontmatter.slug}`} className="img img-2" style={{backgroundImage: 'url(/static/images/image_1.jpg)'}}></Link>
      <div className="text text-2 pt-2 mt-3">
        <span className="category mb-3 d-block"><a href="#">Technology</a></span>
        <h3 className="mb-4"><Link to={`${post.frontmatter.slug}`}>{post.frontmatter.title}</Link></h3>
        <p className="mb-4">Even the all-powerful Pointing has no control about the blind texts it is an almost</p>
        <div className="author mb-4 d-flex align-items-center">
          <a href="#" className="img" style={{backgroundImage: 'url(/static/images/person_2.jpg)'}}></a>
          <div className="ml-3 info">
            <span>Written by</span>
            <h3><a href="#">Dave Lewis</a>, <span>{post.frontmatter.date}</span></h3>
          </div>
        </div>
        <div className="meta-wrap align-items-center">
          <div className="half order-md-last">
            <p className="meta">
              <span><i className="icon-heart"></i>3</span>
              <span><i className="icon-eye"></i>100</span>
              <span><i className="icon-comment"></i>5</span>
            </p>
          </div>
          <div className="half">
            <p><Link to={`${post.frontmatter.slug}`} className="btn py-2">Continue Reading <span className="ion-ios-arrow-forward"></span></Link></p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default PostCardComponent