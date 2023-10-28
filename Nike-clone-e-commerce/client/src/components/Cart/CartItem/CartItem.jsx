import "./CartItem.scss";
import {BsFillPlusSquareFill} from "react-icons/bs";
import {AiFillMinusSquare} from "react-icons/ai";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import {MdRemoveCircle} from "react-icons/md"

const CartItem = ({item}) => {

    const {plusQuantity, minusQuantity, cartRemoveItem} = useContext(AppContext);

    const price = item?.quantity * item?.attributes?.price ;

    return(
        <div className="flex items-center justify-between bg-effect-cart py-5 gap-x-4  sm:h-[20vh] mb-5 px-3 ">
            <div>
                <img className=" w-full max-w-[170px] drop-shadow-cart-img" src={process.env.REACT_APP_DEV_URL + item?.attributes?.img?.data[0]?.attributes?.url} alt="" />
            </div>
            <div className="flex-col items-center max-w-[130px]">
                <p className="font-bold">{item?.attributes?.title}</p>
                <div className="flex gap-x-2 items-center justify-center">
                    <BsFillPlusSquareFill
                    onClick={()=>{plusQuantity(item)}}
                    className="text-xl" />
                    <p className="text-white flex items-center justify-center p-1 bg-black h-5 w-5"> {item?.quantity}</p>
                    <AiFillMinusSquare
                    onClick={()=>{minusQuantity(item)}}
                    className="text-2xl" />
                </div>
            </div>
            <div className="flex flex-col gap-4 items-center justify-center">
                <div className="font-bold p-1 bg-slate-400">${price}</div>
                <div className="mx-auto px-auto"
                onClick={()=>{cartRemoveItem(item)}}
                ><MdRemoveCircle className="text-2xl hover:text-red-600" /></div>
            </div>
        </div>
    ); 
};

export default CartItem;
