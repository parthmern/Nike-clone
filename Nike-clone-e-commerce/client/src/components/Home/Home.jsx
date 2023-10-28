import { fetchDataFromApi } from "../../utils/api";
import Category from "../Home/Category/Category";
import { AppContext } from "../context/AppContext";

import "./Home.scss";
import { useContext, useEffect, useRef } from "react";

import Clips from "./Clips";
import SocialLink from "./SocialLink";
import heroImg from "../../assets/hero.png";

import img1 from "../../assets/video/vcover1.png";
import img2 from "../../assets/video/vcover2.png";
import img3 from "../../assets/video/vcover3.png";
import vclip from "../../assets/video/clip.mp4";

import facebook from "../../assets/icons/facebook.svg";
import messanger from "../../assets/icons/messenger.svg";
import instagram from "../../assets/icons/instagram.svg";
import twitter from "../../assets/icons/twitter.svg";
import youtube from  "../../assets/icons/youtube.svg" ;

const Home = () => {

    const {category, setCategory, product, setProduct} = useContext(AppContext);

    const videos = [
        { imgsrc: img1, clip: vclip },
        { imgsrc: img2, clip: vclip },
        { imgsrc: img3, clip: vclip },
    ];

    const sociallinks = [
        { icon: facebook },
        { icon: messanger },
        { icon: instagram },
        { icon: twitter },
        { icon: youtube},
    ];
    
    const myRef = useRef();
   
    

    return (
        <div>
            <div>
            <>
                <div className='relative px-10 mx-auto w-full h-auto flex flex-col'>
                    <div className='bg-theme clip-path h-[85vh] lg:h-[75vh] md:h-[75vh] sm:h-[75vh] w-auto absolute top-[-9vh] left-0 right-0 opacity-100 z-10'></div>
                    <div className='relative  opacity-100 z-20 grid items-center justify-items-center nike-container'>
                    <div className='grid items-center justify-items-center  mt-3'>
                        <h1 className='text-2xl lg:text-5xl   font-extrabold filter drop-shadow-sm text-slate-200'>Play With Electric Nike</h1>
                        <h1 className='text-2xl lg:text-5xl sm:text-2xl xsm:text-1xl font-extrabold filter drop-shadow-sm text-slate-200'>Adapt 2.0 Sneakers</h1>
                        <button type='button' className='button-theme bg-slate-200 px-5  shadow-slate-200 rounded-xl my-5'
                        onClick={()=>{
                            myRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }}
                        >Explore Product</button>
                        <div className='grid items-center gap-5 md:gap-3 absolute top-[33vh] lg:top-[27vh] left-[-20px] md:left-0  w-auto h-auto'>
                        {videos?.map((val, i) => (
                            <Clips
                            key={i}
                            imgsrc={val.imgsrc}
                            clip={val.clip}
                            />
                        ))}
                        </div>
                        <div className='grid items-center absolute top-[40vh] md:top-[27vh] right-[-30px] md:right-0 gap-3'>
                        {sociallinks?.map((val, i) => (
                            <SocialLink
                            key={i}
                            icon={val.icon}
                            />
                        ))}
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <img
                        src={heroImg}
                        alt='hero-img/img'
                        className='w-auto h-[20vh] md:h-[45vh]  transition-all duration-700 ease-in-out -rotate-[25deg] hover:rotate-0 cursor-pointer object-fill'
                        />
                    </div>
                    </div>
                </div>
            </>

            </div>

            <h1 id="scrollToThisElement" ref={myRef} class="text-5xl w-[95%] ml-4 md:mt-[100px] mt-[200px] lg:text-4xl md:text-3xl font-bold text-slate-900 filter drop-shadow-lg">Categories</h1>
            <div className="category pb-5 w-[95%] mx-auto overflow-hidden grid items-center justify-items-center gap-1 lg:gap-5 mt-7 md:grid-cols-2 grid-cols-1 ">
           
                {
                    category && (

                        category?.data?.map((item)=>{
                            return(
                                <Category key={item?.id} item={item} />
                            )
                        })
                    )
                }
            </div>
            
            
        </div>
    )
};

export default Home;
