
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { updateProductAsync,updateProduct } from '../features/Product/ProductSlice';

const EditButton = ({data}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const dispatch=useDispatch()

    const [newEditProduct,setNewEditProduct]=useState({
        id:"",
        name:"",
        description:"",
        price:"",
        image:""
      })

      const editOnChange=(e)=>{
        const {name,value}=e.target
        setNewEditProduct({...newEditProduct,[name]:value})
      }

      const handleEditClick=(e)=>{
        e.preventDefault()

        const formValues={
            id:data._id,
            name:data.name,
            description:data.description,
            price:data.price
        }
        setNewEditProduct(formValues)
      }
    //   console.log(newEditProduct)

    const EditSubmit=(e)=>{
        e.preventDefault()
        dispatch(updateProductAsync({
            id:newEditProduct.id,
            name:newEditProduct.name,
            description:newEditProduct.description,
            price:newEditProduct.price,
        }))
        // dispatch(updateProduct({
        //     id:newEditProduct.id,
        //     name:newEditProduct.name,
        //     description:newEditProduct.description,
        //     price:newEditProduct.price,
        // }))
        handleClose()
    }
    return (
      <>
        <Button variant="outline-success" onClick={(e)=>{
            handleShow()
            handleEditClick(e)
        }}
        id='edit-btn'>
         Edit
        </Button>
  
        <Modal 
        show={show} 
        onHide={handleClose}
        backdrop="static"
        centered>
          <Modal.Header closeButton>
            <Modal.Title>Edit Form</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form onSubmit={EditSubmit}>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="name">Name : </Form.Label>
        <Form.Control 
        type="text" 
        placeholder="Enter Name" 
        id='name'
        name="name"
        value={newEditProduct.name}
        onChange={editOnChange}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label htmlFor="description">Description: limit to 100 characters</Form.Label>
        <Form.Control 
        as="textarea"
        rows={5} 
        id="description"
        name="description"
        value={newEditProduct.description}
        onChange={editOnChange}
        maxLength={100}
       />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label htmlFor="price">Price : </Form.Label>
        <Form.Control 
        type="number" 
        placeholder="Enter Name" 
        id='price'
        name="price"
        value={newEditProduct.price}
        onChange={editOnChange}
        />
      </Form.Group>

      {/* <Form.Group className="mb-3">
        <Form.Label htmlFor="image">image : </Form.Label>
        <Form.Control 
        type="url" 
        placeholder="Enter image address" 
        id='image'
        name="image"
        value={newEditProduct.image}
        onChange={editOnChange}/>
      </Form.Group> */}

      <Button variant="primary" type="submit" style={{width:"100%"}}>
        Submit
      </Button>
    </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose} style={{width:"100%"}}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}

export default EditButton