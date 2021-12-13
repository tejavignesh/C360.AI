import React from 'react'
import Services from './Home/Services';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
const Header = () => {
    return (
        <div>
           <header class="header hedinner fixed-header">    
  <div class="container">
    <div class="row ">
      <div class="col-md-3 col-sm-3"><Link to="/">
        
        <img src="images/logowhite.png" alt="Logo" class="logo staticlogo"/></Link>
        
      </div>
      <div class="col-md-9 col-sm-9 text-right d-flex align-items-center">
        <div class="collapse nav navbar-collapse" id="navbar-collapse">
          <ul class="mainmenu ">
            <li class=""><Link to="#" class="active">Services <i class="fa fa-angle-down" aria-hidden="true"></i></Link>
              <div class="submenu">
                <div class="container">
                  <div class="row">
                    <div class="col-md-3">
                      <ul>
                        <li><Link to="/Artificialservicepage">  Artificial Intelligence</Link></li>
                        <li><Link to="/Applicationpage">  Application Services</Link></li>
                      </ul>
                    </div>
                    <div class="col-md-3">
                      <ul>
                        <li><Link to="/Cloudpage"> Cloud Services</Link></li>
                        <li><Link to="/Devopspage">DevOps</Link></li>
                      </ul>
                    </div>
                    <div class="col-md-3">
                      <ul>
                        <li><Link to="/Digitalpage"> Digital Transformation</Link></li>
                        <li><Link to="/Dataanalyspage"> Data Analytics</Link></li>
                      </ul>
                    </div>
                    <div class="col-md-3">
                      <ul>
                        <li><Link to="/Productpage">Product Development</Link></li>
                       
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li class=""><Link to="#" class="">Industries <i class="fa fa-angle-down" aria-hidden="true"></i> </Link>
              <div class="submenu">
                <div class="container">
                  <div class="row">
                    <div class="col-md-3">
                      <ul>
                        <li><Link to="/Financepage"> Finance</Link></li>
                        <li><Link to="/Supplypage"> Supply chain &amp; Logistics</Link></li>
                        <li><Link to="/Automotivespage"> Automobile</Link></li>
                       
                      </ul>
                    </div>
                    <div class="col-md-3">
                      <ul>
                      
                        <li><Link to="/HealthCarepage"> HealthCare </Link></li>
                        <li><Link to="/Marketingpage"> Marketing </Link></li>
                         <li><Link to="/Insurancepage"> Insurance</Link></li>
                      </ul>
                    </div>
                    <div class="col-md-3">
                      <ul>
                         
                        <li><Link to="/Retailpage">Retail</Link></li>
                        <li><Link to="/Telecompage">Telecommunications</Link></li>
                      
                      </ul>
                    </div>
                    <div class="col-md-3">
                      <ul>
                        
                        <li><Link to="/Educationpage"> Education</Link></li>
                        <li><Link to="/Manfacturepage"> Manufacturing</Link></li>
                      </ul>
                    </div>
                    
                  </div>
                </div>
              </div>
            </li>
            <li class="insightdrop"><Link to="#" class="">Insights <i class="fa fa-angle-down" aria-hidden="true"></i> </Link>
              <div class="submenu">
                <div class="container">
                  <div class="row">
                    <div class="col-md-3">
                      <ul>
                        <li><Link to="/Machinepage">  Machine Learning </Link></li>
                        <li><Link to="/FullStackpage">  Full Stack Development </Link></li>
                        <li><Link to="/Tabpage">  Tableau </Link></li>
                      </ul>
                    </div>
                    <div class="col-md-3">
                      <ul>
                        <li><Link to="/PowerBIpage"> Power BI</Link></li>
                        <li><Link to="/Devpage">  DevOps </Link></li>
                        <li><Link to="/Computervisionpage"> Computer Vision </Link></li>
                      </ul>
                    </div>
                    <div class="col-md-3">
                     <ul>
                       <li><Link to="/DeepLearningpage"> Deep Learning</Link></li>
                       <li><Link to="/Awspage">  AWS </Link></li>
                       <li><Link to="/Azurepage">  Azure </Link></li>
                     </ul>
                   </div>
                   <div class="col-md-3">
                     <ul>
                       <li><Link to="/NLPpage"> Natural Language Processing</Link></li>
                       <li><Link to="/Artificialinsightpge">  Artificial Intelligence </Link></li>
                     </ul>
                   </div>
                    
                  </div>
                </div>
              </div> 
             </li>
            <li class=""><Link to="/Careerspage" class="">Careers</Link></li>
            <li class=""><Link to="/Aboutuspage" class="">About C360 </Link></li>
            <li class="getlink"><Link to="#" class="" data-toggle="modal" data-target="#get_trained">Get Started</Link></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false"> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>
</header>
</div>
    )
}
export default Header;