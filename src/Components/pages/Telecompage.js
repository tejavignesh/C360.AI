import React from 'react'
import Footer from '../Footer'
import GetStarted from '../GetStarted'
import Header from '../Header'
import Telecom from '../Industries/Telecom/Telecom'

const Telecompage = () => {
    return (
        <div>
            <Header />
            <Telecom />
            <GetStarted />
            <Footer />
        </div>
    )
}
export default Telecompage;