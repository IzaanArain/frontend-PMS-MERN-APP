
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { DeleteProductAsync,deleteProduct } from '../features/Product/ProductSlice';
const DeleteButton = ({data}) => {
    // console.log(data)
    const {_id}=data
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const dispatch=useDispatch()

    const HandleDeleteButton=(id)=>{
        dispatch(DeleteProductAsync({id:id}))
        dispatch(deleteProduct({id:id}))
    }
    return (
      <>
        <Button variant="outline-danger" 
        onClick={handleShow}
        id='delete-btn'>
            {/* {console.log(data)} */}
          Delete
        </Button>
  
        <Modal
        show={show} 
        onHide={handleClose}
        backdrop="static"
        centered>
          <Modal.Header closeButton>
            <Modal.Title>Delete Product</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{textAlign:"center"}}>Are you sure you want remove this Product</Modal.Body>
          <Modal.Footer style={{display:"flex",justifyContent:"space-around"}}>
            <Button 
            variant="outline-primary" 
            style={{width:"40%"}}
            onClick={handleClose}>
              cancel
            </Button>
            <Button 
            variant="outline-danger" 
            style={{width:"40%"}}
            onClick={()=>{
                HandleDeleteButton(_id)
                handleClose()
            }}>
              confirm
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}

export default DeleteButton;