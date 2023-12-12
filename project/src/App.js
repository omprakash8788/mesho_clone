import React from 'react'
import Navbar from './components/navbar/Navbar'
import Landing from './components/landing/Landing'
import ProductList from './components/ProductList'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Landing/>
      <ProductList/>
      <Footer/>
    </div>
  )
}

export default App