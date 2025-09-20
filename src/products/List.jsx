import { colors } from 'flowbite-react/plugin/tailwindcss/colors'
import React from 'react'
import Title from '../Components/Title'
import ProductsCard from '../Components/products/Card'
import products from '../../src/data'
const ProductList = () => {
  return (
    <>
    <section className='py-12 bg-slate-100' >
      <div className="max-w-screen-xl mx-auto px-4">
       <Title label="New Arrivals" />

       <div className='py-8'>
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
       {products.map((product)=>(
        <ProductsCard
        key={product.id}
        // name={product.name} 
        // brand = {product.brand}
        // category={product.category}
        // price={product.price}
//using spread operator for this 
        {...product}
        />
      ))}
       
       </div>
       </div>
      </div>
    </section>
    </>
  )
}

export default ProductList