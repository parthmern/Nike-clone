import { useContext } from "react";
import "./Category.scss";
import { AppContext } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";

const Category = ({item}) => {

    const gradient = [
        " bg-gradient-to-b from-blue-600 to-blue-500 shadow-lg shadow-blue-500 ",
        " bg-gradient-to-b from-red-500 to-rose-500 shadow-lg shadow-rose-500 ",
        " bg-gradient-to-b from-violet-500 to-indigo-500 shadow-lg shadow-violet-500 ",
        " bg-gradient-to-b from-green-500 to-emerald-500 shadow-lg shadow-green-500 ",
    ];

    const navigate = useNavigate();

    const {addToCart} = useContext(AppContext);

    const clickHandler = () =>{
        navigate(`/category/${item.id}`)
    }

    return (
        <div className={`md:w-[95%] w-[90%] mx-auto h-[20vh] mb-5 mt-9  relative ${gradient[item?.id-1]} grid items-center justify-items-start rounded-xl py-4 px-5 transition-all duration-700 ease-in-out  hover:scale-105`}>
            <div className="h-[200%] w-full justify-evenly items-center flex "
            id={item.id}
            onClick={clickHandler}
            >
                <div className="flex flex-col mt-[-15px] ">
                <div className="text-slate-200 md:text-3xl text-3xl  font-medium filter drop-shadow">{item?.attributes?.title}</div>
                <div className="text-slate-200 filter drop-shadow text-base md:text-sm font-normal">MEN Shoes</div>
                </div>
                <div className="transitions-theme hover:-rotate-12 h-auto w-25 md:w-48 -rotate-[35deg]"><img className={`${item.id==3 && "transform-[180deg]"}`} src={ process.env.REACT_APP_DEV_URL + item?.attributes?.img?.data?.attributes?.url} alt="" /></div>
                
            </div>
        </div>
    )
};

export default Category;
