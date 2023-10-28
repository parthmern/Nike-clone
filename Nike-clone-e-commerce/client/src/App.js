import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./components/Home/Home";
import Category from "./components/Category/Category";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import Header from "./components/Header/Header";
import Newsletter from "./components/Footer/Newsletter/Newsletter";
import Footer from "./components/Footer/Footer";
import { useContext } from "react";
import { AppContext } from "./components/context/AppContext";
import { fetchDataFromApi } from "./utils/api";
import { useEffect } from "react";
import Cart from "./components/Cart/Cart";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

    const {category, setCategory, product, setProduct} = useContext(AppContext);

     // setCategory and setProduct after API call

     useEffect(()=>{
        getCategories();
        getProducts();
        //toast.success("fetched details successfylly");
    },[]);

    const getCategories = ()=>{
        fetchDataFromApi("/api/categories?populate=*")
        .then((res)=>{
            console.log("res",res);
            setCategory(res);
        })
        .catch((error)=>{
            console.log("error",error);
        })
    }

    const getProducts = ()=>{
        fetchDataFromApi("/api/products?populate=*")
        .then((res)=>{
            console.log("res",res);
            setProduct(res);
        })
        .catch((error)=>{
            console.log("error",error);
        })
    }
    
    

    return (
        <>
        
        <BrowserRouter>
            
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/category/:id" element={<Category />} />
                    <Route path="/product/:id" element={<SingleProduct />} />
                </Routes>
                <Cart />
                
                <Footer />
            
        </BrowserRouter>

        <ToastContainer 
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light" />
        </>
    )
}

export default App;
