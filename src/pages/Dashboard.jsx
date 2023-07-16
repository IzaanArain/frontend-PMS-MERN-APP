import React from 'react'
import ProductList from '../components/ProductList'
import AddProduct from '../components/AddProduct'

const Dashboard = () => {
  return (
    <>
    <div className='dashboard'>
        <AddProduct/>
        <ProductList/>
    </div>
    </>
  )
}

export default Dashboard