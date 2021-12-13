import React from 'react'
import Footer from '../Footer'
import GetStarted from '../GetStarted'
import Header from '../Header'
import Cloud from '../Services/Cloud/Cloud'

const Cloudpage = () => {
    return (
        <div>
            <Header />
            <Cloud />
            <GetStarted />
            <Footer />
        </div>
    )
}
export default Cloudpage;
