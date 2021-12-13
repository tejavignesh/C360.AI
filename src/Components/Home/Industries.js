import React from 'react'

const Industries = () => {
    return (
            <div>
  <div className="sticky-stopper" />
  <div className="industriesrow">
    <div className="container">
      <h2 className="titleone wow fadeInUp animated">Industries</h2>
      <div className="industriestabs">
        <ul className="nav nav-tabs wow fadeInUp animated">
          <li className>
            <a data-toggle="tab" href="#finance" className="active"> <span className="fi-icon"> <i /> </span> Finance</a>
          </li>
          <li>
            <a data-toggle="tab" href="#healthcare"> <span className="he-icon"> <i /> </span>HealthCare</a>
          </li>
          <li>
            <a data-toggle="tab" href="#supply"> <span className="su-icon"> <i /> </span>Supply Chain &amp;
              <br /> Logistics</a>
          </li>
          <li>
            <a data-toggle="tab" href="#manufacturing"> <span className="ma-icon"> <i /> </span>Manufacturing</a>
          </li>
          <li>
            <a data-toggle="tab" href="#retail"> <span className="re-icon"> <i /> </span>Retail</a>
          </li>
          <li>
            <a data-toggle="tab" href="#telecommunications"> <span className="te-icon"> <i /> </span>Telecommunications</a>
          </li>
          <li>
            <a data-toggle="tab" href="#automobile"> <span className="au-icon"> <i /> </span>Automobile</a>
          </li>
          <li>
            <a data-toggle="tab" href="#education"> <span className="ed-icon"> <i /> </span>Education</a>
          </li>
          <li>
            <a data-toggle="tab" href="#insurance"> <span className="in-icon"> <i /> </span>Insurance</a>
          </li>
          <li>
            <a data-toggle="tab" href="#marketing"> <span className="mar-icon"> <i /> </span>Marketing</a>
          </li>
        </ul>
      </div></div></div></div>
    )
}
export default Industries;