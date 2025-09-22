import React from 'react'
import muffler from '../../assets/img/muffler.png'
import Heart from '../Heart';
const ProductsCard = (props) => {
  
  const {name ,brand,category,price } = props;

  return (
    <>
    <div className='py-5 px-6 rounded-xl  shadow relative bg-white'>
      
         <span className='bg-red-600 text-xs px-2 py-2 rounded text-white t inline-block absolute right-4 top-4'>{category}</span>
    <img src={muffler} alt="" className='h-60 w-auto mx-auto'/>
   
    <h2 className='text-2xl-font-serif'>{name}</h2>
    <p>{brand}</p>
    
    <p className='text-xl my-2'>
        <span className='text-2xl'>Rs.{Math.floor(price*0.9)}</span><br />
        <span className='line-through text-slate-400 text-sm'>Rs.{price}</span>

    </p>
    <button className='bg-red-700 px-3 py-1 text-white rounded hover:bg-red-800' mt-2>Buy Now </button>

   
        </div>
    </>
  )
}

export default ProductsCard