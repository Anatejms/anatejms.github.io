import React from "react"
import { Link } from "gatsby"
import { getAddress, getEmail } from "../services/config"

const Footer = ()  => {
  const email = getEmail();
  const address = getAddress();

  return (
    <footer className="ftco-footer ftco-bg-dark ftco-section">
      <div className="container px-md-5">
        <div className="row mb-5">
          <div className="col-md">
            <div className="ftco-footer-widget mb-4 ml-md-4">
              <h2 className="ftco-heading-2">Category</h2>
              <ul className="list-unstyled categories">
                <li><a href="#">Photography <span>(6)</span></a></li>
                <li><a href="#">Fashion <span>(8)</span></a></li>
                <li><a href="#">Technology <span>(2)</span></a></li>
                <li><a href="#">Travel <span>(2)</span></a></li>
              </ul>
            </div>
          </div>
          <div className="col-md">
              <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Archives</h2>
              <ul className="list-unstyled categories">
                <li><a href="#">October 2018 <span>(6)</span></a></li>
                <li><a href="#">September 2018 <span>(6)</span></a></li>
                <li><a href="#">August 2018 <span>(8)</span></a></li>
                <li><a href="#">July 2018 <span>(2)</span></a></li>
                <li><a href="#">June 2018 <span>(7)</span></a></li>
              </ul>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
              <div className="block-23 mb-3">
                <ul>
                  <li><span className="icon icon-map-marker"></span><span className="text">{address}</span></li>
                  <li><a href={`mailto:${email}`} aria-label="contact email"><span className="icon icon-envelope"></span><span className="text">{email}</span></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <p>
            Copyright &copy; 2025 All rights reserved | This template is made with <i className="icon-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank" aria-label="colorlib">Colorlib</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer