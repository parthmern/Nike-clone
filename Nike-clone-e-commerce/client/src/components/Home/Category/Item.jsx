import React from 'react'

const Item = ({item}) => {

    const clickHandler = () =>{
        navigate(`/category/${item.id}`)
    }

  return (
    <div>
      <div className="h-[200px] w-[300px] "
        id={item.id}
        onClick={clickHandler}
        >
            <div>{item?.attributes?.title}</div>
            <div className="h-[150px] w-[300px] "><img className="" src={ process.env.REACT_APP_DEV_URL + item?.attributes?.img?.data?.attributes?.url} alt="" /></div>
            <div
            onClick={()=>{addToCart(item)}}
            >
                add to cart 
            </div>
        </div>
    </div>
  )
}

export default Item
