import React from "react"
import { getBlogName, getShortDescription } from "../services/config"

const Hello = ()  => {
  const name = getBlogName();
  const shortDescription = getShortDescription();
  
  return (
    <div className="hero-wrap js-fullheight" style={{backgroundImage: 'url(/images/bg_1.jpg)'}} data-stellar-background-ratio="0.5">
      <div className="overlay"></div>
      <div className="js-fullheight d-flex justify-content-center align-items-center">
        <div className="col-md-8 text text-center">
          <div className="img mb-4" style={{backgroundImage: 'url(/images/person_1.jpg)'}}></div>
          <div className="desc">
            <h2 className="subheading">Hello I'm</h2>
            <h1 className="mb-4">{name}</h1>
            <p className="mb-4">{shortDescription}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hello