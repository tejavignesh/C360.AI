import React from 'react'

import About from '../Home/About'
import Services from '../Home/Services'
import Industries from '../Home/Industries'
import Last from '../Home/Last'
import GetStarted from '../GetStarted'
import Finance from '../Home/Finance'
import Footer from '../Footer'
import Header from '../Home/Header1'





const Homepage = () => {
    return (
        <div>
    <Header />
            <About/>
            <Services />
            <Industries />
            <Finance />
            <Last />
            <GetStarted />
            <Footer />
            
        </div>
    )
}
export default Homepage;
