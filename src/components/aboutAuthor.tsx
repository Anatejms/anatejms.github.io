import React from "react"
import { Link } from "gatsby"

const AboutAuthor = ()  => (
  <div className="about-author d-flex p-4 bg-light">
    <div className="bio mr-5">
      <img src="/static/images/person_1.jpg" alt="Image placeholder" className="img-fluid mb-4" />
    </div>
    <div className="desc">
      <h3>George Washington</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!</p>
    </div>
  </div>
)

export default AboutAuthor