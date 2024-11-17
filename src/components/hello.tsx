import React from "react"
import { Link } from "gatsby"

const Hello = ()  => (
  <div className="hero-wrap js-fullheight" style={{backgroundImage: 'url(/static/images/bg_1.jpg)'}} data-stellar-background-ratio="0.5">
    <div className="overlay"></div>
    <div className="js-fullheight d-flex justify-content-center align-items-center">
      <div className="col-md-8 text text-center">
        <div className="img mb-4" style={{backgroundImage: 'url(/static/images/author.jpg)'}}></div>
        <div className="desc">
          <h2 className="subheading">Hello I'm</h2>
          <h1 className="mb-4">Elen Henderson</h1>
          <p className="mb-4">I am A Blogger Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
          <p><a href="#" className="btn-custom">More About Me <span className="ion-ios-arrow-forward"></span></a></p>
        </div>
      </div>
    </div>
  </div>
)

export default Hello