import React, { ReactNode } from "react"
import { Link } from "gatsby"
import '../css/open-iconic-bootstrap.min.css'
import '../css/animate.css'
import '../css/owl.carousel.min.css'
import '../css/owl.theme.default.min.css'
import '../css/magnific-popup.css'
import '../css/aos.css'
import '../css/ionicons.min.css'
import '../css/bootstrap-datepicker.css'
import '../css/jquery.timepicker.css'
import '../css/flaticon.css'
import '../css/icomoon.css'
import '../css/style.css'
import Menu from "../components/menu"
import Footer from "../components/footer"
import Hello from "../components/hello"

export default function Layout({ children }: {children: Iterable<ReactNode> | ReactNode}) {
  return (
    <>
      <div id="colorlib-page">
		    <a href="#" className="js-colorlib-nav-toggle colorlib-nav-toggle"><i></i></a>
		    <Menu />
		    <div id="colorlib-main">
          {children}
          <Footer />
		    </div>
	    </div>
      {/* <div id="ftco-loader" className="show fullscreen"><svg className="circular" width="48px" height="48px"><circle className="path-bg" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke="#eeeeee"/><circle className="path" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke-miterlimit="10" stroke="#F96D00"/></svg></div> */}
    </>
  )
}

export const Head = () => (
  <>
    <title>Elen - Free Bootstrap 4 Template by Colorlib</title>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <script src="js/jquery.min.js"></script>
    <script src="js/jquery-migrate-3.0.1.min.js"></script>
    <script src="js/popper.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/jquery.easing.1.3.js"></script>
    <script src="js/jquery.waypoints.min.js"></script>
    <script src="js/jquery.stellar.min.js"></script>
    <script src="js/owl.carousel.min.js"></script>
    <script src="js/jquery.magnific-popup.min.js"></script>
    <script src="js/aos.js"></script>
    <script src="js/jquery.animateNumber.min.js"></script>
    <script src="js/bootstrap-datepicker.js"></script>
    <script src="js/jquery.timepicker.min.js"></script>
    <script src="js/scrollax.min.js"></script>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBVWaKrjvy3MaE7SQ74_uJiULgl1JY0H2s&sensor=false"></script>
    <script src="js/google-map.js"></script>
    <script src="js/main.js"></script>
  </>
)