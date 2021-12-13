import React from 'react'
import Footer from '../Footer'
import GetStarted from '../GetStarted'
import Header from '../Header'
import Tab from '../Insights/Tab/Tab'

const Tabpage = () => {
    return (
        <div>
            <Header />
            <Tab />
            <GetStarted />
            <Footer />
        </div>
    )
}
export default Tabpage;