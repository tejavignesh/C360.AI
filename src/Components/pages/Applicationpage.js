import React from 'react'
import Footer from '../Footer'
import GetStarted from '../GetStarted'
import Header from '../Header'
import Application from '../Services/Application/Application'

const Applicationpage = () => {
    return (
        <div>
            <Header />
            <Application />
            <GetStarted />
            <Footer />
            
        </div>
    )
}
export default Applicationpage;