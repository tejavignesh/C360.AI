import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div>
           <footer className="footer">
  <div className="container">
    <div className="row">
      <div className="col-md-4">
        <img src="images/logowhite.png" alt="C360" className title="C360" />
        <div className="social">
          <Link to="#"><img src="images/fb.png" alt="Logo" className title="Logo" /></Link>
          <Link to="#"><img src="images/insta.png" alt="Logo" className title="Logo" /></Link>
          <Link to="#"><img src="images/tweet.png" alt="Logo" className title="Logo" /></Link>
          <Link to="#"><img src="images/in.png" alt="Logo" className title="Logo" /></Link>
        </div>
      </div>
      <div className="col-md-4">
        <ul>
          <li> <Link to="/Artificialservicepage">    Services</Link> </li>
          <li> <Link to="/HealthCarepage">Industries</Link> </li>
          <li> <Link to="/Careerspage">Careers</Link> </li>
          <li> <Link to="/Aboutuspage">About</Link> </li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul>
          <li> <Link to="/Artificialservicepage">Artificial Intelligence</Link> </li>
          <li> <Link to="/Applicationpage">Application Services </Link> </li>
          <li> <Link to="/Cloudpage">Cloud Services</Link> </li>
          <li> <Link to="/Dataanalyspage">Data Analytics</Link> </li>
        </ul>
      </div>
    </div>
    <div className="copy">Copyright 2021 C360Soft.ai
    </div>
  </div>
</footer>
        </div>
    )
}
export default Footer