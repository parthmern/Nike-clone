import { useNavigate, useParams } from "react-router-dom";
import "./SingleProduct.scss";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";

const SingleProduct = () => {

    const {id} = useParams();
    const [productId,setproductId] = useState(0);
    const [currentProduct,setCurrentProduct] = useState(null);

    const {product,addToCart} = useContext(AppContext);

    function findCurrentProduct(productId){
        const _currentProduct =  product?.data?.find((item)=>{
            return item.id == productId
        })
        setCurrentProduct(_currentProduct);
    }
 
    useEffect(()=>{
        console.log("running");
        setproductId(id);
        findCurrentProduct(productId)
    },[id,productId,product]);

    console.log("currentProduct==>",currentProduct);
    

    return (
        <div>
            {
            currentProduct &&
            <div className="flex flex-col md:flex-row w-[90%] gap-x-5 gap-y-9 mt-8 mx-auto">
                <div className="flex-1 ">
                    <img className="drop-shadow-img" src={process.env.REACT_APP_DEV_URL+currentProduct?.attributes?.img?.data[0]?.attributes?.url} alt="" />
                </div>
                <div className="flex-1">
                    <div>
                    <p className="text-4xl md:text-5xl font-bold text-gradient">{currentProduct?.attributes?.title}</p>
                    <p className="xl:text-sm my-4 text-slate-900">{currentProduct?.attributes?.desc}</p>
                    <p className="text-3xl md:text-4xl font-bold text-slate-900 filter drop-shadow-lg">Price : $ {currentProduct?.attributes?.price}</p>
                    </div>

                    <div className='flex p-1 mt-5 items-center justify-between'>
                        <div className='cursor-pointer button-theme bg-slate-900 shadow-slate-900 text-slate-100 py-1.5'
                        onClick={()=>{addToCart(currentProduct)}}
                        >Buy Now</div>
                    </div>
                </div>
            </div>
        }
        </div>
    );
};

export default SingleProduct;
