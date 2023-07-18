import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

const initialState={
    products:[],
    isLoading:false,
    isError:false
}

const url="http://localhost:5000"
const new_url="https://kind-ruby-angelfish-cape.cyclic.app"

export const getAllProductsAsync=createAsyncThunk(
    "products/getAllProductsAsync",
    async()=>{
        try{
            const response=await fetch(`${new_url}/api/products/`)
            if(response.ok){
                const data=await response.json()
                // console.log(data)
                return {products:data}
            }
        }catch(error){
            console.log(error)
        }
    }
)

export const addProductAsync=createAsyncThunk(
    "products/addProductAsync",
    async(payload)=>{
        try{
            const response=await fetch(`${new_url}/api/products/`,
            {
                method:"POST",
                body:JSON.stringify({
                    name:payload.name,
                    description:payload.description,
                    price:payload.price,
                    image:payload.image
                }),
                headers:{
                    "Content-type": "application/json; charset=UTF-8" ,
                }
            })
            if(response.ok){
                const data=await response.json()
                // console.log(data)
                return {product:data}
            }
        }catch(error){
            console.log(error)
        }
    }
)

export const DeleteProductAsync=createAsyncThunk(
    "products/DeleteProductAsync",
    async(payload)=>{
        try{
            const response=await fetch(`${new_url}/api/products/${payload.id}`,{
                method:"DELETE",
            })
            if(response.ok){
                const data=await response.json()
                // console.log(data)
                return {product:data}
            }
        }catch(error){
            console.log(error)
        }
    }
)

export const updateProductAsync=createAsyncThunk(
    "products/updateProductAsync",
    async(payload)=>{
        try{
            const response=await fetch(`${new_url}/api/products/${payload.id}`,{
                method:"PUT",
                body:JSON.stringify({
                    name:payload.name,
                    description:payload.description,
                    price:payload.price,
                    image:payload.image
                }),
                headers:{
                    "Content-type": "application/json; charset=UTF-8",
                }
            })
            if(response.ok){
                const data=await response.json()
                // console.log(data)
                return {product:data}
            }
        }catch(error){
            console.log(error)
        }
    }
)

const ProductSlice=createSlice({
    name:"products",
    initialState,
    reducers:{
        deleteProduct:(state,action)=>{
            state.products=state.products.filter((product)=>product._id !== action.payload._id)
        },
        updateProduct:(state,action)=>{
            const index= state.products.findIndex((product)=>product._id === action.payload._id)
            const updatedProduct={
                name:action.payload.name,
                description:action.payload.description,
                price:action.payload.price
            }
            state.products[index]=updatedProduct
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(getAllProductsAsync.pending,(state,action)=>{
            // console.log("...Loading")
            state.isLoading=true;
            state.isError=false;
        });
        builder.addCase(getAllProductsAsync.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isError=false;
            state.products= action.payload.products
        });
        builder.addCase(getAllProductsAsync.rejected,(state,action)=>{
            state.isLoading=false
            state.isError=true;
        });

        builder.addCase(addProductAsync.fulfilled,(state,action)=>{
            state.products.push(action.payload.product)
        });
        builder.addCase(DeleteProductAsync.fulfilled,(state,action)=>{
            // console.log(action.payload.product._id)
            state.products=state.products.filter((product)=>product._id !== action.payload.product._id)
        });
        builder.addCase(updateProductAsync.fulfilled,(state,action)=>{
            const index= state.products.findIndex((product)=>product._id === action.payload.product._id)
            state.products[index]=action.payload.product
        })
    }

})

export const {deleteProduct,updateProduct}= ProductSlice.actions
export default ProductSlice.reducer