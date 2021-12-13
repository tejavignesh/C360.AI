import React from 'react'
import Footer from '../Footer'
import GetStarted from '../GetStarted'
import Header from '../Header'
import Aws from '../Insights/Aws/Aws'

const Awspage = () => {
    return (
        <div>
            <Header />
            <Aws />
            <GetStarted />
            <Footer />
        </div>
    )
}
export default Awspage;