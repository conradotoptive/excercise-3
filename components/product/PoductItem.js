import { Component } from "react";

const ProductItem = (item) => {
    return (
        <>
            <div>
                <p>
                    {item.name}
                </p>
                <button className='item-button'>
                    See Product
                </button>
            </div>
           
        </>
    )
}

export default ProductItem;