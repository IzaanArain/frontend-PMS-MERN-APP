import React from 'react'
import Spinner from 'react-bootstrap/Spinner';

const LoadingSpinner = () => {
    return (
       <div className="spinner_container">
         <Spinner animation="border" 
         role="status" 
         style={{ width: "5rem", height: "5rem" }}>
          <span className="visually-hidden">Loading...</span>
        </Spinner>
       </div>
      );
}

export default LoadingSpinner;