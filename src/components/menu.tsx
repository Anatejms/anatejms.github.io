import React from "react"
import { getBlogName, getSocialLinks } from "../services/config"

const Menu = ()  => {
  const socialLinks = getSocialLinks();
  const blogName = getBlogName();

  return (
    <aside id="colorlib-aside" role="complementary" className="js-fullheight text-center">
			<h1 id="colorlib-logo"><a href="/">{blogName}<span>.</span></a></h1>
			<nav id="colorlib-main-menu" role="navigation">
				<ul>
					<li className="colorlib-active"><a href="/">Home</a></li>
					<li><a href="/category">Categories</a></li>
				</ul>
			</nav>

			<div className="colorlib-footer">
				<ul>
					{socialLinks.facebook && <li><a href={socialLinks.facebook} target="_blank"><i className="icon-facebook"></i></a></li>}
					{socialLinks.x && <li><a href={socialLinks.x} target="_blank"><i className="icon-twitter"></i></a></li>}
					{socialLinks.instagram && <li><a href={socialLinks.instagram} target="_blank"><i className="icon-instagram"></i></a></li>}
          {socialLinks.linkedin && <li><a href={socialLinks.linkedin} target="_blank"><i className="icon-linkedin"></i></a></li>}
				</ul>
			</div>
		</aside>
  )
}

export default Menu