import React from 'react'
import Footer from '../Footer'
import GetStarted from '../GetStarted'
import Header from '../Header'
import HealthCare from '../Industries/HealthCare/HealthCare'

const HealthCarepage = () => {
    return (
        <div>
            <Header />
            <HealthCare />
            <GetStarted />
            <Footer />
        </div>
    )
}
export default HealthCarepage;