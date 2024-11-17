import React from "react"
import { Link } from "gatsby"

const TagCloud = ()  => (
  <div className="sidebar-box">
    <h3 className="sidebar-heading">Tag Cloud</h3>
    <ul className="tagcloud">
      <a href="#" className="tag-cloud-link">animals</a>
      <a href="#" className="tag-cloud-link">human</a>
      <a href="#" className="tag-cloud-link">people</a>
      <a href="#" className="tag-cloud-link">cat</a>
      <a href="#" className="tag-cloud-link">dog</a>
      <a href="#" className="tag-cloud-link">nature</a>
      <a href="#" className="tag-cloud-link">leaves</a>
      <a href="#" className="tag-cloud-link">food</a>
    </ul>
  </div>
)

export default TagCloud