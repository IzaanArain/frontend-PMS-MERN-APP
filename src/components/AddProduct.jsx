import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProductAsync } from '../features/Product/ProductSlice';

const AddProduct = () => {
  const [newProduct,setNewProduct]=useState({
    name:"",
    description:"",
    price:"",
    image:""
  })

  const dispatch=useDispatch()

  const AddFormOnChange=(e)=>{
    // console.log(e.target)
    const {name,value}=e.target
    setNewProduct({...newProduct,[name]:value})
  }
  // console.log(newProduct)

  const submitAddForm=(e)=>{
    e.preventDefault();
    dispatch(addProductAsync({
      name:newProduct.name,
      description:newProduct.description,
      price:newProduct.price,
      image:newProduct.image
    }))
  }
  return (
    <>
    <div className='Add_Product_Form'>

   <div className="card text-light" id='add_form'>
    <div className="card-body">
    <Form onSubmit={submitAddForm}>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="name">Name : </Form.Label>
        <Form.Control 
        type="text" 
        placeholder="Enter Name" 
        id='name'
        name="name"
        value={newProduct.name}
        onChange={AddFormOnChange}
        required/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label htmlFor="description">Description: imit to 100 characters</Form.Label>
        <Form.Control 
        as="textarea"
        rows={5} 
        id="description"
        name="description"
        value={newProduct.description}
        onChange={AddFormOnChange}
        maxLength={100}
        required/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label htmlFor="price">Price : </Form.Label>
        <Form.Control 
        type="number" 
        placeholder="Enter Name" 
        id='price'
        name="price"
        value={newProduct.price}
        onChange={AddFormOnChange}
        required/>
      </Form.Group>

      {/* <Form.Group className="mb-3">
        <Form.Label htmlFor="image">image : </Form.Label>
        <Form.Control 
        type="url" 
        placeholder="Enter image address" 
        id='image'
        name="image"
        value={newProduct.image}
        onChange={AddFormOnChange}/>
      </Form.Group> */}

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
   </div>
    </div>
    </>
  )
}

export default AddProduct