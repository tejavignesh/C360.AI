import React from 'react'
import Footer from '../Footer'
import GetStarted from '../GetStarted'
import Header from '../Header'
import Devops from '../Services/Devops/Devops'

const Devopspage = () => {
    return (
        <div>
            <Header />
            <Devops />
            <GetStarted />
            <Footer />
        </div>
    )
}
export default Devopspage;