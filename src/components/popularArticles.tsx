import React from "react"
import { Link } from "gatsby"

const PopularArticles = ()  => (
  <div className="sidebar-box">
    <h3 className="sidebar-heading">Popular Articles</h3>
    <div className="block-21 mb-4 d-flex">
      <a className="blog-img mr-4" style={{backgroundImage: "url(/static/images/image_1.jpg)"}}></a>
      <div className="text">
        <h3 className="heading"><a href="#">Even the all-powerful Pointing has no control</a></h3>
        <div className="meta">
          <div><a href="#"><span className="icon-calendar"></span> Oct. 04, 2018</a></div>
          <div><a href="#"><span className="icon-person"></span> Dave Lewis</a></div>
          <div><a href="#"><span className="icon-chat"></span> 19</a></div>
        </div>
      </div>
    </div>
    <div className="block-21 mb-4 d-flex">
      <a className="blog-img mr-4" style={{backgroundImage: "url(/static/images/image_2.jpg)"}}></a>
      <div className="text">
        <h3 className="heading"><a href="#">Even the all-powerful Pointing has no control</a></h3>
        <div className="meta">
          <div><a href="#"><span className="icon-calendar"></span> Oct. 04, 2018</a></div>
          <div><a href="#"><span className="icon-person"></span> Dave Lewis</a></div>
          <div><a href="#"><span className="icon-chat"></span> 19</a></div>
        </div>
      </div>
    </div>
    <div className="block-21 mb-4 d-flex">
      <a className="blog-img mr-4" style={{backgroundImage: 'url(/static/images/image_3.jpg)'}}></a>
      <div className="text">
        <h3 className="heading"><a href="#">Even the all-powerful Pointing has no control</a></h3>
        <div className="meta">
          <div><a href="#"><span className="icon-calendar"></span> Oct. 04, 2018</a></div>
          <div><a href="#"><span className="icon-person"></span> Dave Lewis</a></div>
          <div><a href="#"><span className="icon-chat"></span> 19</a></div>
        </div>
      </div>
    </div>
  </div>
)

export default PopularArticles