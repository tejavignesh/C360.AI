import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <div className="herobanner">
  <div className="container">
    <div className="show-on-scroll">
      {/* <div className="heading"> */}
        <h1>
          The Future of<br />
          <span> AI </span> Is here </h1>
        <p><Link href="#" className data-toggle="modal" data-target="#get_trained">Get In Touch</Link> </p>
      {/* </div> */}
    </div>
  </div>
  <div className="globe zoom"> <img src="images/world.svg" className alt="C360 soft" title="C360 soft" width={1920} height={556} /> </div>
</div>
            
        </div>
    )
}
export default About
