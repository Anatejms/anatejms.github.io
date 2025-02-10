import React from "react"
import { Link } from "gatsby"

const Menu = ()  => (
  <aside id="colorlib-aside" role="complementary" className="js-fullheight text-center">
			<h1 id="colorlib-logo"><a href="index.html">elen<span>.</span></a></h1>
			<nav id="colorlib-main-menu" role="navigation">
				<ul>
					<li className="colorlib-active"><a href="/">Home</a></li>
					<li><a href="photography.html">Photography</a></li>
					<li><a href="travel.html">Travel</a></li>
					<li><a href="fashion.html">Fashion</a></li>
					<li><a href="about.html">About</a></li>
					<li><a href="contact.html">Contact</a></li>
				</ul>
			</nav>

			<div className="colorlib-footer">
				<ul>
					<li><a href="#"><i className="icon-facebook"></i></a></li>
					<li><a href="#"><i className="icon-twitter"></i></a></li>
					<li><a href="#"><i className="icon-instagram"></i></a></li>
					<li><a href="#"><i className="icon-linkedin"></i></a></li>
				</ul>
			</div>
		</aside>
)

export default Menu