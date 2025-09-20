import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
   const params =  useParams();
   const id = params.id;
  return (
    <>
    <h1>{`product details of ${params.id}`}</h1></>
  )
}

export default ProductDetails