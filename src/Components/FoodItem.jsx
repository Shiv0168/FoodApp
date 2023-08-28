import { useState } from "react";


const FoodItem = ({ name, price, imageUrl}) => {

    const [quantity, setQuantity] = useState(0);

    const increaseQuantity = () => {
        if (quantity >= 0) {
            setQuantity(quantity + 1);
        }
    }

    const decreaseQuantity = () => {
        if (quantity >= 1) {
            setQuantity(quantity - 1);
        }
    }
    
    return (
        <>
            <div className="col-md-4 lg-4 sm-2 my-3">
                <div className="card" >
                    <img src={imageUrl ? imageUrl : "/fries.jpg"} className="card-img-top" alt={name} style={{ height:"35vh"}} />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <h5 className="card-title">Price: {price}</h5>
                        <div className='row my-1'>
                            <button className="btn btn-primary" onClick={increaseQuantity}>+</button>
                            <h5 className='mx-3'>{quantity}</h5>
                            <button className="btn btn-secondary" onClick={decreaseQuantity}>-</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FoodItem;



