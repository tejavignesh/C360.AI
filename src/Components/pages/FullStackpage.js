import React from 'react'
import Footer from '../Footer'
import GetStarted from '../GetStarted'
import Header from '../Header'
import FullStack from '../Insights/FullStack/FullStack'

const FullStackpage = () => {
    return (
        <div>
            <Header />
            <FullStack />
            <GetStarted />
            <Footer />
        </div>
    )
}
export default FullStackpage;