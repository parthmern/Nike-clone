import React, { createContext, useEffect, useState } from "react"
import { toast } from "react-toastify";

export const AppContext = createContext();

export function AppContextProvider({children}){
    const [category,setCategory] = useState("");
    const [product, setProduct] = useState("");

    const [cart,setCart] = useState([]);
    const [cartState,setCartState] = useState(false);

    const [navState, setNavState] = useState(false);
    const [totalQTY,setTotalQTY] = useState(null);

    function addToCart(item){

        console.log("adding to cart",item);
        

        const checkExistance = cart.some((obj)=>{
            return obj.id == item.id
        })

        console.log("checkexis",checkExistance);

        if(checkExistance){
            
            const _cart = cart.map((obj)=>{
                return obj.id == item.id ? { ...obj, quantity: obj.quantity + 1 } : obj
            })

            setCart(_cart);
            toast.info(`${item?.attributes?.title || "item"} quantity updated`);
            
        }

        else{
            setCart((prev)=>{
                return (
                    [...prev , {...item,quantity:1}]
                )
            })
            toast.success(`${item?.attributes?.title || "item"} added`);
        }
    }

    function plusQuantity(item){
        const _cart = cart.map((obj)=>{
            return obj.id == item.id ? { ...obj, quantity: obj.quantity + 1 } : obj
        })

        setCart(_cart);
    }

    function minusQuantity(item){
        const _cart = cart.map((obj)=>{
            return obj.id == item.id ? { ...obj, quantity: (obj.quantity > 1 ? obj.quantity - 1 : 1 ) } : obj
        })

        setCart(_cart);
    }

    function cartRemoveItem(item) {
        if (!cart) {
          console.error("Cart is undefined or not initialized.");
          return;
        }
      
        console.log("Item to remove:", item);
        
        const _cart = cart.filter((obj) => !(obj.id === item.id));
        console.log("Filtered cart:", _cart);
      
        if (_cart.length === 0) {
          console.warn("Item not found in the cart.");
          setCart([]);
          return;
        }
      
        console.log("CARTTTT=>", _cart);
        setCart(_cart);
        toast.warning(`${item?.attributes?.title || "item"} Removed`);
      }
      
      

    

    const value = {
        category,
        setCategory,
        product,
        setProduct,
        cart,
        setCart,
        addToCart,
        plusQuantity,
        minusQuantity,
        navState,
        setNavState,
        totalQTY,
        setTotalQTY,
        cartState,
        setCartState,
        cartRemoveItem,
    };

    return(
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}