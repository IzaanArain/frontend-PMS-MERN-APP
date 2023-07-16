import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllProductsAsync } from "../features/Product/ProductSlice";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";

const ProductList = () => {
  const { products } = useSelector((state) => state.products);
  // console.log(products)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProductsAsync());
  }, [dispatch]);

  return (
    <>
      <div className="Product_List">
        <table className="table table-striped table-bordered border-primary" style={{width:"100%"}}>
          <thead className="text-center">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
              <th scope="col">Price</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((val) => {
              return (
                <tr key={val._id}>
                  <td>{val.name}</td>
                  <td style={{width:"50%"}}>{val.description}</td>
                  <td>$ {val.price}</td>
                  <td>
                    <EditButton data={val}/>
                    <DeleteButton data={val}/>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ProductList;
