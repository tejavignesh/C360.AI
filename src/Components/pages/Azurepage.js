import React from 'react'
import Footer from '../Footer'
import GetStarted from '../GetStarted'
import Header from '../Header'
import Azure from '../Insights/Azure/Azure'

const Azurepage = () => {
    return (
        <div>
            <Header />
            <Azure />
            <GetStarted />
            <Footer />
            
        </div>
    )
}
export default Azurepage;