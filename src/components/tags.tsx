import React from "react"
import { Link } from "gatsby"

type TagsData = {
  tags: string[]
}

const Tags = ({ tags = [] }: TagsData)  => (
  <div className="tag-widget post-tag-container mb-5 mt-5">
    <div className="tagcloud">
      {tags.map(tag => {
        return (
          <a href="#" key={`tag-${tag}`} className="tag-cloud-link">{tag}</a>
        )
      })}
    </div>
  </div>
)

export default Tags