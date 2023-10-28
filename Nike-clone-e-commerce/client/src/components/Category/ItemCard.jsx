import React from 'react';
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate, useParams } from "react-router-dom";
import {AiFillStar} from "react-icons/ai";

const ItemCard = ({item,cat}) => {

    const navigate= useNavigate();
    const {category,product,cart,addToCart,plusQuantity,minusQuantity,navState,setNavState} = useContext(AppContext);
    
    function clickHandler(item){
        console.log("clicked moved to single product page");
        navigate(`/product/${item.id}`);
    }

    const bgColor = [
      " bg-gradient-to-b from-red-500 to-rose-500 shadow-lg shadow-rose-500 ",
      " bg-gradient-to-b from-indigo-700 to-indigo-700 shadow-lg shadow-indigo-500 ",
      " bg-gradient-to-b from-green-500 to-emerald-500 shadow-lg shadow-green-500 ",
      " bg-gradient-to-b from-green-600 to-lime-500 shadow-lg shadow-lime-500 ",
      " bg-gradient-to-b from-blue-500 to-cyan-500 shadow-lg shadow-cyan-500 ",
      " bg-gradient-to-b from-slate-900 to-black shadow-lg shadow-black ",
      " bg-gradient-to-b from-blue-900 to-blue-500 shadow-lg shadow-blue-500 ",
      " bg-gradient-to-b from-[#936550] to-orange-900 shadow-lg shadow-orange-800 ",
      " bg-gradient-to-b from-sky-600 to-indigo-600 shadow-lg shadow-blue-500 ",
      " bg-gradient-to-b from-yellow-500 to-yellow-500 shadow-lg shadow-yellow-500 ",
      " bg-gradient-to-b from-gray-900 to-yellow-500 shadow-lg shadow-yellow-500 ",
      " bg-gradient-to-b from-red-500 to-rose-500 shadow-lg shadow-rose-500 "
    ]

  return (
    <div className={`relative h-[40vh] ${bgColor[item?.id-1] || "bg-gradient-to-b from-slate-900 to-black shadow-lg shadow-black"} grid items-center justify-items-center rounded-xl py-4 px-5 transition-all duration-700 ease-in-out w-full hover:scale-105`}>
       <div className='w-full flex-col items-center justify-center'>
        <div className='flex-col p-1 w-[100%] items-center justify-center cursor-pointer'
        onClick={()=>{clickHandler(item)}}
        >
            <p className='text-slate-200 text-xl md:text-3xl font-medium filter drop-shadow'>{item?.attributes?.title}</p>
            <p className='text-slate-200 filter drop-shadow text-[15px] md:text-xl font-normal'>{cat}</p>
        </div>
        <div className='flex p-1 items-center justify-between'>
            <div className='flex font-bold items-center bg-white/80  p-1 rounded blur-effect-theme'><p>$ {item?.attributes?.price}</p></div>
            <div className='flex items-center justify-center text-slate-300'><AiFillStar />5+</div>
            <div className='bg-white/80 cursor-pointer p-1 rounded blur-effect-theme'
            onClick={()=>{addToCart(item)}}
            >Buy Now</div>
        </div>
       </div>

       <div className='flex items-center justify-center'
       onClick={()=>{clickHandler(item)}}
       >  
        <img className='transitions-theme hover:-rotate-12 h-36 w-64' src={process.env.REACT_APP_DEV_URL + product?.data?.[item.id-1]?.attributes?.img?.data[0]?.attributes?.url} />
       </div>
    </div>
  )
}

export default ItemCard
