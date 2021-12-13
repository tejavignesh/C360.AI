import React from 'react'
import Footer from '../Footer'
import GetStarted from '../GetStarted'
import Header from '../Header'
import DevOps from '../Insights/DevOps/DevOps'

const Devpage = () => {
    return (
        <div>
            <Header />
            <DevOps />
            <GetStarted />
            <Footer />
        </div>
    )
}
export default Devpage;