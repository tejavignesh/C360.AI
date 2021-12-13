import React from 'react'
import Footer from '../Footer'
import GetStarted from '../GetStarted'
import Header from '../Header'
import PowerBI from '../Insights/PowerBI/PowerBI'

const PowerBIpage = () => {
    return (
        <div>
            <Header />
            <PowerBI />
            <GetStarted />
            <Footer />
        </div>
    )
}
export default PowerBIpage;