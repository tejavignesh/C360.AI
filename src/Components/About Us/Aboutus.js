import React from 'react'

const Aboutus = () => {
    return (
        <div>
            <div>
        <div className="servbanner d-flex align-items-center aboutbanner">
          <div className="container">
            <h4 className="wow fadeInDown animated">About Us</h4>
            <div className="aboutinfo wow fadeInUp animated">
              C360 Software is a global services company with leading capabilities in AI, cloud. C360 Software Team works with the C-Suite of the Fortune 500 to drive transformational business growth. C360 delivers services for developing, deploying, and operating large-scale AI and Cloud.
            </div>
          </div>
        </div>
        <div className="leadership">
          <div className="container">
            <div className="row">
              <div className="col-md-4 text-center d-flex align-items-center">
                <div className="fullwidth">
                  <h4 className="wow fadeInUp animated"> <span>200+ </span><br />
                    Global Employees</h4></div>
              </div>
              <div className="col-md-4">  <img src="images/leader1.jpg" alt="Experience" title="Experience" className="wow fadeInUp animated" /></div>
              <div className="col-md-4 text-center d-flex align-items-center">
                <div className="fullwidth">
                  <h4 className="wow fadeInUp animated">Leadership with <br /><span>  20+ Years</span> of Experience</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="whatwedo">
          <div className="container">
            <h3 className="titleone wow fadeInUp animated text-center">WHAT WE DO</h3>
            <img src="images/acce.jpg" alt="Transformations" title="Transformations" className="wow fadeInUp animated pad_t80" /> 
            <h5 className="wow fadeInUp animated">We Accelerate <span> Business Transformations</span> </h5>
          </div>
        </div>
        <div className="ourvision">
          <div className="container">
            <div className="row">
              <div className="col-md-4 d-flex align-items-center">
                <div>
                  <img src="images/eye.png" alt="Vision" title="Vision" className="wow fadeInUp animated" />
                  <h5 className="wow fadeInLeft animated">Vision</h5>
                  <p className="wow fadeInLeft animated">To create the most compelling Software company</p>
                </div>
              </div>
              <div className="col-md-4 text-center">
                <img src="images/vissionmission.png" alt="Vision" title="Vision" className="wow fadeInUp animated" />
              </div>
              <div className="col-md-4  d-flex align-items-center">
                <div className="pad_l50">
                  <img src="images/goal.png" alt="Vision" title="Vision" className="wow fadeInUp animated" />
                  <h5 className="wow fadeInLeft animated">Mission</h5>
                  <p className="wow fadeInLeft animated">To accelerate business transformations with AI.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="locations">
          <div className="container">
            <h4 className="titleone wow fadeInDown animated">Location</h4>
            <div className="row pad_t80">
              <div className="col-md-3">
                <img src="images/india.jpg" alt="India" title="India" className="wow fadeInUp animated" />
                <h5>India</h5>
              </div>
              <div className="col-md-3">
                <img src="images/singapoor.jpg" alt="Singapore" title="Singapore" className="wow fadeInUp animated" />
                <h5>Singapore</h5>
              </div>
              <div className="col-md-3">
                <img src="images/germany.jpg" alt="Germany" title="Germany" className="wow fadeInUp animated" />
                <h5>Germany</h5>
              </div>
              <div className="col-md-3">
                <img src="images/america.jpg" alt="America" title="America" className="wow fadeInUp animated" />
                <h5>America</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="contactinfo">
          <div className="container">
            <div className="row">
              <div className="col-md-6 d-flex align-items-center"> 
                <div>
                  <h3 className="titletwo wow fadeInDown animated">Contact Information</h3>
                  <div className="pad_b30">
                    <span><img src="images/phone.png" alt="Contact Information" title="Contact Information" className="wow fadeInUp animated" /></span> <a href="tel:+14085209365">+14085209365</a></div>
                  <div> <span><img src="images/mail.png" alt="Contact Information" title="Contact Information" className="wow fadeInUp animated" /></span> 
                    <a href="mailto:info@c360soft.ai">info@c360soft.ai</a></div>
                </div>
              </div>
              <div className="col-md-6">
                <img src="images/hello.jpg" alt="Contact Information" title="Contact Information" className="wow fadeInUp animated" />
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
    )
}
export default Aboutus;