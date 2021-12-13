import React from 'react'
import Footer from '../Footer'
import GetStarted from '../GetStarted'
import Header from '../Header'
import Product from '../Services/Product/Product'

const Productpage = () => {
    return (
        <div>
            <Header />
            <Product />
            <GetStarted />
            <Footer />
        </div>
    )
}
export default Productpage;
