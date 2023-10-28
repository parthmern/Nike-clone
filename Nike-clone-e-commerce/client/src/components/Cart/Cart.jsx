import { useContext } from "react";
import "./Cart.scss";
import { AppContext } from "../context/AppContext";
import {HiArrowCircleLeft} from "react-icons/hi";
import {AiFillCloseSquare} from "react-icons/ai"
import CartItem from "./CartItem/CartItem";

const Cart = () => {
    
    const {totalQTY, cart, setCart, cartState, setCartState} = useContext(AppContext);
    
    console.log("Cartstate==>",cartState);

    function cartQuantityHandler(){
        setCart([]);
    };

    function closeCartHandler(){
        setCartState((prev)=>!prev);
    }

    function emptyCartHandler(){
        setCartState(false);
    }



    return (
        <div className="">
            {
                cartState &&
                <div className="fixed backgroundBlur top-0 h-full z-[999] w-[100vw] ">
                    <div className="relative z-[9999]  w-full h-full">
                        <div className="absolute  right-3 h-full w-[90%] md:w-[70%]  z-[9999] border-[1px] border-blue-400" >
                            <div className="flex  bg-[#FBEAEB] items-center justify-between h-[59px] px-3">
                                <HiArrowCircleLeft
                                onClick={closeCartHandler}
                                className="text-3xl hover:text-red-500"/>
                                <div className="font-bold ">Your Cart</div>
                                <div className="font-bold p-2 text-white rounded-full bg-black ">{totalQTY} items</div>
                                <div className="">
                                    <AiFillCloseSquare 
                                    onClick={cartQuantityHandler}
                                    className="md:ml-9 ml-0 text-3xl hover:text-blue-500" />
                                </div>
                            </div>

                            {/* cart */}
                            <div className="w-full h-full pb-[200px] pt-5 scroll-c overflow-auto" > 
                                    {
                                        cart.length == 0 ? (
                                            <div className="flex flex-col items-center justify-center">
                                                <img src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-7359557-6024626.png" alt="" />
                                                <div
                                                onClick={emptyCartHandler}
                                                className="font-bold px-3 py-2 rounded bg-[#51e2f5] hover:bg-[#9df9ef] ">Add Products to Cart</div>
                                            </div>
                                        ) : (
                                            <div className="w-full flex-col  h-[calc(100% - 65px - 100px )] "> 
                                                
                                                
                                                {
                                                    cart.map((item)=>{
                                                        return(
                                                            <CartItem item={item} />
                                                        )
                                                    })
                                                }
                                            </div>
                                        )
                                    }
                                </div>
                            
                        </div>
                    </div>
                    

                </div>
            }
        </div>
    );
};

export default Cart;
