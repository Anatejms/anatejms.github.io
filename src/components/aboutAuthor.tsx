import React from "react"
import { Author } from "../services/authors"

const AboutAuthor = ({author}: {author: Author})  => (
  <div className="about-author d-flex p-4 bg-light">
    {author.image && (
      <div className="bio mr-5">
        <img src={author.image} alt="Image placeholder" className="img-fluid mb-4" />
      </div>
    )}
    <div className="desc">
      <h3>{author.name}</h3>
      <p>{author.bio}</p>
    </div>
  </div>
)

export default AboutAuthor