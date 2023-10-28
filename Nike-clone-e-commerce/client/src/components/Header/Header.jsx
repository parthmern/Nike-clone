import "./Header.scss";
import {TbSearch} from "react-icons/tb";
import {AiOutlineHeart} from 'react-icons/ai';
import {CgShoppingCart} from "react-icons/cg";
import { useState,useEffect, useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate, useParams } from "react-router-dom";
import { useLocation } from 'react-router-dom';

const Header = () => {

    const location = useLocation();
    const navigate = useNavigate();

    const {cart,totalQTY,setTotalQTY,navState,setNavState,setCartState} = useContext(AppContext);

    useEffect(()=>{
        if(location.pathname !== '/'){
            setNavState(true);
        }
    },[location])
    
    useEffect(()=>{

        let qty = 0 ;

        const ans = cart.forEach((item)=>{
            
            if(item.quantity>0){
                console.log(item.qty);
                qty = qty + Number(item.quantity) 
            }
        })

        setTotalQTY(qty);

    },[cart]);
    console.log("quanituttu",totalQTY);

    const onNavScroll = () => {
        //console.log("widow scroll check",window.scrollY,location.pathname );
        if(window.scrollY > 30 || location.pathname !== '/') {
            setNavState(true);
        } 
        else if(window.scrollY == 0 && location.pathname !== '/'){
            setNavState(true);
        }
        else {
            if(location.pathname == '/'){
                setNavState(false);
            }
            else{
                setNavState(true);
            }
        }
        
    }
    
    useEffect(() => {
        window.addEventListener('scroll', onNavScroll);

        return () => {
            window.removeEventListener('scroll', onNavScroll);
        }
    },[location]);

    function clickHandler(){
        navigate("/");
    }

    function cartStateHandler(){
        setCartState((prev)=>!prev);
    }

    return(
        <div className="relative flex items-center justify-center w-[100%]  h-[9vh] ">
        <header className={
          `w-[100vw]  fixed top-0 left-0 right-0 h-[9vh] flex items-center justify-between opacity-100 z-[200] ${navState ? "blur-effect-theme" : ""}`
        }>
          <nav className='flex w-[90%] mx-3 items-center justify-between nike-container'>
              <div className='flex items-center cursor-pointer'
              onClick={clickHandler}
              >
                  <img
                      src="https://nike-store-jsstack.vercel.app/assets/logo.8d8ce0ec.png"
                      alt="logo/img"
                      className={`w-16 h-auto ${navState && "filter brightness-0"}`}
                  />
              </div>
              <ul className='flex items-center justify-center gap-2'>
                  <li className='grid items-center'>
                      <TbSearch className={`text-[25px] icon-style ${navState && "text-slate-900 transition-all duration-300"}`} />
                  </li>
                  <li className='grid items-center'>
                      <AiOutlineHeart className={`text-[25px] icon-style ${navState && "text-slate-900 transition-all duration-300"}`} />
                  </li>
                  <li className='grid items-center'>
                      <button type='button'
                      onClick={cartStateHandler}
                      className='border-none outline-none active:scale-110 transition-all duration-300 relative'>
                          <CgShoppingCart 
                          className={`text-[25px] icon-style ${navState && "text-slate-900 transition-all duration-300"}`} />
                          <div className={`absolute top-4 right-0 shadow w-4 h-4 text-[0.65rem] leading-tight font-medium rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300 ${navState ? 'bg-slate-900 text-slate-100 shadow-slate-900' : 'bg-slate-100 text-slate-900 shadow-slate-100'}`}>{totalQTY}</div>
                      </button>
                  </li>
              </ul>
          </nav>
        </header>
     </div>
    )
};

export default Header;
