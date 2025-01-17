import React from 'react'
import { Link } from 'react-router-dom'

const Services = () => {
  return (

<div>
<div className="servicesrow">
        <div className="container">
            <h2 className="titleone wow fadeInUp animated">Services</h2>
            <div className="row servicetabs">
                <div className="col-md-3">
                    <ul className="nav nav-tabs wow fadeInUp animated sticky">
                        <li className=""><a data-toggle="tab" href="#artificial-intelligence" className="active">Artificial Intelligence
    </a></li>
                        <li><a data-toggle="tab" href="#applicationservice">Application Services
    </a></li>
                        <li><a data-toggle="tab" href="#cloudservices">Cloud Services
    </a></li>
                        <li><a data-toggle="tab" href="#devops">DevOps</a></li>
                        <li><a data-toggle="tab" href="#digitaltransformation">Digital Transformation</a></li>
                        <li><a data-toggle="tab" href="#dataanalytics">Data Analytics</a></li>
                    </ul>
                </div>
                <div className="col-md-9">
                    <div className="tab-content">
                        <div id="artificial-intelligence" className="tab-pane fade in active">
                            <div className="row servicecol height350">
                                <div className="col-md-4">
                                    <div className="servicebox wow fadeInUp animated">
                                        <div><img src="images/machine-learning.png " alt="Machine Learning" title="Machine Learning" width="71" height="80"/></div>
                                        <h4>Machine Learning</h4>
                                        <p>We empower your business with the unmatched benefits of machine learning, a technology that enables machines to leverage data for self-learning just like humans do. They can interpret complicated data, detect trends, and identify patterns in it</p>
                                        <p><Link to="/Artificialservicepage">Read More</Link> </p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="servicebox wow fadeInUp animated">
                                        <div><img src="images/natural-language.png" alt="Natural Language" title="Natural Language" width="71" height="80"/></div>
                                        <h4>Natural Language </h4>
                                        <p>We specialize in Natural Language Processing technology that enables machines to understand and comprehend what people speak and write, interpret their sentiments, and take relevant actions based on this </p>
                                        <p><Link to="/Artificialservicepage">Read More</Link> </p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="servicebox wow fadeInUp animated">
                                        <div><img src="images/imageprocessing.png" alt="Image Processing" title="Image Processing" width="71" height="80"/></div>
                                        <h4>Image Processing</h4>
                                        <p>We have expertise in the futuristic image processing technology, as we create high-tech visual applications that can acquire, analyze, and synthesize images and identify patterns in them. </p>
                                        <p><Link to="/Artificialservicepage">Read More</Link> </p>
                                    </div>
                                </div>
                            </div>
                            <div className="row servicecol height350">
                                <div className="col-md-4">
                                    <div className="servicebox wow fadeInUp animated">
                                        <div><img src="images/knowledge-virtualization.png " alt="Knowledge Virtualization" title="Knowledge Virtualization" width="71" height="80"/></div>
                                        <h4>Knowledge Virtualization</h4>
                                        <p>We harness the power of Artificial Intelligence technology for creating robust knowledge virtualization systems, which help businesses to use reliable databases for taking the right business decisions</p>
                                        <p><Link to="/Artificialservicepage">Read More</Link> </p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="servicebox wow fadeInUp animated">
                                        <div><img src="images/digital-virtual.png" alt="Digital Virtual" title="Digital Virtual" width="71" height="80"/></div>
                                        <h4>Digital Virtual
    </h4>
                                        <p>We create highly advanced AI-powered digital virtual agents, which are capable of understanding and interpreting human behavior and delivering extensive support as well as enriching customer experiences. </p>
                                        <p><Link to="/Artificialservicepage">Read More</Link> </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="applicationservice" className="tab-pane fade">
                            <div className="row servicecol">
                                <div className="col-md-4">
                                    <div className="servicebox">
                                        <div><img src="images/agile.png " alt="Agile" title="Agile"/></div>
                                        <h4>Agile</h4>
                                        <p>Drive disruption by applying Lean principles to achieve substantial performance improvements, accelerating business change. </p>
                                        <p><Link to="/Applicationpage">Read More</Link> </p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="servicebox">
                                        <div><img src="images/devops.png" alt="DevOps" title="DevOps"/></div>
                                        <h4>DevOps</h4>
                                        <p>Streamline IT by bringing business, development and operations teams together and applying automated processes. </p>
                                        <p><Link to="/Applicationpage">Read More</Link> </p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="servicebox">
                                        <div><img src="images/application.png" alt="Application" title="Application"/></div>
                                        <h4>Application</h4>
                                        <p>Transform your legacy applications to become more agile and efficient through the power of New IT. </p>
                                        <p><Link to="/Applicationpage">Read More</Link> </p>
                                    </div>
                                </div>
                            </div>
                            <div className="row servicecol">
                                <div className="col-md-4">
                                    <div className="servicebox">
                                        <div><img src="images/architecture.png " alt="Architecture" title="Architecture"/></div>
                                        <h4>Architecture</h4>
                                        <p>Plan and deliver a foundational technology architecture to maximize scalability and performance. </p>
                                        <p><Link to="/Applicationpage">Read More</Link> </p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="servicebox">
                                        <div><img src="images/software.png" alt="Software" title="Software"/></div>
                                        <h4>Software</h4>
                                        <p>Turn innovative ideas into business differentiation with custom capabilities. </p>
                                        <p><Link to="/Applicationpage">Read More</Link> </p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="servicebox">
                                        <div><img src="images/quality-engineering.png" alt="Quality engineering" title="Quality engineering"/></div>
                                        <h4>Quality engineering</h4>
                                        <p>Achieve better experiences, faster responses, greater insights and lower risks with Accenture Quality Engineering Services. </p>
                                        <p><Link to="/Applicationpage">Read More</Link> </p>
                                    </div>
                                </div>
                            </div>
                            <div className="row servicecol">
                                <div className="col-md-4">
                                    <div className="servicebox">
                                        <div><img src="images/datamanagement.png " alt="Data management" title="Data management"/></div>
                                        <h4>Data management</h4>
                                        <p>Ride the new wave of data that’s driven by the growth in the volume and variety of data, technology advances and data-led business models. </p>
                                        <p><Link to="/Applicationpage">Read More</Link> </p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="servicebox">
                                        <div><img src="images/intelligent.png" alt="Intelligent" title="Intelligent"/></div>
                                        <h4>Intelligent</h4>
                                        <p>Intelligent automation, like RPA (robotic process automation), natural language processing and virtual agents, can help you improve efficiency and productivity in many ways. </p>
                                        <p><Link to="/Applicationpage">Read More</Link> </p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="servicebox">
                                        <div><img src="images/liquid-application.png" alt="Liquid application" title="Liquid application"/></div>
                                        <h4>Liquid application</h4>
                                        <p>Future-proof your application portfolio with innovation that pays for itself. </p>
                                        <p><Link to="/Applicationpage">Read More</Link> </p>
                                    </div>
                                </div>
                            </div>
                            <div className="row servicecol">
                                <div className="col-md-4">
                                    <div className="servicebox">
                                        <div><img src="images/datamanagement.png " alt="Program, project and service  management" title="Program, project and service  management"/></div>
                                        <h4>Program, project and service  management</h4>
                                        <p>Reinvent management practices to create value and deliver innovation. </p>
                                        <p><Link to="/Applicationpage">Read More</Link> </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="cloudservices" className="tab-pane fade">
                            <div className="row servicecol height350">
                                <div className="col-md-4">
                                    <div className="servicebox">
                                        <div><img src="images/aws.png " alt="Amazon Web Services" title="Amazon Web Services"/></div>
                                        <h4>Amazon Web Services</h4>
                                        <p>Our Cloud Architects and designers specialize in compute, databases, infra management, app development, and security services.</p>
                                        <p><Link to="/Cloudpage">Read More</Link> </p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="servicebox">
                                        <div><img src="images/azure.png" alt="Azure" title="Azure"/></div>
                                        <h4>Azure</h4>
                                        <p>Azure is a hybrid Cloud computing service, its strength lies in PaaS which blends with robust IaaS support for Lift and Shift of apps to the cloud.</p>
                                        <p><Link to="/Cloudpage">Read More</Link> </p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="servicebox">
                                        <div><img src="images/cloud.png" alt="Google Cloud Platform" title="Google Cloud Platform"/></div>
                                        <h4>Google Cloud Platform</h4>
                                        <p>It is a dedicated platform for a range of hosted services viz. compute, storage, networking, big data, machine learning, and the IoT. </p>
                                        <p><Link to="/Cloudpage">Read More</Link> </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="devops" className="tab-pane fade">
                            <div className="row servicecol">
                                <div className="col-md-4">
                                    <div className="servicebox">
                                        <div><img src="images/devops.png" alt="DevOps" title="DevOps"/> </div>
                                        <h4>DevOps</h4>
                                        <p>Streamline IT by bringing business, development and operations teams together and applying automated processes. </p>
                                        <p><Link to="/Devops">Read More</Link> </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="digitaltransformation" className="tab-pane fade">
                            <div className="row servicecol">
                                <div className="col-md-4">
                                    <div className="servicebox">
                                        <div><img src="images/experience.png " alt="Experience" title="Experience"/></div>
                                        <h4>Experience</h4>
                                        <p>End-user experiences (UX) talk about the value that brands deliver to their customers in the digital world. These experiences have influenced several variables that include accessibility, visual and navigational design, and relevance of content that protect our data from breaches and security risks. </p>
                                        <p><Link to="/Digitalpage">Read More</Link> </p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="servicebox">
                                        <div><img src="images/architecture.png" alt="Architecture" title="Architecture"/></div>
                                        <h4>Architecture</h4>
                                        <p>To ensure our digital user interfaces are coherent with conceptual structures, we use typical application architecture that comprises modern platforms. These platforms and services ensure business need driven modernization and faster time to market, in addition to other advantages. </p>
                                        <p><Link to="/Digitalpage">Read More</Link> </p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="servicebox">
                                        <div><img src="images/datamanagement.png" alt="Data Management" title="Data Management"/></div>
                                        <h4>Data Management</h4>
                                        <p>Our data tribe has mastered data management, data lakes, cloud and streaming data analytics with machine learning to enable self-service, KYC, personalization etc. while making the IT lean and reducing overall costs. Let’s talk and create a roadmap to embark your organization on its next generation data journey. </p>
                                        <p><Link to="/Digitalpage">Read More</Link> </p>
                                    </div>
                                </div>
                            </div>
                            <div className="row servicecol">
                                <div className="col-md-4">
                                    <div className="servicebox">
                                        <div><img src="images/cloud.png " alt="Cloud" title="Cloud"/></div>
                                        <h4>Cloud</h4>
                                        <p>We understand the art and the science of delivering value on cloud and helps enterprises design and execute unique strategies to enable right sized value driven evolution of portfolio into cloud native experiences. We offer an end-toend suite of cloud computing service packages to drive scalable hybrid cloud management platforms for holistic </p>
                                        <p><Link to="/Digitalpage">Read More</Link> </p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="servicebox">
                                        <div><img src="images/api.png" alt="API" title="API"/></div>
                                        <h4>API</h4>
                                        <p>We use an elastic approach to enable APIs to be customized, scaled, and commercialized. APIs are designed with the rigor used to develop end applications, thinking of capability, security, and scalability. </p>
                                        <p><Link to="/Digitalpage">Read More</Link> </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="dataanalytics" className="tab-pane fade">
                            <div className="row servicecol height350">
                                <div className="col-md-4">
                                    <div className="servicebox">
                                        <div><img src="images/data1.png " alt="Modern Analytics Platform" title="Modern Analytics Platform"/></div>
                                        <h4>Modern Analytics Platform</h4>
                                        <p>Will analytics play an important role in your future? You are no longer constrained byexpensive data warehousing.Modernize your analytics with ​cloud​, flexible architectures, and the latesttechnologies. Streamline business insights from data while reducing costs</p>
                                        <p><Link to="/Dataanalyspage">Read More</Link> </p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="servicebox">
                                        <div><img src="images/data2.png" alt="Data Quality" title="Data Quality"/></div>
                                        <h4>Data Quality </h4>
                                        <p>How many times has someone asked, “where did that number come from?!”Uncertainty around data can make business management a major challenge.Data quality manifests in reporting, metric formulation, business definitions, andreconciliation of data.</p>
                                        <p><Link to="/Dataanalyspage">Read More</Link> </p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="servicebox">
                                        <div><img src="images/data3.png" alt="Business Intelligence & Visualization" title="Business Intelligence & Visualization"/></div>
                                        <h4>Business Intelligence & Visualization</h4>
                                        <p>We all know that a picture is worth a thousand words. So why are you still flippingthrough pages of numbers? ​Business Intelligence​ will surface the right informationto accelerate decision making. </p>
                                        <p><Link to="/Dataanalyspage">Read More</Link> </p>
                                    </div>
                                </div>
                            </div>
                            <div className="row servicecol height350">
                                <div className="col-md-4">
                                    <div className="servicebox">
                                        <div><img src="images/data4.png " alt="Support & Maintenance" title="Support & Maintenance"/></div>
                                        <h4>Support & Maintenance</h4>
                                        <p>Is your IT team bandwidth-constrained? You’re not alone. Many organizations arechallenged to allocate time and skills to support a data solution. We can shoulder theburden.</p>
                                        <p><Link to="/Dataanalyspage">Read More</Link> </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> </div>
                                        
  )
}
export default Services;