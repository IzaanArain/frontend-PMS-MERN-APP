import React from 'react'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const {products}=useSelector((state)=>state.products)
  return (
    <>
    <div className='Navbar'> 
        <h1>Product Management system</h1>
        <h3>Products ({products.length})</h3>
        <h4>izaansaquib@gmail.com</h4>
    </div>
    </>
  )
}

export default Navbar