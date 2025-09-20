
import React from 'react'
import { useParams } from 'react-router-dom'
import muffler from '../assets/img/muffler.png'
import Title from '../Components/Title';
import { FaCartPlus, FaStar,FaStarHalf } from "react-icons/fa";
import { LiaOpencart } from "react-icons/lia";
const ProductDetails = () => {
   const params =  useParams();
   const id = params.id;
  return (
    <>
       <section className='py-12' >
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col md:flex-row  items-center justify-around">
          <img src={muffler} alt="details picture" className='md:w-1/2' />
          <div className='md:w-1/2'>
         <span className='bg-red-600 text-xs px-2 py-2 rounded text-white t inline-block top-4'>Clothing</span>
 <div className="flex text-orange-400 py-2">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStarHalf />
        </div>

        <Title label=" Hand muffler" />
        <p className='py-2 text-justify '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic sequi sint iste sunt, cumque tempore rem, odit optio fuga possimus nemo, deleniti et quasi doloremque atque voluptatem fugiat nihil blanditiis!</p>
        <p className='font-semibold uppercase'>Levis</p>
         <p className='text-xl my-2'>
        <span className='text-2xl'>Rs.399</span><br />
        <span className='line-through text-slate-400 text-sm'>Rs.499</span>

       

    </p>
        <button className='bg-red-700 px-3 py-1 text-white rounded hover:bg-red-800 flex items-center' mt-4>Add to Cart
           <FaCartPlus className='ml-2' />
           </button>


      
          </div>
        </div>
        </div>

    </section>
    </>
  )
}

export default ProductDetails