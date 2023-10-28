import { useNavigate, useParams } from "react-router-dom";
import "./Category.scss";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import ItemCard from "./ItemCard";
const Category = () => {

    const {id} = useParams();

    const navigate = useNavigate();

    const [categoryId,setCategoryId] = useState(null);
    //const [ans,setAns] = useState(null);
    
    useEffect(()=>{
        setCategoryId(id);
        setNavState(true);
    },[id])
    
    //console.log("cat",categoryId,id);
    
    const {category,product,cart,addToCart,plusQuantity,minusQuantity,navState,setNavState} = useContext(AppContext);

    console.log("NAVSATTE=>",navState);

        
        const ans =  product?.data?.filter( (item) => {
            console.log(item.attributes.categories.data[0].id);
        
            // Use the filter method here to filter the inner array
            const filteredCategories =  item.attributes.categories.data.filter((dt) => {
                return dt.id == categoryId ;
            });
        
            //console.log(filteredCategories);
            // Check if the filteredCategories array is not empty
            return filteredCategories.length > 0;
        });
        

    //console.log("ans",ans);

    
    return (
    <div>
        {
            category &&
            <div className=" w-[90%]  ml-4 mt-3 lg:text-4xl text-3xl font-bold text-slate-900 filter drop-shadow-lg">You have selected <span>"{category?.data[id-1]?.attributes?.title}"</span>  Category</div>

        }
        {
            product && 
            <div className="grid w-[90%]  mx-auto items-center justify-items-center gap-8 lg:gap-5 mt-7  grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
                ans?.map((item)=>{
                    //console.log(item.id)
                    return(
                        <ItemCard cat={category?.data[id-1]?.attributes?.title} item={item} />
                    )
                })
            }
        </div>
        }
    </div>)
};

export default Category;
