import React from 'react'

const Careers = () => {
    return (
        <div>
            <div>
        <div className="servbanner d-flex align-items-center careerbanner">
          <div className="container">
            <h4 className="wow fadeInDown animated">careers</h4>
            <h3 className="wow fadeInUp animated">Join Our Team</h3>
          </div>
        </div>
        <div className="openpositions">
          <div className="container">
            <h3 className="titleone wow fadeInUp animated">Open Positions</h3>
            <div className="row pad_t40">
              <div className="col-md-4">
                <div className="openrow">
                  <ul>
                    <li>INDIA</li>
                    <li>HYDERABAD</li>
                  </ul>
                  <h5>AWS Lead</h5>
                  <a href="#" className="applybtn" data-toggle="modal" data-target="#get_trained"><img src="images/applynow.png" /></a>
                </div> 
              </div>
              <div className="col-md-4">
                <div className="openrow">
                  <ul>
                    <li>INDIA</li>
                    <li>HYDERABAD</li>
                  </ul>
                  <h5>DevOps</h5>
                  <a href="#" className="applybtn" data-toggle="modal" data-target="#get_trained"><img src="images/applynow.png" /></a>
                </div> 
              </div>
              <div className="col-md-4">
                <div className="openrow">
                  <ul>
                    <li>INDIA</li>
                    <li>HYDERABAD</li>
                  </ul>
                  <h5>Azure</h5>
                  <a href="#" className="applybtn" data-toggle="modal" data-target="#get_trained"><img src="images/applynow.png" /></a>
                </div> 
              </div>
            </div>
          </div>
        </div>
        <div className="lifeat">
          <div className="container">
            <h3 className="titleone wow fadeInUp animated">Life at <span>C360soft.ai</span> </h3>
            <div className="row pad_t60">
              <div className="col-md-4">
                <img src="images/lifeat360.jpg" alt="Life at C360 soft" title="Life at C360 soft" className="wow fadeInUp animated" />
              </div>
              <div className="col-md-4">
                <img src="images/lifeat360jobs.jpg" alt="Life at C360 soft" title="Life at C360 soft" className="wow fadeInDown animated" />
              </div>
              <div className="col-md-4">
                <img src="images/lifeat36.jpg" alt="Life at C360 soft" title="Life at C360 soft" className="wow fadeInUp animated" />
              </div>
            </div>
            <div className="mission row">
              <div className="col-md-8">
                <img src="images/mission.jpg" alt="Life at C360 soft" title="Life at C360 soft" className="wow fadeInUp animated" />
              </div>
              <div className="col-md-4 d-flex align-items-center">
                <div className="pad_l30">
                  <h5 className="wow fadeInRight animated">Our Mission</h5>
                  <h6 className="wow fadeInRight animated">To accelerate business transformations with AI</h6>
                  <div className="pad_t40">
                    <h5 className="wow fadeInRight animated">Vision</h5>
                    <h6 className="wow fadeInRight animated">To create the most compelling Software company</h6>
                  </div></div></div>
            </div>
            <div className="pad_t100">
              <h3 className="titleone wow fadeInUp animated"> Stay Connected </h3>
              <div className="row pad_t100">
                <div className="col-md-4">
                  <div className="stayrow">
                    <img src="images/join.png" alt="Stay Connected" title="Stay Connected" className="wow fadeInUp animated" />
                    <h5>Join Our Team</h5>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="stayrow">
                    <img src="images/uptodate.png" alt="Stay Connected" title="Stay Connected" className="wow fadeInUp animated" />
                    <h5>Keep Up to Date</h5>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="stayrow">
                    <img src="images/alerts.png" alt="Stay Connected" title="Stay Connected" className="wow fadeInUp animated" />
                    <h5>Job Alert Emails</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
   
        </div>
    )
}
export default Careers;