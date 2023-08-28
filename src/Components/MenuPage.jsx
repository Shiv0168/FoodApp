import React from 'react'
import FoodItem from './FoodItem';


const MenuPage = ({ menuItems, increaseQuantity, decreaseQuantity, quantity }) => {

    return (
        <div className='container my-5'>
            <div className="row">
                {
                    menuItems.map(({ name, price, imageUrl }, index) => (
                        <FoodItem key={index} name={name} price={price} imageUrl={imageUrl} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} quantity={quantity} />
                    ))
                }
            </div>


        </div>
    )
}

export default MenuPage